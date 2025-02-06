import { useEffect, useState } from "react";
import BookCard from "./books/BookCard";
import { Book } from "../../types/book";

const categories = ["All Categories", "Business", "Fiction", "Horror", "Adventure"];

const TopSellers: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  useEffect(() => {
    fetch("books.json")
      .then(res => res.json())
      .then((data: Book[]) => setBooks(data));
  }, []);

  const filteredBooks =
    selectedCategory === "All Categories"
      ? books
      : books.filter(book => book.category === selectedCategory.toLowerCase());

  if (!books) return <p>Loading...</p>;

  return (
    <div className="py-10">
      <h2 className="mb-6 text-3xl font-semibold">Top Sellers</h2>
      <div className="mb-8 flex items-center">
        <select
          name="category"
          id="category"
          onChange={e => setSelectedCategory(e.target.value)}
          className="rounded-md border border-gray-300 bg-[#EAEAEA] px-4 py-2 focus:outline-none"
        >
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      {filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredBooks.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
      ) : (
        <p>No books found in this category.</p>
      )}
    </div>
  );
};

export default TopSellers;
