import React, { useEffect, useState } from 'react';
import Header from '../../Component/Header';
import axios from 'axios';

const AddBills = () => {

  useEffect(() => {
    // Fetch the next invoice ID from the server when the component mounts
    const fetchInvoiceId = async () => {
      try {
        const response = await axios.get('http://localhost:3000/bill/getId');
        setInvoiceId(response.data);
      } catch (error) {
        console.error('Error fetching invoice ID:', error);
      }
    };

    fetchInvoiceId();
  }, []);


  const [customerName ,setCustomerName] =useState('')
  //const [no,setNo]= useState('1');
  //const [itemName,setItemName]= useState([]);
  const [invoiceId,setInvoiceId] = useState('')
  //const [quantity, setQuantity] = useState([]);
  //const [unitPrice, setUnitPrice] = useState([]);
  //const [subTotal, setSubTotal] = useState([]);
  const [total, setTotal] = useState(0);

  const [items, setItems] = useState([
    { no: 1, itemName: '', quantity: 1, unitPrice: 0, subTotal: 0 },
  ]);

  
  const addItem = () => {
   
    setItems([
      ...items,
      { no: items.length + 1, itemName: '', quantity: 1, unitPrice: 0, subTotal: 0 }
    ]);
    
  };


  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;

  
    updatedItems[index].subTotal = updatedItems[index].quantity * updatedItems[index].unitPrice;
    setTotal(calculateTotal(updatedItems));
    setItems(updatedItems);

  };

  const calculateTotal = (items) => {
    const totalAmount = items.reduce((acc, item) => acc + item.subTotal, 0);
    setTotal(totalAmount); 
    return totalAmount;
  };

  const handlePrint = async (e) => {
    e.preventDefault();    
    try{
      const billItems = {invoiceId,customerName,items,total};
      const response = await axios.post('http://localhost:3000/bill/addBill',billItems);
      const update = await axios.put('http://localhost:3000/items/quantity',{items});
      if (response.data.status === "success") {
        setInvoiceId(response.data.invoiceId);
        alert("Added successfully");
        alert("Updated successfully");
        window.print();
        setItems([{ no: 1, itemName: '', quantity: 1, unitPrice: 0, subTotal: 0 }]);
        setCustomerName('');
        setTotal(0);
    } else {
        alert("Error adding or updating items");
    }
      
    }
    
    catch(e){
      console.error(e);
      alert("error");
    }
  }


  return (
    <div className='invoice'>
      <Header invoiceId={invoiceId}/>
      Customer name:
      <input className='' type='text' name='customer' onChange={(e)=>setCustomerName(e.target.value)}  />
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Sub Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.no}>
              
              <td>{item.no}</td>
              <td>
                <input
                  type='text'
                  value={item.itemName}
                  onChange={(e) => handleItemChange(index, 'itemName', e.target.value)}
                  placeholder='Enter item description'
                />
              </td>
              <td>
                <input
                  type='number'
                  value={item.quantity}
                  onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value))}
                  placeholder='Quantity'
                />
              </td>
              <td>
                <input
                  type='number'
                  value={item.unitPrice}
                  onChange={(e) => handleItemChange(index, 'unitPrice', parseFloat(e.target.value))}
                  placeholder='Unit Price'
                />
              </td>
              <td>{item.subTotal.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='total'>
        <strong>
            Total: {total.toFixed(2)}
           
        </strong>
      </div>

      <button type='button' onClick={addItem} id='nonPrintArea' className='button'>
        Add Item
      </button>

      <div className='greed'>
        Thank you<br />
        Come again
      </div>

      <button className='button' id='nonPrintArea' onClick={handlePrint}>
        Print
      </button>
    </div>
  );
};

export default AddBills;
