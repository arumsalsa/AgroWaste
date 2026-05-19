<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Order;
use App\Models\Product;
use App\Models\User;
use Illuminate\Support\Str;

class OrderService
{
    public function createOrder(array $data, User $user): Order
    {
        $pembeli = $user->buyerProfile;

        if (!$pembeli) {
            throw new \Exception('Profil pembeli tidak ditemukan.');
        }

        $product = Product::find($data['product_id']);

        // 1. Cek minimal order
        if ($data['quantity_kg'] < $product->min_order_kg) {
            throw new \Exception("Jumlah pesanan di bawah batas minimal ({$product->min_order_kg} kg).");
        }

        // 2. Cek ketersediaan stok
        if ($data['quantity_kg'] > $product->stock_kg) {
            throw new \Exception("Stok tidak mencukupi. Sisa stok: {$product->stock_kg} kg.");
        }

        // 3. Hitung total harga otomatis
        $totalPrice = $product->price * $data['quantity_kg'];

        // 4. Buat pesanan
        $order = Order::create([
            'id'               => Str::uuid()->toString(),
            'buyer_profile_id' => $pembeli->id,
            'product_id'       => $product->id,
            'quantity_kg'      => $data['quantity_kg'],
            'total_price'      => $totalPrice,
            'delivery_address' => $data['delivery_address'],
            'status'           => 'pending', // Menunggu konfirmasi peternak
        ]);

        // 5. Potong stok produk
        $product->decrement('stock_kg', $data['quantity_kg']);

        return $order;
    }

    /**
     * Memproses checkout dari keranjang belanja
     */
    public function checkout(array $data)
    {
        // Gunakan DB Transaction agar aman (jika error, semua data di-rollback)
        return \Illuminate\Support\Facades\DB::transaction(function () use ($data) {
            $userId = \Illuminate\Support\Facades\Auth::id();
            
            // 1. Ambil data keranjang
            $cartItems = \App\Models\CartItem::with('product.peternakProfile')->where('user_id', $userId)->get();

            if ($cartItems->isEmpty()) {
                throw new \Exception('Keranjang belanja kosong.');
            }

            // Generate Nomor Order unik sesuai aturan CLAUDE.md
            $orderNumber = 'AGW-' . date('Y') . '-' . strtoupper(\Illuminate\Support\Str::random(5));
            $totalQuantity = 0;
            $totalPrice = 0;

            // 2. Buat data Order utama
            $order = \App\Models\Order::create([
                'id'                => \Illuminate\Support\Str::uuid()->toString(),
                'order_number'      => $orderNumber,
                'user_id'           => $userId, // Pembeli
                // Asumsi MVP: pesanan ditarik dari produk pertama untuk ID Peternaknya
                'peternak_id'       => $cartItems->first()->product->peternakProfile->user_id, 
                'status'            => 'menunggu_pembayaran',
                'metode_pengiriman' => $data['metode_pengiriman'],
                'metode_pembayaran' => $data['metode_pembayaran'],
                'alamat_pengiriman' => $data['alamat_pengiriman'] ?? null,
                'total_price'       => 0, // Akan diupdate di bawah
                'quantity_kg'       => 0, // Akan diupdate di bawah (untuk observer karbon)
            ]);

            // 3. Pindahkan item keranjang ke order_items & kurangi stok
            foreach ($cartItems as $item) {
                $price = (float) $item->product->price;
                $subtotal = $price * $item->quantity_kg;
                
                $totalPrice += $subtotal;
                $totalQuantity += $item->quantity_kg;

                // Cek stok aman sebelum memotong
                if ($item->product->stock_kg < $item->quantity_kg) {
                    throw new \Exception("Stok untuk produk {$item->product->name} tidak mencukupi.");
                }

                \App\Models\OrderItem::create([
                    'id'           => \Illuminate\Support\Str::uuid()->toString(),
                    'order_id'     => $order->id,
                    'product_id'   => $item->product_id,
                    'quantity_kg'  => $item->quantity_kg,
                    'price_per_kg' => $price,
                ]);

                // Kurangi stok produk secara langsung
                $item->product->decrement('stock_kg', $item->quantity_kg);
            }

            // Update total harga & total berat di tabel order
            $order->update([
                'total_price' => $totalPrice,
                'quantity_kg' => $totalQuantity
            ]);

            // 4. Kosongkan keranjang setelah sukses
            \App\Models\CartItem::where('user_id', $userId)->delete();

            return $order;
        });
    }
}