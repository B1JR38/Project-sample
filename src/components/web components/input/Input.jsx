import React from "react";
import "./Input.css";

const Input = ({ inputType, inputName, inputId, inputPlaceholder }) => {
  return (
    <input
      className="input"
      type={inputType}
      name={inputName}
      id={inputId}
      placeholder={inputPlaceholder}
    ></input>
  );
};

export default Input;
