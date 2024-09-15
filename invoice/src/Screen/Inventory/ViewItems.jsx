import React, { useEffect, useState } from 'react'
import PrintComponent from '../PrintScreen'
import axios from 'axios'

const ViewItems = () => {

  const [items,setItems] = useState([]);

  useEffect(()=>{
      const fetchItems = async ()=>{
        try{
            const response = await axios.get('http://localhost:3000/items/view')
            setItems(response.data);

        }
        catch(err){
            console.error(err.message)
        }
      }

      fetchItems();
  },[])

  
  return (
    <div className='inventory'>
      <table border={"1px"}>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Unit Price</th>
          <th>Distributer</th>
          <th>Date</th>
        </tr>
        {items.length>0 ?(
          items.map((item)=> (
            <tr key={item._id}>
          
            <td>{item.itemName}</td>
            <td>{item.quantity}</td>
            <td>{item.unitPrice}</td>
            <td>{item.Distributor}</td>
            <td>{item.orderDate}</td>
            
          </tr>
          ))
          
        ): (<>no items found</>)}
        
      </table>
      <PrintComponent/>
    </div>
  )
}

export default ViewItems