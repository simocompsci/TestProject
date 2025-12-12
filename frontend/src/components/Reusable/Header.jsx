import { useState } from "react";
import { Search } from "lucide-react";

export default function Header() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // Dummy search function
  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Example: filter some dummy books (replace with API call)
    const dummyBooks = [
      "Berserk",
      "Naruto",
      "One Piece",
      "Attack on Titan",
      "Fullmetal Alchemist",
    ];
    setResults(
      value
        ? dummyBooks.filter((book) =>
            book.toLowerCase().includes(value.toLowerCase())
          )
        : []
    );
  };

  return (
    <header className="h-30 bg-amber-200 border-b-2 border-black flex items-center fixed w-full">
      <div className="flex-1 flex justify-center">
        {/* Search bar */}
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

          {/* Search results dropdown */}
          {results.length > 0 && (
            <ul className="absolute top-full mt-1 w-full bg-white border-2 border-black shadow-lg max-h-70 overflow-y-auto z-50">
              {results.map((book, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    setQuery(book);
                    setResults([]);
                  }}
                >
                  {book}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}
