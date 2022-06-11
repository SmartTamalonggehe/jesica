<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Polygon;
use Illuminate\Http\Request;

class PolygonAPI extends Controller
{
    public function index()
    {
        $data = Polygon::with(['koordinat' => function ($koordinat) {
            $koordinat->with('koordinatDet');
        }])->get();
        return response()->json($data);
    }
}
