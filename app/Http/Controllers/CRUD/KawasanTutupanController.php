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
        //
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
