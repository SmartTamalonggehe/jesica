<?php

namespace App\Http\Controllers\CRUD;

use Illuminate\Http\Request;
use App\Models\KawasanTutupan;
use App\Http\Controllers\Controller;
use Yajra\DataTables\Facades\DataTables;
use Illuminate\Support\Facades\Validator;

class KawasanTutupanController extends Controller
{
    // validation
    protected function spartaValidation($request, $id = "")
    {
        $rules = [
            'kawasan_id' => 'required',
            'tutupan_id' => 'required',
            'luas' => 'required',
            'presentase' => 'required',
        ];

        $messages = [
            'kawasan_id.required' => 'Kawasn harus diisi.',
            'tutupan_id.required' => 'Tutupan harus diisi.',
            'luas.required' => 'Luas harus diisi.',
            'presentase.required' => 'Presentase harus diisi.',
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
        $data = KawasanTutupan::with('tutupan', 'kawasan')->get();
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
        $data_req = $request->all();

        $validate = $this->spartaValidation($data_req);
        if ($validate) {
            return $validate;
        }
        // get luas
        $luas = $data_req['luas'];
        // remove comma
        $luas = str_replace(',', '', $luas);
        // to float
        $luas = floatval($luas);
        $data_req['luas'] = $luas;

        $data = KawasanTutupan::create($data_req);
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
        $data = KawasanTutupan::find($id);
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
        // get luas
        $luas = $data_req['luas'];
        // remove comma
        $luas = str_replace(',', '', $luas);
        // to float
        $luas = floatval($luas);
        $data_req['luas'] = $luas;

        $data = KawasanTutupan::find($id);
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
        $data = KawasanTutupan::find($id);
        $data->delete();
        $pesan = [
            'judul' => 'Berhasil',
            'pesan' => 'Data Telah Dihapus',
            'type' => 'success'
        ];
        return response()->json($pesan);
    }
}
