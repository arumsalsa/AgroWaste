<?php

namespace App\Models;

use App\Models\Category;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes; // Wajib untuk fitur soft delete

class Product extends Model
{
    use SoftDeletes;

    // Beri tahu Laravel bahwa ID kita adalah UUID string
    public $incrementing = false;
    protected $keyType = 'string';

    // Izinkan mass assignment
    protected $guarded = [];

    // Relasi ke Peternak Profile
    public function peternakProfile()
    {
        return $this->belongsTo(PeternakProfile::class);
    }

    // Relasi ke Category
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}