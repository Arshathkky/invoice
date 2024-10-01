import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { getAllProduct } from '../../API/inventoryAPI';

const ViewItems = () => {

  const [items,setItems] = useState([]);

  useEffect(()=>{
      const fetchItems = async ()=>{
        try{
            const response = await getAllProduct();
            setItems(response);

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
     
    </div>
  )
}

export default ViewItems