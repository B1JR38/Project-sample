import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../web components/buttons/Button';
import './signup.css';

const Signup = () => {

  return (
    <div className="main-container">
        <div className='signup-container'>
            <div className="form-header">
                <h1>Register</h1>
            </div>
            <div className="form-span"></div>
            <div className="form-input-container">
            <form>
                <select className='select' id="admin/user" defaultValue="">
                    <option className='placeHolder' hidden value="">Enter admin/user</option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                </select><br />
                <input type="email" name="email" id="email" placeholder="Enter email"></input><br />
                <input type="text" id="username" name="username" placeholder="Enter username"></input><br />
                <input type="tel" name="mobileNumber" id="mobileNumber" pattern="[0-9]{3}" placeholder="Enter Mobilenumber"></input><br />
                <input type="password" name="password" id="password" placeholder="Password"></input><br />
                <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password"></input><br />
            </form>
            <Button BtnName={"Submit"} />
            <footer className='footer'>
                <p>Already a user? <Link to='/' className='link'>Login</Link></p>
            </footer>
            </div>  
        </div>
    </div> 
  );
};

export default Signup;
