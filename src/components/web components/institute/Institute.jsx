/* eslint-disable max-len */
import React from 'react';
import Rating from '@mui/material/Rating';
import './institute.css';
import data from '../../user/data';
const Institute = () => {
  return (
    
    <div className='i-container'>
      {data.instituteData.map((item,key)=>{
        return(
        <div>
          <div className='i-image'><img className='img' src={item.img} alt=" " width="300px" height="150px" /></div>
          <div className="i-fline">
              Institute: {item.name}
              <Rating name="size-small" defaultValue={2} size="small" />
          </div>
          <div className="i-sline">
            Place: {item.place}      
          </div>
        </div>
        )
      })}
      
      </div>
  );
};

export default Institute;
