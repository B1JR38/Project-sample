import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../web components/buttons/Button';
import './login.css';

const Signup = () => {

  return (
    <div className="main-container">
        <div className='signup-container'>
            <div className="form-header">
                <h1>Sign in</h1>
            </div>
            <div className="form-span"></div>
            <div className="form-input-container">
            <form>
                <input type="email" name="email" id="email" placeholder="Enter email"></input><br />
                <input type="password" name="password" id="password" placeholder="Password"></input><br />
                <div className="form-btn">
                    <Button BtnName={"Login"} />
                </div>
            </form>
            <footer className='footer'>
                <p>Not a user? <Link to='/signup' className='link'>Sign up</Link></p>
            </footer>
            </div>  
        </div>
    </div> 
  );
};

export default Signup;