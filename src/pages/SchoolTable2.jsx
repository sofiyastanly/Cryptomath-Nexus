import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from "react-router-dom";

function Schoolpage2() {

    const [name, setName] = useState()
    const [link, setLink] = useState()


    const [games, setGame] = useState([])
    const [refresh, setRefresh] = useState(0)
    const navigate = useNavigate()
    useEffect(() => {
        fetch('https://projectlogi.club/mathmate/public/api/getgame', {
            method: 'GET'
        }).then((response) => {
            response.json().then((data) => {
                setGame(data)
            })
        })

    }, [refresh])

    const saveGame = () => {

        let param = {
            name: name,
            link: link
        }
        fetch('https://projectlogi.club/mathmate/public/api/saveschool_game', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(param)
        }).then((res) => {
            console.log('res', res)
            setRefresh(prev => prev + 1)
            navigate('/schoolpage2')


        })
    }

    // const editGames = (id) => {


    //     navigate("/editadminpage4", { state: { id: id } })


    // }
    // const deleteGame = (id) => {

    //     let param = {
    //         id:id
    //     }
    //     fetch('https://projectlogi.club/mathmate/public/api/getschool_gamebyid', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(param)
    //     }).then((res) => {
    //         setRefresh(prev => prev + 1)

    //     })

    // }


    return (
        <>
           <div className="row">
    <div className="col-2"></div>
    <div className="col" style={{marginTop:'-645px'}}>
           

            <div className="card mt-5">
                <div className='card-header'><i className="fa fa-plus"></i></div>
                <div className="card-body">

                    <form>
                        <div className="row g-3 align-items-center">
                            <div className="col-2">
                                <label for="inputPassword6" className="col-form-label">Game Name</label>
                            </div>
                            <div className="col-4">
                                <input type="text" onChange={(e) => setName(e.target.value)} id="inputPassword6" className="form-control" placeholder='Enter Game Name' aria-describedby="" />
                            </div>
                        </div>
                        <div className="row g-3 mt-2 align-items-center">
                            <div className="col-2">
                                <label for="inputPassword6" className="col-form-label">Game Link</label>
                            </div>
                            <div className="col-4">
                                <input type="text" onChange={(e) => setLink(e.target.value)} id="inputPassword6" className="form-control" placeholder='Enter Game Link' aria-describedby="" />

                            </div>
                        </div>


                        <button onClick={(e) => {
                            e.preventDefault()
                            saveGame();
                        }} className="btn btn-success mt-2">Save</button>
                    </form>

                </div>
            </div>

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

                                     
                                </tr>
                            </thead>
                            <tbody>

                       
                            {
                                    games.map((value, index) => {

                                        return (
                                            <tr key={index}>
                                                <th scope="row">
                                                    <span className="mb-0 text-sm" scope="row"><td> {value.id}</td>
                                                    </span>
                                                </th>
                                                <td>{value.name}</td>
                                                {/* <td>
                                                    <button className="btn btn-info" style={{ marginRight: 12 }}
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            editGames(value.id)
                                                        }}
                                                    > Edit</button>
                                                    <button className="btn btn-danger"
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            deleteGame(value.id)
                                                        }}
                                                    > Delete</button>
                                                </td> */}
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="row justify-content-between my-3">
                    <div className="col-sm-12 col-md-2">
                        <div className="dataTables_length d-flex align-items-center gap-3" id="dataTable_length">
                            <label> Showing 1 to 6 of 6 entries</label>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <nav aria-label="Page navigation">
                            <ul class="pagination">
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default Schoolpage2