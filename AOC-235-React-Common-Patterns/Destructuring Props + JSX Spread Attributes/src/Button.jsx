import React from "react";

const Button = ({ handleClick, ...otherProps }) => {
  return (
    <input 
    type="button" {...otherProps} 
    onClick={handleClick}
    />
  );
};

export default Button;