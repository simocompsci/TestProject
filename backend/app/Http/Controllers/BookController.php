<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class BookController extends Controller
{
    // i will redo this part of the code on my own
    public function getAllBooks(Request $request)
    {
        $books = Book::all();
        return response()->json($books);
    }

    public function addBook(Request $request)
    {
        $validated = $request->validate(
            [
                'title' => 'required|string',
                'author_name' => 'required|string|max:100',
                'pages' => 'required|integer',
                'cover_path' => 'string|nullable',
                'review' => 'string|nullable',
                'status' => 'required|string',
                'started_date' => 'date|nullable',
                'finished_date' => 'date|nullable',
                'current_page' => 'integer|nullable',
                'rating' => 'float|nullable',
                'genre' => 'string|nullable',
                'owning_status' => 'string|nullable',
            ]
        );

        $book = Book::create($validated);
        
        return response()->json([
            "message" => "Book added succesfully",
            "data" => $book,
        ], Response::HTTP_CREATED);
    }
}
