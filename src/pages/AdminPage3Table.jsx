import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminPage3Table = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [studentname, setStudentname] = useState("");
  const [parentname, setParentname] = useState("");
  const [parentemail, setParentemail] = useState("");
  const [parentpassword, setParentpassword] = useState("");
  const [tid, setId] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState([]);
  const [nameID, setNameID] = useState("");
  const [password, setPassword] = useState("");
  const [refresh, setRefresh] = useState(0);

  const [errors, setErrors] = useState({
    tid: "",
    studentname: "",
    email: "",
    nameID: "",
    password: "",
    parentname: "",
    parentemail: "",
    parentpassword: "",
  });

  useEffect(() => {
    fetch("https://projectlogi.club/mathmate/public/api/getstudent", {
      method: "GET",
    }).then((response) => {
      response.json().then((data) => {
        setStudents(data);
      });
    });
  }, [refresh]);

  useEffect(() => {
    fetch("https://projectlogi.club/mathmate/public/api/getschool").then((res) => {
      res.json().then((data) => {
        setName(data);
      });
    });
  }, [refresh]);

  const isValidEmail = (email) => {
    // Regular expression for email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const saveStudent = () => {
    const validationErrors = {};
    let isValid = true;

    // Validate Student ID
    if (!tid) {
      validationErrors.tid = "Student ID is required.";
      isValid = false;
    }

    // Validate Student Name
    if (!studentname) {
      validationErrors.studentname = "Student Name is required.";
      isValid = false;
    }

    // Validate Parent Name
    if (!parentname) {
      validationErrors.parentname = "Parent Name is required.";
      isValid = false;
    }

    // Validate Student Email
    if (!email) {
      validationErrors.email = "Student Email is required.";
      isValid = false;
    } else if (!isValidEmail(email)) {
      validationErrors.email = "Invalid student email format.";
      isValid = false;
    }

    // Validate Parent Email
    if (!parentemail) {
      validationErrors.parentemail = "Parent Email is required.";
      isValid = false;
    } else if (!isValidEmail(parentemail)) {
      validationErrors.parentemail = "Invalid parent email format.";
      isValid = false;
    }

    // Validate School Name
    if (!nameID || nameID === "Select") {
      validationErrors.nameID = "School Name is required.";
      isValid = false;
    }

    // Validate Student Password
    if (!password || password.length < 3) {
      validationErrors.password =
        "Student Password must be at least 3 characters long.";
      isValid = false;
    }

    // Validate Parent Password
    if (!parentpassword || parentpassword.length < 3) {
      validationErrors.parentpassword =
        "Parent Password must be at least 3 characters long.";
      isValid = false;
    }

    setErrors(validationErrors);

    if (isValid) {
      const param = {
        students: tid,
        studentname: studentname,
        email: email,
        name: nameID,
        password: password,
        parentpassword: parentpassword,
        parentemail: parentemail,
        parentname: parentname,
      };

      fetch("https://projectlogi.club/mathmate/public/api/savestudent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
            toast.success("Student saved successfully"); // Show success message in toast
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };
  const deleteStudent = (id) => {
    let param = {
      uid: id,
    };

    fetch("https://projectlogi.club/mathmate/public/api/deletestudent", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(param),
    }).then((res) => {
      res.json().then((data) => {
        if (res.ok) {
          toast.success("Student deleted successfully"); // Show success message in toast
          setRefresh((prev) => prev + 1);
        } else {
          toast.error("Error deleting school.");
        }
      });
    });
  };
  const issueCertificate = (id) => {
    let param = {
      id: id,
    };
    console.log(param);

    fetch("https://projectlogi.club/mathmate/public/api/issuestudentcertificate", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(param),
    }).then((res) => {
      res.json().then((data) => {
        setRefresh((prev) => prev + 1);
      });
    });
  };

  const editStudent = (id) => {
    navigate("/editadminpage3", { state: { id: id } });
  };

  return (
    <>
      {/* <nav aria-label="breadcrumb">
        <ol className="breadcrumb bg-light p-2 px-4 border border-1 rounded-3">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Student
          </li>
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
                <div className="row">
                  <div className="col-6">
                    <label htmlFor="inputPassword6" className="col-form-label">
                      Student ID
                    </label>
                    <input
                      type="text"
                      id="inputPassword6"
                      className={`form-control ${
                        errors.tid ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Student ID"
                      aria-describedby=""
                      value={tid}
                      onChange={(e) => {
                        setId(e.target.value);
                        setErrors({ ...errors, tid: "" });
                      }}
                    />
                    {errors.tid && (
                      <div className="invalid-feedback">{errors.tid}</div>
                    )}
                  </div>
                  <div className="col-6">
                    <label htmlFor="inputPassword6" className="col-form-label">
                      Parent Name
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.parentname ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Parent Name"
                      aria-describedby=""
                      value={parentname}
                      onChange={(e) => {
                        setParentname(e.target.value);
                        setErrors({ ...errors, parentname: "" });
                      }}
                    />
                    {errors.parentname && (
                      <div className="invalid-feedback">
                        {errors.parentname}
                      </div>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <label htmlFor="inputPassword6" className="col-form-label">
                      Student Name
                    </label>
                    <input
                      type="text"
                      id="inputPassword6"
                      className={`form-control ${
                        errors.studentname ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Student Name"
                      aria-describedby=""
                      value={studentname}
                      onChange={(e) => {
                        setStudentname(e.target.value);
                        setErrors({ ...errors, studentname: "" });
                      }}
                    />
                    {errors.studentname && (
                      <div className="invalid-feedback">
                        {errors.studentname}
                      </div>
                    )}
                  </div>
                  <div className="col-6">
                    <label htmlFor="inputPassword6" className="col-form-label">
                      Parent Email
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.parentemail ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Parent Email"
                      aria-describedby=""
                      value={parentemail}
                      onChange={(e) => {
                        setParentemail(e.target.value);
                        setErrors({ ...errors, parentemail: "" });
                      }}
                    />
                    {errors.parentemail && (
                      <div className="invalid-feedback">
                        {errors.parentemail}
                      </div>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <label htmlFor="inputPassword6" className="col-form-label">
                      Student Email
                    </label>
                    <input
                      type="email"
                      id="inputPassword6"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Student Email"
                      aria-describedby=""
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setErrors({ ...errors, email: "" });
                      }}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>

                  <div className="col-6">
                    <label htmlFor="inputPassword6" className="col-form-label">
                      Parent Password
                    </label>
                    <input
                      type="password"
                      className={`form-control ${
                        errors.parentpassword ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Parent Password"
                      aria-describedby=""
                      value={parentpassword}
                      onChange={(e) => {
                        setParentpassword(e.target.value);
                        setErrors({ ...errors, parentpassword: "" });
                      }}
                    />
                    {errors.parentpassword && (
                      <div className="invalid-feedback">
                        {errors.parentpassword}
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-6">
                  <label htmlFor="inputPassword6" className="col-form-label">
                    School Name
                  </label>
                  <select
                    style={{
                      width: "100%",
                      padding: 10,
                      borderRadius: 9,
                      borderWidth: 0.01,
                      borderColor: "rgba(0,0,0,0.1)",
                    }}
                    onChange={(e) => {
                      setNameID(e.target.value);
                      setErrors({ ...errors, nameID: "" });
                    }}
                    className={`form-select ${
                      errors.nameID ? "is-invalid" : ""
                    }`}
                  >
                    <option>Select</option>
                    {name.map((data, index) => {
                      return (
                        <option value={data.id} key={index}>
                          {data.name}
                        </option>
                      );
                    })}
                  </select>
                  {errors.nameID && (
                    <div className="invalid-feedback">{errors.nameID}</div>
                  )}
                </div>

                <div className="col-6">
                  <label htmlFor="inputPassword6" className="col-form-label">
                    Student Password
                  </label>
                  <input
                    type="password"
                    id="inputPassword6"
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    placeholder="Enter Student Password"
                    aria-describedby=""
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setErrors({ ...errors, password: "" });
                    }}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-success mt-2"
                  onClick={(event) => {
                    event.preventDefault();
                    saveStudent();
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
                      <th scope="col">Certificate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((value, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row">
                            <span className="mb-0 text-sm" scope="row">
                              <td> {value.students}</td>
                            </span>
                          </th>
                          <td>{value.studentname}</td>
                          <td>{value.email}</td>
                          <td>
                            <button
                              className="btn btn-info"
                              onClick={() => editStudent(value.id)}
                            >
                              Edit
                            </button>

                            <button
                              className="btn btn-danger"
                              onClick={() => deleteStudent(value.uid)}
                            >
                              Delete
                            </button>
                          </td>
                          <td>
                            {value.is_certificate == 0 ? (
                              <button
                                className="btn btn-success"
                                onClick={() => issueCertificate(value.id)}
                              >
                                Issue Certificate
                              </button>
                            ) : (
                              <p>Certificate Issued</p>
                            )}
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
                <div
                  className="dataTables_length d-flex align-items-center gap-3"
                  id="dataTable_length"
                >
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
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
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
};

export default AdminPage3Table;
