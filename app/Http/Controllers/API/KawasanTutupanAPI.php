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
    public function byKawasan($kawasan_id)
    {
        $data = KawasanTutupan::where('kawasan_id', $kawasan_id)->with('tutupan', 'kawasan')->get();
        return response()->json($data);
    }
    public function byTutupan($tutupan_id)
    {
        $data = KawasanTutupan::where('tutupan_id', $tutupan_id)->with('tutupan', 'kawasan')->get();
        return response()->json($data);
    }
}
