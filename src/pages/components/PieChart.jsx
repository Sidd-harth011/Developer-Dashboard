// TrafficPieChart.js
import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// Import device icons (React Icons)
import { FaMobileAlt, FaDesktop, FaTabletAlt } from 'react-icons/fa';

const TrafficPieChart = () => {
  // Data for traffic sources
  const data = {
    labels: ['Phone', 'Desktop', 'Tablet'],
    datasets: [
      {
        label: 'Traffic Sources',
        data: [60, 30, 10], // Example percentages
        backgroundColor: [
          '#4caf50', // Green for Phone
          '#2196f3', // Blue for Desktop
          '#ff9800', // Orange for Tablet
        ],
        hoverOffset: 4, // Enlarge slices on hover
      },
    ],
  };

  // Icons for each label
  const icons = [<FaMobileAlt />, <FaDesktop />, <FaTabletAlt />];

  // Options for the chart
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows flexible height and width
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          generateLabels: (chart) => {
            const dataset = chart.data.datasets[0];
            return chart.data.labels.map((label, index) => ({
              text: label,
              fillStyle: dataset.backgroundColor[index],
              hidden: false,
              lineCap: 'round',
              index,
            }));
          },
          usePointStyle: true, // Circular legend icons
          padding: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            const value = context.raw || 0;
            return `${label}: ${value}%`;
          },
        },
      },
    },
  };

  return (
    <div 
      style={{
        width: '100%',
        maxWidth: '600px', // Limit max width
        height: '400px', // Adjust height for responsiveness
        margin: '20px auto',
      }}
    >
      <Pie data={data} options={options} />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        {data.labels.map((label, index) => (
          <div
            key={index}
            style={{
              display: 'inline-block',
              margin: '0 10px',
              fontSize: '16px',
              color:'#8d8d8d',
              textAlign: 'center',
              justifyContent:'space-between'
            }}
          >
            {icons[index]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrafficPieChart;
