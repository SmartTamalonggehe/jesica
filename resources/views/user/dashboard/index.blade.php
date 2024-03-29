@extends('user.layouts.default')

@php
    $folder = 'dashboard';
@endphp

@section('judul', ucfirst($folder))


@section('content')
    <div class="card">
        <div class="card-header">
            <h5 class="card-title">Grafik Berdasarkan Kawasan</h5>
        </div>

        <div class="card-body mb-3">
            <div id="grafik-jenis-kawasan"></div>
        </div>

        <div class="card-header">
            <h5 class="card-title">Grafik Luas Kawasan</h5>
        </div>

        <div class="card-body">
            <div id="grafik-luas-kawasan"></div>
        </div>

    </div>
@endsection

@section('scripts')
    <script src="{{ mix('my_code/js/chart.js') }}"></script>
@endsection
