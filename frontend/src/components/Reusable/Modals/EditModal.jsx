function EditModal({ book }) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold border-b-2 border-black pb-1">
        Edit Book
      </h2>

      <input
        defaultValue={book.title}
        className="w-full border-2 border-black p-2 bg-white"
        placeholder="Title"
      />

      <input
        defaultValue={book.author}
        className="w-full border-2 border-black p-2 bg-white"
        placeholder="Author"
      />

      <button className="w-full border-2 border-black bg-amber-200 py-2 font-semibold hover:bg-amber-300 transition">
        Save Changes
      </button>
    </div>
  );
}
export default EditModal