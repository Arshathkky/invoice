const {withNativeWind} = require('nativewind/metro');
import React, { useState } from 'react';
import "'./global.css'";
import { GluestackUIProvider } from "@/'components/ui'/gluestack-ui-provider";
import axios from 'axios';
import getFormatDate from '../../Component/AdditionalComponent/getFormatData';


const AddItems = () => {
  const today = getFormatDate();
  const [items, setItems] = useState([
    { itemName: '', unitPrice: '', quantity: '', category: '', Distributor: '', orderDate: today }
  ]);

  const [creditPayment, setCreditPayment] = useState(0);
  const [cashPayment, setCashPayment] = useState(0);
  const [cheque, setCheque] = useState(0);

  const handleInputChange = (index, event) => {
    const values = [...items];
    values[index][event.target.name] = event.target.value;
    setItems(values);
  };

  const handleAddItems = () => {
    setItems([
      ...items,
      { itemName: '', unitPrice: '', quantity: '', category: '', Distributor: '', orderDate: today }
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/items/', { items });
      alert("Items added successfully");
      console.log('Item added successfully', response.data);
      setItems([{itemName: '', unitPrice: '', quantity: '', category: '', Distributor: '', orderDate: today}])
    } catch (err) {
      console.error("Error adding items", err);
      alert("Failed to add items");
    }
  };

  return (
    <div className="inventory">
      <form onSubmit={handleSubmit}>
        <table>
          <thead>
            <th>Item Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Distributor</th>
            <th>Order Date</th>
          </thead>
          <tbody>
            {items.map((item,index)=>(
              <tr key={index}>
                  <td>
                    <input
                    type="text"
                    name="itemName"
                    value={item.itemName}
                    onChange={(e) => handleInputChange(index, e)}
                    />
                  </td>
                  <td>
                  <input
                    type="text"
                    name="unitPrice"
                    value={item.unitPrice}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="quantity"
                    value={item.quantity}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="category"
                    value={item.category}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="Distributor"
                    value={item.Distributor}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="orderDate"
                    value={item.orderDate}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
          <button type="button" className="button" onClick={handleAddItems}>
          Add Item
        </button>
       
        </table>
        
          
        <button type="submit" className="button">Submit Items</button>
      </form>
    </div>
  );
};

export default AddItems;
// {/* <div key={index} className="form-group">
//             <table>
//             {items.map((item, index) => (
//               <tbody>

//                 <tr></tr>
//                 <tr>
//                   <td><label>Item Name</label></td>
//                   <td><input type="text" name="itemName" value={item.itemName} onChange={(e) => handleInputChange(index, e)} /></td>
//                 </tr>
//                 <tr>
//                   <td><label>Unit Price</label></td>
//                   <td><input type="text" name="unitPrice" value={item.unitPrice} onChange={(e) => handleInputChange(index, e)} /></td>
//                 </tr>
//                 <tr>
//                   <td><label>Quantity</label></td>
//                   <td><input type="text" name="quantity" value={item.quantity} onChange={(e) => handleInputChange(index, e)} /></td>
//                 </tr>
//                 <tr>
//                   <td><label>Category</label></td>
//                   <td><input type="text" name="category" value={item.category} onChange={(e) => handleInputChange(index, e)} /></td>
//                 </tr>
//                 <tr>
//                   <td><label>Distributor Name</label></td>
//                   <td><input type="text" name="Distributor" value={item.Distributor} onChange={(e) => handleInputChange(index, e)} /></td>
//                 </tr>
//                 <tr>
//                   <td><label>Order Date</label></td>
//                   <td><input type="text" name="orderDate" value={item.orderDate} onChange={(e) => handleInputChange(index, e)} /></td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         ))}
//         {/* The "Add Item" button is outside the map */}
//         <button type="button" className="button" onClick={handleAddItems}>
//           Add Item
//         </button>

//         <table>
//           <tbody>
//             <tr>
//               <td><label>Cheque Payment</label></td>
//               <td><input type="text" name="cheque" onChange={(e) => setCheque(e.target.value)} /></td>
//             </tr>
//             <tr>
//               <td><label>Cash Payment</label></td>
//               <td><input type="text" name="cashPayment" onChange={(e) => setCashPayment(e.target.value)} /></td>
//             </tr>
//             <tr>
//               <td><label>Credit Payment</label></td>
//               <td><input type="text" name="creditPayment" onChange={(e) => setCreditPayment(e.target.value)} /></td>
//             </tr>
//           </tbody>
//         </table>
//          */}