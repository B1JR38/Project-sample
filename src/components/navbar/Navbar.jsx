import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
      <nav className="navbar">
        <div className="nav-header">
            Admission Portal
        </div> 
        <div className="nav-item-list">
        <ul className='topnav'>
            <li>
                <Link className='nav-item active' to="/">Home</Link>
            </li>
            <li>
                <Link className='nav-item' to="/login" >Login</Link>
            </li>
            <li>
                <Link className='nav-item' to="/signup">Signup</Link>
            </li>
        </ul>
        </div>
      </nav>
  );
};

export default Navbar;
