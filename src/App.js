import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { getProducts } from './api/asosAPI';
import Home from "./pages/Home";
import Product from './pages/Product';
import Categories from './pages/Categories';
import './App.css';


const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=> {
    getProducts()
      // .then(data => data.json());
      .then((data) => {
     
          setProducts(data);
          // .filter((product) => product.name && product.isSellingFast);
  })
  .then((data) => {
    (console.log(data))});
}, []);


//justcheckingdata
console.log(products);


return (

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="product" element={<Product />} />
    <Route path="categories" element={<Categories />} />
  </Routes>

);
};
export default App;
