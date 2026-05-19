<?php

declare(strict_types=1);

namespace App\Observers;

use App\Models\Order;
use App\Models\ImpactLog;
use Illuminate\Support\Str;

class OrderObserver
{
    /**
     * Menangani event setelah data Order berhasil diupdate
     */
    public function updated(Order $order): void
    {
        // Fitur dipicu HANYA jika status pesanan baru saja berubah menjadi 'selesai'
        if ($order->isDirty('status') && $order->status === 'selesai') {
            
            // Ambil data produk terkait untuk mengetahui jenis ternaknya
            $product = $order->product;
            $jenisTernak = $product->jenis_ternak; // Contoh: 'sapi'

            // Ambil faktor pengali dari config/impact.php dengan jaminan fallback array kosong
        $factors = config('impact.co2eq_factors') ?? [];
        $multiplier = $factors[$jenisTernak] ?? ($factors['lainnya'] ?? 0.050);

            // Rumus: Total Berat Pesanan x Faktor Konversi IPCC
            $co2Reduced = $order->quantity_kg * $multiplier;

            // Catat ke dalam log dampak lingkungan secara otomatis
            ImpactLog::create([
                'id'               => Str::uuid()->toString(),
                'order_id'         => $order->id,
                'waste_managed_kg' => $order->quantity_kg,
                'co2eq_reduced_kg' => $co2Reduced,
            ]);
            
            $peternak = $product->peternakProfile;
            
        }
    }
}