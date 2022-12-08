import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartData, removeCart, increaseData, decreaseData } from "./CartSlice";
import { GrFormAdd } from "react-icons/gr";
import { AiOutlineMinus, AiFillDelete } from "react-icons/ai";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const data = useSelector(cartData);
  const dispatch = useDispatch();
  const removeCartFunc = (id) => {
    dispatch(removeCart({ id }));
  };
  const increase = (item) => {
    dispatch(increaseData(item));
  };
  const decrease = (item) => {
    dispatch(decreaseData(item));
  };

  return (
    <section className="max-w-screen-lg mx-auto mt-10">
      <div className="flex flex-row space-x-1">
        <div className="flex flex-col space-y-4 w-3/4 bg-white p-4 rounded">
          <div className="flex flex-row justify-between border-b">
            <h2 className="text-xl font-bold">Cart</h2>
            <h2 className="text-xl font-bold">
              {data.length} {data.length <= 1 ? "Item" : "Itmes"}
            </h2>
          </div>
          {!data.length ? (
            <EmptyCart />
          ) : (
            data.map((cartItem, i) => (
              <div
                className="flex flex-row justify-between items-center w-full"
                key={i}
              >
                <div className="flex bg-greyColor rounded-full p-1">
                  <img
                    src={cartItem.img}
                    alt=""
                    className="h-24 w-24 object-contain rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-xl font-semibold">{cartItem.title}</h2>
                  <p className="text-sm">Kshs.{cartItem.price}</p>
                </div>
                <div className="flex flex-row space-x-2 items-center">
                  <AiOutlineMinus
                    className="border text-2xl cursor-pointer"
                    onClick={() => decrease(cartItem.id)}
                  />
                  <p className="text-base">{cartItem.quantity}</p>
                  <GrFormAdd
                    className="border text-2xl cursor-pointer"
                    onClick={() => increase(cartItem.id)}
                  />
                </div>
                <div
                  className="flex"
                  onClick={() => removeCartFunc(cartItem.id)}
                >
                  <AiFillDelete className="text-2xl text-cartColor cursor-pointer" />
                </div>
              </div>
            ))
          )}
        </div>
        <div className="flex flex-col bg-white p-4 h-max w-1/4 rounded">
          <p className="text-xl font-semibold block border-b">Cart Summary</p>
        </div>
      </div>
    </section>
  );
};

export default Cart;
