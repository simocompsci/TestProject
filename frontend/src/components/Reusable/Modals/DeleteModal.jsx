function DeleteModal({ book }) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold border-b-2 border-black pb-1">
        Delete Book
      </h2>

      <p>
        Are you sure you want to delete{" "}
        <span className="font-semibold">{book.title}</span>?
      </p>

      <div className="flex gap-3">
        <button className="flex-1 border-2 border-black bg-red-200 py-2 font-semibold hover:bg-red-300 transition">
          Delete
        </button>
      </div>
    </div>
  );
}
export  default DeleteModal