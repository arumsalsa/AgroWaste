<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\DashboardService;
use App\Models\User;
use Illuminate\Http\JsonResponse;

class AdminController extends Controller
{
    public function __construct(protected DashboardService $dashboardService) {}

    public function dashboard(): JsonResponse
    {
        $data = $this->dashboardService->getAdminStats();
        return response()->json(['success' => true, 'message' => 'Dashboard Admin', 'data' => $data]);
    }

    // Fitur Suspend Akun
    public function suspendUser(string $id): JsonResponse
    {
        $user = User::findOrFail($id);
        
        // Toggle status suspend
        $user->update(['is_suspended' => !$user->is_suspended]);
        
        $statusStr = $user->is_suspended ? 'ditangguhkan' : 'diaktifkan kembali';
        return response()->json(['success' => true, 'message' => "Akun {$user->name} berhasil {$statusStr}.", 'data' => $user]);
    }
}