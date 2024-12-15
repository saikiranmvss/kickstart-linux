import React from 'react';

const FormField = ({ label, type, name, placeholder, onChange, value, error }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">{label}</label>
      <input
        type={type}
        className={`form-control ${error ? 'is-invalid' : ''}`}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default FormField;
