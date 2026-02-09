<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;

Route::prefix('books')->group(function () {
    Route::get('/', [BookController::class, 'index']);
    Route::post('/', [BookController::class, 'store']);
    Route::get('/{id}', [BookController::class, 'show']);
    Route::put('/{id}', [BookController::class, 'update']);
    Route::delete('/{id}', [BookController::class, 'destroy']);
    
    // Custom routes for owned and wishlisted books
    Route::get('/owned/all', [BookController::class, 'getOwnedBooks']);
    Route::get('/wishlisted/all', [BookController::class, 'getWishlistedBooks']);
});
