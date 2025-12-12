import { Star, Bookmark } from "lucide-react";

const popularBooks = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    cover: "https://picsum.photos/seed/gatsby/200/280",
    rating: 5,
  },
  {
    id: 2,
    title: "One Hundred Years...",
    author: "Gabriel G. Márquez",
    cover: "https://picsum.photos/seed/one/200/280",
    rating: 5,
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    cover: "https://picsum.photos/seed/mockingbird/200/280",
    rating: 5,
  },
  {
    id: 4,
    title: "Of Human Bondage",
    author: "W. Somerset Maugham",
    cover: "https://picsum.photos/seed/human/200/280",
    rating: 4,
  },
  {
    id: 5,
    title: "Breaking Dawn",
    author: "Stephenie Meyer",
    cover: "https://picsum.photos/seed/dawn/200/280",
    rating: 4,
  },
];

const recommended = [
  {
    id: 6,
    title: "My Year Abroad",
    author: "Chang-Rae Lee",
    cover: "https://picsum.photos/seed/abroad/200/200",
    rating: 4,
  },
  {
    id: 7,
    title: "Quidditch Through the Ages",
    author: "J.K. Rowling",
    cover: "https://picsum.photos/seed/quid/200/200",
    rating: 5,
  },
  {
    id: 8,
    title: "The Great Gatsby (alt)",
    author: "F. Scott Fitzgerald",
    cover: "https://picsum.photos/seed/gatsby2/200/200",
    rating: 5,
  },
  {
    id: 9,
    title: "Harry Potter",
    author: "J.K. Rowling",
    cover: "https://picsum.photos/seed/harry/200/200",
    rating: 5,
  },
  {
    id: 10,
    title: "Quidditch Through the Ages",
    author: "J.K. Rowling",
    cover: "https://picsum.photos/seed/quid/200/200",
    rating: 5,
  },
  {
    id: 11,
    title: "The Great Gatsby (alt)",
    author: "F. Scott Fitzgerald",
    cover: "https://picsum.photos/seed/gatsby2/200/200",
    rating: 5,
  },
  {
    id: 12,
    title: "Harry Potter",
    author: "J.K. Rowling",
    cover: "https://picsum.photos/seed/harry/200/200",
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
    <div className="flex flex-col">
      {/* framed cover */}
      <div className="border-2 border-black p-2 bg-amber-50">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-full object-cover block"
        />
      </div>

      {/* title / author */}
      <div className="mt-3">
        <div
          className="text-sm font-semibold leading-tight line-clamp-2"
          title={book.title}
        >
          {book.title}
        </div>
        <div className="text-xs text-gray-600 mt-1">{book.author}</div>
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
              <div key={b.id} className="w-75 h-85">
                {" "}
                <BookCard book={b} />
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Audiobook */}
        <section>
          <div className="flex items-center justify-between mb-4 mt-60">
            <h2 className="text-6xl font-bold">Recommended Audiobook</h2>
            <a className="text-2xl text-gray-600 hover:underline" href="#">
              more
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {recommended.map((b) => (
              <div key={b.id} className="flex flex-col items-start">
                <div className="border-2 border-black p-2 bg-amber-50 w-50 h-60">
                  <img
                    src={b.cover}
                    alt={b.title}
                    className="w-full h-full object-cover block"
                  />
                </div>
                <div className="mt-3 text-sm font-semibold line-clamp-2">
                  {b.title}
                </div>
                <div className="text-xs text-gray-600">{b.author}</div>
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
