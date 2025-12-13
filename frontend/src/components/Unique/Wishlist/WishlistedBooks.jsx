import React from "react";

const WislistedBooks = [
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
];

function BookCard({ book }) {
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
        <div className="mt-2 flex flex-col gap-2 border-2 border-black bg-amber-300 w-75 px-4 py-3">
          <button className="border-2 border-black bg-amber-100 py-2 font-semibold hover:bg-amber-200 transition">
            Remove from Wishlist
          </button>

          <button className="border-2 border-black bg-amber-200 py-2 font-semibold hover:bg-amber-300 transition">
            Add to Library
          </button>
        </div>
      </div>
    </>
  );
}

function WishlistedBooks() {
  return(
    <section className="ml-60 mt-10 p-8">
      <div className="flex items-center justify-between mb-4 mt-20">
        <h1 className="text-6xl font-bold">My Wishlist</h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 ">
        {WislistedBooks.map((b) => (
          <div key={b.id}>
            {" "}
            <BookCard book={b} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default WishlistedBooks;
