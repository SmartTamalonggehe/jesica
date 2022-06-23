<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Tutupan;
use Illuminate\Http\Request;

class TutupanAPI extends Controller
{
    public function index()
    {
        $data = Tutupan::orderBy('nm_tutupan', 'asc')->get();
        return response()->json($data);
    }
}
