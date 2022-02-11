import React from 'react';
import Style from './Button.module.css';

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className={Style.button}>
      {children}
    </button>
  );
};
export default Button;
