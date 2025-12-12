import { Star, Bookmark } from "lucide-react";

const popularBooks = [
  {
    id: 1,
    title: "Blood Meridian",
    author: "Cormac McCarthy",
    cover: "https://i.pinimg.com/736x/82/25/f9/8225f96c931fbddb88b7e91b1bb605a6.jpg",
    rating: 5,
  },
  {
    id: 2,
    title: "Red Rising",
    author: "Pierce Brown",
    cover: "https://i.pinimg.com/736x/bc/d8/56/bcd8563e25b0d2098e619411086d9d71.jpg",
    rating: 5,
  },
  {
    id: 3,
    title: "Demons",
    author: "Fyodor Dostoevsky",
    cover: "https://i.pinimg.com/736x/80/9f/15/809f15749decba843faa3ed9de488100.jpg",
    rating: 5,
  },
  {
    id: 4,
    title: "Les Misérables",
    author: "Victor Hugo",
    cover: "https://i.pinimg.com/736x/45/76/5b/45765b91a909c38e2ab840e30a04e651.jpg",
    rating: 4,
  },
  {
    id: 5,
    title: "Berserk",
    author: "Kentaro Miura.",
    cover: "https://i.pinimg.com/1200x/e4/bc/d2/e4bcd250b293f2c9af355130f7fd144d.jpg",
    rating: 4,
  },
];

const recommended = [
  {
    id: 6,
    title: "My Year Abroad",
    author: "Chang-Rae Lee",
    cover: "https://i.pinimg.com/1200x/0f/ad/54/0fad546889806d682a93e89dc09f028d.jpg",
    rating: 4,
  },
  {
    id: 7,
    title: "Quidditch Through the Ages",
    author: "J.K. Rowling",
    cover: "https://i.pinimg.com/736x/65/8a/3a/658a3aa2772aaa7a42a970fbc317a62c.jpg",
    rating: 5,
  },
  {
    id: 8,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    cover: "https://i.pinimg.com/736x/06/74/19/067419c66052c8c21f988efc88a63dc8.jpg",
    rating: 5,
  },
  {
    id: 9,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    cover: "https://i.pinimg.com/736x/36/90/ee/3690eea4c1aa0ae57265f07285eb92c3.jpg",
    rating: 5,
  },
  {
    id: 10,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    cover: "https://i.pinimg.com/736x/25/b1/1c/25b11c390395cd52dc0a65e19a42fe75.jpg",
    rating: 5,
  },
  {
    id: 11,
    title: "1984",
    author: "George Orwell",
    cover: "https://i.pinimg.com/736x/6c/40/34/6c40342311d68d51dfcb0682910b6106.jpg",
    rating: 5,
  },
  {
    id: 12,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    cover: "https://i.pinimg.com/1200x/c2/f7/c6/c2f7c6fdddf01fc7a393f06eeeecbda0.jpg",
    rating: 5,
  },
];


/* Small component to render stars */
function Stars({ value = 0, max = 5 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          size={12}
          className={i < value ? "text-yellow-500" : "text-gray-300"}
        />
      ))}
    </div>
  );
}

function BookCard({ book }) {
  return (
    <div className="flex flex-col ">
      {/* framed cover */}
      <div className="border-2 border-black p-2 bg-amber-50 w-75 h-110">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-full object-cover block"
        />
      </div>

      {/* title / author */}
      <div className="mt-3">
        <div
          className="text-xl font-semibold leading-tight line-clamp-2"
          title={book.title}
        >
          {book.title}
        </div>
        <div className="text-lg text-gray-600 mt-1">{book.author}</div>
      </div>

      {/* rating + bookmark */}
      <div className="mt-3 flex items-center justify-between">
        <Stars value={book.rating} />
        <button aria-label="save" className="p-1">
          <Bookmark size={16} />
        </button>
      </div>
    </div>
  );
}

function MainBooks() {
  return (
    <main className="ml-60 mt-30 p-8">
      {/* make THIS area scrollable */}
      <div className="h-full overflow-auto pr-4">
        {/* Categories row (small chips like screenshot) */}
        <section className="mb-6">
          <h3 className="text-6xl font-semibold mb-3">Categories</h3>
          <div className="flex mt-8 gap-3 flex-wrap">
            {[
              "Everything",
              "Manga",
              "Novels",
              "Magazines",
              "E-Books",
              "Biographies",
              "Comics",
            ].map((c) => (
              <button
                key={c}
                className="px-6 py-2 border-2 text-2xl bg-amber-300"
              >
                {c}
              </button>
            ))}
          </div>
        </section>

        {/* Popular Books */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-4 mt-20">
            <h2 className="text-6xl font-bold">Popular Books</h2>
            <a className="text-2xl text-gray-600 hover:underline" href="#">
              more
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 ">
            {popularBooks.map((b) => (
              <div key={b.id}>
                {" "}
                <BookCard book={b} />
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Audiobook */}
        <section>
          <div className="flex items-center justify-between mb-4 mt-20">
            <h2 className="text-6xl font-bold">Recommended Books</h2>
            <a className="text-2xl text-gray-600 hover:underline" href="#">
              more
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {recommended.map((b) => (
              <div key={b.id} className="flex flex-col items-start">
                <div className="border-2 border-black p-2 bg-amber-50 w-50 h-80">
                  <img
                    src={b.cover}
                    alt={b.title}
                    className="w-full h-full object-cover block"
                  />
                </div>
                <div className="mt-3 text-xl font-semibold line-clamp-1">
                  {b.title}
                </div>
                <div className="text-lg text-gray-600">{b.author}</div>
              </div>
            ))}
          </div>
        </section>

        {/* bottom spacing so last item isn't flush to the bottom */}
        <div className="h-16" />
      </div>
    </main>
  );
}

export default MainBooks;
