import React from 'react'
import { useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
function SchoolTable1() {
    const navigate = useNavigate();
    const [teacher, setTeacher] = useState([]);
    const [tename, setTename] = useState();
    const [tid,setId] =useState();
    const [email, setEmail] = useState();
    const [name, setName] = useState([]);
    const [nameID, setNameID] = useState();
    const [password, setPassword] = useState();
     const [schoolid, setSchoolid] = useState();
    const [refresh,setRefresh]  = useState(0)
   
    useEffect(() => {

        const info = JSON.parse(localStorage.getItem('userdata'));


        let teacherparam = {
            schoolid: info.id
        }
  
        // console.log('hekkk')
        fetch('https://projectlogi.club/mathmate/public/api/getteacher_school',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(teacherparam)
        }).then((response) => {
            response.json().then((data) => {

                setTeacher(data)

            })
        })

    }, [refresh])


    const saveteacher_school = () => {
        // Check if required fields are filled out
        if (!tid || !tename || !email || !password) {
            alert("Please fill out all required fields.");
            return;
        }
    
        // Check if email is valid
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }
    
        // If all validations pass, proceed with API call
        const info = JSON.parse(localStorage.getItem('userdata'));
        const param = {
            teacher: tid,
            tename: tename,
            email: email,
            name: info.id,
            password: password,
        };
    
        fetch('https://projectlogi.club/mathmate/public/api/saveteacher_school', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(param)
        }).then((res) => {
            setRefresh(prev => prev + 1);
        }).catch((error) => {
            console.error("Error:", error);
            // Handle error accordingly
            alert("An error occurred while saving the teacher. Please try again later.");
        });
    }
    const deleteteacher_login = (id) =>{
        let param ={
          uid:id
        }

        fetch('https://projectlogi.club/mathmate/public/api/deleteteacher_school',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(param)
        }).then((res)=>{
          res.json().then((data)=>{
           navigate('/schoolpage1')
           setRefresh(prev=>prev+1)
          })
        })

    }
    const editTeacher_login = (id) => {


      navigate("/editschoolpage1", {state: { id: id }})


    }
  return (
    <>
    {/* <nav aria-label="breadcrumb"  >
                <ol className="breadcrumb bg-light p-2 px-4 border border-1 rounded-3">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Teacher</li>
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
                                <label for="inputPassword6" className="col-form-label">Teacher ID</label>
                            </div>
                            <div className="col-4">
                                <input type="text" id="inputPassword6" className="form-control" placeholder='Enter Teacher ID' aria-describedby="" value={tid}
                                  onChange={(e) => {
                                    setId(e.target.value)
                                }} required />
                            </div>
                        </div>
                        <div className="row g-3 mt-2 align-items-center">
                            <div className="col-2">
                                <label for="inputPassword6" className="col-form-label">Teacher Name</label>
                            </div>
                            <div className="col-4">
                                <input type="text" required id="inputPassword6" className="form-control" placeholder='Enter Teacher Name' aria-describedby="" 
                                  onChange={(e) => {
                                    setTename(e.target.value)
                                }} />
                            </div>
                        </div>
                        <div className="row g-3 mt-2 align-items-center">
                            <div className="col-2">
                                <label for="inputPassword6" className="col-form-label">Teacher Email</label>
                            </div>
                            <div className="col-4">
                                <input type="email" id="inputPassword6" required className="form-control" placeholder='Enter Teacher Email ' aria-describedby=""  value={email}
                                  onChange={(e) => {
                                    setEmail(e.target.value)
                                }}  />
                            </div>
                        </div>

                        <div className="row g-3 mt-2 align-items-center">
                            <div className="col-2">
                                <label for="inputPassword6"  className="col-form-label">Teacher Password</label>
                            </div>
                            <div className="col-4">
                                <input type="password" id="inputPassword6" required className="form-control" placeholder='Enter Teacher Password ' aria-describedby=""  value={password}
                                  onChange={(e) => {
                                    setPassword(e.target.value)
                                }}/>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success mt-2" onClick={(event) => {
                                                    event.preventDefault();
                                                    saveteacher_school()
                                                }}>Submit</button>
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
                                    <th scope="col">Teacher ID</th>
                                    <th scope="col">Teacher Name</th>
                                    <th scope="col">Teacher Email</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>

                            {
                  teacher.map((value, index) => {

                      return (
                        <tr key={index}>
                          <th scope="row">
                            <span className="mb-0 text-sm" scope="row"><td>{value.teacher}</td>
                            </span>
                          </th>
                          <td>{value.tename}</td>
                         <td>{value.email}</td>





                         <td> <button className="btn btn-info" onClick={(event) => {
                                                    event.preventDefault();
                                                    editTeacher_login(value.uid)
                                                }}> Edit</button></td>
                          <td> <button className="btn btn-danger"onClick={(event) => {
                                                    event.preventDefault();
                                                    deleteteacher_login(value.uid)
                                                }}> Delete</button></td>
                        </tr>
                      );
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

export default SchoolTable1
