<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\DashboardService;
use Illuminate\Http\JsonResponse;

class SellerController extends Controller
{
    public function __construct(protected DashboardService $dashboardService) {}

    public function dashboard(): JsonResponse
    {
        $data = $this->dashboardService->getSellerStats();
        return response()->json(['success' => true, 'message' => 'Dashboard Peternak', 'data' => $data]);
    }
}