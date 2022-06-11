<?php

namespace App\Http\Controllers\CRUD;

use App\Models\Polygon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class PolygonController extends Controller
{
    // validation
    protected function spartaValidation($request, $id = "")
    {
        $validator = Validator::make($request, [
            'nm_polygon' => 'required',
            'warna' => 'required',
            'luas' => 'required',
            // minumum array
            'longitude' => 'required|min:3',
            'latitude' => 'required',
        ]);

        if ($validator->fails()) {
            $pesan = [
                'judul' => 'Gagal',
                'pesan' => $validator->errors()->first(),
                'type' => 'error'
            ];
            return response()->json($pesan);
        }
    }
    /**
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return 'test';
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $validate = $this->spartaValidation($data);
        if ($validate) {
            return $validate;
        }
        $koordinat = (new KoordinatController)->store($request);
        $koordinat_det = (new KoordinatDetController)->store($request, $koordinat->id);
        // all request except latitude and longitude
        $data = $request->except(['longitude', 'latitude']);
        $data['koordinat_id'] = $koordinat->id;
        $polygon = Polygon::create($data);
        $pesan = [
            'judul' => 'Berhasil',
            'pesan' => 'Data Telah Ditambahkan',
            'type' => 'success'
        ];
        return response()->json($pesan);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
