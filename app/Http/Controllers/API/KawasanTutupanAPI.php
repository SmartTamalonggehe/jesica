<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\KawasanTutupan;
use Illuminate\Http\Request;

class KawasanTutupanAPI extends Controller
{
    public function index()
    {
        $data = KawasanTutupan::with('tutupan', 'kawasan')->get();
        return response()->json($data);
    }
}
