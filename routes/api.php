<?php

use App\Http\Controllers\Main\AuthorController;
use App\Http\Controllers\Main\CourseController;
use App\Http\Controllers\Main\ThesizController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/get_thesiz_paginate', [ThesizController::class, 'getThesizPaginate']);
Route::get('/get_author_paginate', [AuthorController::class, 'getAuthorPaginate']);


Route::get('/view_thesis/{id}', [ThesizController::class, 'showThesis']);
Route::get('/get_courses', [CourseController::class, 'getCourses']);
