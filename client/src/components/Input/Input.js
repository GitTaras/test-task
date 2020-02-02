import React from 'react';
import style from './Input.module.css';

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
  <div className={error ? style.containerDanger : style.container}>
    <label className="label">{label}</label>
    <input name={name} value={value}
      type={type} placeholder={placeholder}
      checked={checked}
		  autoFocus={autoFocus}
      onChange={onChange}
      onBlur={onBlur}
      required={required}
    />
  </div>
  {error && <span className={style.error}>{error}</span>}
</>
);