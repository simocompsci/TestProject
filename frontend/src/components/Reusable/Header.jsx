import { useState } from "react";
import { Search } from "lucide-react";
import BookModal from "./Modals/BookModal";
import { searchBooksByTitle } from "../../APIs/GoogleBooksAPI";

export default function Header() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (!value.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    const books = await searchBooksByTitle(value);
    setResults(books);
    setLoading(false);
  };

  return (
    <>
      <header className="h-30 bg-amber-200 border-b-2 border-black flex items-center fixed w-full">
        <div className="flex-1 flex justify-start ml-70">
          <div className="relative w-full max-w-3xl">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              size={25}
            />

            <input
              type="text"
              placeholder="Search For Your Desired Books..."
              value={query}
              onChange={handleSearch}
              className="w-full text-2xl border-2 h-15 border-black bg-gray-100 pl-10 pr-4 py-2 focus:outline-none"
            />

            {/* Search results */}
            {results.length > 0 && (
              <ul className="absolute top-full mt-1 w-full bg-white border-2 border-black shadow-lg max-h-70 overflow-y-auto z-50">
                {results.map((book) => (
                  <li
                    key={book.id}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      setSelectedBook(book);
                      setQuery(book.title);
                      setResults([]);
                    }}
                  >
                    <div className="font-semibold">{book.title}</div>
                    <div className="text-sm text-gray-600">
                      {book.author}
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {loading && (
              <div className="absolute top-full mt-1 bg-white border px-4 py-2">
                Searching…
              </div>
            )}
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex items-center gap-3 mr-15">
          <div className="text-right">
            <p className="font-semibold text-xl">John Doe</p>
            <p className="text-xl text-gray-600">Book Lover</p>
          </div>
          <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center font-bold text-2xl cursor-pointer hover:scale-105 transition">
            JD
          </div>
        </div>
      </header>

      {/* Book Modal */}
      {selectedBook && (
        <BookModal
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
        />
      )}
    </>
  );
}
