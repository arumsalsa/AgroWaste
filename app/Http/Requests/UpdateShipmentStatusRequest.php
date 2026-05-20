<?php

declare(strict_types=1);

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateShipmentStatusRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            // Status wajib sesuai urutan spesifikasi
            'status'         => ['required', 'string', 'in:dijadwalkan,dalam_perjalanan,terkirim'],
            'tracking_notes' => ['nullable', 'string', 'max:500'],
        ];
    }
}