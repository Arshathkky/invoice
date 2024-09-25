import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import axios from 'axios';

Chart.register(...registerables, annotationPlugin);

const LineCharts = () => {
  const [data, setData] = useState([]);  // Moved above
  const [threshold, setThreshold] = useState(0); // Initialized to 0 by default
  
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:3000/items/view');
        setData(response.data);
        setThreshold(Math.max(...response.data.map(item => item.quantity))); // Set threshold after data is fetched
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchItems();
  }, []);

  // Ensure `data` is available before calculating `maxValue`
  const maxValue = data.length ? Math.max(...data.map(item => item.quantity)) : 0;
  const filteredData = data.filter(item => item.quantity <= threshold);

  const chartData = {
    labels: filteredData.map(item => item.itemName),
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
      <h2>Product below selected quantity</h2>
      <input
        type="range"
        min="0"
        max={maxValue}
        value={threshold}
        onChange={(e) => setThreshold(Number(e.target.value))}
        style={{ width: '100%' ,cursor:'grab'}}
      />
      <p>Selected Quantity value: {threshold}</p>

      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineCharts;
