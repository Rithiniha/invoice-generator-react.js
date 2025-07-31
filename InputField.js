
import React from 'react';

function InputField({ label, name, type, value, onChange, required = false }) {
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={label}
        required={required}
      />
    </div>
  );
}

export default InputField;
