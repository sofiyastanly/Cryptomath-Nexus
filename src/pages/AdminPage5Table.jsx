    
import React, { useEffect,useState } from 'react'
function AdminPage5Table() {
    const [gamescore,setGamescore] = useState([])


    useEffect(()=>{ 

        fetch('https://projectlogi.club/mathmate/public/api/getgamescoreadmin',{
            method:'get',
            headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify(param)
        }).then((response)=>{
          response.json().then((data)=>{
            console.log(data)
            setGamescore(data)

          })
        })

    },[])
   
  
  return (
   <>
    {/* <nav aria-label="breadcrumb"  >
                <ol className="breadcrumb bg-light p-2 px-4 border border-1 rounded-3">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Score Card</li>
                </ol>
            </nav> */}

<div className="row">
    <div className="col-2"></div>
    <div className="col" style={{marginTop:'-645px'}}>

            <div className="dataTable my-5 pb-5">
                <div className="row justify-content-between my-3">
                    
                    <div className="col-sm-12 col-md-3">
                        <div id="dataTable_filter" className="dataTables_filter d-flex align-items-center gap-3">
                            <label>Search:</label>
                            <input type="search" className="form-control form-control-sm  " placeholder="" aria-controls="dataTable" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <table className="table table-bordered table-hover rounded">
                            <thead>
                                <tr>
                                    <th scope="col">Student ID</th>
                                    <th scope="col">School Name</th>
                                    <th scope="col">Student Name</th>
                                    <th scope="col">Game Name</th>
                                    <th scope="col">Score</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                gamescore.map((data,index)=>{
                                    return(
                                        <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{data.slname}</td> 
                                    <td>{data.stname}</td>
                                    <td>{data.gamename}</td>
                                    <td>{data.score}</td>
                                
                                </tr> 
                                    )
                                })
                                
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

              
            </div>
            </div>
            </div>
            </>
  )
}

export default AdminPage5Table