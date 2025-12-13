import { X } from "lucide-react";
import { useState } from "react";
import { addBook } from "../../../APIs/MyServerAPIs";

function BookModal({ book, onClose }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleAddToLibrary = async () => {
    setLoading(true);
    setMessage(null);

    try {
      await addBook(book, 'own');
      setMessage({ type: 'success', text: 'Book added to library!' });

      // Close modal after 1.5 seconds
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to add book. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleAddToWishlist = async () => {
    setLoading(true);
    setMessage(null);

    try {
      await addBook(book, 'wishlisted');
      setMessage({ type: 'success', text: 'Book added to wishlist!' });

      // Close modal after 1.5 seconds
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to add book. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl border-2 border-black bg-amber-50 p-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 border-2 border-black bg-amber-100 p-2 hover:scale-110 transition"
        >
          <X size={18} />
        </button>

        <div className="flex gap-6">
          {/* Cover Image */}
          <div className="border-2 border-black p-2 bg-amber-50 w-40 h-56 shrink-0">
            <img
              src={book.cover ?? "/placeholder.png"}
              alt={book.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Book Info */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold">{book.title}</h2>
            <p className="mt-1 text-sm">
              By <span className="font-semibold">{book.author}</span>
            </p>
            <p className="text-sm mt-1">Released: {book.year ?? "Unknown"}</p>
            <p className="text-sm mt-1">
              Pages: {book.pages ?? "Unknown"} | Rating:{" "}
              {book.rating ?? "N/A"} | Language: {book.language ?? "Unknown"}
            </p>

            {/* Description */}
            <div className="mt-4 border-t-2 border-black pt-3">
              <p className="text-sm leading-relaxed line-clamp-5">
                {book.description ?? "No description available."}
              </p>
            </div>

            {/* Success/Error Message */}
            {message && (
              <div
                className={`mt-4 p-3 border-2 border-black ${message.type === 'success' ? 'bg-green-200' : 'bg-red-200'
                  }`}
              >
                <p className="text-sm font-semibold">{message.text}</p>
              </div>
            )}

            {/* Actions */}
            <div className="mt-6 flex gap-4">
              <button
                className="flex-1 border-2 border-black bg-amber-200 py-3 font-semibold hover:bg-amber-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleAddToLibrary}
                disabled={loading}
              >
                {loading ? 'Adding...' : 'Add to Library'}
              </button>

              <button
                className="flex-1 border-2 border-black bg-amber-100 py-3 font-semibold hover:bg-amber-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleAddToWishlist}
                disabled={loading}
              >
                {loading ? 'Adding...' : 'Add to Wishlist'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookModal;

