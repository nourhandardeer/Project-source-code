import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return ( 
      <nav className="navbar" >
        <div className="links">
            <a herf="/">HOME</a>
            <a herf="/store">STORE</a> 
            <a herf="/contact">CONTACT</a>
            <a herf="/about">ABOUT</a>
 
        </div>
        <div className="links2">
           <SearchIcon></SearchIcon>
          <a href="/SignInForm">Sign In</a>
          <a herf="/SignUp ">Sign Up</a>
          <a herf="/profile">ME</a>


        </div>
      </nav>
     );
}
 
export default Navbar;
