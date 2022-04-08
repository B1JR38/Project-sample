import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../web components/buttons/Button';
import './login.css';


const Signup = () => {
    const login=()=>{
        alert();
    }

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }


const Login = ({ setToken }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          email,
          password
        });
        setToken(token);
      }


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
                {/* <div className="form-btn">
                    <Button BtnName={"Login"}  onChange={login}/>
                </div> */}

            <form onSubmit={handleSubmit}>
                <input type="email" name="email" id="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}></input><br />
                <input type="password" name="password" id="password" placeholder="Password" onChange={e => setPassword(e.target.value)}></input><br />

                <div className="form-btn">
                <button className='button' onClick={login}><span>{'login'} </span></button>
                </div>
            </form>
            <footer className='footer'>
                <p>Not a user? <Link to='/user/signup' className='link'>Sign up</Link></p>
            </footer>
            </div>  
        </div>
    </div> 
  );
};


export default Login;

