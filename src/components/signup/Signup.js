import React,{useState} from 'react';
//import {Component} from 'react';
import { Link } from 'react-router-dom';
import Button from '../web components/buttons/Button';
import './signup.css';

const Signup = () => {

    const[validation,setValidation]=useState("")
    const[valuee,setValue]=useState({
        select:"",
        email:"",
        username:"",
        mobileNumber:"",
        password:"",
        confirmPassword:"",
    })


    const assignValues=(event)=>{
        const name=event.target.name
        const value=event.target.value
        setValue({
            ...valuee,
            [name]:value
        })
    }

    const confPassword=event=>{
        const name=event.target.name
        const value=event.target.value
        setValue({
            ...valuee,
            [name]:value
        })
        if(valuee.password!==valuee.confirmPassword){
            setValidation("Password and Confirm Password not matched");
            }
        
    }
    
  return (
    <div className="main-container">
        <div className='signup-container'>
            <div className="form-header">
                <h1>Register</h1>
            </div>
            <div className="form-span"></div>
            <div className="form-input-container">
            <form>
                <select className='select' id="admin/user" name='select' defaultValue="" value={valuee.select} onChange={assignValues}>
                    <option className='placeHolder' hidden value="">Enter admin/user</option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                </select><br />
                <input type="email" name="email" id="email" placeholder="Enter email" value={valuee.email} onChange={assignValues}></input><br />
                <input type="text" id="username" name="username" placeholder="Enter username" value={valuee.username} onChange={assignValues}></input><br />
                <input type="tel" name="mobileNumber" id="mobileNumber" pattern="[0-9]{3}" placeholder="Enter Mobilenumber" value={valuee.mobileNumber} onChange={assignValues}></input><br />
                <input type="password" name="password" id="password" placeholder="Password" value={valuee.password} onChange={assignValues}></input><br />
                <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" value={valuee.confirmPassword} onChange={confPassword}></input><br />
                {valuee.password!==valuee.confirmPassword && <span className='pwd-validation'>{validation}</span>}
               <div className="form-btn">
                    <Button BtnName={"Submit"}  />
               </div>
            </form>
            <footer className='footer'>
                <p>Already a user? <Link to='/login' className='link'>Login</Link></p>
            </footer>
            </div>  
        </div>
    </div> 
  );
};

export default Signup;