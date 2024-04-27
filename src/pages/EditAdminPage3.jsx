import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const EditAdminPage3 = () => {
  const [sid, setSid] = useState([]);
  const [students, setStudents] = useState("");
  const [studentname, setStudentname] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState([]);
  const [nameID, setNameID] = useState("");
  const [password, setPassword] = useState("");
  const [uid, setUid] = useState("");

  const [parentname, setParentname] = useState("");
  const [parentemail, setParentemail] = useState("");
  const [parentpassword, setParentpassword] = useState("");
  // Validation error states
  const [studentsError, setStudentsError] = useState("");
  const [studentnameError, setStudentnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Your fetch code to get school data
    fetch("https://projectlogi.club/mathmate/public/api/getschool").then((res) => {
      res.json().then((data) => {
        console.log("res", data);
        setName(data);
      });
    });
  }, []);

  useEffect(() => {
    // Your fetch code to get student data based on location.state.id
    console.log(location);

    setSid(location.state.id);
    let param = {
      id: location.state.id,
    };

    fetch("https://projectlogi.club/mathmate/public/api/getstudentbyid", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(param),
    }).then((res) => {
      res.json().then((data) => {
        setStudents(data[0].students);
        setStudentname(data[0].studentname);
        setEmail(data[0].email);
        setNameID(data[0].name);
        setPassword(data[0].password);
        setUid(data[0].uid);
        setParentname(data[0].parentname);
        setParentemail(data[0].parentemail);
        setParentpassword(data[0].parentpassword);
        console.log("data", data);
      });
    });
  }, [location.state.id]);

  const validateForm = () => {
    let valid = true;

    if (!students) {
      setStudentsError("Student ID is required.");
      valid = false;
    } else {
      setStudentsError("");
    }

    if (!studentname) {
      setStudentnameError("Student Name is required.");
      valid = false;
    } else {
      setStudentnameError("");
    }

    if (!email) {
      setEmailError("Student Email is required.");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!nameID) {
      setNameError("School name is required.");
      valid = false;
    } else {
      setNameError("");
    }

    if (!password) {
      setPasswordError("Password is required.");
      valid = false;
    } else {
      setPasswordError("");
    }

    return valid;
  };

  const updateStudent = () => {
    if (validateForm()) {
      let param = {
        id: sid,
        students,
        studentname,
        email,
        name: nameID,
        password,
        uid, 
        parentname,
      };

      fetch("https://projectlogi.club/mathmate/public/api/updatestudent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(param),
      }).then((res) => {
        if (res.ok) {
          navigate("/adminpage3");
        } else {
          // Handle error here
        }
      });
    }
  };

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb bg-light p-2 px-4 border border-1 rounded-3">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            School
          </li>
        </ol>
      </nav>

      <div className="card mt-5">
        <div className="card-header">
          <i className="fa fa-plus"></i>
        </div>
        <div className="card-body">
          <form>
            <div className="row g-3 align-items-center">
              <div className="col-2">
                <label htmlFor="inputStudents" className="col-form-label">
                  Student ID
                </label>
              </div>
              <div className="col-4">
                <input
                  type="text"
                  id="inputStudents"
                  className={`form-control ${
                    studentsError ? "is-invalid" : ""
                  }`}
                  placeholder="Student ID"
                  aria-describedby=""
                  value={students}
                  onChange={(e) => {
                    setStudents(e.target.value);
                    setStudentsError("");
                  }}
                />
                {studentsError && (
                  <div className="invalid-feedback">{studentsError}</div>
                )}
              </div>
            </div>
            <div className="row g-3 mt-2 align-items-center">
              <div className="col-2">
                <label htmlFor="inputStudentname" className="col-form-label">
                  Student Name
                </label>
              </div>
              <div className="col-4">
                <input
                  type="text"
                  id="inputStudentname"
                  className={`form-control ${
                    studentnameError ? "is-invalid" : ""
                  }`}
                  placeholder="Student Name"
                  aria-describedby=""
                  value={studentname}
                  onChange={(e) => {
                    setStudentname(e.target.value);
                    setStudentnameError("");
                  }}
                />
                {studentnameError && (
                  <div className="invalid-feedback">{studentnameError}</div>
                )}
              </div>
            </div>
            <div className="row g-3 mt-2 align-items-center">
              <div className="col-2">
                <label htmlFor="inputEmail" className="col-form-label">
                  Student Email
                </label>
              </div>
              <div className="col-4">
                <input
                  type="email"
                  id="inputEmail"
                  className={`form-control ${emailError ? "is-invalid" : ""}`}
                  placeholder="Student Email"
                  aria-describedby=""
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError("");
                  }}
                />
                {emailError && (
                  <div className="invalid-feedback">{emailError}</div>
                )}
              </div>
            </div>
            <div className="row g-3 mt-2 align-items-center">
              <div className="col-2">
                <label htmlFor="inputSchoolName" className="col-form-label">
                  School name
                </label>
              </div>
              <div className="col-5">
                <select
                  value={nameID}
                  style={{
                    width: "100%",
                    padding: 10,
                    borderRadius: 9,
                    borderWidth: 0.01,
                    borderColor: "rgba(0,0,0,0.1)",
                  }}
                  onChange={(e) => {
                    setNameID(e.target.value);
                  }}
                  className={`form-select ${nameError ? "is-invalid" : ""}`}
                >
                  <option>Select</option>
                  {name?.length > 0
                    ? name.map((data, index) => {
                        return (
                          <option value={data.id} key={index}>
                            {data.name}
                          </option>
                        );
                      })
                    : ""}
                </select>
                {nameError && (
                  <div className="invalid-feedback">{nameError}</div>
                )}
              </div>
            </div>
            <div className="row g-3 mt-2 align-items-center">
              <div className="col-2">
                <label htmlFor="inputPassword" className="col-form-label">
                  Password
                </label>
              </div>
              <div className="col-4">
                <input
                  type="password"
                  id="inputPassword"
                  className={`form-control ${
                    passwordError ? "is-invalid" : ""
                  }`}
                  placeholder="Password"
                  aria-describedby=""
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError("");
                  }}
                />
                {passwordError && (
                  <div className="invalid-feedback">{passwordError}</div>
                )}
              </div>
            </div>
            <div className="row g-3 mt-2 align-items-center">
              <div className="col-2">
                <label htmlFor="inputPassword" className="col-form-label">
                  Parent Name
                </label>
              </div>
              <div className="col-4">
              <input
                type="text"
                className={`form-control`}
                placeholder="Enter Parent Name"
                aria-describedby=""
                value={parentname}
                onChange={(e) => {
                  setParentname(e.target.value);
                }}
              />
                            </div>

            </div>
            
            <button
              type="submit"
              className="btn btn-success mt-2"
              onClick={(e) => {
                e.preventDefault();
                updateStudent();
              }}
            >
              Edit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditAdminPage3;
