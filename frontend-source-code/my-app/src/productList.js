// Assuming this is in a React component file (e.g., ProductList.js)
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
        {product.name} - ${product.price}
      </li>
       ))
      
      }
      </div>
      );
        }
       
export default App;

