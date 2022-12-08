import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartData, removeCart, increaseData, decreaseData } from "./CartSlice";
import { GrFormAdd } from "react-icons/gr";
import { AiOutlineMinus, AiFillDelete } from "react-icons/ai";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const data = useSelector(cartData);
  const dispatch = useDispatch();

  //accumulate prices
  const prices = data.map((datas) => datas.price * datas.quantity);
  const cartPrice = prices.reduce((acc, curr) => acc + curr, 0);

  //delete item from cart
  const removeCartFunc = (id) => {
    dispatch(removeCart(id));
  };

  //increase item qauntity
  const increase = (item) => {
    dispatch(increaseData(item));
  };

  //decrease item quantity
  const decrease = (item) => {
    const id = item.id;
    if (item.quantity <= 1) {
      dispatch(removeCart(id));
    } else {
      dispatch(decreaseData(item));
    }
  };

  return (
    <section className="max-w-screen-lg mx-auto mt-10">
      <div className="flex flex-row space-x-1">
        <div className="flex flex-col space-y-4 w-3/4 bg-white p-4 rounded h-max">
          <div className="flex flex-row justify-between border-b">
            <h2 className="text-xl font-bold">Cart</h2>
            <h2 className="text-xl font-bold">
              {data?.length} {data?.length <= 1 ? "Item" : "Items"}
            </h2>
          </div>
          {!data?.length ? (
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
                    onClick={() => decrease(cartItem)}
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
          <p className="text-xl font-semibold block border-b pb-1">
            Cart Summary
          </p>
          <div className="flex justify-between items-center border-b py-2">
            <p className="text-lg">Subtotal</p>
            <p className="text-xl font-bold">Kshs. {cartPrice}</p>
          </div>
          <div className="flex flex-col py-2 border-b">
            <p className="text-base">
              {cartPrice < 5000
                ? `Missing KShs. ${5000 - cartPrice} to reach free delivery`
                : "Congratulations! You have qualified for free delivery"}
            </p>
            <p className="mt-2 flex flex-row items-center text-lg text-navColor font-bold">
              AMOGROCER <span className="text-base">express</span>
            </p>
          </div>
          <button className="bg-navColor py-1.5 w-full rounded text-white text-base uppercase">
            Checkout (KSH {cartPrice})
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
