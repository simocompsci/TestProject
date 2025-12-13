import { Pencil, Trash2, Info, X } from "lucide-react";
import Modal from "../../Reusable/Modals/Modal";
import DeleteModal from "../../Reusable/Modals/DeleteModal";
import EditModal from "../../Reusable/Modals/EditModal";
import InfoModal from "../../Reusable/Modals/InfoModal";
import { useState, useEffect } from "react";
import { getOwnedBooks } from "../../../APIs/MyServerAPIs";

function BookCard({ book, onRefresh }) {
  const [openModal, setOpenModal] = useState(null);

  const handleClose = () => {
    setOpenModal(null);
  };

  const handleDeleted = () => {
    handleClose();
    if (onRefresh) {
      onRefresh();
    }
  };

  const handleUpdated = () => {
    handleClose();
    if (onRefresh) {
      onRefresh();
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
        <div className="mt-2 flex justify-center gap-6 border-2 border-black bg-amber-300 w-75 px-6 py-2">
          <button
            onClick={() => setOpenModal("edit")}
            className="hover:scale-110 transition"
            title="Update book"
          >
            <Pencil size={25} />
          </button>

          <button
            onClick={() => setOpenModal("delete")}
            className="hover:scale-110 transition"
            title="Delete book"
          >
            <Trash2 size={25} />
          </button>

          <button
            onClick={() => setOpenModal("info")}
            className="hover:scale-110 transition"
            title="Book info"
          >
            <Info size={25} />
          </button>
        </div>
      </div>

      {/* MODALS */}
      {openModal && (
        <Modal onClose={handleClose}>
          {openModal === "info" && <InfoModal book={book} />}
          {openModal === "edit" && (
            <EditModal
              book={book}
              onClose={handleClose}
              onUpdated={handleUpdated}
            />
          )}
          {openModal === "delete" && (
            <DeleteModal
              book={book}
              onClose={handleClose}
              onDeleted={handleDeleted}
            />
          )}
        </Modal>
      )}
    </>
  );
}

function LibraryBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLibraryBooks = async () => {
    try {
      setLoading(true);
      const ownedBooks = await getOwnedBooks();

      // Map backend data to frontend format
      const formattedBooks = ownedBooks.map(book => ({
        id: book.id,
        title: book.title,
        author: book.author_name,
        cover: book.cover_path,
        rating: book.rating,
        status: book.status,
        pages: book.pages,
        currentPage: book.current_page,
        review: book.review,
        genre: book.genre,
        started_date: book.started_date,
        finished_date: book.finished_date,
      }));

      setBooks(formattedBooks);
      setError(null);
    } catch (err) {
      console.error('Error fetching library books:', err);
      setError('Failed to load library books. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLibraryBooks();
  }, []);

  const handleRefresh = () => {
    fetchLibraryBooks();
  };

  if (loading) {
    return (
      <section className="ml-60 mt-10 p-8">
        <div className="flex items-center justify-center mt-20">
          <div className="text-2xl font-bold">Loading your library...</div>
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
        <h1 className="text-6xl font-bold">My Library</h1>
        <div className="text-xl font-semibold">
          {books.length} {books.length === 1 ? 'book' : 'books'}
        </div>
      </div>

      {books.length === 0 ? (
        <div className="text-center mt-10 p-8 border-2 border-black bg-amber-100">
          <p className="text-xl font-semibold">Your library is empty!</p>
          <p className="mt-2">Search for books and add them to your library.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {books.map((b) => (
            <div key={b.id}>
              <BookCard book={b} onRefresh={handleRefresh} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default LibraryBooks;
