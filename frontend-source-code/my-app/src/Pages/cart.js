import React, { useState } from 'react';
const Cartt = () => {
  const cartStyle = {
    textAlign: 'center',
    marginTop: '200px', 
    color: 'red', 
    fontSize: '24px' 
  };

    return (
      <h1 style={cartStyle}>
      Your shopping cart is empty
        </h1>
      );
}
 
export default Cartt;
