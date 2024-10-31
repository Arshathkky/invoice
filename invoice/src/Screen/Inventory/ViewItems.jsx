const {withNativeWind} = require('nativewind/metro');
import React, { useEffect, useState } from 'react';
import "'./global.css'";
import { GluestackUIProvider } from "@/'components/ui'/gluestack-ui-provider";
import axios from 'axios';
import { getAllProduct } from '../../API/inventoryAPI';

const ViewItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await getAllProduct(); // Fetch the items from the API
        setItems(response); // Set the entire response, which contains the array of items
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="inventory">
      <table border={"1px"}>
        <thead>
          <tr>
            <th>Distributor</th>
            <th>Date</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Category</th> 
            <th>Barcode</th>
            <th>Generate</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? (
            items.flatMap((item) => 
              item.items.map((innerItem, index) => (
                <tr key={innerItem._id}>
                  {index === 0 && (
                    <>
                      <td rowSpan={item.items.length} className='distributor'>{innerItem.Distributor}</td>
                      <td rowSpan={item.items.length} className='date'>{new Date(innerItem.orderDate).toLocaleDateString()}</td>
                    </>
                  )}
                  <td>{innerItem.itemName}</td>
                  <td>{innerItem.quantity}</td>
                  <td>{innerItem.unitPrice}</td>
                  <td>{innerItem.category}</td>
                  <td></td>
                  <td><button className='button'>generate</button></td>
                </tr>
              ))
            )
          ) : (
            <tr>
              <td colSpan="6">No items found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewItems;
