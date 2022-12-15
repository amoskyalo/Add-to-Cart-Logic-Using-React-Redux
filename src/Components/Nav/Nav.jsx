import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { cartData } from "../Cart/CartSlice";
import { useState } from "react";

const Nav = () => {
  const cart = useSelector(cartData);
  const [sticky, setSticky] = useState("#");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 80) {
      return setSticky("sticky");
    }
    return setSticky("#");
  });

  return (
    <nav
      className={`bg-navColor px-5 py-3 w-full ${
        sticky === "sticky" ? `sticky top-0` : ""
      }`}
    >
      <div className="flex flex-row justify-between items-center max-w-screen-lg mx-auto">
        <Link to="/" className="flex">
          <h2 className="text-white text-2xl font-black">Logo</h2>
        </Link>
        <div className="hidden flex-row space-x-5 md:flex">
          <Link to="/" className="text-white font-semibold text-lg">
            Home
          </Link>
          <Link to="/" className="text-white font-semibold text-lg">
            About
          </Link>
          <Link to="/" className="text-white font-semibold text-lg">
            Shop
          </Link>
          <Link to="/" className="text-white font-semibold text-lg">
            Contact Us
          </Link>
        </div>
        <Link to="/cart" className="flex flex-row space-x-3">
          <div to="/cart" className="relative">
            <AiOutlineShoppingCart className="text-white text-2xl" />
            <p className="flex justify-center items-center bg-cartColor text-sm text-white absolute -right-3 -top-2 h-4 w-4 rounded-full">
              {cart?.length}
            </p>
          </div>
          <p className="text-white text-xl font-semibold">Cart</p>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
