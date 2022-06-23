<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Kawasan;
use Illuminate\Http\Request;

class KawasanAPI extends Controller
{
    public function index()
    {
        $data = Kawasan::with(['koordinat' => function ($koordinat) {
            $koordinat->with('koordinatDet');
        }])->get();
        return response()->json($data);
    }
}
