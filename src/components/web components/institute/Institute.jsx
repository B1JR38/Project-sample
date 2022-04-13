/* eslint-disable max-len */
import React from 'react';
import Rating from '@mui/material/Rating';
import './institute.css';

const Institute = () => {
  return (
    <div className='i-container'>
      <div className='i-image'><img className='img' src={require("../institute/institute1.jpg")} alt=" " width="300px" height="150px" /></div>
      <div className="i-fline">
          Institute: I-name
          <Rating name="size-small" defaultValue={2} size="small" />
      </div>
      <div className="i-sline">
        Place: I-place      
      </div>

    </div>
  );
};

export default Institute;
