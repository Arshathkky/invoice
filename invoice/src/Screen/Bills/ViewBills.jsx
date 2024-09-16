import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ViewBills = () => {
  const [search,setSearch] = useState([]);
  const [items,setItems] = useState([]);

  useEffect(()=>{
    const fetchItem =async ()=>{
        try{
              const fetchItems = await axios.get('http://localhost:3000/bill/getBill')
              setItems(fetchItems.data)
              console.log('does not fetch');
            
            }
            catch(err){
              console.error(err)
            }
    }

    fetchItem();  
  },[])
  return (
    <div className='invoice' >
      <div>
        <button className='button'>By Name</button>
        <button className='button'>By Date</button>
        <button className='button'>By invoice</button>
        <br/>
        <lable>Search here</lable>
        <input type='text' onChange={(e)=>{setSearch(e.target.value)}}></input>
        <button className='button'>Search</button>
      </div>
      <table >
      <tr>
        <th>No</th>
        <td>customerName</td>
        <th>Description</th>
        <th>Quantity</th>
        <th>unit price</th>
        <th>Sub Total</th>        
        <th>Total</th>        
      </tr>
      
        {items.length>0 ?(
          items.map((item)=>(
            <tr key={item._id}>
              <td>{item.Id}</td>
              <td>{item.customerName}</td>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
              <td>{item.unitPrice}</td>
              <td>{item.subTotal}</td>
              <td>{item.total}</td>
               
            </tr>
          ))
        ):(<>no items found</>)}
      
     </table>
    </div>
  )
}

export default ViewBills
