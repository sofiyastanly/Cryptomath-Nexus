import React, { useEffect,useState } from 'react'
import { Line } from 'react-chartjs-2'


function AdminPage6Table() {
    const [checkData,setCheckData] = useState([])


    useEffect(()=>{
       
      
        fetch('https://projectlogi.club/mathmate/public/api/viewallscores',{
            method:'GET',
            headers: { 'Content-Type': 'application/json' },
            
        }).then((response)=>{
          response.json().then((data)=>{
            console.log(data)
            setCheckData(data)

          })
        })

    },[])

    const chartData = {
        labels: checkData.map(score => score.gid), // Game IDs
        datasets: checkData.map((score, index) => ({
          label: `Student ${score.sid}`, // Student ID
          data: score.score, // Scores
          fill: false,
          borderColor: `rgb(${index * 50}, ${255 - index * 50}, ${index * 10})`, // Unique color for each student
        })),
      };

  return (
   <>

<Line data={chartData} />

    {/* <nav aria-label="breadcrumb"  >
                <ol className="breadcrumb bg-light p-2 px-4 border border-1 rounded-3">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Score Improvement</li>
                </ol>
            </nav>

           

            <div className="col-12">
        <table className="table table-bordered table-hover rounded">
            <thead>
                <tr>
                    <th scope="col">SL No</th>
                    <th scope="col">Student ID</th>
                    <th scope="col">Student Name</th>
                    <th scope="col">Score</th>

                    <th scope="col">Game</th>
                   
                </tr>
            </thead>
            <tbody>
                {
                    checkData.map((data, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{data.students}</td>
                                <td>{data.studentname}</td>
                                <td>{data.score}</td>
                                <td>{data.games}</td>
                                
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>


<div className="row justify-content-between my-3">
    <div className="col-sm-12 col-md-6">
        <div className="dataTables_length d-flex align-items-center gap-3" id="dataTable_length">
            <label>Showing 1 to {checkData.length} of {checkData.length} entries</label>
        </div>
    </div>
    <div className="col-sm-12 col-md-6">
        <nav aria-label="Page navigation">
            <ul className="pagination">
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</div> */}

   </>
  )
}

export default AdminPage6Table