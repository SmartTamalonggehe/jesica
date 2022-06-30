@extends('user.layouts.default')

@php
$folder = 'kawasan-tutupan';
@endphp

@section('css')
    {{-- my style --}}
    <link rel="stylesheet" href="{{ mix('my_code/css/app.css') }}">
@endsection

@section('judul', ucfirst('Kawasan Tutupan'))

@section('btn-top-right')
    <button type="button" class="btn btn-outline-primary" id="tambah">Tambah
        Data</button>
@endsection

@section('content')
    <div id="route" style="display: none"><?= $folder ?></div>
    <div class="card">
        <div class="card-body">
            <h3>Data Kawasan Tutupan</h3>
            <table id="my_table" class="table table-striped" style="width:100%">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Kawasan</th>
                        <th>Tutupan</th>
                        <th>Luas</th>
                        <th>Presentase</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
@endsection

@section('scripts')
    <script src="{{ mix('my_code/js/my_crud.js') }}"></script>
    <!-- Theme JS files -->
    <script src="{{ asset('global_assets/js/plugins/tables/datatables/datatables.min.js') }}"></script>
    <script>
        $(document).ready(function() {
            $('#my_table').DataTable({
                scrollX: true,
                processing: true,
                serverSide: true,
                order: [
                    [1, 'asc']
                ],
                ajax: `/crud/${route}`,
                columns: [{
                        data: 'DT_RowIndex',
                        orderable: false,
                        searchable: false
                    },
                    {
                        data: 'kawasan.nm_kawasan',
                    },
                    {
                        data: 'tutupan.nm_tutupan',
                    },
                    {
                        data: 'luas',
                    },
                    {
                        data: 'presentase',
                    }
                ]
            });
        });
    </script>
@endsection
