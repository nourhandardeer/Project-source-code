// Home.js
import React from 'react';
import Navbar from './navbar';
import Catalogue from "./catalogue";
import Stach from "./stach";



function Home() {
    return(

      <div className='nav'>
        <div>
        <Navbar></Navbar>

        </div>
        <div className='nameOfPage'>
        <h1>AccessorEase</h1>

        <h4>JEWELRY STOR</h4>
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
