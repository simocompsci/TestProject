const BookCard = ({ book, onClick }) => {
    const renderStars = (rating) => {
        return '★'.repeat(5);
    };

    return (
        <div
            className="flex flex-col cursor-pointer group transition-transform hover:scale-105"
            onClick={onClick}
        >
            <div className="relative mb-2">
                <img
                    src={book.cover}
                    alt={book.title}
                    className="w-[90px] h-[140px] object-cover border-2 border-black shadow-md"
                />
            </div>
            <h3 className="font-mono text-[10px] font-bold mb-0.5 leading-tight max-w-[90px]">
                {book.title}
            </h3>
            <p className="font-mono text-[9px] text-gray-700 mb-1 max-w-[90px]">
                {book.author}
            </p>
            <div className="flex items-center justify-between max-w-[90px]">
                <div className="text-[10px]">{renderStars(book.rating)}</div>
                <button className="text-lg hover:scale-110 transition-transform">
                    {book.bookmarked ? '🔖' : '🏷️'}
                </button>
            </div>
        </div>
    );
};

export default BookCard;
