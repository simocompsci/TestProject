import { useState } from 'react';
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import BookSection from './components/BookSection';
import UserProfile from './components/UserProfile';
import BookDetails from './components/BookDetails';
import { popularBooks, recommendedAudiobooks, featuredBook, user } from './data/books';

function App() {
  const [selectedBook, setSelectedBook] = useState(featuredBook);
  const [showRightPanel, setShowRightPanel] = useState(false);

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setShowRightPanel(true);
  };

  return (
    <div className="flex min-h-screen bg-[#D9CFC1]">
      {/* Left Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className={`flex-1 border-r-2 border-black p-4 md:p-6 overflow-y-auto ${showRightPanel ? 'hidden xl:block' : 'block'}`}>
        <div className="mb-6">
          <SearchBar />
        </div>

        <CategoryFilter />

        <BookSection
          title="Popular Books"
          books={popularBooks}
          onBookClick={handleBookClick}
        />

        <BookSection
          title="Recommended Audiobook"
          books={recommendedAudiobooks}
          onBookClick={handleBookClick}
        />
      </div>

      {/* Right Panel */}
      <div className={`w-full xl:w-[320px] bg-[#E8DFD3] ${showRightPanel ? 'block' : 'hidden xl:block'}`}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setShowRightPanel(false)}
              className="xl:hidden text-2xl hover:text-[#FF6B3D]"
            >
              ←
            </button>
            <UserProfile user={user} />
          </div>
        </div>
        <BookDetails book={selectedBook} />
      </div>
    </div>
  );
}

export default App;
