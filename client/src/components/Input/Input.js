import React from 'react';
import style from './Input.module.css';

const error = true;

export const Input = ({
  name,
  value,
  label,
  placeholder,
  type,
  autoFocus,
  error,
  onBlur,
  onChange,
	checked,
  required
}) => (
<>
  <div className={style.container}>
    <label className="label">{label}</label>
    <div className={style.inputContainer}>
      <input 
        className={error.status ? style.inputDanger : ""}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        checked={checked}
        autoFocus={autoFocus}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
      />
      {error.status && <span className={style.error}>{error.message}</span>}
    </div>
  </div>
</>
);