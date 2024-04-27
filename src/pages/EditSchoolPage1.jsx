import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import Teacher from '../components/Teacher';
import School from '../components/School';

const EditSchoolPage1 = () => {
    const [tid, setTid] = useState('');
    const [teacher, setTeacher] = useState('');
    const [tename, setTename] = useState('');
    const [email, setEmail] = useState('');
    const [nameID, setNameID] = useState('');
    const [password, setPassword] = useState('');
    const [uid, setUid] = useState('');

    const [teacherError, setTeacherError] = useState('');
    const [tenameError, setTenameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [nameIDError, setNameIDError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setTid(location.state.id);
        let param = {
            id: location.state.id
        };

        fetch('https://projectlogi.club/mathmate/public/api/getteacher_schoolbyid', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(param)
        }).then((res) => {
            res.json().then((data) => {
                setTeacher(data[0].teacher);
                setTename(data[0].tename);
                setEmail(data[0].email);
                setNameID(data[0].name);
                setPassword(data[0].password);
                setUid(data[0].uid);
            });
        });
    }, []);
    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };


    const updateTeacher_school = () => {
        let valid = true;

        // Reset any previous error messages
        setTeacherError('');
        setTenameError('');
        setEmailError('');
        setNameIDError('');
        setPasswordError('');

        // Validation checks
        if (!teacher) {
            setTeacherError('Teacher ID is required.');
            valid = false;
        }

        if (!tename) {
            setTenameError('Teacher Name is required.');
            valid = false;
        }

        if (!email) {
            setEmailError('Teacher Email is required.');
            valid = false;
        } else if (!validateEmail(email)) {
            setEmailError('Invalid email format.');
            valid = false;
        }

        if (!nameID) {
            setNameIDError('School name is required.');
            valid = false;
        }

        if (!password || password.length < 3) {
            setPasswordError('Password must be at least 3 characters long.');
            valid = false;
        }

        if (valid) {
            let param = {
                id: tid,
                teacher: teacher,
                tename: tename,
                email: email,
                name: nameID,
                password: password,
                uid: uid
            };

            fetch('https://projectlogi.club/mathmate/public/api/updateteacher_school', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(param)
            }).then((res) => {
                navigate('/schoolpage1');
                console.log(res);
            });
        }
    };

    // If tea is null, return null (conditionally rendering component)
  


    return (
        <>
<School/>

           <div className="row">
      <div className="col-2"></div>
      <div className="col" style={{marginTop:'-645px'}}>

            <div className="card mt-5">
                <div className='card-header'><i className="fa fa-plus"></i></div>
                <div className="card-body">

                    <form>
                        <div className="row g-3 align-items-center">
                            <div className="col-2">
                                <label for="inputPassword6" className="col-form-label">Teacher ID</label>
                            </div>
                            <div className="col-4">

                                <input type="text" id="inputPassword6" className="form-control" placeholder='Teacher ID' aria-describedby="" 
                                    value={teacher}
                                    onChange={(e) => {
                                        setTeacher(e.target.value)
                                    }}
                                />
                            </div>
                        </div>
                        <div className="row g-3 mt-2 align-items-center">
                            <div className="col-2">
                                <label for="inputPassword6" className="col-form-label">Teacher Name</label>
                            </div>
                            <div className="col-4">
                                <input type="text" id="inputPassword6" className="form-control" placeholder='Enter School Name' aria-describedby=""
                                    value={tename}
                                    onChange={(e) => {
                                        setTename(e.target.value)
                                    }}
                                />
                            </div>
                        </div>
                        <div className="row g-3 mt-2 align-items-center">
                            <div className="col-2">
                                <label for="inputPassword6" className="col-form-label">Teacher Email</label>
                            </div>
                            <div className="col-4">
                                <input type="email" id="inputPassword6" className="form-control" placeholder='Enter School Email ' aria-describedby=""
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                />
                            </div>

                            <div className="row g-3 mt-2 align-items-center">
                                <div className="col-2">
                                    <label for="inputPassword6" className="col-form-label">Password</label>
                                </div>
                                <div className="col-4">
                                    <input type="password" id="inputPassword6" className="form-control" placeholder='Enter School Password ' aria-describedby="" value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value)
                                        }}
                                    />
                                </div>  
                            </div>

                        </div>


                        <button type="submit" className="btn btn-success mt-2" onClick={(e) => {
                            e.preventDefault()
                            updateTeacher_school()
                        }}
                        >Edit</button>
                    </form>

                </div>
            </div>

            {/* <div className="dataTable my-5 pb-5">
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
                                    <th scope="col">School ID</th>
                                    <th scope="col">School Name</th>
                                    <th scope="col">School Email</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>

                            {
                  school.map((value, index) => {
                    console.log(value);

                      return (
                        <tr key={index}>
                          <th scope="row">
                            <span className="mb-0 text-sm" scope="row">{value.school}
                            </span>
                          </th>

                         <td>{value.name}</td>
                         <td>{value.email}</td>
                         <td>{value.password}</td>




                         <td> <button className="btn btn-info" > Edit</button></td>
                          <td> <button className="btn btn-danger" onClick={()=>{
                            deleteSchool(value.id)
                          }}> Delete</button></td>
                        </tr>
                      )
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
                            </ul> */}
            {/* </nav>
                    </div>
                </div>
            </div> */}
            </div>
            </div>
        </>
    )
}

export default EditSchoolPage1