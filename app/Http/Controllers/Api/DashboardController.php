<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ImpactLog;
use App\Models\Order;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Cache;

class DashboardController extends Controller
{
    /**
     * Mengambil data untuk Green Dashboard (Publik)
     */
    public function getImpactDashboard(): JsonResponse
    {
        // Cache data selama 5 menit (300 detik) 
        $data = Cache::remember('impact_dashboard', 300, function () {
            $totalWaste = ImpactLog::sum('waste_managed_kg');
            $totalCo2   = ImpactLog::sum('co2eq_reduced_kg');
            
            // Kalkulasi kesetaraan pohon dari config (1 pohon = 21 kg CO2/tahun)
            $treeFactor = config('impact.tree_co2_per_year_kg', 21);
            $equivalentTrees = $totalCo2 > 0 ? floor($totalCo2 / $treeFactor) : 0;

            return [
                'total_waste_managed_kg' => (float) $totalWaste,
                'total_co2eq_reduced_kg' => (float) $totalCo2,
                'equivalent_trees'       => $equivalentTrees,
                'active_sellers_count'   => User::where('role', 'peternak')->count(),
                'total_transactions'     => Order::where('status', 'selesai')->count(),
            ];
        });
        
        return response()->json([
            'success' => true,
            'message' => 'Data Green Dashboard berhasil diambil.',
            'data'    => $data
        ], 200);
    }
}