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
  const [no,setNo]= useState('1');
  const [invoiceId,setInvoiceId] = useState('')
  const [quantity, setQuantity] = useState(0);
  const [unitPrice, setUnitPrice] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);

  const [items, setItems] = useState([
    { id: 1, description: '', quantity: 1, unitPrice: 0, subTotal: 0 },
  ]);

  
  const addItem = () => {
   
    setItems([
      ...items,
      { id: items.length + 1, description: '', quantity: 1, unitPrice: 0, subTotal: 0 }
    ]);
    setNo(id+1);
  };


  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;

  
    updatedItems[index].subTotal = updatedItems[index].quantity * updatedItems[index].unitPrice;
    setSubTotal(updatedItems[index].subTotal);
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
      const items = {customerName, quantity,unitPrice,subTotal,total};
      
      const response = await axios.post('http://localhost:3000/bill/addBill',items);
      setInvoiceId(response.data);
      alert("added successfully",response);
      
    }
    
    catch(e){
      console.error(e);
      alert("error");
    }
    window.print();
  }


  return (
    <div className='invoice'>
      <Header invoiceId={invoiceId}/>
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
            <tr key={item.id}>
              
              <td>{item.id}</td>
              <td>
                <input
                  type='text'
                  value={item.description}
                  onChange={(e) => handleItemChange(index, 'description', e.target.value,setCustomerName(e.target.value))}
                  placeholder='Enter item description'
                />
              </td>
              <td>
                <input
                  type='number'
                  value={item.quantity}
                  onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value) ,setQuantity(e.target.value))}
                  placeholder='Quantity'
                />
              </td>
              <td>
                <input
                  type='number'
                  value={item.unitPrice}
                  onChange={(e) => handleItemChange(index, 'unitPrice', parseFloat(e.target.value),setUnitPrice(e.target.value))}
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
