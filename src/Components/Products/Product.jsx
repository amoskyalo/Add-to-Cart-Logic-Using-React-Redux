import React from "react";
import { data } from "./Data";
import { AiOutlineStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addCart, increaseData } from "../Cart/CartSlice";
import { useNavigate } from "react-router-dom";

const Product = () => {

  //function to navigate to single product
  const navigate = useNavigate()
  const toSingleProduct = (item) =>{
    navigate(`/products/${item.id}`)
  }


  //function to add item to cart
  const dispatch = useDispatch();
  const addToCart = (item) => {
    dispatch(addCart(item));
    dispatch(increaseData(item.id));
  };

  //function to prevent product from navigating to single product when we click add to cart button
  const handleAddCart = (event) =>{
    event.stopPropagation()
  }

 
  return data.map((product, i) => (
    <div onClick={() => toSingleProduct(product)}
      className="bg-white flex flex-col items-center border rounded-lg py-2"
      key={i}
    >
      <div className="h-28">
        <img
          src={product.img}
          alt="product"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="flex flex-col items-center mt-3">
        <h2 className="text-xl font-semibold">{product.title}</h2>
        <div className="flex flex-row items-center space-x-2">
          <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar />
          <AiOutlineStar /> <AiOutlineStar /> (2)
        </div>
        <p>Kshs.{product.price}</p>
        <div className="flex border mt-7 w-full mx-auto">
          <button
            className="bg-navColor text-white w-full py-1 rounded"
            onClick={(event) => {addToCart(product); handleAddCart(event)}}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ));
};

export default Product;
