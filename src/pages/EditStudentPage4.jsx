import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Teacher from '../components/Teacher';
import School from '../components/School';
const EditStudentPage4 = () => {



    const [sid, setSid] = useState([]);
    const [tea, setTea] = useState('null');
    const [students, setStudents] = useState('');
    const [studentname, setStudentname] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState([]);
    const [nameID, setNameID] = useState('');
    const [password, setPassword] = useState('');
    const [schoolid, setSchoolid] = useState('');
    const [uid, setUid] = useState('');



    const location = useLocation()
    const navigate = useNavigate()
    const [formErrors, setFormErrors] = useState({
        students: '',
        studentname: '',
        email: '',
        password: '',
      });
      const validateForm = () => {
        let valid = true;
        const newErrors = {
          students: '',
          studentname: '',
          email: '',
          password: '',
        };
    
        if (students.trim() === '') {
          valid = false;
          newErrors.students = 'Student ID is required.';
        }
    
        if (studentname.trim() === '') {
          valid = false;
          newErrors.studentname = 'Student Name is required.';
        }
    
        if (email.trim() === '') {
          valid = false;
          newErrors.email = 'Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          valid = false;
          newErrors.email = 'Invalid email format.';
        }
    
        if (password.trim() === '') {
          valid = false;
          newErrors.password = 'Password is required.';
        }
    
        setFormErrors(newErrors);
    
        return valid;
      };
    
    
    useEffect(() => {
        

        setSid(location.state.id)
        let param = {
            id: location.state.id
        }

        fetch('https://projectlogi.club/mathmate/public/api/getstudent_schoolbyuid', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(param)
        }).then((res) => {
            res.json().then((data) => {
                console.log('dataaa',data)
                setStudents(data[0].students)
                setStudentname(data[0].studentname)
                setEmail(data[0].email)
                setNameID(data[0].name)
                setPassword(data[0].password)
                setUid(data[0].uid)


            })
        })

    }, [])

    // const updateStudent_school = () => {
    //     let param = {
    //         id: sid,
    //         students: students,
    //         studentname: studentname,
    //         email: email,
    //         name: nameID,
    //         password: password,
    //         uid:uid
    //     }
    //     console.log(param)
    //     fetch('https://projectlogi.club/mathmate/public/api/updatestudent_school', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(param)
    //     }).then((res) => {
    //         navigate('/studentpage4')
    //         console.log(res)

    //     })
    // }

    // if (tea == null) {
    //     return null;
    // }

    const updateStudent_school = () => {
        if (validateForm()) {
          // Perform the update when validation passes.
          let param = {
            id: sid,
            students: students,
            studentname: studentname,
            email: email,
            name: nameID,
            password: password,
            uid:uid
          };
    
          fetch('https://projectlogi.club/mathmate/public/api/updatestudent_school', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(param),
          })
          .then((res) => {
            if (res.ok) {
              toast.success('Student edited successfully!'); // Display a success toast
              navigate('/studentpage4');
            } else {
              // Handle error, e.g., display a toast message.
              toast.error('Failed to edit student.');
            }
          });
      }
    };
    

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
        {/* Student ID */}
        <div className="row g-3 align-items-center">
          <div className="col-2">
            <label htmlFor="inputPassword6" className="col-form-label">
              Student ID
            </label>
          </div>
          <div className="col-4">
            <input
              type="text"
              id="inputPassword6"
              className={`form-control ${formErrors.students && 'is-invalid'}`}
              placeholder="Student ID"
              value={students}
              onChange={(e) => {
                setStudents(e.target.value);
              }}
            />
            {formErrors.students && (
              <div className="invalid-feedback">{formErrors.students}</div>
            )}
          </div>
        </div>

        {/* Student Name */}
        <div className="row g-3 mt-2 align-items-center">
          <div className="col-2">
            <label htmlFor="inputPassword6" className="col-form-label">
              Student Name
            </label>
          </div>
          <div className="col-4">
            <input
              type="text"
              id="inputPassword6"
              className={`form-control ${formErrors.studentname && 'is-invalid'}`}
              placeholder="Enter Student Name"
              value={studentname}
              onChange={(e) => {
                setStudentname(e.target.value);
              }}
            />
            {formErrors.studentname && (
              <div className="invalid-feedback">{formErrors.studentname}</div>
            )}
          </div>
        </div>

        {/* Student Email */}
        <div className="row g-3 mt-2 align-items-center">
          <div className="col-2">
            <label htmlFor="inputPassword6" className="col-form-label">
              Student Email
            </label>
          </div>
          <div className="col-4">
            <input
              type="email"
              id="inputPassword6"
              className={`form-control ${formErrors.email && 'is-invalid'}`}
              placeholder="Enter Student Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {formErrors.email && (
              <div className="invalid-feedback">{formErrors.email}</div>
            )}
          </div>
        </div>

        {/* Student Password */}
        <div className="row g-3 mt-2 align-items-center">
          <div className="col-2">
            <label htmlFor="inputPassword6" className="col-form-label">
              Password
            </label>
          </div>
          <div className="col-4">
            <input
              type="password"
              id="inputPassword6"
              className={`form-control ${formErrors.password && 'is-invalid'}`}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {formErrors.password && (
              <div className="invalid-feedback">{formErrors.password}</div>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-success mt-2"
          onClick={(e) => {
            e.preventDefault();
            updateStudent_school();
          }}
        >
          Edit
        </button>
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

export default EditStudentPage4