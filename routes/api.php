<?php

use App\Http\Controllers\API\KawasanAPI;
use App\Http\Controllers\API\KawasanTutupanAPI;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\PolygonAPI;
use App\Http\Controllers\API\TutupanAPI;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('polygon', [PolygonAPI::class, 'index'])->name('polygon.index');

Route::controller(KawasanAPI::class)->prefix('kawasan')->group(function () {
    Route::get('/', 'index')->name('kawasan.index');
    Route::get('polygon', 'polygon')->name('kawasan.polygon');
});

Route::get('tutupan', [TutupanAPI::class, 'index'])->name('tutupan.index');

Route::controller(KawasanTutupanAPI::class)->prefix('kawasan-tutupan')->group(function () {
    Route::get('/', 'index')->name('kawasan-tutupan.index');
    Route::get('kawasan/{id}', 'byKawasan')->name('kawasan-tutupan.by-kawasan');
    Route::get('tutupan/{id}', 'byTutupan')->name('kawasan-tutupan.by-tutupan');
});
