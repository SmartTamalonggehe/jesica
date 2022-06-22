<?php

namespace App\Http\Controllers\CRUD;

use App\Models\Tutupan;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Yajra\DataTables\Facades\DataTables;
use Illuminate\Support\Facades\Validator;

class TutupanController extends Controller
{
    // validation
    protected function spartaValidation($request, $id = "")
    {
        $rules = [
            'nm_tutupan' => 'required',
        ];

        $messages = [
            'nm_tutupan.required' => 'Nama tutupan harus diisi.',
        ];
        $validator = Validator::make($request, $rules, $messages);

        if ($validator->fails()) {
            $pesan = [
                'judul' => 'Gagal',
                'type' => 'error',
                'pesan' => $validator->errors()->all(),
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
        $data = Tutupan::all();
        return DataTables::of($data)
            ->addIndexColumn()
            ->addColumn(
                'action',
                function ($data) {
                    return '
                    <button type="button" class="btn-ubah btn btn-secondary btn-sm" data-id="' . $data->id . '">Ubah</button>
                    <button type="button" class="btn-hapus btn btn-danger btn-sm" data-id="' . $data->id . '">Delete</button>';
                }
            )
            ->rawColumns(['action'])
            ->make(true);
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
        // $data = $request->except(['tujuan_surat', 'tgl_keluar', 'tgl_masuk', 'asal_surat']);
        $data_req = $request->all();

        $validate = $this->spartaValidation($data_req);
        if ($validate) {
            return $validate;
        }
        $data = Tutupan::create($data_req);
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
        $data = Tutupan::find($id);
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

        $validate = $this->spartaValidation($data_req);
        if ($validate) {
            return $validate;
        }
        $data = Tutupan::find($id);
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
        $data = Tutupan::find($id);
        $data->delete();
        $pesan = [
            'judul' => 'Berhasil',
            'pesan' => 'Data Telah Dihapus',
            'type' => 'success'
        ];
        return response()->json($pesan);
    }
}
