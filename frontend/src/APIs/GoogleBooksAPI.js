
const BASE_URL = "https://www.googleapis.com/books/v1/volumes";
const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_KEY; 

export async function searchBooksByTitle(title) {
  if (!title) return [];

  const params = new URLSearchParams({
    q: `intitle:${title}`,
    langRestrict: "en",
    maxResults: "5",
    fields:
      "items(id,volumeInfo/title,volumeInfo/authors,volumeInfo/averageRating,volumeInfo/pageCount,volumeInfo/publishedDate,volumeInfo/description,volumeInfo/imageLinks,volumeInfo/language)",
    key: API_KEY,
  });

  const res = await fetch(`${BASE_URL}?${params.toString()}`);

  if (!res.ok) {
    console.error("Google Books API error");
    return [];
  }

  const data = await res.json();
  if (!data.items) return [];

  return data.items.map((item) => {
    const info = item.volumeInfo;

    return {
      id: item.id,
      title: info.title ?? "Unknown title",
      author: info.authors?.join(", ") ?? "Unknown author",
      rating: info.averageRating ?? null,
      pages: info.pageCount ?? null,
      year: info.publishedDate ?? null,
      description: info.description ?? "No description available.",
      cover: info.imageLinks?.thumbnail ?? null, // <-- cover added
      language: info.language,
    };
  });
}
