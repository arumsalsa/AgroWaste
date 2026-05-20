<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Product;
use App\Models\User;
use Illuminate\Support\Str;

class ProductService
{
    /**
     * Membuat produk limbah baru oleh Peternak
     */
    public function createProduct(array $data, User $user): Product
    {
        // Ambil profil peternak dari user yang sedang login
        $peternak = $user->peternakProfile;

        if (!$peternak) {
            throw new \Exception('Profil peternak tidak ditemukan. Anda belum melengkapi profil.');
        }

        // Siapkan data otomatis
        $data['id']                  = Str::uuid()->toString();
        $data['peternak_profile_id'] = $peternak->id;
        $data['slug']                = Str::slug($data['name'] . '-' . Str::random(5));
        $data['status']              = 'pending'; // Menunggu persetujuan admin
        
        // Ambil lokasi produk dari lokasi peternak
        $data['provinsi']  = $peternak->provinsi;
        $data['kabupaten'] = $peternak->kabupaten;
        $data['kecamatan'] = $peternak->kecamatan;

        return Product::create($data);
    }

    /**
     * Upload gambar produk menggunakan Spatie Media Library
     */
    public function uploadImages(\App\Models\Product $product, array $images): \App\Models\Product
    {
        // Hitung gambar yang sudah ada
        $existingMediaCount = $product->getMedia('product_images')->count();
        
        // Validasi agar total tidak lebih dari 3
        if ($existingMediaCount + count($images) > 3) {
            throw new \Exception('Satu produk maksimal hanya boleh memiliki 3 gambar.');
        }

        foreach ($images as $image) {
            $product->addMedia($image)->toMediaCollection('product_images');
        }

        return $product;
    }

    /**
     * Update status produk (Khusus Admin)
     */
    public function updateStatus(\App\Models\Product $product, string $status): \App\Models\Product
    {
        $product->update(['status' => $status]);
        return $product;
    }
}