// Home.js
import React from 'react';
//import Navbar from './navbar';
import Catalogue from "./catalogue";
//import Stach from "./stach";
import p1 from './images/White Ring.jpg';
import p2 from './images/p2.jpg';
import p3 from './images/p3.jpg';
import Aboutt from './Pages/about';
import Footer from './footer';



// const About = () => <div>
//   <Aboutt></Aboutt>
// </div>;


function Home() {
  return (
    <div className='nav'>


      <div>
        <Catalogue></Catalogue>
      </div>
      <div>
        <div className='best-sellers'>
          <h1>Our Best Sellers</h1>
          <a href='https://example.com/product1'>
            <img src={p1} alt="Product 1" />
          </a>
          <a href='https://example.com/product2'>
            <img src={p2} alt="Product 2" />
          </a>
          <a href='https://example.com/product3'>
            <img src={p3} alt="Product 3" />
          </a>
        </div>
      </div>
      <div className='about'>
        <Aboutt></Aboutt>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Home;


