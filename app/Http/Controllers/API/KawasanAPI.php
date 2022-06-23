<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Kawasan;
use Illuminate\Http\Request;

class KawasanAPI extends Controller
{
    public function index()
    {
        $data = Kawasan::orderBy('nm_kawasan')->get();
        return response()->json($data);
    }

    public function polygon()
    {
        $data = Kawasan::with(['koordinat' => function ($koordinat) {
            $koordinat->with('koordinatDet');
        }])->get();
        return response()->json($data);
    }
}