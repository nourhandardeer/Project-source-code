import React from 'react';
import { Link } from 'react-router-dom';

const Cartt = () => {
  const cartContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', 
    textAlign: 'center',
  };

  const cartTextStyle = {
    color: 'red',
    fontSize: '24px',
    marginBottom: '20px',
  };

  const linkStyle = {
    color: 'blue',
    fontSize: '18px',
    textDecoration: 'none',
  };

  return (
    <div style={cartContainerStyle}>
      <h1 style={cartTextStyle}>Your shopping cart is empty</h1>
      <Link style={linkStyle} to="/store">
        Go to the STORE to start shopping
      </Link>
    </div>
  );
};

export default Cartt;
