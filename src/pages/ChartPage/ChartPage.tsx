import React, { useRef, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';
import styles from './ChartPage.module.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

function ChartPage() {
  const [showPieChart, setShowPieChart] = useState(false);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)'
      ],
      borderWidth: 1
    }]
  });

  const loadChartData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/age-data');
      const data = response.data;
      const labels = data.map(item => item.age_group);
      const values = data.map(item => item.count);
      setChartData({
        labels: labels,
        datasets: [{
          data: values,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
        }]
      });
    } catch (error) {
      console.error('Fehler beim Laden der Daten:', error);
    }
  };

  const loadPieChart = () => {
    setShowPieChart(true);
    loadChartData();
  };

  return (
    <div className={styles.chartContainer}>
      <h1 className={styles.title}>Altersverteilung</h1>
      <div className={styles.buttonContainer}>
        <button className="btn btn-primary" onClick={loadPieChart}>Pie Chart laden</button>
        <button className="btn btn-warning" onClick={() => window.location.reload()}>Seite neu laden</button>
      </div>
      {showPieChart && <Pie data={chartData} />}
    </div>
  );
}


export default ChartPage;