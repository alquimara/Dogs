import React from 'react';
import Style from './Input.module.css';

const Input = ({ label, type, name, onChange, value, erro, onBlur }) => {
  return (
    <div className={Style.wrapper}>
      <label htmlFor={name} className={Style.label}>
        {label}
      </label>
      <input
        id={name}
        className={Style.input}
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      {erro && <p className={Style.erro}>{erro}</p>}
    </div>
  );
};
export default Input;
