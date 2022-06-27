@extends('user.layouts.default')

@php
$folder = 'dashboard';
@endphp

@section('judul', ucfirst($folder))


@section('content')
    <div class="card">
        <div class="card-header">
            <h5 class="card-title">Grafik ...</h5>
        </div>

        <div class="card-body">
            Tampat Grafik
        </div>

    </div>
@endsection
