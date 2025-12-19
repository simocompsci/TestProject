<?php

use App\Http\Controllers\BookController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::get("/books" , [BookController::class , 'getAllBooks']);
Route::get("/books/{id}" , [BookController::class , 'getBookById']);
Route::post("/books" , [BookController::class , 'addBook']);
Route::put("/books/{id}" , [BookController::class , 'updateBook']);
Route::delete("/books/{id}" , [BookController::class , 'addBook']);

