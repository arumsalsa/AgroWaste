<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

// Tambahkan "implements HasMedia" di sini
class Product extends Model implements HasMedia
{
    use HasUuids, SoftDeletes;
    
    // Tambahkan trait InteractsWithMedia di sini
    use InteractsWithMedia;

    protected $fillable = [
        'peternak_profile_id',
        'category_id',
        'name',
        'description',
        'price',
        'stock_kg',
        'status', // menunggu_review, aktif, ditolak
    ];

    public function peternakProfile(): BelongsTo
    {
        return $this->belongsTo(PeternakProfile::class);
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
}