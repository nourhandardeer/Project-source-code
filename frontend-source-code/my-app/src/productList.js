
import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/products') // Make a GET request to your API endpoint
      .then(response => {
        setProducts(response.data); // Update state with retrieved products
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      
      <ul>
        {products.map(product => (
          <li key={product._id}>
            
            {product.name}
            <img src={product.image} alt=" "/>
            {product.price}
          </li>
          
        ))}
      </ul>
    </div>
  );
};
 


export default ProductList;