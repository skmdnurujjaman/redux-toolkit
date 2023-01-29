import React from "react";

export const Product = (props) => {
  return (
    <div className="card">
      <img src={props.item.image} alt="" />
      <h4>{props.item.title}</h4>
      <h5>{props.item.price}</h5>
      <button className="btn" onClick={() => props.handleAdd(props.item)}>
        Add to Cart
      </button>
    </div>
  );
};
