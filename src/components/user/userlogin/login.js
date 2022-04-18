import { RsvpRounded } from '@mui/icons-material';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
// import Button from '../../web components/buttons/Button.jsx'

import UserService from '../../admin/services/UserService';

const UserLogin = () => {
    const history=useNavigate();
    const [error,seterror]=useState(null);
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
    UserService.userlogin(state).then(res=>{
        // console.log(res);
        history('/user/institutepage');
        // console.log(res.status);
    }).catch(error=>{
        seterror(error.message);
    })

    // localStorage.setItem('usersdata',JSON.stringify(users));
    event.preventDefault();
  }

  let navigate = useNavigate();
  const handleChange = (event) =>{
    if(valuee.select==='Admin'){
        navigate('/admin/login',{ replace:true });
    }
    else if(valuee.select==='User'){
        navigate('/user/login',{ replace:true });
    }
  }
    
  return (
    <div className="main-container">
        <div className='signup-container'>
            <div className="form-header">
                <h1>Login</h1>
            </div>
            <div className="form-span"></div>
            <div className="form-input-container">
            <form onSubmit={submitting}>
            <select className='select' name="select" id="admin/user" defaultValue="" onChange={assignValues} onClick={handleChange}>
                    <option className='placeHolder' hidden value="">admin/user</option>
                    <option name="select" value="Admin" >Admin</option>
                    <option name="select" value="User">User</option>
                </select><br />
                <input type="email" name="email" id="email" placeholder="Enter email" value={valuee.email} onChange={assignValues}></input><br />
                {/* <input type="text" id="username" name="username" placeholder="Enter username" value={valuee.username} onChange={assignValues}></input><br /> */}
                <input type="password" name="password" id="password" placeholder="Password" value={valuee.password} onChange={assignValues}></input><br />
                {error && <div style={{color:'red',textAlign:'center'}}>{'Invalid Email or Password'}</div>}
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

export default UserLogin;