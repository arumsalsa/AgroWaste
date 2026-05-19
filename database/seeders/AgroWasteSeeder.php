<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Category;
use App\Models\PeternakProfile;
use App\Models\BuyerProfile;
use App\Models\Product;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AgroWasteSeeder extends Seeder
{
    public function run(): void
    {
       // 1. Seed Master Kategori Limbah lengkap dengan SLUG sesuai struktur DB
        $kategoriPadat = Category::create([
            'id' => Str::uuid()->toString(), 
            'name' => 'kotoran_padat',
            'slug' => 'kotoran-padat'
        ]);
        
        $kategoriCair  = Category::create([
            'id' => Str::uuid()->toString(), 
            'name' => 'limbah_cair',
            'slug' => 'limbah-cair'
        ]);
        
        $kategoriPakan = Category::create([
            'id' => Str::uuid()->toString(), 
            'name' => 'sisa_pakan',
            'slug' => 'sisa-pakan'
        ]);
        
        $kategoriOlahan = Category::create([
            'id' => Str::uuid()->toString(), 
            'name' => 'limbah_olahan',
            'slug' => 'limbah-olahan'
        ]);

        // 2. Seed Akun Demo Peternak (Seller) 
        $userPeternak = User::create([
            'name'     => 'Jonathan Peternak',
            'email'    => 'peternak@agrowwaste.com',
            'password' => Hash::make('password123'),
            'role'     => 'peternak',
        ]);

        PeternakProfile::create([
            'id'               => Str::uuid()->toString(),
            'user_id'          => $userPeternak->id,
            'nama_peternakan'  => 'Maju Jaya Organik Malang',
            'jenis_ternak'     => json_encode(['sapi', 'kambing']),
            'no_hp'            => '081234567890',
            'alamat_lengkap'   => 'Jl. Raya Singosari No. 45, Kabupaten Malang',
            'badge'            => 'none',
        ]);

        // 3. Seed Akun Demo Pembeli (Buyer) 
        $userPembeli = User::create([
            'name'     => 'Budi Pembeli',
            'email'    => 'pembeli@agrowwaste.com',
            'password' => Hash::make('password123'),
            'role'     => 'pembeli',
        ]);

        BuyerProfile::create([
            'id'                        => Str::uuid()->toString(),
            'user_id'                   => $userPembeli->id,
            'no_hp'                     => '089876543210',
            'alamat_pengiriman_default' => 'Jl. Kertanegara No. 10, Klojen, Kota Malang',
        ]);

        // 4. Seed Contoh Produk Aktif Realistis (Minimal 5 Produk untuk Demo)
        $peternakProfile = $userPeternak->peternakProfile;

        Product::create([
            'id'                  => '147d1c5f-1150-4dcd-8630-3f3cf6fa60c7', // Lock UUID yang dipakai tes tadi pagi
            'peternak_profile_id' => $peternakProfile->id,
            'category_id'         => $kategoriPadat->id,
            'name'                => 'Pupuk Kandang Sapi Kualitas Premium',
            'slug'                => 'pupuk-kandang-sapi-kualitas-premium',
            'description'         => 'Kotoran sapi murni yang telah melalui proses fermentasi matang, kering, dan tidak berbau. Siap pakai untuk lahan pertanian.',
            'jenis_ternak'        => 'sapi',
            'kondisi'             => 'Kering, sudah difermentasi',
            'price'               => 1500.00,
            'unit'                => 'kg',
            'stock_kg'            => 500.00,
            'min_order_kg'        => 50.00,
            'provinsi'            => 'Jawa Timur',
            'kabupaten'           => 'Kabupaten Malang',
            'kecamatan'           => 'Singosari',
            'status'              => 'aktif', // Approved otomatis untuk data awal demo
        ]);

        Product::create([
            'id'                  => Str::uuid()->toString(),
            'peternak_profile_id' => $peternakProfile->id,
            'category_id'         => $kategoriCair->id,
            'name'                => 'Bio-Slurry Cair Organik Super',
            'slug'                => 'bio-slurry-cair-organik-super',
            'description'         => 'Limbah cair biogas kaya unsur hara makro dan mikro, sangat baik untuk pupuk daun dan tanaman sayur.',
            'jenis_ternak'        => 'sapi',
            'kondisi'             => 'Cair, hasil olahan instalasi biogas',
            'price'               => 2000.00,
            'unit'                => 'liter',
            'stock_kg'            => 300.00,
            'min_order_kg'        => 20.00,
            'provinsi'            => 'Jawa Timur',
            'kabupaten'           => 'Kabupaten Malang',
            'kecamatan'           => 'Singosari',
            'status'              => 'aktif',
        ]);
    }
}