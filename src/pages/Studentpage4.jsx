import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
function StudentPage4() {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [studentname, setStudentname] = useState("");
  const [tid, setId] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState([]);
  const [nameID, setNameID] = useState("");
  const [password, setPassword] = useState("");
  const [schoolid, setSchoolid] = useState("");
  const [refresh, setRefresh] = useState(0);
  const [parentname, setParentname] = useState("");
  const [parentemail, setParentemail] = useState("");
  const [parentpassword, setParentpassword] = useState("");
  const [formErrors, setFormErrors] = useState({
    tid: "",
    studentname: "",
    email: "",
    password: "",
    parentname: "",
    parentemail: "",
    parentpassword: "",
  });

  useEffect(() => {
    const info = JSON.parse(localStorage.getItem("userdata"));
    let studentparam = {
      schoolid: info.id,
    };
    fetch("https://projectlogi.club/mathmate/public/api/getstudent_school", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(studentparam),
    })
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
      });
  }, [refresh]);

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      tid: "",
      studentname: "",
      email: "",
      password: "",
    };

    if (tid === "") {
      valid = false;
      newErrors.tid = "Student ID is required.";
    }

    if (studentname === "") {
      valid = false;
      newErrors.studentname = "Student Name is required.";
    }

    if (email === "") {
      valid = false;
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      valid = false;
      newErrors.email = "Invalid email format.";
    }

    if (password === "") {
      valid = false;
      newErrors.password = "Password is required.";
    }

    if (parentname === "") {
      valid = false;
      newErrors.parentname = "Parent Name is required.";
    }

    if (parentemail === "") {
      valid = false;
      newErrors.parentemail = "Parent Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(parentemail)) {
      valid = false;
      newErrors.parentemail = "Invalid parent email format.";
    }

    if (parentpassword === "") {
      valid = false;
      newErrors.parentpassword = "Parent Password is required.";
    }

    setFormErrors(newErrors);

    return valid;
  };
  const savestudent_school = () => {
    if (validateForm()) {
      const info = JSON.parse(localStorage.getItem("userdata"));
      const param = {
        students: tid,
        studentname: studentname,
        email: email,
        name: info.id,
        password: password,
        parentpassword: parentpassword,
        parentemail: parentemail,
        parentname: parentname,
      };

      fetch("https://projectlogi.club/mathmate/public/api/savestudent_school", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(param),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.errors) {
            // Handle validation errors
            const errorMessages = Object.values(data.errors).join("\n");
            toast.error(errorMessages);
          } else {
            // Display success message
            toast.success("Student saved successfully!");
            setRefresh((prev) => prev + 1);
            setStudentname("");
            setId("");
            setEmail("");
            setPassword("");
            setSchoolid("");
            setParentname("");
            setParentemail("");
            setParentpassword("");
          }
        });
    }
  };

  const deletestudent_school = (id) => {
    let param = {
      uid: id,
    };

    fetch("https://projectlogi.club/mathmate/public/api/deletestudent_school", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(param),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg === "Success") {
          // Display an alert message indicating successful deletion
          window.alert("Student deleted successfully!");
          navigate("/studentpage4");
          setRefresh((prev) => prev + 1);
        } else {
          // Handle the case where deletion was not successful
          window.alert("Student deleted successfully!");
        }
      });
  };

  const editstudent_school = (id) => {
    navigate("/editstudentpage4", { state: { id: id } });
  };
  return (
    <>
      {/* <nav aria-label="breadcrumb"  >
                <ol className="breadcrumb bg-light p-2 px-4 border border-1 rounded-3">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Student</li>
                </ol>
            </nav> */}

      <div className="row">
        <div className="col-2"></div>
        <div className="col" style={{ marginTop: "-645px" }}>
          <div className="card mt-5">
            <div className="card-header">
              <i className="fa fa-plus"></i>
            </div>
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
                      className={`form-control ${
                        formErrors.tid && "is-invalid"
                      }`}
                      placeholder="Enter Student ID"
                      aria-describedby=""
                      value={tid}
                      onChange={(e) => setId(e.target.value)}
                    />
                    {formErrors.tid && (
                      <div className="invalid-feedback">{formErrors.tid}</div>
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
                      className={`form-control ${
                        formErrors.studentname && "is-invalid"
                      }`}
                      placeholder="Enter Student Name"
                      aria-describedby=""
                      value={studentname}
                      onChange={(e) => setStudentname(e.target.value)}
                    />
                    {formErrors.studentname && (
                      <div className="invalid-feedback">
                        {formErrors.studentname}
                      </div>
                    )}
                  </div>
                </div>
                <div className="row g-3 mt-2 align-items-center">
                  <div className="col-2">
                    <label htmlFor="inputPassword6" className="col-form-label">
                      Parent Name
                    </label>
                  </div>
                  <div className="col-4">
                    <input
                      type="text"
                      id="inputPassword6"
                      className={`form-control ${
                        formErrors.parentname ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Parent Name"
                      aria-describedby=""
                      value={parentname}
                      onChange={(e) => setParentname(e.target.value)}
                    />
                    {formErrors.parentname && (
                      <div className="invalid-feedback">
                        {formErrors.parentname}
                      </div>
                    )}
                  </div>
                </div>
                <div className="row g-3 mt-2 align-items-center">
                  <div className="col-2">
                    <label htmlFor="inputPassword6" className="col-form-label">
                      Parent Email
                    </label>
                  </div>
                  <div className="col-4">
                    <input
                      type="email"
                      id="inputPassword6"
                      className={`form-control ${
                        formErrors.parentemail ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Parent Email"
                      aria-describedby=""
                      value={parentemail}
                      onChange={(e) => setParentemail(e.target.value)}
                    />
                    {formErrors.parentemail && (
                      <div className="invalid-feedback">
                        {formErrors.parentemail}
                      </div>
                    )}
                  </div>
                </div>
                <div className="row g-3 mt-2 align-items-center">
                  <div className="col-2">
                    <label htmlFor="inputPassword6" className="col-form-label">
                      Parent Password
                    </label>
                  </div>
                  <div className="col-4">
                    <input
                      type="password"
                      id="inputPassword6"
                      className={`form-control ${
                        formErrors.parentpassword ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Parent Password"
                      aria-describedby=""
                      value={parentpassword}
                      onChange={(e) => setParentpassword(e.target.value)}
                    />
                    {formErrors.parentpassword && (
                      <div className="invalid-feedback">
                        {formErrors.parentpassword}
                      </div>
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
                      className={`form-control ${
                        formErrors.email && "is-invalid"
                      }`}
                      placeholder="Enter Student Email"
                      aria-describedby=""
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      Student Password
                    </label>
                  </div>
                  <div className="col-4">
                    <input
                      type="password"
                      id="inputPassword6"
                      className={`form-control ${
                        formErrors.password && "is-invalid"
                      }`}
                      placeholder="Enter Student Password"
                      aria-describedby=""
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {formErrors.password && (
                      <div className="invalid-feedback">
                        {formErrors.password}
                      </div>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-success mt-2"
                  onClick={(event) => {
                    event.preventDefault();
                    savestudent_school();
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className="dataTable my-5 pb-5">
            <div className="row justify-content-between my-3">
              <div className="col-sm-12 col-md-2">
                <div
                  className="dataTables_length d-flex align-items-center gap-3"
                  id="dataTable_length"
                >
                  <label> Show</label>
                  <select
                    name="dataTable_length"
                    aria-controls="dataTable"
                    className="form-control form-control-sm"
                  >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                  <label>entries </label>
                </div>
              </div>
              <div className="col-sm-12 col-md-3">
                <div
                  id="dataTable_filter"
                  className="dataTables_filter d-flex align-items-center gap-3"
                >
                  <label>Search:</label>
                  <input
                    type="search"
                    className="form-control form-control-sm  "
                    placeholder=""
                    aria-controls="dataTable"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <table className="table table-bordered table-hover rounded">
                  <thead>
                    <tr>
                      <th scope="col">Student ID</th>
                      <th scope="col">Student Name</th>
                      <th scope="col">Student Email</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((value, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row">
                            <span className="mb-0 text-sm" scope="row">
                              <td>{value.students}</td>
                            </span>
                          </th>
                          <td>{value.studentname}</td>
                          <td>{value.email}</td>

                          <td>
                            {" "}
                            <button
                              className="btn btn-info"
                              onClick={(event) => {
                                event.preventDefault();
                                editstudent_school(value.uid);
                              }}
                            >
                              {" "}
                              Edit
                            </button>
                          </td>
                          <td>
                            {" "}
                            <button
                              className="btn btn-danger"
                              onClick={(event) => {
                                event.preventDefault();
                                deletestudent_school(value.uid);
                              }}
                            >
                              {" "}
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentPage4;
