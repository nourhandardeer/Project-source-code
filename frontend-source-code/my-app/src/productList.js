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

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const categories = '2635,2737'; // Replace with the categories you want to filter



  // Function to fetch products from the backend
  const fetchProducts = async () => {
    try {
      const response = await axios.get('/localhost:8000/products');
      const fetchedProducts = response.data;
      setProducts(fetchedProducts); // Update state with fetched products
    } catch (error) {
      console.error('Error fetching products:', error);
      // Handle the error as needed (e.g., show an error message to the user)
    }
  };

  // Fetch products when the component mounts

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const response = await axios.get(`/products?categories=${categories}`);
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

//export default ProductList;

