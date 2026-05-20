<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\StoreProductRequest;
use App\Services\ProductService;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\UploadProductImageRequest;
use App\Http\Requests\UpdateProductStatusRequest;
use App\Models\Product;


class ProductController extends Controller
{
    private ProductService $productService;

    public function __construct(ProductService $productService)
    {
        $this->productService = $productService;
    }

    /**
     * Menampilkan daftar semua produk untuk Katalog (Public)
     */
    public function index(): JsonResponse
    {
        try {
            // Mengambil semua produk beserta data kategori dan profil peternaknya
            // Menggunakan paginate(10) agar data tidak berat jika jumlahnya ribuan
            $products = \App\Models\Product::with(['category', 'peternakProfile'])->paginate(10);

            return response()->json([
                'success' => true,
                'message' => 'Berhasil mengambil daftar produk.',
                'data'    => $products
            ], 200);
            
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Gagal mengambil data produk: ' . $e->getMessage(),
                'data'    => null
            ], 500);
        }
    }

    public function store(StoreProductRequest $request): JsonResponse
    {
        try {
            $product = $this->productService->createProduct(
                $request->validated(), 
                $request->user() // Mengambil data user dari token Sanctum
            );

            return response()->json([
                'success' => true,
                'message' => 'Produk berhasil didaftarkan dan menunggu persetujuan admin.',
                'data'    => $product
            ], 201);
            
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Gagal menambahkan produk: ' . $e->getMessage(),
                'data'    => null
            ], 500);
        }
    }

    /**
     * Menampilkan detail satu produk (Public)
     */
    public function show($id): JsonResponse
    {
        $product = \App\Models\Product::with(['category', 'peternakProfile'])->find($id);

        if (!$product) {
            return response()->json(['success' => false, 'message' => 'Produk tidak ditemukan.'], 404);
        }

        return response()->json(['success' => true, 'data' => $product], 200);
    }

    /**
     * Mengubah data produk (Hanya Peternak Pemilik)
     */
    public function update(\Illuminate\Http\Request $request, $id): JsonResponse
    {
        $product = \App\Models\Product::find($id);

        if (!$product) {
            return response()->json(['success' => false, 'message' => 'Produk tidak ditemukan.'], 404);
        }

        // Pastikan yang mengubah adalah peternak pemilik produk tersebut
        if ($product->peternak_profile_id !== $request->user()->peternakProfile->id) {
            return response()->json(['success' => false, 'message' => 'Akses ditolak. Anda bukan pemilik produk ini.'], 403);
        }

        $product->update($request->all());

        return response()->json(['success' => true, 'message' => 'Produk berhasil diubah.', 'data' => $product], 200);
    }

    /**
     * Menghapus produk (Soft Delete)
     */
    public function destroy(\Illuminate\Http\Request $request, $id): JsonResponse
    {
        $product = \App\Models\Product::find($id);

        if (!$product) {
            return response()->json(['success' => false, 'message' => 'Produk tidak ditemukan.'], 404);
        }

        if ($product->peternak_profile_id !== $request->user()->peternakProfile->id) {
            return response()->json(['success' => false, 'message' => 'Akses ditolak. Anda bukan pemilik produk ini.'], 403);
        }

        $product->delete(); // Ini akan melakukan Soft Delete karena kita pakai trait SoftDeletes

        return response()->json(['success' => true, 'message' => 'Produk berhasil dihapus.'], 200);
    }

    /**
     * Endpoint untuk Peternak mengunggah gambar produk (Maks 3)
     */
    public function uploadImages(UploadProductImageRequest $request, string $id): JsonResponse
    {
        $product = Product::findOrFail($id);

        // Keamanan: Pastikan hanya pemilik produk yang bisa upload gambar
        if ($product->peternakProfile->user_id !== $request->user()->id) {
            return response()->json(['success' => false, 'message' => 'Unauthorized'], 403);
        }

        try {
            $product = $this->productService->uploadImages($product, $request->file('images'));
            
            return response()->json([
                'success' => true,
                'message' => 'Gambar produk berhasil diunggah.',
                // Load relasi media agar url gambarnya langsung muncul di response frontend
                'data'    => $product->load('media') 
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
                'data'    => null
            ], 400);
        }
    }

    /**
     * Endpoint untuk Admin menyetujui / menolak produk
     */
    public function updateStatus(UpdateProductStatusRequest $request, string $id): JsonResponse
    {
        $product = Product::findOrFail($id);
        
        $product = $this->productService->updateStatus($product, $request->validated('status'));

        return response()->json([
            'success' => true,
            'message' => 'Status produk berhasil diperbarui menjadi ' . $product->status,
            'data'    => $product
        ], 200);
    }
}