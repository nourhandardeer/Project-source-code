import React from 'react'; // Import the CSS file for SignIn component styling

function SignIn() {
  return (
    <div className="signin-container">
      <h1 className="signin-heading">Sign In Form</h1>
      <input className="signin-input" type="email" placeholder="Email" />
      <input className="signin-input" type="password" placeholder="Password" />
      <button className="signin-button">OK</button>
    </div>
  );
}

export default SignIn;
