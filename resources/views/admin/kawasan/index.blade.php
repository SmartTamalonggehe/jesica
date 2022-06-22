@extends('admin.layouts.default')

@php
$folder = 'kawasan';
@endphp

@section('css')
    {{-- my style --}}
    <link rel="stylesheet" href="{{ mix('my_code/css/app.css') }}">
    {{-- Maps --}}
    <script src='https://api.mapbox.com/mapbox-gl-js/v2.8.2/mapbox-gl.js'></script>
    <link href='https://api.mapbox.com/mapbox-gl-js/v2.8.2/mapbox-gl.css' rel='stylesheet' />

    {{-- draw --}}
    <script src="https://unpkg.com/@turf/turf@6/turf.min.js"></script>
    <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-draw/v1.2.2/mapbox-gl-draw.js"></script>
    <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-draw/v1.2.2/mapbox-gl-draw.css"
        type="text/css">
@endsection

@section('judul', ucfirst($folder))

@section('btn-top-right')
    <button type="button" class="btn btn-outline-primary" id="tambah">Tambah
        Data</button>
@endsection

@section('content')
    <div id="route" style="display: none"><?= $folder ?></div>
    <div class="card">
        <div class="card-header">
            <h5 class="card-title">Polygon</h5>
            <button id="refresh">Refresh</button>
        </div>

        <div class="card-body">
            <div id="map"></div>
        </div>
    </div>

    @include("admin.$folder.form")
@endsection

@section('scripts')
    <script async src="{{ mix('my_code/js/maps.js') }}"></script>
    <script src="{{ mix('my_code/js/my_crud.js') }}"></script>
@endsection
