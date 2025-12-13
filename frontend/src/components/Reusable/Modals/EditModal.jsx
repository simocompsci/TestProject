import { useState } from "react";
import { updateBook } from "../../../APIs/MyServerAPIs";

function EditModal({ book, onClose, onUpdated }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Form state
  const [formData, setFormData] = useState({
    title: book.title || '',
    author_name: book.author || '',
    pages: book.pages || 0,
    cover_path: book.cover || '',
    review: book.review || '',
    status: book.status || 'unread',
    started_date: book.started_date || '',
    finished_date: book.finished_date || '',
    current_page: book.currentPage || 0,
    rating: book.rating || '',
    genre: book.genre || '',
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await updateBook(book.id, formData);

      if (onUpdated) {
        onUpdated(book.id);
      }
      onClose();
    } catch (err) {
      console.error('Error updating book:', err);
      setError('Failed to update book. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
      <h2 className="text-lg font-bold border-b-2 border-black pb-1 sticky top-0 bg-amber-50">
        Edit Book
      </h2>

      {error && (
        <div className="p-3 border-2 border-red-600 bg-red-100 text-red-700">
          {error}
        </div>
      )}

      {/* Title */}
      <div>
        <label className="block font-semibold mb-1">Title *</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => handleChange('title', e.target.value)}
          className="w-full border-2 border-black p-2 bg-white"
          placeholder="Book title"
          required
        />
      </div>

      {/* Author */}
      <div>
        <label className="block font-semibold mb-1">Author *</label>
        <input
          type="text"
          value={formData.author_name}
          onChange={(e) => handleChange('author_name', e.target.value)}
          className="w-full border-2 border-black p-2 bg-white"
          placeholder="Author name"
          required
        />
      </div>

      {/* Pages */}
      <div>
        <label className="block font-semibold mb-1">Total Pages *</label>
        <input
          type="number"
          value={formData.pages}
          onChange={(e) => handleChange('pages', parseInt(e.target.value) || 0)}
          className="w-full border-2 border-black p-2 bg-white"
          placeholder="Number of pages"
          min="0"
          required
        />
      </div>

      {/* Current Page */}
      <div>
        <label className="block font-semibold mb-1">Current Page</label>
        <input
          type="number"
          value={formData.current_page}
          onChange={(e) => handleChange('current_page', parseInt(e.target.value) || 0)}
          className="w-full border-2 border-black p-2 bg-white"
          placeholder="Page you're on"
          min="0"
          max={formData.pages}
        />
      </div>

      {/* Cover Path */}
      <div>
        <label className="block font-semibold mb-1">Cover URL</label>
        <input
          type="text"
          value={formData.cover_path}
          onChange={(e) => handleChange('cover_path', e.target.value)}
          className="w-full border-2 border-black p-2 bg-white"
          placeholder="https://example.com/cover.jpg"
        />
      </div>

      {/* Status */}
      <div>
        <label className="block font-semibold mb-1">Reading Status</label>
        <select
          value={formData.status}
          onChange={(e) => handleChange('status', e.target.value)}
          className="w-full border-2 border-black p-2 bg-white"
        >
          <option value="unread">Unread</option>
          <option value="reading">Reading</option>
          <option value="read">Read</option>
          <option value="abandoned">Abandoned</option>
        </select>
      </div>

      {/* Rating */}
      <div>
        <label className="block font-semibold mb-1">Rating (0-5)</label>
        <input
          type="number"
          value={formData.rating}
          onChange={(e) => handleChange('rating', e.target.value)}
          className="w-full border-2 border-black p-2 bg-white"
          placeholder="Your rating"
          min="0"
          max="5"
          step="0.1"
        />
      </div>

      {/* Genre */}
      <div>
        <label className="block font-semibold mb-1">Genre</label>
        <input
          type="text"
          value={formData.genre}
          onChange={(e) => handleChange('genre', e.target.value)}
          className="w-full border-2 border-black p-2 bg-white"
          placeholder="e.g., Fiction, Mystery, Science Fiction"
        />
      </div>

      {/* Started Date */}
      <div>
        <label className="block font-semibold mb-1">Started Reading</label>
        <input
          type="date"
          value={formData.started_date}
          onChange={(e) => handleChange('started_date', e.target.value)}
          className="w-full border-2 border-black p-2 bg-white"
        />
      </div>

      {/* Finished Date */}
      <div>
        <label className="block font-semibold mb-1">Finished Reading</label>
        <input
          type="date"
          value={formData.finished_date}
          onChange={(e) => handleChange('finished_date', e.target.value)}
          className="w-full border-2 border-black p-2 bg-white"
        />
      </div>

      {/* Review */}
      <div>
        <label className="block font-semibold mb-1">Review</label>
        <textarea
          value={formData.review}
          onChange={(e) => handleChange('review', e.target.value)}
          className="w-full border-2 border-black p-2 bg-white min-h-[100px]"
          placeholder="Your thoughts about this book..."
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 sticky bottom-0 bg-amber-50 pt-2">
        <button
          type="button"
          onClick={onClose}
          disabled={loading}
          className="flex-1 border-2 border-black bg-gray-200 py-2 font-semibold hover:bg-gray-300 transition disabled:opacity-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="flex-1 border-2 border-black bg-amber-200 py-2 font-semibold hover:bg-amber-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </form>
  );
}

export default EditModal;