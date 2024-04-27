import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import Teacher from '../components/Teacher';

const EditTeacherPage1 = () => {

    const [sid, setSid] = useState([]);
    const [tea, setTea] = useState('null');
    const [studentid, setStudentid] = useState('');
    const [studentname, setStudentname] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState([]);
    const [nameID, setNameID] = useState('');
    const [password, setPassword] = useState('');
    const [schoolid, setSchoolid] = useState('');
    const [uid, setUid] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [StudentidError, setStudentidError] = useState('');
    const [NameIDError,  setNameIDError] = useState('');
    const [StudentnameError,   setStudentnameError] = useState('');




    const location = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        fetch("https://projectlogi.club/mathmate/public/api/getschool").then((res) => {
            res.json().then((data) => {
                console.log('res', data)
                setName(data)
            })
        })
    }, [])
    useEffect(() => {




        const info = JSON.parse(localStorage.getItem('userdata'));

        let paramteacher = {
            uid:info.id
        }
        fetch('https://projectlogi.club/mathmate/public/api/getteacherbyuid',{
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(paramteacher)
        }).then((response)=>{
          response.json().then((data)=>{
            setSchoolid(data[0].name)

          })
        })



        setSid(location.state.id)
        let param = {
            id: location.state.id
        }
        console.log('id', param)

        fetch('https://projectlogi.club/mathmate/public/api/getstudentbyid', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(param)
        }).then((res) => {
            res.json().then((data) => {
                console.log(data)
                setStudentid(data[0].students)
                setStudentname(data[0].studentname)
                setEmail(data[0].email)

                setNameID(data[0].name)
                setPassword(data[0].password)
                setUid(data[0].uid)
            })
        })

    }, [])

    const updateTeacher_login = () => {
        setStudentidError('');
        setStudentnameError('');
        setEmailError('');
        setNameIDError('');
        setPasswordError('');
    
        let valid = true;
    
        // Validate Student ID
        if (!studentid) {
            setStudentidError('Student ID is required.');
            valid = false;
        }
    
        // Validate Student Name
        if (!studentname) {
            setStudentnameError('Student Name is required.');
            valid = false;
        }
    
        // Validate Email
        if (!email) {
            setEmailError('Email is required.');
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setEmailError('Invalid email format.');
            valid = false;
        }
    
        // Validate School Name
        if (!nameID || nameID === 'Select') {
            setNameIDError('School Name is required.');
            valid = false;
        }
    
        // Validate Password
        if (!password || password.length < 3) {
            setPasswordError('Password must be at least 3 characters long.');
            valid = false;
        }
    
        if (valid) {
            let param = {
                id: sid,
                students: studentid,
                studentname: studentname,
                email: email,
                name: schoolid,
                password: password,
                uid: uid
            };
    
            fetch('https://projectlogi.club/mathmate/public/api/updatestudent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(param)
            }).then((res) => {
                navigate('/TeacherPage1');
                console.log(res);
            });
        }
    };

    return (
        <>

           <Teacher/>
           <div className="row">
      <div className="col-2"></div>
      <div className="col" style={{marginTop:'-645px'}}>
            <div className="card mt-5">
                <div className='card-header'><i className="fa fa-plus"></i></div>
                <div className="card-body">

                    <form>
                        <div className="row g-3 align-items-center">
                            <div className="col-2">
                                <label for="inputPassword6" className="col-form-label">Student ID</label>
                            </div>
                            <div className="col-4">

                                <input type="text" id="inputPassword6" className="form-control" placeholder='Student ID' aria-describedby=""
                                    value={studentid}
                                    onChange={(e) => {
                                        setStudentid(e.target.value)
                                    }}
                                />
                            </div>
                        </div>
                        <div className="row g-3 mt-2 align-items-center">
                            <div className="col-2">
                                <label for="inputPassword6" className="col-form-label">Student Name</label>
                            </div>
                            <div className="col-4">
                                <input type="text" id="inputPassword6" className="form-control" placeholder='Enter School Name' aria-describedby=""
                                    value={studentname}
                                    onChange={(e) => {
                                        setStudentname(e.target.value)
                                    }}
                                />
                            </div>
                        </div>
                        <div className="row g-3 mt-2 align-items-center">
                            <div className="col-2">
                                <label for="inputPassword6" className="col-form-label">Student Email</label>
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
                                    <label for="inputPassword6" className="col-form-label">School name</label>
                                </div>
                                <div className="col-5">
                                    <select
                                    value={nameID}
                                    style={{ width: "100%", padding: 10, borderRadius: 9, borderWidth: 0.01, borderColor: 'rgba(0,0,0,0.1)' }}
                                    onChange={(e) => { setNameID(e.target.value) }}
                                     >
                                        <option>Select</option>
                                        {
                                            name?.length > 0 ?
                                                name.map((data, index) => {
                                                    return (
                                                        <option value={data.id} key={index}>{data.name}</option>
                                                    )
                                                }) : ''
                                        }
                                    </select>


                                </div>
                            </div>
                            <div className="row g-3 mt-2 align-items-center">
                                <div className="col-2">
                                    <label for="inputPassword6" className="col-form-label">Password</label>
                                </div>
                                <div className="col-4">
                                    <input type="password" id="inputPassword6" className="form-control" placeholder='Enter School Password ' aria-describedby=""
                                    value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value)
                                        }}
                                    />
                                </div>
                            </div>

                        </div>


                        <button type="submit" className="btn btn-success mt-2"
                         onClick={(e) => {
                            e.preventDefault()
                            updateTeacher_login()
                        }}
                        >Edit</button>
                    </form>

                </div>
            </div>
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
        </>
    )
}

export default EditTeacherPage1