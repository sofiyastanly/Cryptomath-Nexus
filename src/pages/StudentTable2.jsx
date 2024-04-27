import React, { useEffect,useState } from 'react'
import {  Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
function StudentTable2() {

    const [gamescore,setGamescore] = useState([])

    const [checkData, setCheckData] = useState([]);
    Chart.register(...registerables);
    
    const userdata = JSON.parse(localStorage.getItem('userdata'))
  
    useEffect(() => {
      fetch('https://projectlogi.club/mathmate/public/api/viewallscores')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          data = data.filter((d)=>{

            return d.sid==userdata.id

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


    useEffect(()=>{
        let info = JSON.parse(localStorage.getItem('userdata'))

        // console.log('infooooooooooo',info);


        let param ={
            id:info.id
        }
        console.log(param)
        fetch('https://projectlogi.club/mathmate/public/api/getgamescore',{
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(param)
        }).then((response)=>{
          response.json().then((data)=>{
            console.log('dataaaaaaa',data)
            setGamescore(data)

          })
        })

    },[])
 

  return (
   <>
         
         <div className="row">
      <div className="col-2"></div>
      <div className="col" style={{marginTop:'-645px'}}>

            <div className="dataTable my-5 pb-5">
             

                <div className="row">
                    <div className="col-12">
                        <table className="table table-bordered table-hover rounded">
                            <thead>
                                <tr>
                                    <th scope="col">Score ID</th>
                                    <th scope="col">Game Name</th> 
                                    <th scope="col">Score</th> 
                                </tr>
                            </thead>
                            <tbody>
                                {
                                gamescore.map((data,index)=>{
                                  console.log("niji",data);
                                    return(
                                        <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{data.name}</td> 
                                    <td>{data.gamescore}</td>
                                    
                                </tr> 
                                    )
                                })
                                
                                }
                                
                                
                            </tbody>
                        </table>
                    </div>
                </div>
                <Line data={chartData} />

             
            </div>
            </div>
            </div>
            </>
  )
}

export default StudentTable2