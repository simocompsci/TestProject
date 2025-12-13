<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BookController extends Controller
{
    /**
     * Get all books
     */
    public function index()
    {
        $books = Book::all();
        return response()->json($books);
    }

    /**
     * Store a new book
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'author_name' => 'required|string|max:255',
            'pages' => 'required|integer|min:1',
            'cover_path' => 'nullable|string',
            'review' => 'nullable|string',
            'status' => 'nullable|in:unread,reading,read,abandoned',
            'started_date' => 'nullable|date',
            'finished_date' => 'nullable|date',
            'current_page' => 'nullable|integer|min:0',
            'rating' => 'nullable|numeric|min:0|max:5',
            'genre' => 'nullable|string|max:255',
            'owning_status' => 'required|in:own,wishlisted',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $book = Book::create($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Book added successfully',
            'book' => $book
        ], 201);
    }

    /**
     * Get a specific book
     */
    public function show($id)
    {
        $book = Book::find($id);

        if (!$book) {
            return response()->json([
                'success' => false,
                'message' => 'Book not found'
            ], 404);
        }

        return response()->json($book);
    }

    /**
     * Update a book
     */
    public function update(Request $request, $id)
    {
        $book = Book::find($id);

        if (!$book) {
            return response()->json([
                'success' => false,
                'message' => 'Book not found'
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'title' => 'sometimes|string|max:255',
            'author_name' => 'sometimes|string|max:255',
            'pages' => 'sometimes|integer|min:1',
            'cover_path' => 'nullable|string',
            'review' => 'nullable|string',
            'status' => 'nullable|in:unread,reading,read,abandoned',
            'started_date' => 'nullable|date',
            'finished_date' => 'nullable|date',
            'current_page' => 'nullable|integer|min:0',
            'rating' => 'nullable|numeric|min:0|max:5',
            'genre' => 'nullable|string|max:255',
            'owning_status' => 'sometimes|in:own,wishlisted',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $book->update($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Book updated successfully',
            'book' => $book
        ]);
    }

    /**
     * Delete a book
     */
    public function destroy($id)
    {
        $book = Book::find($id);

        if (!$book) {
            return response()->json([
                'success' => false,
                'message' => 'Book not found'
            ], 404);
        }

        $book->delete();

        return response()->json([
            'success' => true,
            'message' => 'Book deleted successfully'
        ]);
    }

    /**
     * Get all owned books
     */
    public function getOwnedBooks()
    {
        $books = Book::where('owning_status', 'own')->get();
        
        return response()->json([
            'success' => true,
            'books' => $books
        ]);
    }

    /**
     * Get all wishlisted books
     */
    public function getWishlistedBooks()
    {
        $books = Book::where('owning_status', 'wishlisted')->get();
        
        return response()->json([
            'success' => true,
            'books' => $books
        ]);
    }
}
