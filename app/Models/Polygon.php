<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Polygon extends Model
{
    use HasFactory;
    protected $table = 'polygon';
    protected $guarded = [];

    public function koordinat()
    {
        return $this->belongsTo(Koordinat::class, 'koordinat_id', 'id');
    }
}
