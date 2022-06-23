<?php

use Illuminate\Support\Facades\Route;


Route::prefix('admin')->group(function () {
    $nm = 'admin';
    Route::get('/', function () {
        return redirect()->route('admin.dashboard');
    });

    Route::get('dashboard', function () {
        return view('admin.dashboard.index');
    })->name($nm . '.dashboard');
    // route kawasan
    Route::get('kawasan', function () {
        return view('admin.kawasan.index');
    })->name($nm . '.kawasan');
    // route tutupan
    Route::get('tutupan', function () {
        return view('admin.tutupan.index');
    })->name($nm . '.tutupan');
    // route peta
    Route::get('polygon', function () {
        return view('admin.polygon.index');
    })->name($nm . '.polygon');
});
