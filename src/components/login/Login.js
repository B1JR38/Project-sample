import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
// import Button from '../../web components/buttons/Button.jsx'

import AuthService from '../admin/services/AuthService';

const Login = () => {
    const history=useNavigate();
    // const[validation,setValidation]=useState("")
    // const[userstate,setusersate]=usestate("");
    const[valuee,setValue]=useState({
        email:"",
        password:""
    })
    const assignValues=(event)=>{
        const name=event.target.name
        const value=event.target.value
        setValue({
            ...valuee,
            [name]:value
        })
    }

    let users=[];
    const submitting = (event)=>{
    let state={
            email:valuee.email,
            password:valuee.password
        } 
    users.push(state);
    console.log(state);
    AuthService.adminlogin(state).then(res=>{
        console.log(res.status);
        if(res.status===500)
            alert('login failed');
        else{
            history('/institutepage');
        }
    })

    localStorage.setItem('usersdata',JSON.stringify(users));
    event.preventDefault();
  }

//   let navigate = useNavigate();
//   const handleChange = (event) =>{
//     if(valuee.select==='Admin'){
//         navigate('/admin/signup',{ replace:true });
//     }
//     else if(valuee.select==='User'){
//         navigate('/',{ replace:true });
//     }
//   }
    
  return (
    <div className="main-container">
        <div className='signup-container'>
            <div className="form-header">
                <h1>Login</h1>
            </div>
            <div className="form-span"></div>
            <div className="form-input-container">
            <form onSubmit={submitting}>
                <input type="email" name="email" id="email" placeholder="Enter email" value={valuee.email} onChange={assignValues}></input><br />
                {/* <input type="text" id="username" name="username" placeholder="Enter username" value={valuee.username} onChange={assignValues}></input><br /> */}
                <input type="password" name="password" id="password" placeholder="Password" value={valuee.password} onChange={assignValues}></input><br />
                <div className="form-btn">
                    {/* <Button className="button" BtnName={"Submit"} value="submit" /> */}
                    <button className='button' ><span>{'Login'} </span></button>
                </div>
            </form>
            {/* <Button BtnName={"Submit"} state={state} /> */}
            </div>  
        </div>
    </div> 
  );
};

export default Login;