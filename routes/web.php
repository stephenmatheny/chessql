<?php

use App\Http\Controllers\ClubController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/club/create', [ClubController::class, 'create'])->name('club.create');
    // ->can('edit', 'club');
    Route::post('/club', [ClubController::class, 'store'])->name('club.store');

    Route::get('/club', [ClubController::class, 'index'])->name('club.index');
    Route::get('/club/{id}', [ClubController::class, 'show'])->name('club.show');
    Route::get('/club/{id}/edit', [ClubController::class, 'edit'])->name('club.edit');
        // ->can('edit', 'club');

    Route::patch('/club/{id}/edit', [ClubController::class, 'update'])->name('club.update');
    // ->can('edit', 'club');

    Route::get('/user/{id}', [UserController::class, 'show'])->name('user.show');
});

require __DIR__.'/auth.php';
