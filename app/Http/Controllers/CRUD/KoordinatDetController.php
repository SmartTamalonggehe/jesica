<?php

namespace App\Http\Controllers\CRUD;

use App\Models\KoordinatDet;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class KoordinatDetController extends Controller
{
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
    public function store(Request $request, $id)
    {
        $koordinat = $request->longitude;
        foreach ($koordinat as $key => $value) {
            KoordinatDet::create([
                'koordinat_id' => $id,
                'longitude' => $request->longitude[$key],
                'latitude' => $request->latitude[$key]
            ]);
        }
        // last koordinat
        KoordinatDet::create([
            'koordinat_id' => $id,
            'longitude' => $request->longitude[0],
            'latitude' => $request->latitude[0]
        ]);
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
