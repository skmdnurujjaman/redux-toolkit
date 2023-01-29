import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { Product } from "./Product";
import { STATUS, fetchProducts } from "../store/productSlice";

export const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  //   const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());

    // const fetchProducts = async () => {
    //   const response = await fetch("https://fakestoreapi.com/products");
    //   const data = await response.json();
    //   console.log(data);
    //   setProducts(data);
    // };

    // fetchProducts();
  }, []);

  const handleAdd = (product) => {
    //store teh product in redux toolkit
    dispatch(add(product));
  };

  if (status === STATUS.LOADING) {
    return <h2>Loading...</h2>;
  }

  if (status === STATUS.ERROR) {
    return <h2>Something went wrong.</h2>;
  }

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <Product item={product} key={product.id} handleAdd={handleAdd} />
      ))}
    </div>
  );
};
