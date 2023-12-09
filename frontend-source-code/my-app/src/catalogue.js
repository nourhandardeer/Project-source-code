import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import necklacesImage from './images/necklaces.png';
import braceletImage from './images/bracelet.png';
import earringsImage from './images/earrings.png';
import ringsImage from './images/rings.jpg';

function Catalogue() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const history = useHistory();

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchTerm.toLowerCase() === 'necklaces') {
//       history.push('/necklaces');
//     } else if (searchTerm.toLowerCase() === 'earrings') {
//       history.push('/earrings');
//     } else {
//       console.log('Product not found');
//       // Handle other search terms or display an error message
//     }
//  };

  return (
    <div className='cata'>
      {/* <form onSubmit={handleSearch}>
        <input
          type='text'
          placeholder='Search for products...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form> */}
      <div className='catalogue1'>
        <a href='/necklaces'>
          <img src={necklacesImage} alt='Necklaces' />
          <hr color='white' />
          <p1>Necklaces</p1>
        </a>
        <a href='/rings'>
          <img src={ringsImage} alt='Rings' />
          <hr color='white' />
          <p1>Rings</p1>
        </a>
        <a href='/bracelets'>
          <img src={braceletImage} alt='Bracelets' />
          <hr color='white' />
          <p1>Bracelets</p1>
        </a>
        <a href='/earrings'>
          <img src={earringsImage} alt='Earrings' />
          <hr color='white' />
          <p1>Earrings</p1>
        </a>
      </div>
    </div>
  );
}

export default Catalogue;
