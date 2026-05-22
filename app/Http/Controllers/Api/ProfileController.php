<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\JsonResponse;

class ProfileController extends Controller
{
    /**
     * Mengambil data profil user yang sedang login beserta relasinya
     */
    public function show(): JsonResponse
    {
        /** @var \App\Models\User $user */
        $user = Auth::user();
        $user->load(['peternakProfile', 'buyerProfile', 'logistikProfile']);
        
        return response()->json([
            'success' => true, 
            'message' => 'Data profil berhasil diambil.', 
            'data'    => $user
        ], 200);
    }

    /**
     * Memperbarui data profil berdasarkan role pengguna
     */
    public function update(Request $request): JsonResponse
    {
        
        /** @var \App\Models\User $user */
        $user = Auth::user();

        // 1. Update nama dasar di tabel users
        if ($request->has('name')) {
            $user->update($request->only(['name']));
        }

        // 2. Update tabel relasi profil spesifik berdasarkan role
        if ($user->role === 'logistik' && $user->logistikProfile) {
            $user->logistikProfile->update($request->only(['company_name', 'vehicle_plate']));
        } elseif ($user->role === 'peternak' && $user->peternakProfile) {
            $user->peternakProfile->update($request->only(['alamat', 'no_telepon']));
        } elseif ($user->role === 'pembeli' && $user->buyerProfile) {
            $user->buyerProfile->update($request->only(['alamat', 'no_telepon']));
        }

        // Refresh dan muat ulang data terbaru untuk dikirim ke Frontend
        $user->refresh();
        $user->load(['peternakProfile', 'buyerProfile', 'logistikProfile']);

        return response()->json([
            'success' => true, 
            'message' => 'Profil berhasil diperbarui.', 
            'data'    => $user
        ], 200);
    }
}