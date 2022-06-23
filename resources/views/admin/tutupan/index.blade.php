@extends('admin.layouts.default')

@php
$folder = 'tutupan';
@endphp

@section('css')
    {{-- my style --}}
    <link rel="stylesheet" href="{{ mix('my_code/css/app.css') }}">
@endsection

@section('judul', ucfirst($folder))

@section('btn-top-right')
    <button type="button" class="btn btn-outline-primary" id="tambah">Tambah
        Data</button>
@endsection

@section('content')
    <div id="route" style="display: none"><?= $folder ?></div>
    <div class="card">
        <div class="card-body">
            <h3>Silahkan mengisi, merubah dan menghapus data tutupan</h3>
            <table id="my_table" class="table table-striped" style="width:100%">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama Tutupan</th>
                        <th class="text-center">Actions</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>

    @include("admin.$folder.form")
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
                        data: 'nm_tutupan',
                    },
                    {
                        data: 'action',
                        orderable: false,
                        searchable: false
                    }
                ]
            });
        });
    </script>
@endsection
