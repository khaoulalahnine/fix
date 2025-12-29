<?php

use Illuminate\Support\Facades\Route;

// Root
Route::get('/', function () {
    return view('welcome');
});

// CSRF cookie route (for Sanctum SPA auth)
Route::get('/sanctum/csrf-cookie', [\Laravel\Sanctum\Http\Controllers\CsrfCookieController::class, 'show']);
