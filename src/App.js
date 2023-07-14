import React, { useState } from "react";
import AddProducts from "./components/AddProducts/addProducts";
import DisplayProducts from "./components/DisplayProducts/displayproducts";

const App = () => {
  const [electProducts, setElectProducts] = useState([]);
  const [soapProducts, setSoapProducts] = useState([]);
  const [foodProducts, setFoodProducts] = useState([]);

  const productHandler = (prod) => {
    if (prod.catagory === "Electronics") {
      setElectProducts((prev) => [...prev, prod]);
    } else if (prod.catagory === "Soap") {
      setSoapProducts((prev) => [...prev, prod]);
    } else {
      setFoodProducts((prev) => [...prev, prod]);
    }
    localStorage.setItem(prod.id,JSON.stringify(prod));

  };


  const Deletehandler = (id) =>{
    setElectProducts(electProducts.filter(product =>product.id !== id));
    setSoapProducts(soapProducts.filter(product =>product.id !== id));
    setFoodProducts(foodProducts.filter(product =>product.id !== id));
    localStorage.removeItem(id);
    //console.log('deleted' , id);
  };

  return (
    <React.Fragment>
      <AddProducts product={productHandler} />
      <div className='card'>
      <h2>Products</h2>
      <DisplayProducts items={electProducts} name='Electronics Products' delete = {Deletehandler}/>
      <DisplayProducts items={soapProducts} name='Soap Products' delete = {Deletehandler}/>
      <DisplayProducts items={foodProducts} name='Food Products' delete = {Deletehandler}/>
      </div>
    </React.Fragment>
  );
};

export default App;
