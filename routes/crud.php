<?php

use App\Http\Controllers\CRUD\PolygonController;
use App\Http\Controllers\CRUD\TutupanController;
use Illuminate\Support\Facades\Route;

Route::prefix('crud')->group(function () {
    Route::resources([
        'polygon' => PolygonController::class,
        'tutupan' => TutupanController::class
    ]);
});
