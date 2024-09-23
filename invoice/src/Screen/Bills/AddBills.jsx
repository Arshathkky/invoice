import React, { useEffect, useState } from 'react';
import Header from '../../Component/Header';
import axios from 'axios';

const AddBills = () => {

  useEffect(() => {
    
    const fetchInvoiceId = async () => {
      try {
        
        const response = await axios.get('http://localhost:3000/api/bill/getId');
        setInvoiceId(response.data);
      } catch (error) {
        console.error('Error fetching invoice ID:', error);
      }
    };

    fetchInvoiceId();
  }, []);

  const [suggestion,setSuggestion] = useState([])
  const [customerName ,setCustomerName] =useState('')
  //const [no,setNo]= useState('1');
  //const [itemName,setItemName]= useState([]);
  const [invoiceId,setInvoiceId] = useState('')
  //const [quantity, setQuantity] = useState([]);
  //const [unitPrice, setUnitPrice] = useState([]);
  //const [subTotal, setSubTotal] = useState([]);
  const [total, setTotal] = useState(0);
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));

  const [items, setItems] = useState([
    { no: 1, itemName: '', quantity: 1, unitPrice: 0, subTotal: 0 },
  ]);

  
  const addItem = () => {
   
    setItems([
      ...items,
      { no: items.length + 1, itemName: '', quantity: 1, unitPrice: 0, subTotal: 0 }
    ]);
    
  };


  const handleItemChange = async(index, field, value) => {

    const updatedItems = [...items];
    updatedItems[index][field] = value;
    
    if(field ==='itemName'){
      try {
        const search = await axios.get(`http://localhost:3000/api/items/search?q=${value}`);
        setSuggestion(search.data); 
      } catch (error) {
        console.error('Error fetching item suggestions:', error);
      }
    }
  
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
      const billItems = {invoiceId,customerName,items,total,date};
      const response = await axios.post('http://localhost:3000/api/bill/addBill',billItems);
      const update = await axios.put('http://localhost:3000/api/items/quantity',{items});
      if (response.data.status === "success") {
        setInvoiceId(response.data.invoiceId);
        
        window.print();
        setItems([{ no: 1, itemName: '', quantity: 1, unitPrice: 0, subTotal: 0 }]);
        setCustomerName('');
        setTotal(0);
        setDate(new Date().toISOString().substring(0, 10));
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
     <div>
        Customer name:
      <input className='' type='text' name='customer' onChange={(e)=>setCustomerName(e.target.value)}  />
      </div> 
      <div>
        Date:
        <input type='date' value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
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
                  list={`suggestions-${index}`}
                />
                <datalist id={`suggestions-${index}`}>
                  {suggestion.map((suggestionItem, i) => (
                    <option key={i} value={suggestionItem.itemName} />
                  ))}
                </datalist>
               
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
