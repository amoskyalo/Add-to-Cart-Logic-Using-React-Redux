import React from "react";
import Product from "./Product";

const Products = () => {
  return (
    <section className="max-w-screen-lg mx-auto mt-20">
      <h2 className="text-center text-5xl mb-10 font-bold">
        Shop Your Grocery Necessities With Us
      </h2>
      <div className="grid grid-cols-5 space-x-1">
        <Product />
      </div>
    </section>
  );
};

export default Products;
