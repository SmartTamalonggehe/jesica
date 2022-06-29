<?php

namespace App\Http\Controllers\CRUD;

use App\Models\Kawasan;
use App\Models\Koordinat;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class KawasanController extends Controller
{
    // validation
    protected function spartaValidation($request, $id = "")
    {
        $required = 'required';
        if ($id) {
            $required = '';
        }
        $rules = [
            'nm_kawasan' => 'required',
            'warna' => 'required',
            'luas' => 'required',
            // minumum array
            'longitude' => "$required|min:3",
            'latitude' => "$required|min:3",
        ];


        $messages = [
            'longitude.required' => 'Longitude harus diisi. ',
            'latitude.required' => 'Latitude harus diisi. ',
        ];
        $validator = Validator::make($request, $rules, $messages);

        if ($validator->fails()) {
            $pesan = [
                'judul' => 'Gagal',
                'type' => 'error',
                'pesan' => $validator->errors()->first(),
            ];
            return response()->json($pesan);
        }
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        // change request->nm_kawasan to request->nm_koordinat
        $data['nm_koordinat'] = $data['nm_kawasan'];
        // return $data;
        $koordinat = (new KoordinatController)->store($data);

        (new KoordinatDetController)->store($request, $koordinat->id);
        // all request except latitude and longitude
        $data = $request->except(['longitude', 'latitude', 'nm_koordinat', 'id_form', 'jenis']);
        $data['koordinat_id'] = $koordinat->id;
        Kawasan::create($data);
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
        $data = Kawasan::find($id);
        return response()->json($data);
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
        $data_req = $request->all();
        $validate = $this->spartaValidation($data_req, $id);
        if ($validate) {
            return $validate;
        }
        $data = Kawasan::find($request->id);
        $data_req = $request->except(['jenis']);
        $data->update($data_req);
        $pesan = [
            'judul' => 'Berhasil',
            'pesan' => 'Data Telah Diubah',
            'type' => 'success'
        ];
        return response()->json($pesan);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Koordinat::destroy($id);
        $pesan = [
            'judul' => 'Berhasil',
            'pesan' => 'Data Telah Dihapus',
            'type' => 'success'
        ];
        return response()->json($pesan);
    }
}
