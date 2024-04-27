import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from "react-router-dom";

function StudentTable1() {
    const [games, setGames] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch('https://projectlogi.club/mathmate/public/api/getgame', {
            method: 'GET'
        }).then((response) => {
            response.json().then((data) => {
                setGames(data)
            })
        })

    }, [])

    const playGame = (id) => {


        navigate("/gamepage", { state: { id: id } })


    }


    return (
        <>
          
          <div className="row">
      <div className="col-2"></div>
      <div className="col" style={{marginTop:'-645px'}}>



            <div className="dataTable my-5 pb-5">
                <div className="row justify-content-between my-3">
                    <div className="col-sm-12 col-md-2">
                        <div className="dataTables_length d-flex align-items-center gap-3" id="dataTable_length">
                            <label> Show</label>
                            <select name="dataTable_length" aria-controls="dataTable" className="form-control form-control-sm">
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                            <label>entries </label>
                        </div>
                    </div>
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
                                    <th scope="col">Game ID</th>
                                    <th scope="col">Game Name</th>

                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    games.map((data,index) => {
                                        return (
                                            <tr>
                                                <th scope="row">{index+1}</th>
                                                <td>{data.name}</td>

                                                <td>
                                                    <button onClick={(e) => {
                                                        e.preventDefault()
                                                        playGame(data.id)
                                                    }}
                                                        className="btn btn-primary ">Play</button>

                                                </td>
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

export default StudentTable1