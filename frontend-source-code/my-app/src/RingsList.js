import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Ringslst = () =>{
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
  

}
export default Ringslst;