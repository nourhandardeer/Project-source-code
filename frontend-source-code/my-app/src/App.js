
//import React ,{useState} from 'react';
// import Navbar from "./navbar";

import Home from './home';
// import Catalogue from "./catalogue";
// import Stach from "./stach";
import { React } from 'react';
import { BrowserRouter as Router ,Route,Switch } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from './navbar';
import Contactt from './Pages/contact';
import Storee from './Pages/Store';
import Cartt from './Pages/cart';
import SignUp from './Pages/signUpForm';
import SignIn from './Pages/SignIn';
import Profile from './Pages/profle';


//import SignInForm from "./SignInForm";import importsignUp from './Pages/signUp';
const Store = () => <div>
<Storee></Storee>

</div>;
const Contact = () => <div>
  <Contactt></Contactt>
</div>;

const signUp=()=><div>
  <SignUp></SignUp>
</div>;

const signIn=()=><div>
  <SignIn></SignIn>
</div>;
const cart=()=> <div>
  <Cartt></Cartt>
</div>
const profile=()=><div>
  <Profile></Profile>
</div>


function App(){

return(

  <Router>
    <div className='nameofpage'>
      <h1>AccessorEase</h1>
      <h4>JEWELRY STOR</h4>
    </div>
   
      <Navbar></Navbar>

  <div>
    {/* Your other components and routes */}
    {/* Define your routes using Route components */}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/store" component={Store} />
      <Route path="/contact" component={Contact} />
      <Route path="/signUpForm" component={signUp}></Route>
      <Route path="/SignIn" component={signIn}></Route>
      <Route path="/cart" component={cart}></Route>
      <Route path="/profile" component={profile}></Route>
    </Switch>
  </div>
</Router> 
);


  

}
export default App;
