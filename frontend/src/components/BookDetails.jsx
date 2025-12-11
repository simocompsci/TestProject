const BookDetails = ({ book }) => {
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        return '★'.repeat(fullStars) + '☆'.repeat(5 - fullStars);
    };

    return (
        <div className="bg-[#E8DFD3] p-4">
            <div className="flex gap-3 mb-4">
                <img
                    src={book.cover}
                    alt={book.title}
                    className="w-[70px] h-[110px] object-cover border-2 border-black shadow-md"
                />
                <div className="flex-1">
                    <h2 className="font-mono text-sm font-bold leading-tight mb-2">
                        {book.title}
                    </h2>
                    <div className="font-mono text-[10px] space-y-0.5">
                        <p>
                            <span className="font-bold">By:</span> {book.author}
                        </p>
                        <p>
                            <span className="font-bold">Narrator:</span>{' '}
                            <a href="#" className="underline">
                                {book.narrator}
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <button className="w-full bg-white border-2 border-black py-2 mb-2 font-mono text-xs font-bold hover:bg-gray-50 transition-colors">
                Read Free For 30 Days
            </button>

            <button className="w-full bg-[#FF6B3D] text-white py-2.5 mb-4 font-mono text-xs font-bold hover:bg-[#FF5A2C] transition-colors flex items-center justify-center gap-2">
                <span>▶</span> Play Sample
            </button>

            <div className="grid grid-cols-3 gap-2 mb-4">
                <button className="flex flex-col items-center gap-1 py-2 hover:bg-[#D9CFC1] rounded transition-colors">
                    <span className="text-lg">⬇️</span>
                    <span className="font-mono text-[9px]">Download</span>
                </button>
                <button className="flex flex-col items-center gap-1 py-2 hover:bg-[#D9CFC1] rounded transition-colors">
                    <span className="text-lg">🔖</span>
                    <span className="font-mono text-[9px]">Save</span>
                </button>
                <button className="flex flex-col items-center gap-1 py-2 hover:bg-[#D9CFC1] rounded transition-colors">
                    <span className="text-lg">📋</span>
                    <span className="font-mono text-[9px]">Add to List</span>
                </button>
            </div>

            <div className="bg-white border border-black p-3 mb-4 font-mono text-[10px]">
                <div className="grid grid-cols-2 gap-y-2">
                    <div>
                        <span className="font-bold">Rating</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="text-[9px]">{renderStars(book.rating)}</span>
                        <span>({book.ratingValue})</span>
                    </div>

                    <div>
                        <span className="font-bold">Length</span>
                    </div>
                    <div>{book.length}</div>

                    <div>
                        <span className="font-bold">Format</span>
                    </div>
                    <div>{book.format}</div>

                    <div>
                        <span className="font-bold">Publisher</span>
                    </div>
                    <div>{book.publisher}</div>

                    <div>
                        <span className="font-bold">Released</span>
                    </div>
                    <div>{book.releaseDate}</div>
                </div>
            </div>

            <div className="font-mono text-[10px] leading-relaxed">
                <p>{book.description}</p>
            </div>
        </div>
    );
};

export default BookDetails;
