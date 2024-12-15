<?php

use App\Http\Controllers\Main\AuthorController;
use App\Http\Controllers\Main\CourseController;
use App\Http\Controllers\Main\DashboardController;
use App\Http\Controllers\Main\ThesizController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('login');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/admin/dashboard', [DashboardController::class, 'index'])
        ->name('dashboard');

    Route::resource('/admin/thesis', ThesizController::class);
    Route::get('/thesis_print', [ThesizController::class, 'printAllThesis']);

    Route::resource('/admin/courses', CourseController::class);
    Route::resource('/admin/authors', AuthorController::class);








});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
