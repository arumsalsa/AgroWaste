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

    // Katalog Produk & Kategori (Public)
    Route::get('/products', [ProductController::class, 'index']);
    Route::get('/products/{id}', [ProductController::class, 'show']);
    Route::get('/categories', [\App\Http\Controllers\Api\CategoryController::class, 'index']);
    Route::get('/sellers/{id}', [ProductController::class, 'sellerProfile']);
   
    // Edukasi Artikel (Public)
    Route::get('/articles', [\App\Http\Controllers\Api\ArticleController::class, 'index']);
    Route::get('/articles/{slug}', [\App\Http\Controllers\Api\ArticleController::class, 'show']);

    // Protected Routes
    Route::middleware('auth:sanctum')->group(function () {
        
        Route::prefix('products')->group(function () {
            Route::post('/', [ProductController::class, 'store']);
            Route::put('/{id}', [ProductController::class, 'update']);
            Route::delete('/{id}', [ProductController::class, 'destroy']);
            Route::post('/{id}/images', [\App\Http\Controllers\Api\ProductController::class, 'uploadImages']);
            Route::delete('/{id}/images/{mediaId}', [\App\Http\Controllers\Api\ProductController::class, 'deleteImage']);
        });

        Route::prefix('orders')->group(function () {
            Route::post('/', [\App\Http\Controllers\Api\OrderController::class, 'store']);
            Route::get('/', [\App\Http\Controllers\Api\OrderController::class, 'index']);
            Route::put('/{id}/status', [\App\Http\Controllers\Api\OrderController::class, 'updateStatus']);
            Route::post('/checkout', [\App\Http\Controllers\Api\OrderController::class, 'checkout']);
            Route::put('/{id}/process', [\App\Http\Controllers\Api\OrderController::class, 'processBySeller']);
            Route::put('/{id}/complete', [\App\Http\Controllers\Api\OrderController::class, 'completeByBuyer']);
        });

        Route::prefix('cart-items')->group(function () {
            Route::get('/', [\App\Http\Controllers\Api\CartController::class, 'index']);
            Route::post('/', [\App\Http\Controllers\Api\CartController::class, 'store']);
            Route::put('/{id}', [\App\Http\Controllers\Api\CartController::class, 'update']);
            Route::delete('/{id}', [\App\Http\Controllers\Api\CartController::class, 'destroy']);
        });

        Route::prefix('payments')->group(function () {
            Route::post('/manual', [\App\Http\Controllers\Api\PaymentController::class, 'uploadManualProof']);
            Route::post('/midtrans/token', [\App\Http\Controllers\Api\PaymentController::class, 'getSnapToken']);
        });

        Route::middleware('role:admin')->prefix('admin')->group(function () {
            Route::get('/products', [\App\Http\Controllers\Api\ProductController::class, 'adminIndex']);
            Route::put('/products/{id}/status', [\App\Http\Controllers\Api\ProductController::class, 'updateStatus']);
            Route::post('/articles', [\App\Http\Controllers\Api\ArticleController::class, 'store']);
            Route::get('/dashboard', [\App\Http\Controllers\Api\AdminController::class, 'dashboard']);
            Route::get('/users', [\App\Http\Controllers\Api\AdminController::class, 'usersIndex']);
            Route::put('/users/{id}/suspend', [\App\Http\Controllers\Api\AdminController::class, 'suspendUser']);
            Route::get('/shipments', [\App\Http\Controllers\Api\AdminController::class, 'getShipments']);
            Route::get('/couriers', [\App\Http\Controllers\Api\AdminController::class, 'getCouriers']);
            Route::post('/shipments/assign', [\App\Http\Controllers\Api\AdminController::class, 'assignCourier']);
            Route::get('/analytics', [\App\Http\Controllers\Api\AdminController::class, 'getAnalytics']);
        });

        Route::prefix('notifications')->group(function () {
            Route::get('/', [\App\Http\Controllers\Api\NotificationController::class, 'index']);
            Route::put('/{id}/read', [\App\Http\Controllers\Api\NotificationController::class, 'markAsRead']);
        });

        Route::prefix('profile')->group(function () {
            Route::get('/', [\App\Http\Controllers\Api\ProfileController::class, 'show']);
            Route::put('/', [\App\Http\Controllers\Api\ProfileController::class, 'update']);
            Route::post('/avatar', [\App\Http\Controllers\Api\ProfileController::class, 'uploadAvatar']);
        });

        Route::middleware('role:logistik')->prefix('logistik')->group(function () {
            Route::get('/shipments', [\App\Http\Controllers\Api\ShipmentController::class, 'index']);
            Route::put('/shipments/{id}/status', [\App\Http\Controllers\Api\ShipmentController::class, 'updateStatus']);
        });

        Route::middleware('role:peternak')->prefix('seller')->group(function () {
            Route::get('/dashboard', [\App\Http\Controllers\Api\SellerController::class, 'dashboard']);
            Route::get('/products', [\App\Http\Controllers\Api\SellerController::class, 'myProducts']);
        });
        
    });

    Route::get('/dashboard/impact', [\App\Http\Controllers\Api\DashboardController::class, 'getImpactDashboard']);
    Route::post('/webhooks/midtrans', [\App\Http\Controllers\Api\PaymentController::class, 'midtransWebhook']);

});

// Migration route (outside v1 prefix)
Route::get('/run-migrations', function () {
    try {
        \Artisan::call('migrate', ['--force' => true]);
        return response()->json(['status' => 'ok', 'output' => \Artisan::output()]);
    } catch (\Exception $e) {
        return response()->json(['status' => 'error', 'message' => $e->getMessage()]);
    }
});
