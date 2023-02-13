<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Kawasan;
use Illuminate\Http\Request;

class KawasanAPI extends Controller
{
    public function index(Request $request)
    {
        $nm_kawasan = $request->nm_kawasan;
        $data = Kawasan::orderBy('nm_kawasan')
            ->where('nm_kawasan', 'like', "%$nm_kawasan%")
            ->get();
        return response()->json($data);
    }

    public function polygon()
    {
        $data = Kawasan::with(['koordinat' => function ($koordinat) {
            $koordinat->with('koordinatDet');
        }])->get();
        return response()->json($data);
    }

    public function filter()
    {
        $data = Kawasan::with(['koordinat' => function ($koordinat) {
            $koordinat->with('koordinatDet');
        }])->get();
        return response()->json($data);
    }
}
