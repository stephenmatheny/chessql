<?php

use App\Http\Controllers\ClubController;
use App\Http\Controllers\GameController;
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
    /** PROFILE */
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    /** CLUB */
    Route::get('/club', [ClubController::class, 'index'])->name('club.index');
    Route::post('/club', [ClubController::class, 'store'])->name('club.store');
    Route::delete('/club', [ClubController::class, 'destroy'])->name('club.destroy');

    Route::get('/club/create', [ClubController::class, 'create'])->name('club.create');

    Route::get('/club/{id}', [ClubController::class, 'show'])->name('club.show');
    Route::patch('/club/{id}', [ClubController::class, 'update'])->name('club.update');
    Route::delete('/club/{id}', [ClubController::class, 'destroy'])->name('club.destroy');

    Route::get('/club/{id}/members', [ClubController::class, 'members'])->name('club.members');
    Route::get('/club/{id}/events', [ClubController::class, 'events'])->name('club.events');
    Route::get('/club/{id}/edit', [ClubController::class, 'edit'])->name('club.edit');

    /** USER */
    Route::get('/user/{id}', [UserController::class, 'show'])->name('user.show');

    /** GAME */
    Route::get('/game', [GameController::class, 'index'])->name('game.index');
    Route::post('/games/{game}/accept', [GameController::class, 'accept']);
    Route::post('/games/{game}/cancel', [GameController::class, 'cancel']);
});

require __DIR__.'/auth.php';
