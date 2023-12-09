
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import necklacesImage from './images/necklaces.png';
import braceletImage from './images/bracelet.png';
import earringsImage from './images/earrings.png';
import ringsImage from './images/rings.jpg';

function Catalogue() {

 
     



  return (
    <div className='cata'>
      

      {/* Catalog Items */}
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
