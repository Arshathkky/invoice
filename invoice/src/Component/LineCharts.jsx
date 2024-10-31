const {withNativeWind} = require('nativewind/metro');
import React, { useState, useEffect } from 'react';
import "'./global.css'";
import { GluestackUIProvider } from "@/'components/ui'/gluestack-ui-provider";
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import axios from 'axios';

Chart.register(...registerables, annotationPlugin);

const LineCharts = () => {
  const [data, setData] = useState([]); 
  const [categories, setCategories] = useState([]); // Renamed to categories for clarity
  const [selectedCategory, setSelectedCategory] = useState(''); // State for selected category
  const [threshold, setThreshold] = useState(0); 
  
  useEffect(() => {
    const fetchItems = async () => {
      try {
        // Fetch all items to populate categories
        const response = await axios.get('http://localhost:3000/items/view');
        const lowQuantityResponse = await axios.get('http://localhost:3000/items/lowItems');

        // Process low quantity items
        const simplifiedData = lowQuantityResponse.data.flatMap(itemGroup => 
          Array.isArray(itemGroup.items)
            ? itemGroup.items.map(item => ({
                itemName: item.itemName,
                quantity: item.quantity,
                distributor: item.Distributor,  
                ...item  
              }))
            : [{ 
                itemName: itemGroup.items.itemName, 
                quantity: itemGroup.items.quantity,
                distributor: itemGroup.items.Distributor,  
                ...itemGroup.items 
              }]
        );

        // Process categories
        const simplifiedCategory = response.data.flatMap(categoryGroup =>
          Array.isArray(categoryGroup.items)
          ? categoryGroup.items.map(cat => ({
            category: cat.category,
          }))
          : [{
              category: categoryGroup.items.category,
              ...categoryGroup.items
          }]
        );
        
        const uniqueCategories = [...new Set(simplifiedCategory.map(cat => cat.category))];
        setCategories(uniqueCategories); // Set unique categories
        setData(simplifiedData);
        setThreshold(Math.max(...simplifiedData.map(item => item.quantity)));
        
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchItems();
  }, []);

  const handleCategoryChange = async (e) => {
    const selectedCategory = e.target.value;
    setSelectedCategory(selectedCategory);

    try {
      // Fetch low-quantity items based on selected category
      const response = await axios.get(`http://localhost:3000/items/lowItems?category=${selectedCategory}`);
      const simplifiedData = response.data.flatMap(itemGroup => 
        Array.isArray(itemGroup.items)
          ? itemGroup.items.map(item => ({
              itemName: item.itemName,
              quantity: item.quantity,
              distributor: item.Distributor,  
              ...item  
            }))
          : [{ 
              itemName: itemGroup.items.itemName, 
              quantity: itemGroup.items.quantity,
              distributor: itemGroup.items.Distributor,  
              ...itemGroup.items 
            }]
      );

      setData(simplifiedData);
      setThreshold(Math.max(...simplifiedData.map(item => item.quantity)));
      
    } catch (err) {
      console.error(err.message);
    }
  };

  const maxValue = data.length ? Math.max(...data.map(item => item.quantity)) : 0;

  const filteredData = data.filter(item => item.quantity <= threshold);

  const chartData = {
    labels: filteredData.map(item => `${item.itemName} (${item.distributor})`), // Display item name and distributor
    datasets: [
      {
        label: 'Product Quantity',
        data: filteredData.map(item => item.quantity),
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: maxValue + 5,
      },
    },
    plugins: {
      annotation: {
        annotations: {
          line1: {
            type: 'line',
            yMin: threshold,
            yMax: threshold,
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            label: {
              content: `Threshold: ${threshold}`,
              enabled: true,
              position: 'center',
            },
          },
        },
      },
    },
  };

  return (
    <div>
      <h2>Products Below Selected Quantity</h2>
      <input
        type="range"
        min="0"
        max={maxValue}
        value={threshold}
        onChange={(e) => setThreshold(Number(e.target.value))}
        style={{ width: '100%', cursor: 'grab' }}
      />
      <select name='category' value={selectedCategory} onChange={handleCategoryChange}>
        <option value=''>Select Category</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>{cat}</option>
        ))}
      </select>
      <p>Selected Quantity value: {threshold}</p>
      <div style={{ width: '600px', height: '300px' }}>
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default LineCharts;
