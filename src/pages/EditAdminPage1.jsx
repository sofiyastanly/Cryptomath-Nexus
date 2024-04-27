// import React from 'react'
// import { useState,useEffect } from "react";
// import { useNavigate,useLocation } from 'react-router-dom';

// const EditAdminPage1 = () => {



//         const [sid, setSid] = useState('');
//         const [sch, setSch] =useState('null');
//         const [school, setSchool] = useState('');
//         const [name, setName] = useState('');
//         const [email, setEmail] = useState('');
//         const [password, setPassword] = useState('');
//         const [uid, setUid] = useState('');

//         const location = useLocation()
//         const navigate = useNavigate()
//         useEffect(() => {
//             console.log(location)

//             setSid(location.state.id)
//             let param = {
//                 id: location.state.id
//             }
//             console.log('id',param)

//       fetch('https://projectlogi.club/mathmate/public/api/getschoolbyid', {
//         method: 'post',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(param)
//     }).then((res) => {
//         res.json().then((data) => {
//             setSchool(data[0].school)
//             setName(data[0].name)
//             setEmail(data[0].email)
//             setPassword(data[0].password)
//             setUid(data[0].uid)

//             console.log('data',data)



//         })
//     })

// }, [])
// const updateSchool = () => {
//     let param = {
//         id: sid,
//         school:school,
//         name: name,
//         email: email,
//         password:password,
//         uid:uid



//     }
//     console.log(param)
//     fetch('https://projectlogi.club/mathmate/public/api/updateschool', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(param)
//     }).then((res) => {
//         navigate('/adminpage1')
//         console.log(res)

//     })
// }

// if (sch == null) {
//     return null;
// }


//     return (
//         <>

//             <nav aria-label="breadcrumb"  >
//                 <ol className="breadcrumb bg-light p-2 px-4 border border-1 rounded-3">
//                     <li className="breadcrumb-item"><a href="#">Home</a></li>
//                     <li className="breadcrumb-item active" aria-current="page">School</li>
//                 </ol>
//             </nav>

//             <div className="card mt-5">
//                 <div className='card-header'><i className="fa fa-plus"></i></div>
//                 <div className="card-body">

//                     <form>
//                         <div className="row g-3 align-items-center">
//                             <div className="col-2">
//                                 <label for="inputPassword6" className="col-form-label">School ID</label>
//                             </div>
//                             <div className="col-4">

//                              <input type="text" id="inputPassword6" className="form-control" placeholder='Enter School ID' aria-describedby=""
//                              value ={school}
//                                 onChange={(e)=>{
//                                     setSchool(e.target.value)
//                                   }}
//                                 />
//                             </div>
//                         </div>
//                         <div className="row g-3 mt-2 align-items-center">
//                             <div className="col-2">
//                                 <label for="inputPassword6" className="col-form-label">School Name</label>
//                             </div>
//                             <div className="col-4">
//                                 <input type="text" id="inputPassword6" className="form-control" placeholder='Enter School Name' aria-describedby="" value = {name}
//                                 onChange={(e)=>{
//                                     setName(e.target.value)
//                                   }}
//                                />
//                             </div>
//                         </div>
//                         <div className="row g-3 mt-2 align-items-center">
//                             <div className="col-2">
//                                 <label for="inputPassword6" className="col-form-label">School Email</label>
//                             </div>
//                             <div className="col-4">
//                                 <input type="email" id="inputPassword6" className="form-control" placeholder='Enter School Email ' aria-describedby="" value={email}
//                                 onChange={(e)=>{
//                                     setEmail(e.target.value)
//                                   }}
//                                 />
//                             </div>
//                             <div className="col-5">
//                                 <input type="password" id="inputPassword6" className="form-control" placeholder='Enter School Email ' aria-describedby="" value={password}
//                                 onChange={(e)=>{
//                               setPassword(e.target.value)
//                             }}
//                           />
//                             </div>
//                         </div>


//                         <button type="submit" className="btn btn-success mt-2"onClick={(e) => {
//                         e.preventDefault()
//                         updateSchool()
//                       }}
//                         >Edit</button>
//                     </form>

//                 </div>
//             </div>

//             {/* <div className="dataTable my-5 pb-5">
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
//                                     <th scope="col">School ID</th>
//                                     <th scope="col">School Name</th>
//                                     <th scope="col">School Email</th>
//                                     <th scope="col">Action</th>
//                                 </tr>
//                             </thead>
//                             <tbody>

//                             {
//                   school.map((value, index) => {
//                     console.log(value);

//                       return (
//                         <tr key={index}>
//                           <th scope="row">
//                             <span className="mb-0 text-sm" scope="row">{value.school}
//                             </span>
//                           </th>

//                          <td>{value.name}</td>
//                          <td>{value.email}</td>
//                          <td>{value.password}</td>




//                          <td> <button className="btn btn-info" > Edit</button></td>
//                           <td> <button className="btn btn-danger" onClick={()=>{
//                             deleteSchool(value.id)
//                           }}> Delete</button></td>
//                         </tr>
//                       )
//                     })
//                   }

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
//                             </ul> */}
//                         {/* </nav>
//                     </div>
//                 </div>
//             </div> */}
//         </>
//     )
// }

// export default EditAdminPage1
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Admin from '../components/Admin';

const EditAdminPage1 = () => {
    const [sid, setSid] = useState('');
    const [school, setSchool] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [uid, setUid] = useState('');

    const [schoolError, setSchoolError] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        setSid(location.state.id);
        let param = {
            id: location.state.id
        };

        fetch('https://projectlogi.club/mathmate/public/api/getschoolbyid', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(param)
        }).then((res) => {
            res.json().then((data) => {
                setSchool(data[0].school);
                setName(data[0].name);
                setEmail(data[0].email);
                setPassword(data[0].password);
                setUid(data[0].uid);
            });
        });
    }, [location.state.id]);

    const isValidEmail = (email) => {
        // Regular expression for email validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const updateSchool = () => {
        // Reset validation errors
        setSchoolError('');
        setNameError('');
        setEmailError('');
        setPasswordError('');

        // Validation checks
        let isValid = true;

        if (!school) {
            setSchoolError('School is required.');
            isValid = false;
        }

        if (!name) {
            setNameError('Name is required.');
            isValid = false;
        }

        if (!email) {
            setEmailError('Email is required.');
            isValid = false;
        } else if (!isValidEmail(email)) {
            setEmailError('Invalid email format.');
            isValid = false;
        }
    
        if (!password) {
            setPasswordError('Password is required.');
            isValid = false;
        } else if (password.length < 3) {
            setPasswordError('Password must be at least 3 characters long.');
            isValid = false;
        }
        if (isValid) {
            let param = {
                id: sid,
                school: school,
                name: name,
                email: email,
                password: password,
                uid: uid
            };

            fetch('https://projectlogi.club/mathmate/public/api/updateschool', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(param)
            })
            .then((res) => {
                if (res.ok) {
                    toast.success('School edited successfully', { autoClose: 5000 });
                    setShowAlert(true);
                    setTimeout(() => {
                        setShowAlert(false);
                        navigate('/adminpage1');
                    }, 5000);
                } else {
                    toast.error('Error editing school.');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                toast.error('Error editing school.');
            });
    }
};

    return (
        <>
            <ToastContainer />
            {showAlert && (
                <div className="alert alert-success mt-2" role="alert">
                    School edited successfully. 
                </div>
            )}
            <Admin/>
            <div className="row">
      <div className="col-2"></div>
      <div className="col" style={{marginTop:'-645px'}}>

            <div className="card mt-5">
                <div className='card-header'><i className="fa fa-plus"></i></div>
                <div className="card-body">
                    <form>
                        <div className="row g-3 align-items-center">
                            <div className="col-2">
                                <label htmlFor="inputPassword6" className="col-form-label">School ID</label>
                            </div>
                            <div className="col-4">
                                <input
                                    type="text"
                                    id="inputPassword6"
                                    className={`form-control ${schoolError ? 'is-invalid' : ''}`}
                                    placeholder='Enter School ID'
                                    aria-describedby=""
                                    value={school}
                                    onChange={(e) => {
                                        setSchool(e.target.value);
                                        setSchoolError('');
                                    }}
                                />
                                {schoolError && <div className="invalid-feedback">{schoolError}</div>}
                            </div>
                        </div>
                        <div className="row g-3 mt-2 align-items-center">
                            <div className="col-2">
                                <label htmlFor="inputPassword6" className="col-form-label">School Name</label>
                            </div>
                            <div className="col-4">
                                <input
                                    type="text"
                                    id="inputPassword6"
                                    className={`form-control ${nameError ? 'is-invalid' : ''}`}
                                    placeholder='Enter School Name'
                                    aria-describedby=""
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                        setNameError('');
                                    }}
                                />
                                {nameError && <div className="invalid-feedback">{nameError}</div>}
                            </div>
                        </div>
                        <div className="row g-3 mt-2 align-items-center">
                            <div className="col-2">
                                <label htmlFor="inputPassword6" className="col-form-label">School Email</label>
                            </div>
                            <div className="col-4">
                                <input
                                    type="email"
                                    id="inputPassword6"
                                    className={`form-control ${emailError ? 'is-invalid' : ''}`}
                                    placeholder='Enter School Email'
                                    aria-describedby=""
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setEmailError('');
                                    }}
                                />
                                {emailError && <div className="invalid-feedback">{emailError}</div>}
                            </div>
                            <div className="col-5">
                                <input
                                    type="password"
                                    id="inputPassword6"
                                    className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                                    placeholder='Enter Password'
                                    aria-describedby=""
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setPasswordError('');
                                    }}
                                />
                                {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-success mt-2"
                            onClick={(e) => {
                                e.preventDefault();
                                updateSchool();
                            }}
                        >
                            Edit
                        </button>
                    </form>
                </div>
            </div>
            </div>
            </div>
        </>
    );
};

export default EditAdminPage1;
