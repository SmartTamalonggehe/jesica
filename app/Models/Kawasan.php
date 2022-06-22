<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kawasan extends Model
{
    use HasFactory;
    protected $table = 'kawasan';
    protected $guarded = [];

    public function koordinat()
    {
        return $this->belongsTo(Koordinat::class);
    }
}
