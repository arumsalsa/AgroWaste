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
}