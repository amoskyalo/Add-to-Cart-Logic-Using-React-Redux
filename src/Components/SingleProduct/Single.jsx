import React from "react";
import { useParams } from "react-router";
import { data } from "../Products/Data";
import { AiOutlineStar, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addCart, increaseData } from "../Cart/CartSlice";

const Single = () => {
  const { id } = useParams();

  // eslint-disable-next-line
  const products = data.filter((product) => product.id == id);

  //function to add item to cart
  const dispatch = useDispatch();
  const addToCart = (item) => {
    dispatch(addCart(item));
    dispatch(increaseData(item.id));
  };

  return (
    <div className="bg-white mx-auto p-5 md:p-24 max-w-4xl md:mt-10 xl:max-w-5xl">
      {products.map((singleProduct, i) => (
        <div
          className="flex flex-col space-y-20 md:flex-row md:space-x-10 md:space-y-0"
          key={i}
        >
          <div className="h-48 border-b flex flex-col md:w-1/3 md:border-b-0">
            <img
              src={singleProduct.img}
              alt="product"
              className="w-full h-full object-contain"
            />
            <div className="flex flex-col space-y-2">
              <h2 className="text-lg">SHARE THIS PRODUCT</h2>
              <div className="flex flex-row items-center space-x-2 text-3xl text-navColor">
                <AiFillTwitterCircle />
                <BsFacebook className="text-2xl" />
              </div>
            </div>
          </div>
          <div className="h-max flex flex-col space-y-1 md:space-y-2 md:w-3/4">
            <p className="text-xl font-semibold">{singleProduct.title}</p>
            <div className="flex flex-row items-center space-x-2">
              <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar />
              <AiOutlineStar /> <AiOutlineStar /> (12 verified ratings)
            </div>
            <p className="text-2xl font-bold border-b pb-2">
              KSh. {singleProduct.price}
            </p>
            <p>In stock</p>
            <p>
              + delivery from KSh 92 (free delivery if order above KSh 1,999) to
              CBD - UON/Globe/Koja/River Road
            </p>
            <button
              onClick={() => addToCart(singleProduct)}
              className="bg-navColor text-white w-full py-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Single;
