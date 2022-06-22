<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KawasanTutupan extends Model
{
    use HasFactory;
    protected $table = 'kawasan_tutupan';
    protected $guarded = [];

    public function kawasan()
    {
        return $this->belongsTo(Kawasan::class);
    }

    public function tutupan()
    {
        return $this->belongsTo(Tutupan::class);
    }
}
