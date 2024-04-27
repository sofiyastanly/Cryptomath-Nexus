import React, { useEffect, useState } from "react";
import CustomPaginationActionsTable from "../components/CustomPaginationActionsTable";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
function AdminTable() {
  // const [checkData, setCheckData] = useState([]);
  // Chart.register(...registerables);

  // useEffect(() => {
  //   fetch("https://projectlogi.club/mathmate/public/api/viewallscores")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setCheckData(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  // const chartData = {
  //   labels: checkData.map((score) => `${score.gamename}`),
  //   datasets: checkData.reduce((acc, score) => {
  //     const existingDataset = acc.find(
  //       (dataset) => dataset.label === `${score.studentname}`
  //     );
  //     if (existingDataset) {
  //       existingDataset.data.push(score.score);
  //     } else {
  //       acc.push({
  //         label: `${score.studentname}`,
  //         data: [score.score],
  //         fill: false,
  //         borderColor: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
  //           Math.random() * 255
  //         })`,
  //       });
  //     }
  //     return acc;
  //   }, []),
  // };

  // return (
  //   <>
  //     <div className="container">
  //       <nav aria-label="breadcrumb">
  //         <ol className="breadcrumb bg-light my-4 p-3 px-4 border border-1 rounded-3">
  //           <li className="breadcrumb-item">
  //             <a href="#">Home</a>
  //           </li>
  //           <li className="breadcrumb-item active" aria-current="page">
  //             School
  //           </li>
  //         </ol>
  //       </nav>
  //     </div>
  //     {/* <div className='container'>
  //                   <div className='rounded-3 w-100 my-4' style={{ 'backgroundColor': 'black', 'height': '500px' }}>
  //                       <div style={{ 'padding': '20px' }}>
  //                         <h1 style={{ 'display': 'flex', 'justifyContent': 'center', 'paddingRight': '20px','color':'white' }} >Welcome Admin</h1>
  //                       </div><br />
                       

  //                   </div>
  //               </div> */}
  //     <div class="container pt-4 px-4">
  //       <div class="row g-4">
  //         <div class="col-sm-6 col-xl-3">
  //           <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
  //             <i class="fa fa-chart-line fa-3x text-primary"></i>
  //             <div class="ms-3">
  //               <p class="mb-2">No. of School</p>
  //               <h6 class="mb-0">3</h6>
  //             </div>
  //           </div>
  //         </div>
  //         <div class="col-sm-6 col-xl-3">
  //           <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
  //             <i class="fa fa-chart-bar fa-3x text-primary"></i>
  //             <div class="ms-3">
  //               <p class="mb-2">No.of Teachers</p>
  //               <h6 class="mb-0">10</h6>
  //             </div>
  //           </div>
  //         </div>
  //         <div class="col-sm-6 col-xl-3">
  //           <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
  //             <i class="fa fa-chart-area fa-3x text-primary"></i>
  //             <div class="ms-3">
  //               <p class="mb-2">No.of Students</p>
  //               <h6 class="mb-0">50</h6>
  //             </div>
  //           </div>
  //         </div>
  //         <div class="col-sm-6 col-xl-3">
  //           <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
  //             <i class="fa fa-chart-pie fa-3x text-primary"></i>
  //             <div class="ms-3">
  //               <p class="mb-2">No.of Games</p>
  //               <h6 class="mb-0">7</h6>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     <div class="container pt-4 px-4">
  //       <div class="row g-4">
  //         <div class="col-sm-12 col-md-12 col-xl-12">
  //           <div class="h-100 bg-light rounded p-4">
  //             <div class="d-flex align-items-center justify-content-between mb-2">
  //               <h6 class="mb-0">Report</h6>
  //             </div>
  //             <div class="container">
  //               <Line data={chartData} />
  //             </div>
  //           </div>
  //         </div>
 
  //       </div>
  //     </div>
  //   </>
  // );
}

export default AdminTable;
