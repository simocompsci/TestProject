import BookCard from './BookCard';

const BookSection = ({ title, books, onBookClick }) => {
    return (
        <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
                <h2 className="font-mono text-sm font-bold">{title}</h2>
                <a href="#" className="font-mono text-xs underline hover:text-[#FF6B3D]">
                    more
                </a>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2">
                {books.map((book) => (
                    <BookCard key={book.id} book={book} onClick={() => onBookClick(book)} />
                ))}
            </div>
        </div>
    );
};

export default BookSection;
