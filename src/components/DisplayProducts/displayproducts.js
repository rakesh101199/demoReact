import React from "react";
import DisplayItem from "./displayItem";
import './displayproducts.css';

const DisplayProducts = (props) => {
  //console.log("display", props.items);

  return (
    <ul className='items'>
        <h3>{props.name}</h3>
      {props.items.map((product) => (
        <DisplayItem
          name={product.name}
          key={product.id}
          id={product.id}
          price={product.price}
          catagory={product.catagory}
          delete = {props.delete}
        />
      ))}
    </ul>
  );
};

export default DisplayProducts;
