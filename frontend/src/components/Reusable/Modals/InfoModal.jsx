function InfoModal({ book }) {
  return (
    <div className="space-y-2">
      <h2 className="text-lg font-bold border-b-2 border-black pb-1">
        Book Info
      </h2>

      <p><span className="font-semibold">Title:</span> {book.title}</p>
      <p><span className="font-semibold">Author:</span> {book.author}</p>
      <p><span className="font-semibold">Year:</span> {book.year}</p>
    </div>
  );
}
export default InfoModal