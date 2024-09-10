import React from 'react';

const PrintComponent = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <h1>Document Title</h1>
      <p>This is the content of the document you want to print.</p>
      <button onClick={handlePrint}>Print</button>
    </div>
  );
};

export default PrintComponent;
