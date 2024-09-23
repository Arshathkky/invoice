import axios from 'axios';
import React, { useEffect, useState } from 'react';


const ViewBills = () => {
  const [search, setSearch] = useState('');
  const [bills, setBills] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const fetchItems = await axios.get('http://localhost:3000/api/');
        setBills(fetchItems.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchItem();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 10); 
  };

  return (
    <div className='invoice'>
      <div className='search-controls'>
        <button className='button'>By Name</button>
        <button className='button'>By Date</button>
        <button className='button'>By Invoice</button>
        <br />
        <label>Search here</label>
        <input type='text' onChange={(e) => { setSearch(e.target.value) }} />
        <button className='button'>Search</button>
      </div>
      <table className='main-table'>
        <thead>
          <tr>
            <th>Invoice Id</th>
            <th>Customer Name</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Sub Total</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {bills.length > 0 ? (
            bills.slice(0, visibleCount).flatMap((bill) => 
              bill.items.map((item, index) => (
                <tr key={`${bill._id}-${index}`}>
                  {index === 0 && (
                    <>
                      <td rowSpan={bill.items.length} className='bill-id'>{bill.invoiceId}</td>
                      <td rowSpan={bill.items.length} className='customer-name'>{bill.customerName}</td>
                    </>
                  )}
                  <td>{item.itemName}</td>
                  <td>{item.quantity}</td>
                  <td>{item.unitPrice}</td>
                  <td>{item.subTotal}</td>
                  {index === 0 && (
                    <td rowSpan={bill.items.length} className='total'>{bill.total}</td>
                  )}
                </tr>
              ))
            )
          ) : (
            <>No items found</>
          )}
        </tbody>
      </table>
      {visibleCount < bills.length && (
        <button className='button' onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default ViewBills;
