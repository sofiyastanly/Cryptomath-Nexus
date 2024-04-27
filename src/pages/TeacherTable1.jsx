import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
function TeacherPage1Table() {
  const navigate = useNavigate();
  const [studentid, setStudentid] = useState([]);
  const [studentname, setStudentname] = useState();
  const [tid, setId] = useState();
  const [email, setEmail] = useState();
  const [name, setName] = useState([]);
  const [nameID, setNameID] = useState();
  const [password, setPassword] = useState();
  const [schoolid, setSchoolid] = useState();
  const [refresh, setRefresh] = useState(0);
  const [parentname, setParentname] = useState("");
  const [parentemail, setParentemail] = useState("");
  const [parentpassword, setParentpassword] = useState("");
  const info = JSON.parse(localStorage.getItem("userdata"));

  useEffect(() => {
    fetch("https://projectlogi.club/mathmate/public/api/getschool").then((res) => {
      res.json().then((data) => {
        console.log("res", data);
        setName(data);
      });
    });
  }, []);
  useEffect(() => {
    let param = {
      uid: info.id,
    };
    fetch("https://projectlogi.club/mathmate/public/api/getteacherbyuid", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(param),
    }).then((response) => {
      response.json().then((data) => {
        setSchoolid(data[0].name);
      });
    });

    fetch("https://projectlogi.club/mathmate/public/api/getstudentteacher", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(param),
    }).then((response) => {
      response.json().then((data) => {
        console.log("res", data);
        setStudentid(data);
      });
    });
  }, [refresh]);

  const saveteacher_login = () => {
    // Check if required fields are filled out
    if (!tid || !studentname || !email || !password || !parentpassword || !parentemail || !parentname || !schoolid) {
        alert("Please fill out all required fields.");
        return;
    }

    // Check if email and parent email are valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid student email address.");
        return;
    }
    if (!emailRegex.test(parentemail)) {
        alert("Please enter a valid parent email address.");
        return;
    }

    // If all validations pass, proceed with API call
    const info = JSON.parse(localStorage.getItem('userdata'));
    const param = {
        students: tid,
        studentname: studentname,
        email: email,
        name: schoolid,
        password: password,
        parentpassword: parentpassword,
        parentemail: parentemail,
        parentname: parentname,
        teachersid: info.id,
    };
    console.log(param);
    fetch("https://projectlogi.club/mathmate/public/api/savestudent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(param),
    }).then((res) => {
      // Clear the form fields after successful submission
      setId('');
      setStudentname('');
      setEmail('');
      setPassword('');
      setParentpassword('');
      setParentemail('');
      setParentname('');
    
      setRefresh((prev) => prev + 1);
  }).catch((error) => {
        console.error("Error:", error);
        // Handle error accordingly
        alert("An error occurred while saving the student. Please try again later.");
    });
};
  const deleteteacher_login = (id) => {
    let param = {
      uid: id,
    };

    fetch("https://projectlogi.club/mathmate/public/api/deletestudent", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(param),
    }).then((res) => {
      res.json().then((data) => {
        navigate("/TeacherPage1");
        setRefresh((prev) => prev + 1);
      });
    });
  };
  const editTeacher_login = (id) => {
    navigate("/editteacherpage1", { state: { id: id } });
  };
  return (
    <>
     <div className="row">
    <div className="col-2"></div>
    <div className="col" style={{marginTop:'-645px'}}>
           

      <div className="card mt-5">
        <div className="card-header">
          <i className="fa fa-plus"></i>
        </div>
        <div className="card-body">
          <form>
            <div className="row g-3 align-items-center">
              <div className="col-2">
                <label for="inputPassword6" className="col-form-label">
                  Student ID
                </label>
              </div>
              <div className="col-4">
                <input
                  type="text"
                  id="inputPassword6"
                  className="form-control"
                  placeholder="Enter Student ID"
                  aria-describedby=""
                  value={tid}
                  onChange={(e) => {
                    setId(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="row g-3 mt-2 align-items-center">
              <div className="col-2">
                <label for="inputPassword6" className="col-form-label">
                  Student Name
                </label>
              </div>
              <div className="col-4">
                <input
                  type="text"
                  id="inputPassword6"
                  className="form-control"
                  placeholder="Enter Student Name"
                  aria-describedby=""
                  value={studentname}
                  onChange={(e) => {
                    setStudentname(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="row g-3 mt-2 align-items-center">
              <div className="col-2">
                <label for="inputPassword6" className="col-form-label">
                  Student Email
                </label>
              </div>
              <div className="col-4">
                <input
                  type="email"
                  id="inputPassword6"
                  className="form-control"
                  placeholder="Enter Student Email "
                  aria-describedby=""
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="row g-3 mt-2 align-items-center">
              <div className="col-2">
                <label for="inputPassword6" className="col-form-label">
                  Student Password
                </label>
              </div>
              <div className="col-4">
                <input
                  type="password"
                  id="inputPassword6"
                  className="form-control"
                  placeholder="Enter Student Password "
                  aria-describedby=""
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
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
                  className={`form-control`}
                  placeholder="Enter Parent Name"
                  aria-describedby=""
                  value={parentname}
                  onChange={(e) => setParentname(e.target.value)}
                />
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
                  className={`form-control`}
                  placeholder="Enter Parent Email"
                  aria-describedby=""
                  value={parentemail}
                  onChange={(e) => setParentemail(e.target.value)}
                />
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
                  className={`form-control`}
                  placeholder="Enter Parent Password"
                  aria-describedby=""
                  value={parentpassword}
                  onChange={(e) => setParentpassword(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-success mt-2"
              onClick={(event) => {
                event.preventDefault();
                saveteacher_login();
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
                {studentid.map((value, index) => {
                  console.log(value,"uid");
                  return (
                    <tr key={index}>
                      <th scope="row">
                        <span className="mb-0 text-sm" scope="row">
                          <td> {value.id}</td>
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
                            editTeacher_login(value.id);
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
                            deleteteacher_login(value.uid);
                          }}
                        >
                          {" "}
                          Delete
                        </button>
                      </td>

                      <td>
                        {" "}
                        <Link
                          className="btn btn-warning"
                          to='/scorerepot'
                          state={{id:value.uid}}
                        >
                          {" "}
                           Score Report
                        </Link>
                      </td>

                      <td>
                        {" "}
                        <Link
                          className="btn btn-primary"
                          to='/peformancereport'
                          state={{id:value.uid}}
                        >
                          {" "}
                           Performance Report
                        </Link>
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

export default TeacherPage1Table;
