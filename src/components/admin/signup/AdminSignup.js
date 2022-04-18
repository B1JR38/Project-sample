import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Button from '../../web components/buttons/Button.jsx'
import './signup.css';
import AuthService from '../services/AuthService';

const Signup = () => {
    const history=useNavigate();
    const[validation,setValidation]=useState("")
    // const[userstate,setusersate]=usestate("");
    const[valuee,setValue]=useState({
        select:"",
        email:"",
        //username:"",
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

    let users=[];
    const submitting = (event)=>{
    let state={
            select:valuee.select,
            email:valuee.email,
            //username:valuee.username,
            mobileNumber:valuee.mobileNumber,
            password:valuee.password,
            confirmPassword:valuee.confirmPassword
        } 
    users.push(state);
    console.log(state);
    AuthService.addadmin(state).then(res=>{
        history('/login');
    })
    // localStorage.setItem('usersdata',JSON.stringify(users));
    event.preventDefault();
  }

  let navigate = useNavigate();
  const handleChange = (event) =>{
    if(valuee.select==='Admin'){
        navigate('/admin/signup',{ replace:true });
    }
    else if(valuee.select==='User'){
        navigate('/user/signup',{ replace:true });
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
            <form onSubmit={submitting}>
                <select className='select' name="select" id="admin/user" defaultValue="" onChange={assignValues} onClick={handleChange}>
                    <option className='placeHolder' hidden value="">Enter admin/user</option>
                    <option name="select" value="Admin" >Admin</option>
                    <option name="select" value="User">User</option>
                </select><br />
                <input type="email" name="email" id="email" placeholder="Enter email" value={valuee.email} onChange={assignValues}></input><br />
                {/* <input type="text" id="username" name="username" placeholder="Enter username" value={valuee.username} onChange={assignValues}></input><br /> */}
                <input type="text" name="mobileNumber" id="mobileNumber"  placeholder="Enter Mobilenumber" value={valuee.mobileNumber} onChange={assignValues}></input><br />
                <input type="password" name="password" id="password" placeholder="Password" value={valuee.password} onChange={assignValues}></input><br />
                <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" value={valuee.confirmPassword} onChange={confPassword}></input><br />
                {valuee.password!==valuee.confirmPassword && <span className='pwd-validation'>{validation}</span>}
                <div className="form-btn">
                    {/* <Button className="button" BtnName={"Submit"} value="submit" /> */}
                    <button className='button' onClick={()=>{alert()}}><span>{'SignUp'} </span></button>
                </div>
            </form>
            {/* <Button BtnName={"Submit"} state={state} /> */}
            <footer className='footer'>
                <p>Already a user? <Link to='/login' className='link'>Login</Link></p>
            </footer>
            </div>  
        </div>
    </div> 
  );
};

export default Signup;