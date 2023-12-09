//import { Router } from 'express';
import { Link } from 'react-router-dom';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

//import SearchIcon from '@mui/icons-material/Search';  

const Navbar = () => {
  
    return ( 
      <nav className="navbar" >
         
          <div className="links">
          <Link to="/">HOME</Link>
          <Link to="/store">STORE</Link>
          <Link to="/contact">CONTACT</Link>
          
      </div>

        <div className="links2">
           {/* <SearchIcon></SearchIcon> */}
           <Link to ="/signIn">SignIn</Link>
          <Link to ="/signUpForm">SignUp</Link>
          <Link to="/profile">
            <AccountBoxIcon></AccountBoxIcon>
          </Link>

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