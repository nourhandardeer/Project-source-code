import React, { useState, useEffect } from 'react';
import axios from 'axios';
  function App() {
 
const [Products, setProducts] = useState([{}])


   useEffect(() => {
    fetch("/products").then (
      res => res.json()
    ).then(
      data => {
        setProducts(data)
      }
    )

  }, [])

  return (
    <div>
       {
       Products.map((product) => (
        <li key={product.id}>
          <p>${product.price}</p> 
       {/*  <p>{product.name} </p>
        <img src={product.image} alt=" "/>
        <p>${product.rating}</p>
        <p>${product.price}</p> */}
        
      </li>
       ))
      
      }
      </div>
      );
        }
       
        export default App;




const ProductList = () => {
  const [products, setProducts] = useState([]);
  const categories = '2635,2737'; // Replace with the categories you want to filter





  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            {/* Display other product details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

//export default ProductList;

