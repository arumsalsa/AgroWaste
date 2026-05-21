<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\{User, Product, Order, ImpactLog};
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class DashboardService
{
    public function getAdminStats(): array
    {
        // KPI Global untuk Admin
        return [
            'total_users'        => User::count(),
            'total_peternak'     => User::where('role', 'peternak')->count(),
            'total_pembeli'      => User::where('role', 'pembeli')->count(),
            'total_produk_aktif' => Product::where('status', 'aktif')->count(),
            'total_transaksi'    => Order::count(),
            'total_limbah_kg'    => ImpactLog::sum('volume_kg'),
            'total_co2_saved'    => ImpactLog::sum('co2eq_saved'),
            'total_pendapatan'   => Order::where('status', 'selesai')->sum('total_price'),
            
            // Grafik transaksi 7 hari terakhir
            'chart_data' => Order::select(DB::raw('DATE(created_at) as date'), DB::raw('count(*) as total'))
                ->where('created_at', '>=', Carbon::now()->subDays(7))
                ->groupBy('date')
                ->orderBy('date', 'ASC')
                ->get()
        ];
    }

    public function getSellerStats(): array
    {
        $user = Auth::user();
        $peternakId = $user->peternakProfile->id;

        // KPI Card Peternak
        return [
            'total_produk'     => Product::where('peternak_profile_id', $peternakId)->count(),
            'pesanan_baru'     => Order::where('peternak_id', $peternakId)->where('status', 'menunggu_konfirmasi')->count(),
            'total_terjual_kg' => $user->peternakProfile->total_sold_kg,
            'total_pendapatan' => Order::where('peternak_id', $peternakId)->where('status', 'selesai')->sum('total_price'),
            
            // Grafik penjualan 7 hari terakhir
            'chart_data' => Order::where('peternak_id', $peternakId)
                ->select(DB::raw('DATE(created_at) as date'), DB::raw('sum(total_price) as revenue'))
                ->where('created_at', '>=', Carbon::now()->subDays(7))
                ->groupBy('date')
                ->orderBy('date', 'ASC')
                ->get()
        ];
    }
}