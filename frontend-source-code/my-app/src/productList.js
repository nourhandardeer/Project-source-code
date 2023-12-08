import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const categories = '2635,2737'; // Replace with the categories you want to filter

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const response = await axios.get(`/api/products?categories=${categories}`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Handle error (display error message, etc.)
      }
    };

    fetchProductsByCategory();
  }, [categories]);

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

export default ProductList;
