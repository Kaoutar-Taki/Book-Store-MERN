import { HiOutlineUser } from "react-icons/hi";
import { HiMiniBars3CenterLeft, HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import avatarImg from "../assets/avatar.png";
import { useState } from "react";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const currentUser = true;

  return (
    <header className="mx-auto max-w-screen-2xl px-4 py-6">
      <nav className="flex items-center justify-between">
        {/* left side */}
        <div className="flex items-center gap-4 md:gap-16">
          <Link to="/">
            <HiMiniBars3CenterLeft className="size-6" />
          </Link>
          {/* search input */}
          <div className="relative w-40 space-x-2 sm:w-72">
            <IoSearchOutline className="absolute inset-y-2 left-3 inline-block" />
            <input
              type="search"
              placeholder="Search here..."
              className="w-full rounded-md bg-[#eaeaea] px-6 py-1 focus:outline-none md:px-8"
            />
          </div>
        </div>
        {/* right side */}
        <div className="relative flex items-center space-x-2 md:space-x-3">
          <div className="">
            {currentUser ? (
              <>
                <button onClick={toggleDropdown}>
                  <img
                    src={avatarImg}
                    alt=""
                    className={`size-7 rounded-full ${currentUser ? "ring-2 ring-blue-500" : ""}`}
                  />
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 z-40 mt-2 w-48 rounded-md bg-white shadow-lg">
                    <ul className="py-2">
                      {navigation.map(nav => (
                        <li key={nav.name} onClick={() => setIsDropdownOpen(false)}>
                          <Link to={nav.href} className="block px-4 py-2 text-sm hover:bg-gray-100">
                            {nav.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <HiOutlineUser className="size-6" />
              </Link>
            )}
          </div>

          <button className="hidden sm:block">
            <HiOutlineHeart className="size-6" />
          </button>
          <Link to="/cart" className="bg-primary flex items-center rounded-sm p-1 px-2 sm:px-6">
            <HiOutlineShoppingCart className="" />
            <span className="text-sm font-semibold sm:ml-1">0</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
