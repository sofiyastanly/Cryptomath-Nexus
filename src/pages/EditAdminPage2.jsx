// import React from 'react'
// import { useState, useEffect } from "react";
// import { useNavigate, useLocation } from 'react-router-dom';

// const EditAdminPage2 = () => {



//     const [tid, setTid] = useState([]);
//     const [tea, setTea] = useState('null');
//     const [teacher, setTeacher] = useState('');
//     const [tename, setTename] = useState('');
//     const [email, setEmail] = useState('');
//     const [name, setName] = useState([]);
//     const [nameID, setNameID] = useState('');
//     const [password, setPassword] = useState('');
//     const [uid, setUid] = useState('');


//     const location = useLocation()
//     const navigate = useNavigate()
//     useEffect(() => {
//         fetch("https://projectlogi.club/mathmate/public/api/getschool").then((res) => {
//             res.json().then((data) => {
//                 console.log('res', data)
//                 setName(data)
//             })
//         })
//     }, [])
//     useEffect(() => {
//         console.log(location)

//         setTid(location.state.id)
//         let param = {
//             id: location.state.id
//         }
//         console.log('id', param)

//         fetch('https://projectlogi.club/mathmate/public/api/getteacherbyid', {
//             method: 'post',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(param)
//         }).then((res) => {
//             res.json().then((data) => {
//                 setTeacher(data[0].teacher)
//                 setTename(data[0].tename)
//                 setEmail(data[0].email)

//                 setNameID(data[0].name)
//                 setPassword(data[0].password)
//                 setUid(data[0].uid)

//                 console.log('data', data)
//             })
//         })

//     }, [])

//     const updateTeacher = () => {
//         let param = {
//             id: tid,
//             teacher: teacher,
//             tename: tename,
//             email: email,
//             name: nameID,
//             password: password,
//             uid:uid
//         }
//         console.log(param)
//         fetch('https://projectlogi.club/mathmate/public/api/updateteacher', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(param)
//         }).then((res) => {
//             navigate('/adminpage2')
//             console.log(res)

//         })
//     }

//     if (tea == null) {
//         return null;
//     }


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
//                                 <label for="inputPassword6" className="col-form-label">Teacher ID</label>
//                             </div>
//                             <div className="col-4">

//                                 <input type="text" id="inputPassword6" className="form-control" placeholder='Teacher ID' aria-describedby=""
//                                     value={teacher}
//                                     onChange={(e) => {
//                                         setTeacher(e.target.value)
//                                     }}
//                                 />
//                             </div>
//                         </div>
//                         <div className="row g-3 mt-2 align-items-center">
//                             <div className="col-2">
//                                 <label for="inputPassword6" className="col-form-label">Teacher Name</label>
//                             </div>
//                             <div className="col-4">
//                                 <input type="text" id="inputPassword6" className="form-control" placeholder='Enter School Name' aria-describedby=""
//                                     value={tename}
//                                     onChange={(e) => {
//                                         setTename(e.target.value)
//                                     }}
//                                 />
//                             </div>
//                         </div>
//                         <div className="row g-3 mt-2 align-items-center">
//                             <div className="col-2">
//                                 <label for="inputPassword6" className="col-form-label">Teacher Email</label>
//                             </div>
//                             <div className="col-4">
//                                 <input type="email" id="inputPassword6" className="form-control" placeholder='Enter School Email ' aria-describedby=""
//                                     value={email}
//                                     onChange={(e) => {
//                                         setEmail(e.target.value)
//                                     }}
//                                 />
//                             </div>
//                             <div className="row g-3 mt-2 align-items-center">
//                                 <div className="col-2">
//                                     <label for="inputPassword6" className="col-form-label">School name</label>
//                                 </div>
//                                 <div className="col-4">
//                                     <select value={nameID} className="form-select" onChange={(e) => { setNameID(e.target.value) }} >
//                                         <option>Select</option>
//                                         {
//                                             name?.length > 0 ?
//                                                 name.map((data, index) => {
//                                                     return (
//                                                         <option value={data.id} key={index}>{data.name}</option>
//                                                     )
//                                                 }) : ''
//                                         }
//                                     </select>


//                                 </div>
//                             </div>
//                             <div className="row g-3 mt-2 align-items-center">
//                                 <div className="col-2">
//                                     <label for="inputPassword6" className="col-form-label">Password</label>
//                                 </div>
//                                 <div className="col-4">
//                                     <input type="password" id="inputPassword6" className="form-control" placeholder='Enter School Password ' aria-describedby="" value={password}
//                                         onChange={(e) => {
//                                             setPassword(e.target.value)
//                                         }}
//                                     />
//                                 </div>
//                             </div>

//                         </div>


//                         <button type="submit" className="btn btn-success mt-2" onClick={(e) => {
//                             e.preventDefault()
//                             updateTeacher()
//                         }}
//                         >Edit</button>
//                     </form>

//                 </div>
//             </div>

           
//         </>
//     )
// }

// export default EditAdminPage2
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Admin from '../components/Admin';

const EditAdminPage2 = () => {
  const [tid, setTid] = useState([]);
  const [teacher, setTeacher] = useState('');
  const [tename, setTename] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState([]);
  const [nameID, setNameID] = useState('');
  const [password, setPassword] = useState('');
  const [uid, setUid] = useState('');
  
  // Validation error states
  const [teacherError, setTeacherError] = useState('');
  const [tenameError, setTenameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Your fetch code to get school data
    fetch("https://projectlogi.club/mathmate/public/api/getschool")
      .then((res) => {
        res.json().then((data) => {
          console.log('res', data);
          setName(data);
        });
      });
  }, []);

  useEffect(() => {
    // Your fetch code to get teacher data based on location.state.id
    console.log(location);

    setTid(location.state.id);
    let param = {
      id: location.state.id
    };

    fetch('https://projectlogi.club/mathmate/public/api/getteacherbyid', {
      method: 'post',
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
        console.log('data', data);
      });
    });
  }, [location.state.id]);

  const isValidEmail = (email) => {
    // Regular expression for email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};


  const validateForm = () => {
    let valid = true;

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
  } else if (!isValidEmail(email)) {
      setEmailError('Invalid email format.');
      valid = false;
  } 
  if (!nameID) {
      setNameError('School name is required.');
      valid = false;
  }
  if (!password || password.length < 3) {
      setPasswordError('Password must be at least 3 characters long.');
      valid = false;
  }

    return valid;
  };

  const updateTeacher = () => {
    if (validateForm()) {
      let param = {
        id: tid,
        teacher,
        tename,
        email,
        name: nameID,
        password,
        uid
      };

      fetch('https://projectlogi.club/mathmate/public/api/updateteacher', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(param)
      }).then((res) => {
        if (res.ok) {
          navigate('/adminpage2');
        } else {
          // Handle error here
        }
      });
    }
  };

  return (
    <>
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
                <label htmlFor="inputTeacher" className="col-form-label">Teacher ID</label>
              </div>
              <div className="col-4">
                <input
                  type="text"
                  id="inputTeacher"
                  className={`form-control ${teacherError ? 'is-invalid' : ''}`}
                  placeholder="Teacher ID"
                  aria-describedby=""
                  value={teacher}
                  onChange={(e) => {
                    setTeacher(e.target.value);
                    setTeacherError('');
                  }}
                />
                {teacherError && <div className="invalid-feedback">{teacherError}</div>}
              </div>
            </div>
            <div className="row g-3 mt-2 align-items-center">
              <div className="col-2">
                <label htmlFor="inputTename" className="col-form-label">Teacher Name</label>
              </div>
              <div className="col-4">
                <input
                  type="text"
                  id="inputTename"
                  className={`form-control ${tenameError ? 'is-invalid' : ''}`}
                  placeholder="Teacher Name"
                  aria-describedby=""
                  value={tename}
                  onChange={(e) => {
                    setTename(e.target.value);
                    setTenameError('');
                  }}
                />
                {tenameError && <div className="invalid-feedback">{tenameError}</div>}
              </div>
            </div>
            <div className="row g-3 mt-2 align-items-center">
              <div className="col-2">
                <label htmlFor="inputEmail" className="col-form-label">Teacher Email</label>
              </div>
              <div className="col-4">
                <input
                  type="email"
                  id="inputEmail"
                  className={`form-control ${emailError ? 'is-invalid' : ''}`}
                  placeholder="Teacher Email"
                  aria-describedby=""
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError('');
                  }}
                />
                {emailError && <div className="invalid-feedback">{emailError}</div>}
              </div>
            </div>
            <div className="row g-3 mt-2 align-items-center">
              <div className="col-2">
                <label htmlFor="inputSchoolName" className="col-form-label">School name</label>
              </div>
              <div className="col-4">
                <select
                  value={nameID}
                  className={`form-select ${nameError ? 'is-invalid' : ''}`}
                  onChange={(e) => { setNameID(e.target.value) }}
                >
                  <option value="">Select</option>
                  {
                    name?.length > 0 ?
                      name.map((data, index) => {
                        return (
                          <option value={data.id} key={index}>{data.name}</option>
                        )
                      }) : ''
                  }
                </select>
                {nameError && <div className="invalid-feedback">{nameError}</div>}
              </div>
            </div>
            <div className="row g-3 mt-2 align-items-center">
              <div className="col-2">
                <label htmlFor="inputPassword" className="col-form-label">Password</label>
              </div>
              <div className="col-4">
                <input
                  type="password"
                  id="inputPassword"
                  className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                  placeholder="Password"
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
                updateTeacher();
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

export default EditAdminPage2;
