const {withNativeWind} = require('nativewind/metro');
import React from 'react';

import "'./global.css'";
import { GluestackUIProvider } from "@/'components/ui'/gluestack-ui-provider";

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
