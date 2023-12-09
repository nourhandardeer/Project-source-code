// Footer.jsx

import React from 'react';

import { Facebook, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2023 AccessorEase. All Rights Reserved.</p>
        <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/store">Store</a></li>
          <li><a href="/contact">Contact </a></li>
        </ul>
        <div className="social-icons">
            <Facebook fontSize="large" style={{ marginRight: '10px' }} />
            <Instagram fontSize="large" style={{ marginRight: '10px' }} />
          </div>
      </div>
    </footer>
  );
}

export default Footer;
