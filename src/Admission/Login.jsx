import React from 'react';
import "./Login.css"

        const RegistrationForm = () => {
          return (
            <div className="container">
              <div className="registration-form">
                <header>Sign up</header>
                <label htmlFor="name">User Name</label>
                <input type="text" id="name" placeholder="Name" />
                <label htmlFor="id">Id</label>
                <input type="text" id="id" placeholder="National Id" />
                <label htmlFor="number">Number</label>
                <input type="number" id="number" placeholder="Number" />
                <label htmlFor="country">Country</label>
                <input type="text" id="country" placeholder="Country" />
                <button type="submit">Submit</button>
                <div className="signup">
                  <span className="signup">Already have an account?
                    <label htmlFor="check"> <a href="./lo">Sign In</a></label>
                  </span>
                </div>
              </div>
            </div>
          );
        };
        
        export default RegistrationForm;
        
        