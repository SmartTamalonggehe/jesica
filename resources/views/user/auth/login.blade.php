@extends('user.layouts.default')

@php
$folder = 'login';
@endphp

@section('content')
    <!-- Content area -->
    <div class="content d-flex justify-content-center align-items-center">

        <!-- Login form -->
        <form class="login-form" action="{{ route('login') }}" method="POST">
            @csrf
            <div class="card mb-0">
                <div class="card-body">
                    <div class="text-center mb-3">
                        <i class="icon-reading icon-2x text-secondary border-secondary border-3 rounded-pill p-3 mb-3 mt-1">
                        </i>
                        <h5 class="mb-0">Login ke Halaman Admin</h5>
                        <span class="d-block text-muted">Silahkan Memasukan Email dan Password</span>
                        {{-- error --}}
                        @if ($errors->any())
                            <div class="alert alert-danger">
                                <span>{{ $errors->first() }}</span>
                            </div>
                        @endif
                    </div>

                    <div class="form-group form-group-feedback form-group-feedback-left">
                        <input type="text" name="email" id="email" class="form-control" placeholder="Email">
                        <div class="form-control-feedback">
                            <i class="icon-user text-muted"></i>
                        </div>
                    </div>

                    <div class="form-group form-group-feedback form-group-feedback-left">
                        <input type="password" name="password" id="password" class="form-control" placeholder="Password">
                        <div class="form-control-feedback">
                            <i class="icon-lock2 text-muted"></i>
                        </div>
                    </div>

                    <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-block">Sign in</button>
                    </div>
                </div>
            </div>
        </form>
        <!-- /login form -->

    </div>
    <!-- /content area -->
@endsection
