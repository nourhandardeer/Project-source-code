//import { Router } from 'express';
import { Link } from 'react-router-dom';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
// import styled from "styled-components";




const Navbar = () => {

    return ( 
      <nav className="navbar" >
        {/* <div>
          <Search style={{ color: 'gray', fontSize: 16 }} />
        

        </div> */}
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
          <a herf="/profile">ME</a>

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
