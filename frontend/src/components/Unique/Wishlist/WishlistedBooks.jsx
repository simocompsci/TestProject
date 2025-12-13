import React, { useState, useEffect } from "react";
import { getWishlistedBooks, updateBook, deleteBook } from "../../../APIs/MyServerAPIs";

function BookCard({ book, onRemove, onMoveToLibrary }) {
  const [loading, setLoading] = useState(false);

  const handleRemove = async () => {
    if (!confirm(`Remove "${book.title}" from wishlist?`)) return;

    setLoading(true);
    try {
      await onRemove(book.id);
    } catch (error) {
      console.error('Error removing book:', error);
      alert('Failed to remove book. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleMoveToLibrary = async () => {
    setLoading(true);
    try {
      await onMoveToLibrary(book.id);
    } catch (error) {
      console.error('Error moving book:', error);
      alert('Failed to move book. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center">
        {/* framed cover */}
        <div className="border-2 border-black p-2 bg-amber-50 w-75 h-110">
          <img
            src={book.cover}
            alt={book.title}
            className="w-full h-full object-cover block"
          />
        </div>

        {/* actions */}
        <div className="mt-2 flex flex-col gap-2 border-2 border-black bg-amber-300 w-75 px-4 py-3">
          <button
            onClick={handleRemove}
            disabled={loading}
            className="border-2 border-black bg-amber-100 py-2 font-semibold hover:bg-amber-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Removing...' : 'Remove from Wishlist'}
          </button>

          <button
            onClick={handleMoveToLibrary}
            disabled={loading}
            className="border-2 border-black bg-amber-200 py-2 font-semibold hover:bg-amber-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Moving...' : 'Add to Library'}
          </button>
        </div>
      </div>
    </>
  );
}

function WishlistedBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWishlistedBooks = async () => {
    try {
      setLoading(true);
      const wishlistedBooks = await getWishlistedBooks();

      // Map backend data to frontend format
      const formattedBooks = wishlistedBooks.map(book => ({
        id: book.id,
        title: book.title,
        author: book.author_name,
        cover: book.cover_path,
        rating: book.rating,
      }));

      setBooks(formattedBooks);
      setError(null);
    } catch (err) {
      console.error('Error fetching wishlisted books:', err);
      setError('Failed to load wishlist. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWishlistedBooks();
  }, []);

  const handleRemoveFromWishlist = async (bookId) => {
    await deleteBook(bookId);
    // Refresh the list
    await fetchWishlistedBooks();
  };

  const handleMoveToLibrary = async (bookId) => {
    // Update the book's owning_status from 'wishlisted' to 'own'
    await updateBook(bookId, { owning_status: 'own' });
    // Refresh the list
    await fetchWishlistedBooks();
  };

  if (loading) {
    return (
      <section className="ml-60 mt-10 p-8">
        <div className="flex items-center justify-center mt-20">
          <div className="text-2xl font-bold">Loading your wishlist...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="ml-60 mt-10 p-8">
        <div className="flex items-center justify-center mt-20">
          <div className="text-xl text-red-600 border-2 border-red-600 bg-red-100 p-6">
            {error}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="ml-60 mt-10 p-8">
      <div className="flex items-center justify-between mb-4 mt-20">
        <h1 className="text-6xl font-bold">My Wishlist</h1>
        <div className="text-xl font-semibold">
          {books.length} {books.length === 1 ? 'book' : 'books'}
        </div>
      </div>

      {books.length === 0 ? (
        <div className="text-center mt-10 p-8 border-2 border-black bg-amber-100">
          <p className="text-xl font-semibold">Your wishlist is empty!</p>
          <p className="mt-2">Search for books and add them to your wishlist.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {books.map((b) => (
            <div key={b.id}>
              <BookCard
                book={b}
                onRemove={handleRemoveFromWishlist}
                onMoveToLibrary={handleMoveToLibrary}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default WishlistedBooks;

