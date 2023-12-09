//import { Router } from 'express';
import { Link } from 'react-router-dom';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
// import styled from "styled-components";
//import SearchIcon from '@mui/icons-material/Search';




const Navbar = () => {

    return ( 
      <nav className="navbar" >
         <div className="search_box">
            <input type="search" placeholder='Search Here'/>
            <span className='ffff'></span>
        </div> 
          <div className="links">
          <Link to="/">HOME</Link>
          <Link to="/store">STORE</Link>
          <Link to="/contact">CONTACT</Link>
          <Link to="/about">ABOUT</Link>
      </div>

        <div className="links2">
           {/* <SearchIcon></SearchIcon> */}
           <Link to ="/signIn">SignIn</Link>
          <Link to ="/signUpForm">SignUp</Link>
          <Link to="/Profile">ME</Link>

        </div>
   
        <div className='cart'>
        <Link to="/cart">
          <ShoppingCartTwoToneIcon></ShoppingCartTwoToneIcon>
        </Link>

        </div>
      </nav>
 
     );
};

 
export default Navbar;
