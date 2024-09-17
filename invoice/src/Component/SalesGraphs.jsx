import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const SalesGraph = () => {
  const [data, setData] = useState([]);
  const [view, setView] = useState('day'); // 'day', 'week', or 'month'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/bill/salesData?view=${view}`);
        console.log('Fetched data:', response.data); 
        setData(response.data);
      } catch (error) {
        console.error('Error fetching sales data:', error);
      }
    };
    fetchData();
  }, [view]);

  return (
    <div className="sales-graph-container">
      <div className="sales-graph-buttons">
        <button className="button" onClick={() => setView('day')}>Today</button>
        <button className="button" onClick={() => setView('week')}>This Week</button>
        <button className="button" onClick={() => setView('month')}>This Month</button>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip contentStyle={{ borderRadius: '4px', border: '1px solid #ddd', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
          <Legend />
          <Bar dataKey="total" fill="blueviolet" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesGraph;
