@extends('admin.layouts.default')

@php
$folder = 'dashboard';
@endphp

@section('judul', ucfirst($folder))


@section('content')
    <div class="card">
        <div class="card-header">
            <h5 class="card-title">Basic datatable</h5>
        </div>

        <div class="card-body">
            Grafik
        </div>

    </div>
@endsection
