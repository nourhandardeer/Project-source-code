import React from 'react';
// import { useHistory } from 'react-router-dom';
import necklaces from './images/necklaces.png';
import bracelet from './images/bracelet.png';
import earrings from './images/earrings.png';
import rings from './images/rings.jpg';

function Catalogue() {
  

  return (
    <div className='cata'>
      

      {/* Catalog Items */}
      <div className='catalogue1'>
        <a href="/necklaces">
          <img src={necklaces} alt="Necklaces"></img>
          <hr color='white'></hr>
          <p1> Necklaces</p1>
        </a>
        <a href="/rings">
          <img src={rings} alt="Rings"></img>
          <hr color='white'></hr>
          <p1> Rings</p1>
        </a>
        <a href="/bracelets">
          <img src={bracelet} alt="Bracelets"></img>
          <hr color='white'></hr>
          <p1> Bracelets</p1>
        </a>
        <a href="/earrings">
          <img  src={earrings} alt="Earrings"></img>
          <hr color='white'></hr>
          <p1> Earrings</p1>
        </a>
      </div>
    </div>
  );
}

export default Catalogue;


