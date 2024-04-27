import React, { useEffect, useState } from 'react';
import {  Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';



function AdminPage6Table() { 
  const [checkData, setCheckData] = useState([]);
  Chart.register(...registerables);


  useEffect(() => {
    fetch('https://projectlogi.club/mathmate/public/api/viewallscores')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCheckData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const chartData = {
    labels: checkData.map(score => `${score.gamename}`),
    datasets: checkData.reduce((acc, score) => {
      const existingDataset = acc.find(dataset => dataset.label === `${score.studentname}`);
      if (existingDataset) {
        existingDataset.data.push(score.score);
      } else {
        acc.push({
          label: `${score.studentname}`,
          data: [score.score],
          fill: false,
          borderColor: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
        });
      }
      return acc;
    }, []),
  };

  return (
    <div className="row">
    <div className="col-2"></div>
    <div className="col" style={{marginTop:'-600px'}}>
    <div>
      <Line data={chartData} />
    </div>
    </div>
    </div>
  );
}

export default AdminPage6Table;
