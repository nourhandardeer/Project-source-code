
//import React ,{useState} from 'react';
// import Navbar from "./navbar";
import Home from './home';
// import Catalogue from "./catalogue";
// import Stach from "./stach";
import Aboutt from './about';
import { React } from 'react';
import { BrowserRouter as Router ,Route,Switch } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from './navbar';
import Contactt from './contact';
import Storee from './Store';

//import SignInForm from "./SignInForm";
const Store = () => <div>
  <Storee></Storee>
</div>;
const Contact = () => <div>
  <Contactt></Contactt>
</div>;
const About = () => <div>
  <Aboutt></Aboutt>
</div>;


function App(){

return(
  <Router>
  <div>
    {/* Your other components and routes */}
    {/* Define your routes using Route components */}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/store" component={Store} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
    </Switch>
  </div>
</Router> 
);


  

}
export default App;
