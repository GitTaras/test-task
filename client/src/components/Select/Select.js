import React from 'react';
import style from './Select.module.css';

export const Select = ({
  options,
  locked,
  name,
  value,
  label,
  autoFocus,
  onBlur,
  onChange,
  required,
}) => (
  <>
    <div className={style.container}>
      <label className="label">{label}</label>
      <select
        className={locked ? style.selectLock : ''}
        name={name}
        value={value}
        autoFocus={autoFocus}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
      >
        {options.map(op => (
          <option key={op.name} value={op.name}>
            {op.value}
          </option>
        ))}
      </select>
    </div>
  </>
);
