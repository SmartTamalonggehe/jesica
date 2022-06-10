<?php

use Illuminate\Support\Facades\Route;


Route::prefix('admin')->group(function () {
    $nm = 'admin';
    Route::get('dashboard', function () {
        return view('admin.dashboard.index');
    })->name($nm . '.dashboard');
    // route peta
    Route::get('peta', function () {
        return view('admin.peta.index');
    })->name($nm . '.peta');
});
