import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { getImgUrl } from "../../utils/getImgUrl";
import { Book } from "../../types/book";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product: Book) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="rounded-lg transition-shadow duration-300">
      <div className="flex flex-col gap-4 sm:h-72 sm:flex-row sm:items-center sm:justify-center">
        <div className="rounded-md border sm:h-72 sm:flex-shrink-0">
          <Link to={`/books/${book._id}`}>
            <img
              src={`${getImgUrl(book.coverImage)}`}
              alt=""
              className="w-full cursor-pointer rounded-md bg-cover p-2 transition-all duration-200 hover:scale-105"
            />
          </Link>
        </div>

        <div>
          <Link to={`/books/${book._id}`}>
            <h3 className="mb-3 text-xl font-semibold hover:text-blue-600">{book.title}</h3>
          </Link>
          <p className="mb-5 text-gray-600">
            {book.description.length > 80
              ? `${book.description.slice(0, 80)}...`
              : book.description}
          </p>
          <p className="mb-5 font-medium">
            ${book.newPrice} <span className="ml-2 font-normal line-through">${book.oldPrice}</span>
          </p>
          <button
            onClick={() => handleAddToCart(book)}
            className="btn-primary flex items-center gap-1 space-x-1 px-6"
          >
            <FiShoppingCart className="" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
