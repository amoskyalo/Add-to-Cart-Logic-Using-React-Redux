import React from "react";
import emoji from "../../Assets/emoji.png";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center">
      <img src={emoji} alt="cart-emoji" className="h-24 w-24" />
      <h2 className="my-1">Ooops! You cart is empty</h2>
      <Link to="/" className="bg-navColor text-white px-5 py-1.5 rounded-lg">
        Start Shopping
      </Link>
    </div>
  );
};

export default EmptyCart;
