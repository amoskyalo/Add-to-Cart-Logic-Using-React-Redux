import React from "react";
import Product from "./Product";

const Products = () => {
  return (
    <section className="max-w-4xl mx-auto mt-5 md:mt-20 xl:max-w-5xl">
      <h2 className="text-center text-navColor text-2xl mb-10 font-bold md:text-5xl">
        Shop Your Grocery Necessities With Us
      </h2>
      <div className="grid grid-cols-2 space-x-1 px-2 md:grid-cols-5 md:px-0">
        <Product />
      </div>
    </section>
  );
};

export default Products;
