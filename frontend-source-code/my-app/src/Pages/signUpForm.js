import React from 'react';// Import your CSS file

function SignUp() {
    return (
        <div className="signup-container">
            <h1>SIGN UP FORM</h1>
            <div className="form-container">
                <input type="text" placeholder="Name" className="input-field" />
                <input type="number" placeholder="Phone" className="input-field" />
                <input type="email" placeholder="Email" className="input-field" />
                <input type="password" placeholder="Password" className="input-field" />
                <input type="password" placeholder="Confirm Password" className="input-field" />
                <button className="ok-button">OK</button>
            </div>
            <div>
                
            </div>
        </div>
    );
}

export default SignUp;
