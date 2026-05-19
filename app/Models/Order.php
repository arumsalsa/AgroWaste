<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    // Beri tahu Laravel bahwa ID kita adalah UUID string
    public $incrementing = false;
    protected $keyType = 'string';

    protected $guarded = [];

    // Relasi ke Produk
    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    // Relasi ke Pembeli
    public function buyerProfile()
    {
        return $this->belongsTo(BuyerProfile::class);
    }
}