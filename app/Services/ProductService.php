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
}