import React from 'react';
import './button.css';

const Button = ( { BtnName } ) => {
  return (<button className="button"><span>{BtnName} </span></button>);
};

export default Button;


