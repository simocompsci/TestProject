function InfoModal({ book }) {
  const formatDate = (date) => {
    if (!date) return 'N/A';
    return new Date(date).toLocaleDateString();
  };

  const getStatusBadge = (status) => {
    const colors = {
      unread: 'bg-gray-200',
      reading: 'bg-blue-200',
      read: 'bg-green-200',
      abandoned: 'bg-red-200',
    };
    return colors[status] || 'bg-gray-200';
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold border-b-2 border-black pb-1">
        Book Information
      </h2>

      <div className="flex gap-4">
        {/* Book Cover */}
        <div className="border-2 border-black p-2 bg-amber-50 w-32 h-48 shrink-0">
          <img
            src={book.cover || "/placeholder.png"}
            alt={book.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Book Details */}
        <div className="flex-1 space-y-2">
          <div>
            <h3 className="text-xl font-bold">{book.title}</h3>
            <p className="text-sm text-gray-600">by {book.author}</p>
          </div>

          <div className="flex gap-2 items-center">
            <span className={`px-2 py-1 border border-black text-xs font-semibold ${getStatusBadge(book.status)}`}>
              {book.status?.toUpperCase()}
            </span>
            {book.rating && (
              <span className="text-sm">⭐ {book.rating}/5</span>
            )}
          </div>
        </div>
      </div>

      {/* Detailed Information */}
      <div className="border-2 border-black p-4 bg-white space-y-2">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <span className="font-semibold">Total Pages:</span>
            <span className="ml-2">{book.pages || 'N/A'}</span>
          </div>

          <div>
            <span className="font-semibold">Current Page:</span>
            <span className="ml-2">{book.currentPage || 0}</span>
          </div>

          {book.pages && book.currentPage && (
            <div className="col-span-2">
              <span className="font-semibold">Progress:</span>
              <div className="mt-1 w-full bg-gray-200 border border-black h-4">
                <div
                  className="bg-amber-400 h-full border-r border-black"
                  style={{ width: `${Math.min((book.currentPage / book.pages) * 100, 100)}%` }}
                />
              </div>
              <span className="text-xs text-gray-600">
                {Math.round((book.currentPage / book.pages) * 100)}% complete
              </span>
            </div>
          )}

          <div>
            <span className="font-semibold">Genre:</span>
            <span className="ml-2">{book.genre || 'N/A'}</span>
          </div>

          <div>
            <span className="font-semibold">Rating:</span>
            <span className="ml-2">{book.rating ? `${book.rating}/5` : 'Not rated'}</span>
          </div>

          <div>
            <span className="font-semibold">Started:</span>
            <span className="ml-2">{formatDate(book.started_date)}</span>
          </div>

          <div>
            <span className="font-semibold">Finished:</span>
            <span className="ml-2">{formatDate(book.finished_date)}</span>
          </div>
        </div>

        {/* Review Section */}
        {book.review && (
          <div className="pt-3 border-t-2 border-black mt-3">
            <p className="font-semibold mb-2">My Review:</p>
            <p className="text-sm text-gray-700 whitespace-pre-wrap">
              {book.review}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default InfoModal;