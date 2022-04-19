
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';

  
const Navbar = () => {
  const history=useNavigate();
    const divStyle = {
        width: '8%',
        height:'50px',
        float: 'left',
      };
    let admin=JSON.parse(localStorage.getItem('admindata'));
    let user=JSON.parse(localStorage.getItem('usersdata'));
    function logout()
    {
      localStorage.clear();
      history('/admin/login');
    }
    function userlogout()
    {
      localStorage.clear();
      history('/user/login');
    }
      
  return (
    <>
      <Nav>
      <img className='nav-logo' src={require('../navbar/admissionlogo.jpg')} alt="" style={divStyle} />
        {/* <Bars /> */}
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/user/signup' activeStyle>
            Sign Up
          </NavLink>
          <NavLink to='/user/login' activeStyle>
            Log In
          </NavLink>
          {localStorage.getItem('admindata')?
          <NavLink to='/admin/login' onClick={logout} activeStyle>
            Logout
          </NavLink>:null}
          {localStorage.getItem('usersdata')?
          <NavLink  to='/user/login' onClick={userlogout} activeStyle>
            Logout
          </NavLink>:null}
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;
