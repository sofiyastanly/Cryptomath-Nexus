// import React from 'react'
// import { useState, useEffect } from 'react'
// import { useNavigate, useLocation } from "react-router-dom";

// function AdminPage4Table() {

//     const [name, setName] = useState()
//     const [link, setLink] = useState()


//     const [games, setGames] = useState([])
//     const [refresh, setRefresh] = useState(0)
//     const navigate = useNavigate()
//     useEffect(() => {
//         fetch('https://projectlogi.club/mathmate/public/api/getgame', {
//             method: 'GET'
//         }).then((response) => {
//             response.json().then((data) => {
//                 console.log('gamessss',data)
//                 setGames(data)
//             })
//         })

//     }, [ ])

//     const saveGame = () => {

//         let param = {
//             name: name,
//             link: link
//         }
//         fetch('https://projectlogi.club/mathmate/public/api/savegame', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(param)
//         }).then((res) => {
//             console.log('res', res)
//             setRefresh(prev => prev + 1)
//             // navigate('/adminpage2')


//         })
//     }

//     const editGames = (id) => {


//         navigate("/editadminpage4", { state: { id: id } })


//     }
//     const deleteGame = (id) => {

//         let param = {
//             id:id
//         }
//         fetch('https://projectlogi.club/mathmate/public/api/deletegame', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(param)
//         }).then((res) => {
//             setRefresh(prev => prev + 1)

//         })

//     }


//     return (
//         <>
//             <nav aria-label="breadcrumb"  >
//                 <ol className="breadcrumb bg-light p-2 px-4 border border-1 rounded-3">
//                     <li className="breadcrumb-item"><a href="#">Home</a></li>
//                     <li className="breadcrumb-item active" aria-current="page">Game</li>
//                 </ol>
//             </nav>

//             <div className="card mt-5">
//                 <div className='card-header'><i className="fa fa-plus"></i></div>
//                 <div className="card-body">

//                     <form>
//                         <div className="row g-3 align-items-center">
//                             <div className="col-2">
//                                 <label for="inputPassword6" className="col-form-label">Game Name</label>
//                             </div>
//                             <div className="col-4">
//                                 <input type="text" onChange={(e) => setName(e.target.value)} id="inputPassword6" className="form-control" placeholder='Enter Game Name' aria-describedby="" />
//                             </div>
//                         </div>
//                         <div className="row g-3 mt-2 align-items-center">
//                             <div className="col-2">
//                                 <label for="inputPassword6" className="col-form-label">Game Link</label>
//                             </div>
//                             <div className="col-4">
//                                 <input type="text" onChange={(e) => setLink(e.target.value)} id="inputPassword6" className="form-control" placeholder='Enter Game Link' aria-describedby="" />

//                             </div>
//                         </div>


//                         <button onClick={(e) => {
//                             e.preventDefault()
//                             saveGame();
//                         }} className="btn btn-success mt-2">Save</button>
//                     </form>

//                 </div>
//             </div>

//             <div className="dataTable my-5 pb-5">
//                 <div className="row justify-content-between my-3">
//                     <div className="col-sm-12 col-md-2">
//                         <div className="dataTables_length d-flex align-items-center gap-3" id="dataTable_length">
//                             <label> Show</label>
//                             <select name="dataTable_length" aria-controls="dataTable" className="form-control form-control-sm">
//                                 <option value="10">10</option>
//                                 <option value="25">25</option>
//                                 <option value="50">50</option>
//                                 <option value="100">100</option>
//                             </select>
//                             <label>entries </label>
//                         </div>
//                     </div>
//                     <div className="col-sm-12 col-md-3">
//                         <div id="dataTable_filter" className="dataTables_filter d-flex align-items-center gap-3">
//                             <label>Search:</label>
//                             <input type="search" className="form-control form-control-sm  " placeholder="" aria-controls="dataTable" />
//                         </div>
//                     </div>
//                 </div>

//                 <div className="row">
//                     <div className="col-12">
//                         <table className="table table-bordered table-hover rounded">
//                             <thead>
//                                 <tr>
//                                     <th scope="col">Game ID</th>
//                                     <th scope="col">Game Name</th>

//                                     <th scope="col">Action</th>
//                                 </tr>
//                             </thead>
//                             <tbody>

//                                 {
//                                     games?.map((value, index) => {

//                                         return (
//                                             <tr key={index}>
//                                                 <th scope="row">
//                                                     <span className="mb-0 text-sm" scope="row"><td> {value.id}</td>
//                                                     </span>
//                                                 </th>
//                                                 <td>{value.name}</td>
//                                                 <td>
//                                                     <button className="btn btn-info" style={{ marginRight: 12 }}
//                                                         onClick={(e) => {
//                                                             e.preventDefault()
//                                                             editGames(value.id)
//                                                         }}
//                                                     > Edit</button>
//                                                     <button className="btn btn-danger"
//                                                         onClick={(e) => {
//                                                             e.preventDefault()
//                                                             deleteGame(value.id)
//                                                         }}
//                                                     > Delete</button>
//                                                 </td>
//                                             </tr>
//                                         );
//                                     })
//                                 }

//                             </tbody>
//                         </table>
//                     </div>
//                 </div>

//                 <div className="row justify-content-between my-3">
//                     <div className="col-sm-12 col-md-2">
//                         <div className="dataTables_length d-flex align-items-center gap-3" id="dataTable_length">
//                             <label> Showing 1 to 6 of 6 entries</label>
//                         </div>
//                     </div>
//                     <div className="col-sm-12 col-md-6">
//                         <nav aria-label="Page navigation">
//                             <ul class="pagination">
//                                 <li class="page-item">
//                                     <a class="page-link" href="#" aria-label="Previous">
//                                         <span aria-hidden="true">&laquo;</span>
//                                     </a>
//                                 </li>
//                                 <li class="page-item"><a class="page-link" href="#">1</a></li>
//                                 <li class="page-item"><a class="page-link" href="#">2</a></li>
//                                 <li class="page-item"><a class="page-link" href="#">3</a></li>
//                                 <li class="page-item">
//                                     <a class="page-link" href="#" aria-label="Next">
//                                         <span aria-hidden="true">&raquo;</span>
//                                     </a>
//                                 </li>
//                             </ul>
//                         </nav>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default AdminPage4Table
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminPage4Table() {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [games, setGames] = useState([]);
    const [refresh, setRefresh] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://projectlogi.club/mathmate/public/api/getgame', {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('games', data);
                setGames(data);
            });
    }, [refresh]);

    const saveGame = () => {
        const validationErrors = {};
        let isValid = true;

        // Validate Game Name
        if (!name) {
            validationErrors.name = 'Game Name is required.';
            isValid = false;
        }

        // Validate Game Link
        if (!link) {
            validationErrors.link = 'Game Link is required.';
            isValid = false;
        }

        setErrors(validationErrors);

        if (isValid) {
            const param = {
                name: name,
                link: link,
            };

            fetch('https://projectlogi.club/mathmate/public/api/savegame', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(param),
            })
                .then((res) => {
                    if (res.status === 400) {
                        // Handle validation error response
                        return res.json().then((data) => {
                            toast.error(data.error); // Show error message in toast
                        });
                    } else {
                        // Success response
                        setRefresh((prev) => prev + 1);
                        toast.success('Game saved successfully'); // Show success message in toast
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    };

    const editGames = (id) => {
        navigate('/editadminpage4', { state: { id: id } });
    };

    const deleteGame = (id) => {
        const param = {
            id: id,
        };
        fetch('https://projectlogi.club/mathmate/public/api/deletegame', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(param),
        }).then((res) => {
            setRefresh((prev) => prev + 1);
        });
    };

    const [errors, setErrors] = useState({
        name: '',
        link: '',
    });

    return (
        <>
            {/* <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-light p-2 px-4 border border-1 rounded-3">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Game</li>
                </ol>
            </nav> */}

        <div className="row">
        <div className="col-2"></div>
        <div className="col" style={{marginTop:'-645px'}}>

            <div className="card mt-5">
                <div className='card-header'><i className="fa fa-plus"></i></div>
                <div className="card-body">
                    <form>
                        <div className="row g-3 align-items-center">
                            <div className="col-2">
                                <label htmlFor="inputPassword6" className="col-form-label">Game Name</label>
                            </div>
                            <div className="col-4">
                                <input
                                    type="text"
                                    onChange={(e) => setName(e.target.value)}
                                    id="inputPassword6"
                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                    placeholder='Enter Game Name'
                                    aria-describedby=""
                                />
                                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                            </div>
                        </div>
                        <div className="row g-3 mt-2 align-items-center">
                            <div className="col-2">
                                <label htmlFor="inputPassword6" className="col-form-label">Game Link</label>
                            </div>
                            <div className="col-4">
                                <input
                                    type="text"
                                    onChange={(e) => setLink(e.target.value)}
                                    id="inputPassword6"
                                    className={`form-control ${errors.link ? 'is-invalid' : ''}`}
                                    placeholder='Enter Game Link'
                                    aria-describedby=""
                                />
                                {errors.link && <div className="invalid-feedback">{errors.link}</div>}
                            </div>
                        </div>
                        <button onClick={(e) => {
                            e.preventDefault();
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
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {games.map((value, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row">
                                                <span className="mb-0 text-sm" scope="row">{value.id}</span>
                                            </th>
                                            <td>{value.name}</td>
                                            <td>
                                                <button className="btn btn-info" style={{ marginRight: 12 }} onClick={(e) => {
                                                    e.preventDefault();
                                                    editGames(value.id);
                                                }}> Edit</button>
                                                <button className="btn btn-danger" onClick={(e) => {
                                                    e.preventDefault();
                                                    deleteGame(value.id);
                                                }}> Delete</button>
                                            </td>
                                        </tr>
                                    );
                                })}
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
                </div>
            </div>
            <ToastContainer />
            </div>
            </div>
        </>
    );
}

export default AdminPage4Table;
