<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::get('/ping', function () {
    return ['pong' => true];
});

Route::get('/ping', fn () => ['pong' => true]);

Route::post('/auth/register', [AuthController::class, 'register']);
Route::post('/auth/login',    [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/auth/me',      [AuthController::class, 'me']);
    Route::post('/auth/logout', [AuthController::class, 'logout']);
});
