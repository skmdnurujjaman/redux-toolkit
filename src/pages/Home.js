import React from "react";
import { Products } from "../components/Products";

export const Home = () => {
  return (
    <div>
      <h2 className="heading">Welcome to Redux Toolkit Store</h2>
      <section>
        <h3>Products</h3>
        <Products />
      </section>
    </div>
  );
};
