const {withNativeWind} = require('nativewind/metro');
import React from 'react';

import "'./global.css'";
import { GluestackUIProvider } from "@/'components/ui'/gluestack-ui-provider";

const PrintComponent = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <h1>Document Title</h1>
      <p>This is the content of the document you want to print.</p>
      <button id='nonPrintArea' onClick={handlePrint}>Print</button>
    </div>
  );
};

export default PrintComponent;
