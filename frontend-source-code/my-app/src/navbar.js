//import { Router } from 'express';
import { Link } from 'react-router-dom';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';



const Navbar = () => {

    return ( 
      <nav className="navbar" >
          <div className="links">
          <Link to="/">HOME</Link>
          <Link to="/store">STORE</Link>
          <Link to="/contact">CONTACT</Link>
          <Link to="/about">ABOUT</Link>
      </div>

        <div className="links2">
           {/* <SearchIcon></SearchIcon> */}
          <a href="/SignInForm">Sign In</a>
          <a herf="/SignUp ">Sign Up</a>
          <a herf="/profile">ME</a>

        </div>
   
        <div className='cart'>
       <a herf='/cart'>
        <ShoppingCartTwoToneIcon></ShoppingCartTwoToneIcon>
       </a>
        </div>
      </nav>
 
     );
};

 
export default Navbar;
