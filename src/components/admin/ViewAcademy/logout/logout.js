import React from 'react';
import { Link } from 'react-router-dom';
//import Button from '../../web components/buttons/Button';
import './logout.css';

const Logout = () => {
  return (
      <div className="logout-container">
          <h1>Logout Successfully!!!</h1>
          <footer className='footer'>
          <p><Link to='/login' className='link'>Login</Link></p>
      </footer>
      </div>
  );
};

export default Logout;