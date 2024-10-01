import React from 'react';

const InputField = ({ label, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={`Enter ${label}`}
      />
    </div>
  );
};

export default InputField;
