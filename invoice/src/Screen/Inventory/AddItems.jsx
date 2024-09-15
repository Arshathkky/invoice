import React, { useState } from 'react'
import axios from 'axios'

const AddItems = () => {
  const [itemName,setItemName] = useState('');
  const [unitPrice,setUnitPrice] = useState('');
  const [quantity,setQuantity] = useState('');
  const [Distributor,SetDistributer] = useState('');
  const [orderDate,setOrderDate] = useState('');

  const handleSubmit =async (e)=>{
    e.preventDefault();

    const itemsData={
      itemName,
      unitPrice,
      quantity,
      Distributor,
      orderDate
    }

    try{
        const response = await axios.post('http://localhost:3000/items/',itemsData);
        alert("success")
        console.log('Item added successfully',response.data);
    }
    catch(err){
          console.error("error adding items",err);
          alert("fail")
    }
   
  }
  return (
    <div className='inventory'>
      <form onSubmit={handleSubmit}>
       <table className='form-group'>
            <tr>
              <th><label>Item Name</label></th>
              <td><input type='text' name='item_name' onChange={(e)=>setItemName(e.target.value)} /></td>
            </tr>
            <tr>
              <th><label>Unit Price</label></th>
              <td><input type='text' name='item_name'  onChange={(e)=>setUnitPrice(e.target.value)}/></td>
            </tr>
            <tr>
              <th><label>Quantity</label></th>
              <td><input type='text' name='item_name' onChange={(e)=>setQuantity(e.target.value)} /></td>
            </tr>
            <tr>
              <th><label>Distributer Name</label></th>
              <td><input type='text' name='item_name' onChange={(e)=>SetDistributer(e.target.value)} /></td>
            </tr>
            <tr>
              <th><label>Order Date</label></th>
              <td><input type='text' name='item_name' onChange={(e)=>setOrderDate(e.target.value)}/></td>
            </tr>

      </table>
      <button type='submit' className='button'>Add Items</button>
      </form>
    </div>
  )
}

export default AddItems