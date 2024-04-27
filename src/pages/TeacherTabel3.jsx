import React, { useEffect, useState } from 'react';
import {  Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';


function TeacherTable3() {


    const [checkData, setCheckData] = useState([]);
    Chart.register(...registerables);
    
    const userdata = JSON.parse(localStorage.getItem('userdata'))
  
    useEffect(() => {
      fetch('https://projectlogi.club/mathmate/public/api/viewallscores')
        .then(response => response.json())
        .then(data => {
          
          data = data.filter((d)=>{
            console.log(data,"yfdsygzx");
            return d.teachersid==userdata.id

          })
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
      <div className="col" style={{marginTop:'-645px'}}>
             
      <div>
        <Line data={chartData} />
      </div>
      </div>
      </div>
    );
}

export default TeacherTable3