// Assuming this is in a React component file (e.g., ProductList.js)
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  // Function to fetch products from the backend
  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      const fetchedProducts = response.data;
      setProducts(fetchedProducts); // Update state with fetched products
    } catch (error) {
      console.error('Error fetching products:', error);
      // Handle the error as needed (e.g., show an error message to the user)
    }
  };

  // Fetch products when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

