import React from "react";

const Input = ({ name, label, value, onChange, autofocus }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        type="text"
        className="form-control"
        autoFocus={autofocus}
      />
    </div>
  );
};

export default Input;
