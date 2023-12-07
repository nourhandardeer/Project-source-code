// Home.js
import React from 'react';
import Navbar from './navbar';
import Catalogue from "./catalogue";
import Stach from "./stach";



function Home() {
    return(
      <div className='nav'>
        <Navbar></Navbar>
        <div>

        </div>
        <div className='nameOfPage'>
        <h1>AccessorEase</h1>

        <h4>JEWELRY STOR</h4>
        <img src="e:\Elaf\CS_304\Monster\u.png" alt="j" />
      </div>
      <div>
        <Catalogue></Catalogue>
      </div>
      <div>
        <Stach></Stach>
      </div>
    </div>
    );
}

export default Home;
