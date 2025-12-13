import { useState } from "react";
import { deleteBook } from "../../../APIs/MyServerAPIs";

function DeleteModal({ book, onClose, onDeleted }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    setLoading(true);
    setError(null);

    try {
      await deleteBook(book.id);
      // Notify parent component that book was deleted
      if (onDeleted) {
        onDeleted(book.id);
      }
      onClose();
    } catch (err) {
      console.error('Error deleting book:', err);
      setError('Failed to delete book. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold border-b-2 border-black pb-1">
        Delete Book
      </h2>

      <p>
        Are you sure you want to delete{" "}
        <span className="font-semibold">{book.title}</span>?
      </p>

      <p className="text-sm text-gray-600">
        This action cannot be undone.
      </p>

      {error && (
        <div className="p-3 border-2 border-red-600 bg-red-100 text-red-700">
          {error}
        </div>
      )}

      <div className="flex gap-3">
        <button
          onClick={onClose}
          disabled={loading}
          className="flex-1 border-2 border-black bg-gray-200 py-2 font-semibold hover:bg-gray-300 transition disabled:opacity-50"
        >
          Cancel
        </button>
        <button
          onClick={handleDelete}
          disabled={loading}
          className="flex-1 border-2 border-black bg-red-200 py-2 font-semibold hover:bg-red-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Deleting...' : 'Delete'}
        </button>
      </div>
    </div>
  );
}

export default DeleteModal;