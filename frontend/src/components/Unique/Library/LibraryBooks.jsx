import { Pencil, Trash2, Info, X } from "lucide-react";
import Modal from "../../Reusable/Modals/Modal";
import DeleteModal from "../../Reusable/Modals/DeleteModal";
import EditModal from "../../Reusable/Modals/EditModal";
import InfoModal from "../../Reusable/Modals/InfoModal";
import { useState } from "react";

const MyBooks = [
  {
    id: 1,
    title: "Blood Meridian",
    author: "Cormac McCarthy",
    cover:
      "https://i.pinimg.com/736x/6c/f7/46/6cf74663b7dc8f86262887a49167b513.jpg",
    rating: 5,
  },
  {
    id: 2,
    title: "Red Rising",
    author: "Pierce Brown",
    cover:
      "https://i.pinimg.com/736x/bc/d8/56/bcd8563e25b0d2098e619411086d9d71.jpg",
    rating: 5,
  },
  {
    id: 3,
    title: "Demons",
    author: "Fyodor Dostoevsky",
    cover:
      "https://i.pinimg.com/736x/80/9f/15/809f15749decba843faa3ed9de488100.jpg",
    rating: 5,
  },
  {
    id: 4,
    title: "Les Misérables",
    author: "Victor Hugo",
    cover:
      "https://i.pinimg.com/736x/45/76/5b/45765b91a909c38e2ab840e30a04e651.jpg",
    rating: 4,
  },
  {
    id: 5,
    title: "Berserk",
    author: "Kentaro Miura.",
    cover:
      "https://i.pinimg.com/1200x/e4/bc/d2/e4bcd250b293f2c9af355130f7fd144d.jpg",
    rating: 4,
  },
  {
    id: 6,
    title: "My Year Abroad",
    author: "Chang-Rae Lee",
    cover:
      "https://i.pinimg.com/1200x/0f/ad/54/0fad546889806d682a93e89dc09f028d.jpg",
    rating: 4,
  },
  {
    id: 7,
    title: "Quidditch Through the Ages",
    author: "J.K. Rowling",
    cover:
      "https://i.pinimg.com/736x/65/8a/3a/658a3aa2772aaa7a42a970fbc317a62c.jpg",
    rating: 5,
  },
  {
    id: 8,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    cover:
      "https://i.pinimg.com/736x/06/74/19/067419c66052c8c21f988efc88a63dc8.jpg",
    rating: 5,
  },
  {
    id: 9,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    cover:
      "https://i.pinimg.com/736x/36/90/ee/3690eea4c1aa0ae57265f07285eb92c3.jpg",
    rating: 5,
  },
  {
    id: 10,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    cover:
      "https://i.pinimg.com/736x/25/b1/1c/25b11c390395cd52dc0a65e19a42fe75.jpg",
    rating: 5,
  },
];

function BookCard({ book, onEdit, onDelete, onInfo }) {
  const [openModal, setOpenModal] = useState(null);

  return (
    <>
      <div className="flex flex-col items-center">
        {/* framed cover */}
        <div className="border-2 border-black p-2 bg-amber-50 w-75 h-110">
          <img
            src={book.cover}
            alt={book.title}
            className="w-full h-full object-cover block"
          />
        </div>

        {/* actions */}
        <div className="mt-2 flex justify-center gap-6 border-2 border-black bg-amber-300 w-75 px-6 py-2">
          <button
            onClick={() => setOpenModal("edit")}
            className="hover:scale-110 transition"
            title="Update book"
          >
            <Pencil size={25} />
          </button>

          <button
            onClick={() => setOpenModal("delete")}
            className="hover:scale-110 transition"
            title="Delete book"
          >
            <Trash2 size={25} />
          </button>

          <button
            onClick={() => setOpenModal("info")}
            className="hover:scale-110 transition"
            title="Book info"
          >
            <Info size={25} />
          </button>
        </div>
      </div>

      {/* MODALS */}
      {openModal && (
        <Modal onClose={() => setOpenModal(null)}>
          {openModal === "info" && <InfoModal book={book} />}
          {openModal === "edit" && <EditModal book={book} />}
          {openModal === "delete" && <DeleteModal book={book} />}
        </Modal>
      )}
    </>
  );
}

function LibraryBooks() {
  return (
    <section className="ml-60 mt-10 p-8">
      <div className="flex items-center justify-between mb-4 mt-20">
        <h1 className="text-6xl font-bold">My Library</h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 ">
        {MyBooks.map((b) => (
          <div key={b.id}>
            {" "}
            <BookCard book={b} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default LibraryBooks;
