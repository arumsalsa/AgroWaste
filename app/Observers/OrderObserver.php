<?php

namespace App\Observers;

use App\Models\Order;
use App\Models\ImpactLog;
use Illuminate\Support\Str;

class OrderObserver
{
    public function updated(Order $order): void
    {
        if ($order->isDirty('status') && $order->status === 'selesai') {
            
            // 1. Hitung total Kg dari relasi orderItems 
            $totalKg = $order->orderItems->sum('quantity_kg'); 
            
            // 2. Kalkulasi CO2eq menggunakan faktor dari config
            $factors = config('impact.co2eq_factors', []);
            $co2Saved = 0;
            
            foreach ($order->orderItems as $item) {
                $factor = $factors['sapi'] ?? 0.98; 
                $co2Saved += ($item->quantity_kg * $factor);
            }

            // 3. Catat di ImpactLog agar muncul di Green Dashboard
            ImpactLog::create([
                'id'          => Str::uuid()->toString(),
                'order_id'    => $order->id,
                'volume_kg'   => $totalKg,
                'co2eq_saved' => $co2Saved,
            ]);

            // 4. Update total penjualan dan Badge Peternak
            $firstItem = $order->orderItems->first();
            
            if ($firstItem && $firstItem->product && $firstItem->product->peternakProfile) {
                $peternakProfile = $firstItem->product->peternakProfile;
                $peternakProfile->total_sold_kg += $totalKg;

                // Sistem Gamifikasi
                $badge = 'none';
                if ($peternakProfile->total_sold_kg >= 1000) {
                    $badge = 'pahlawan_bumi';
                } elseif ($peternakProfile->total_sold_kg >= 500) {
                    $badge = 'agen_iklim';
                } elseif ($peternakProfile->total_sold_kg >= 100) {
                    $badge = 'peternak_hijau';
                }

                $peternakProfile->badge = $badge;
                $peternakProfile->save();
            }
        }
    }
}