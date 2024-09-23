import React, { useEffect, useState } from 'react';
import PrintComponent from '../PrintScreen';
import axios from 'axios';

const ViewItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch("http://localhost:3000/api/items/view", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setItems(data);  // Set the fetched data to state
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    }

    fetchItems();  // Call the fetch function
  }, []);

  return (
    <div className='inventory'>
      <table border={"1px"}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Distributor</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? (
            items.map((item) => (
              <tr key={item._id}>
                <td>{item.itemName}</td>
                <td>{item.quantity}</td>
                <td>{item.unitPrice}</td>
                <td>{item.Distributor}</td>
                <td>{item.orderDate}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No items found</td>
            </tr>
          )}
        </tbody>
      </table>
      <PrintComponent />
    </div>
  );
};

export default ViewItems;
