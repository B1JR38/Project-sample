import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../web components/buttons/Button';
import './institute.css'
//import {Card,CardGroup} from '@material-ui/core/Card'
//import AddInstitute from './AddInstitute';


const Institute = () => {
  return (
    <>
      <div className='search-field'>
        <input className='s-field' placeholder="Search Your Institutes"/>
        <div className='search-btn'>
        <Button className="button" BtnName={"Search"} value="Search" />
        </div>
      </div>
        <footer className='footer'>
          <Link to='/addInstitute' className='link' id="f-addinst">+ Add Institute</Link><br/>
          <Link to='/editInstitute' className='link' id='f-editinst'>Update Institute</Link>
        </footer>
     
    </>
  );
};

export default Institute;