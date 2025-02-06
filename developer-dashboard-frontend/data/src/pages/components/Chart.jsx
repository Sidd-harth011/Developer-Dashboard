// SalaryChart.js
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SalaryChart = () => {
  const data = {
    labels: [
      'January', 'February', 'March', 'April', 'May',
      'June', 'July', 'August', 'September', 'October',
      'November', 'December',
    ],
    datasets: [
      {
        label: 'Monthly Salary',
        data: [3000, 3200, 3100, 3000, 3400, 3300, 3500, 3600, 3400, 3700, 3900, 4000],
        backgroundColor: (ctx) => {
          const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, '#42a5f5'); // Light blue
          gradient.addColorStop(1, '#1e88e5'); // Darker blue
          return gradient;
        },
        borderWidth: 0,
        borderRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow flexibility in dimensions
    plugins: {
      legend: {
        display: false,
        position: 'top',
        labels: {
          font: {
            size: 12, // Adjust font size for smaller screens
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 10, // Adjust label font size for smaller screens
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 10, // Adjust label font size for smaller screens
          },
        },
      },
    },
  };

  return (
    <div
      style={{
        maxWidth: '90%', // Flexible width for different screen sizes
        height: '400px', // Base height
        margin: '20px auto', // Center alignment
      }}
    >
      <Bar data={data} options={options} />
    </div>
  );
};

export default SalaryChart;
