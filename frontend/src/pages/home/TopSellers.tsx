import { useEffect, useState } from "react";
import BookCard from "./books/BookCard";
import { Book } from "../../types/book";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredBooks.map((book, index) => (
              <SwiperSlide key={index}>
                <BookCard book={book} />
              </SwiperSlide>
            ))}
          </div>
        ) : (
          <p>No books found in this category.</p>
        )}
      </Swiper>
    </div>
  );
};

export default TopSellers;
