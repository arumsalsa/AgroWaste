<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Http\Requests\CheckoutRequest;
use App\Http\Controllers\Controller;
use App\Http\Requests\Order\StoreOrderRequest;
use App\Services\OrderService;
use Illuminate\Http\JsonResponse;

class OrderController extends Controller
{
    private OrderService $orderService;

    public function __construct(OrderService $orderService)
    {
        $this->orderService = $orderService;
    }

    public function store(StoreOrderRequest $request): JsonResponse
    {
        try {
            $order = $this->orderService->createOrder(
                $request->validated(), 
                $request->user()
            );

            return response()->json([
                'success' => true,
                'message' => 'Pesanan berhasil dibuat.',
                'data'    => $order
            ], 201);
            
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Gagal membuat pesanan: ' . $e->getMessage(),
                'data'    => null
            ], 400); //  biasanya karena stok/min order
        }
    }

    /**
     * Menampilkan riwayat pesanan (Untuk Pembeli dan Peternak)
     */
    public function index(\Illuminate\Http\Request $request): JsonResponse
    {
        $user = $request->user();

        // Jika yang login adalah pembeli, tampilkan riwayat belanjanya
        if ($user->role === 'pembeli') {
            $orders = \App\Models\Order::with('product')
                        ->where('buyer_profile_id', $user->buyerProfile->id)
                        ->get();
        } 
        // Jika yang login adalah peternak, tampilkan pesanan yang masuk ke tokonya
        else {
            $orders = \App\Models\Order::with('product')
                        ->whereHas('product', function($query) use ($user) {
                            $query->where('peternak_profile_id', $user->peternakProfile->id);
                        })->get();
        }

        return response()->json(['success' => true, 'data' => $orders], 200);
    }

    /**
     * Mengubah status pesanan (Biasanya dilakukan oleh Peternak)
     */
    public function updateStatus(\Illuminate\Http\Request $request, $id): JsonResponse
    {
        $order = \App\Models\Order::find($id);

        if (!$order) {
            return response()->json(['success' => false, 'message' => 'Pesanan tidak ditemukan.'], 404);
        }

        // Validasi agar status yang dimasukkan tidak ngawur
        $request->validate([
            'status' => 'required|in:dikonfirmasi,dikirim,selesai,dibatalkan'
        ]);

        $order->update(['status' => $request->status]);

        return response()->json([
            'success' => true, 
            'message' => 'Status pesanan berhasil diubah.', 
            'data'    => $order
        ], 200);
    }

    public function checkout(CheckoutRequest $request): \Illuminate\Http\JsonResponse
    {
        try {
            $order = $this->orderService->checkout($request->validated());

            return response()->json([
                'success' => true,
                'message' => 'Checkout berhasil. Pesanan telah dibuat.',
                'data'    => $order
            ], 201);
            
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Checkout gagal: ' . $e->getMessage(),
                'data'    => null
            ], 400);
        }
    }
}