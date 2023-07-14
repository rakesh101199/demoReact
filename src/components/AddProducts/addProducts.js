import React, { useRef } from "react";
import Button from "../../UI/Button";
import './addProducts.css';

const AddProducts = (props) => {
  const idRef = useRef();
  const priceRef = useRef();
  const nameRef = useRef();
  const catagoryRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const id = idRef.current.value;
    const price = priceRef.current.value;
    const name = nameRef.current.value;
    const catagory = catagoryRef.current.value;
    const newProduct = {
      id: id,
      price: price,
      name: name,
      catagory: catagory,
    };

    //console.log("submitted", newProduct);
    props.product(newProduct);
    idRef.current.value='';
    priceRef.current.value='';
    nameRef.current.value='';
    catagoryRef.current.value='';

  };

  return (
    <form onSubmit={submitHandler} className='items'>
      <label>Product Id : </label>
      <input type="number" ref={idRef} min='1' step='1'></input>
      <label>Product Price : </label>
      <input type="number" min="0" step='100' ref={priceRef}></input>
      <label>Product Name : </label>
      <input type="text" ref={nameRef}></input>
      <label>Choose a catagory : </label>
      <select ref={catagoryRef}>
        <option value="Electronics">Electronis</option>
        <option value="Soap">Soap</option>
        <option value="Food">Food</option>
      </select>
      <Button type="submit" name="Add Product"></Button>
    </form>
  );
};

export default AddProducts;
