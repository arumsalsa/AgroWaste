<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ProductController;

Route::prefix('v1')->group(function () {
    
    // Auth Routes (Public)
    Route::prefix('auth')->group(function () {
        Route::post('/register', [AuthController::class, 'register']);
        Route::post('/login', [AuthController::class, 'login']);
    });

    // Katalog Produk (Public - Bisa dilihat tanpa login)
    Route::get('/products', [ProductController::class, 'index']);
    Route::get('/products/{id}', [ProductController::class, 'show']); // Detail produk

   // Protected Routes (Wajib bawa Token)
    Route::middleware('auth:sanctum')->group(function () {
        
        // Product Routes (Hanya peternak yang bisa POST, PUT, DELETE)
        Route::prefix('products')->group(function () {
            Route::post('/', [ProductController::class, 'store']); // Create Produk
            Route::put('/{id}', [ProductController::class, 'update']); // Edit Produk
            Route::delete('/{id}', [ProductController::class, 'destroy']); // Hapus Produk
        });

        // Order Routes
        Route::prefix('orders')->group(function () {
            Route::post('/', [\App\Http\Controllers\Api\OrderController::class, 'store']); // Buat pesanan (Pembeli)
            Route::get('/', [\App\Http\Controllers\Api\OrderController::class, 'index']); // Riwayat pesanan
            Route::put('/{id}/status', [\App\Http\Controllers\Api\OrderController::class, 'updateStatus']); // Ubah status pesanan

            Route::post('/checkout', [\App\Http\Controllers\Api\OrderController::class, 'checkout']); // Checkout
        });

        // Cart Routes (Hanya untuk user yang sudah login)
        Route::prefix('cart-items')->group(function () {
            Route::get('/', [\App\Http\Controllers\Api\CartController::class, 'index']);
            Route::post('/', [\App\Http\Controllers\Api\CartController::class, 'store']);
            Route::put('/{id}', [\App\Http\Controllers\Api\CartController::class, 'update']);
            Route::delete('/{id}', [\App\Http\Controllers\Api\CartController::class, 'destroy']);
        });

        // Payment Routes (Butuh Login)
        Route::prefix('payments')->group(function () {
            Route::post('/manual', [\App\Http\Controllers\Api\PaymentController::class, 'uploadManualProof']);
            Route::post('/midtrans/token', [\App\Http\Controllers\Api\PaymentController::class, 'getSnapToken']);
        });
        
    });

    // Green Dashboard Route (Public)
    Route::get('/dashboard/impact', [\App\Http\Controllers\Api\DashboardController::class, 'getImpactDashboard']);

    // Webhook Midtrans Route (Public)
    Route::post('/webhooks/midtrans', [\App\Http\Controllers\Api\PaymentController::class, 'midtransWebhook']);

});