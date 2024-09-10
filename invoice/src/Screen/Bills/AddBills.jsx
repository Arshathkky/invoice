import React from 'react'
import Header from '../../Component/Header'


const AddBills = () => {
  const handlePrint = () => {
    window.print();
  };
  return (
    <div className='invoice'>
     <Header/>
     
     <table>
      <tr>
        <th>id</th>
        <th>Description</th>
        <th>Quantity</th>
        <th>unit price</th>
        <th>Sub Total</th>        
      </tr>
     </table>
     <div className='total'>
        sub total
     </div>
     <div className='greed'>
        thank you<br/>
        Come again
     </div>
     <button className='button' id='nonPrintArea' onClick={handlePrint}>Print</button>
      
    </div>
  )
}

export default AddBills