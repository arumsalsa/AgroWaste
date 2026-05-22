<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Shipment;
use Illuminate\Support\Facades\Auth;

class ShipmentService
{
    /**
     * Ambil semua jadwal pengiriman khusus untuk kurir yang sedang login
     */
    public function getShipmentsForLogistik()
    {
        $logistikProfileId = Auth::user()->logistikProfile->id;

        return Shipment::with('order.orderItems.product', 'order.user')
            ->where('logistik_profile_id', $logistikProfileId)
            ->orderBy('created_at', 'desc')
            ->get();
    }

    /* Update status pengiriman */
    public function updateStatus(string $shipmentId, array $data): Shipment
    {
        $logistikProfileId = Auth::user()->logistikProfile->id;

        $shipment = Shipment::where('logistik_profile_id', $logistikProfileId)
            ->with('order') 
            ->findOrFail($shipmentId);

        $shipment->update([
            'status'         => $data['status'],
            'tracking_notes' => $data['tracking_notes'] ?? $shipment->tracking_notes,
        ]);

        if ($shipment->order) {
            app(\App\Services\NotificationService::class)->send(
                $shipment->order->user_id,
                'PENGIRIMAN_UPDATE',
                'Update Pengiriman',
                "Status paketmu sekarang: {$data['status']}."
            );
        }

        return $shipment;
    }
}