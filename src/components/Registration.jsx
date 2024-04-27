// import React, { useState } from "react";
// import { Link,useNavigate } from "react-router-dom";

// function Registration() {
  

//     const [studentid, setStudentid] = useState([]);
//     const [studentname, setStudentname] = useState();
//     const [tid, setId] = useState();
//     const [email, setEmail] = useState();
//     const [name, setName] = useState([]);
//     const [nameID, setNameID] = useState();
//     const [password, setPassword] = useState();
//     const [schoolid, setSchoolid] = useState();
//     const [refresh, setRefresh] = useState(0);
//     const [parentname, setParent] = useState("");
//     const [parentemail, setParentemail] = useState("");
//     const [parentpassword, setParentpassword] = useState("");
//     const navigate = useNavigate()
    

//     const handleForm =(e)=>{
//         e.preventDefault()
//         const param = {
//             students: 'STD'+Math.floor(Math.random()*1000),
//             studentname: studentname,
//             email: email,
//             name: schoolid,
//             password: password,
//             parentpassword: parentpassword,
//             parentemail: parentemail,
//             parentname: parentname,
//             status:1
//         };
//         fetch('https://projectlogi.club/mathmate/public/api/savestudent',{
//             method:'post',
//             headers:{
//                 Accept:'application/json',
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify(param)
//         }).then((res)=>res.json()).then((result)=>{
//           navigate('/')
//         })
//     }

//   return (
//     <div>
//       <header>
//         <div className="header-top" style={{ backgroundColor: "#ade8f4" }}>
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-7 col-md-8">
//                 <div className="header-top-info">
//                   <span style={{ backgroundColor: "#ade8f4" }}>
//                     Open hours: 8.00-18.00 Mon-Sat
//                   </span>
//                 </div>
//               </div>

//               <div className="col-lg-2 col-md-4 mt-2">
//                 <div className="">
//                   <div>
//                     <Link
//                       to="/register"
//                       className="btn btn-info btn-sm text-white"
//                     >
//                       External Registeration
//                     </Link>
//                   </div>
//                 </div>
//               </div>

            
//             </div>
//           </div>
//         </div>
        
        
//       </header>
//       <form className="container mt-5 py-5" style={{backgroundColor:'#e0fbfc',width:'350px',borderRadius:'40px'}} onSubmit={handleForm}>
//         <h3>Student Registration</h3>
//         <img src="img/logiimg.jpg" alt="" height="200px" width="200px" className="mx-5"/>
//         <div class="form-group ">
//           <label for="exampleInputEmail1">Name of the Student</label>
//           <input
//             type="text"
//             class="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             placeholder="Enter your child name"
//             onChange={(e)=>setStudentname(e.target.value)}
//           />
         
//         </div>
//         <div class="form-group ">
//           <label for="exampleInputEmail1">Email</label>
//           <input
//             type="email"
//             class="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             placeholder="Enter student email"
//             onChange={(e)=>setEmail(e.target.value)}
//           />
         
//         </div>

//         <div class="form-group ">
//           <label for="exampleInputEmail1">Password</label>
//           <input
//             type="password"
//             class="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             placeholder="Enter student password"
//             onChange={(e)=>setPassword(e.target.value)}
//           />
         
//         </div>
//         <div class="form-group ">
//           <label for="exampleInputEmail1">Parent Name</label>
//           <input
//             type="text"
//             class="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             placeholder="Enter parent name"
//             onChange={(e)=>setParent(e.target.value)}
//           />
         
//         </div>
//         <div class="form-group ">
//           <label for="exampleInputEmail1">Email</label>
//           <input
//             type="email"
//             class="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             placeholder="Enter parent's email"
//             onChange={(e)=>setParentemail(e.target.value)}
//           />
         
//         </div>
//         <div class="form-group">
//           <label for="exampleInputPassword1">Password</label>
//           <input
//             type="password"
//             class="form-control"
//             id="exampleInputPassword1"
//             placeholder="Enter parent's Password"
//             onChange={(e)=>setParentpassword(e.target.value)}
//           />
//         </div>
        
//         <button type="submit" class="btn btn-primary mt-3 mx-5">
//           Complete Registration
//         </button>
//       </form>

//       <div className="container-fluid" style={{ backgroundColor: "#ade8f4" }}>
//         <footer className="py-3 my-4">
//           <ul className="nav justify-content-center border-bottom pb-3 mb-3">
//             <li className="nav-item">
//               <a href="#" class="nav-link px-2 text-body-secondary">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a href="#" className="nav-link px-2 text-body-secondary">
//                 Features
//               </a>
//             </li>
//             <li className="nav-item">
//               <a href="#" className="nav-link px-2 text-body-secondary">
//                 Pricing
//               </a>
//             </li>
//             <li className="nav-item">
//               <a href="#" className="nav-link px-2 text-body-secondary">
//                 FAQs
//               </a>
//             </li>
//             <li className="nav-item">
//               <a href="#" className="nav-link px-2 text-body-secondary">
//                 About
//               </a>
//             </li>
//           </ul>
//           <p className="text-center text-body-secondary">
//             &copy; 2024 Company, Inc
//           </p>
//         </footer>
//       </div>
//     </div>
//   );
// }

// export default Registration;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Registration() {
    const [studentname, setStudentname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [parentname, setParent] = useState("");
    const [parentemail, setParentemail] = useState("");
    const [parentpassword, setParentpassword] = useState("");
    const [studentnameError, setStudentnameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [parentnameError, setParentnameError] = useState("");

    const [parentemailError, setParentemailError] = useState("");

    const navigate = useNavigate();

    const handleForm = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const param = {
                students: 'STD' + Math.floor(Math.random() * 1000),
                studentname: studentname,
                email: email,
                password: password,
                parentpassword: parentpassword,
                parentemail: parentemail,
                parentname: parentname,
                status: 1
            };
            fetch('https://projectlogi.club/mathmate/public/api/savestudent', {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(param)
            }).then((res) => res.json()).then((result) => {
             
              navigate('/');
            });
        }
    };

    const validateForm = () => {
        let isValid = true;

        if (!studentname) {
          setStudentnameError("Please enter student name");
          isValid = false;
      } else if (/\d/.test(studentname)) {
          setStudentnameError("Student name cannot contain numbers");
          isValid = false;
      } else {
          setStudentnameError("");
      }
      

        if (!email) {
            setEmailError("Please enter email");
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError("Please enter a valid email");
            isValid = false;
        } else {
            setEmailError("");
        }

        if (!password) {
          setPasswordError("Please enter password");
          isValid = false;
      } else if (password.length < 8) {
          setPasswordError("Password must be at least 8 characters long");
          isValid = false;
      } else if (!/^\d+$/.test(password)) {
          setPasswordError("Password must contain only numbers");
          isValid = false;
      } else {
          setPasswordError("");
      }

      if (!parentname) {
        setParentnameError("Please enter parent name");
        isValid = false;
    } else if (/\d/.test(parentname)) {
        setParentnameError("Parent name cannot contain numbers");
        isValid = false;
    } else {
        setParentnameError("");
    }

        if (!parentemail) {
            setParentemailError("Please enter parent's email");
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(parentemail)) {
            setParentemailError("Please enter a valid email");
            isValid = false;
        } else {
            setParentemailError("");
        }

        return isValid;
    };

    return (
        <div>
            <header>
                <div className="header-top" style={{ backgroundColor: "#ade8f4" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-8">
                                <div className="header-top-info">
                                    <span style={{ backgroundColor: "#ade8f4" }}>
                                        Open hours: 8.00-18.00 Mon-Sat
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 mt-2">
                                <div className="">
                                    <div>
                                        <Link
                                            to="/register"
                                            className="btn btn-info btn-sm text-white"
                                        >
                                            External Registration
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <form className="container mt-5 py-5" style={{backgroundColor:'#e0fbfc',width:'350px',borderRadius:'40px'}} onSubmit={handleForm}>
                <h3>Student Registration</h3>
                <div className="form-group ">
                    <label htmlFor="studentname">Name of the Student</label>
                    <input
                        type="text"
                        className="form-control"
                        id="studentname"
                        aria-describedby="emailHelp"
                        placeholder="Enter your child name"
                        onChange={(e)=>setStudentname(e.target.value)}
                    />
                    {studentnameError && <small className="text-danger">{studentnameError}</small>}
                </div>
                <div className="form-group ">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter student email"
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    {emailError && <small className="text-danger">{emailError}</small>}
                </div>
                <div className="form-group ">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Enter student password"
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    {passwordError && <small className="text-danger">{passwordError}</small>}
                </div>
                <div className="form-group ">
                    <label htmlFor="parentname">Parent Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="parentname"
                        aria-describedby="emailHelp"
                        placeholder="Enter parent name"
                        onChange={(e)=>setParent(e.target.value)}
                    />
                    {parentnameError && <small className="text-danger">{parentnameError}</small>}
                </div>
                <div className="form-group ">
                    <label htmlFor="parentemail">Parent's Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="parentemail"
                        aria-describedby="emailHelp"
                        placeholder="Enter parent's email"
                        onChange={(e)=>setParentemail(e.target.value)}
                        />
                        {parentemailError && <small className="text-danger">{parentemailError}</small>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="parentpassword">Parent's Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="parentpassword"
                            placeholder="Enter parent's Password"
                            onChange={(e)=>setParentpassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3 mx-5">
                        Complete Registration
                    </button>
                </form>
                <div className="container-fluid" style={{ backgroundColor: "#ade8f4" }}>
                    <footer className="py-3 my-4">
                        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                            <li className="nav-item">
                                <a href="#" className="nav-link px-2 text-body-secondary">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link px-2 text-body-secondary">
                                    Features
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link px-2 text-body-secondary">
                                    Pricing
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link px-2 text-body-secondary">
                                    FAQs
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link px-2 text-body-secondary">
                                    About
                                </a>
                            </li>
                        </ul>
                        <p className="text-center text-body-secondary">
                            &copy; 2024 Company, Inc
                        </p>
                    </footer>
                </div>
            </div>
        );
    }
    
    export default Registration;
    
