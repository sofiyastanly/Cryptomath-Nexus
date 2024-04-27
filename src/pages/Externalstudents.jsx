import React from "react";

// import Student from './Student'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import School from "../components/School";
function Externalstudents() {
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
  const [teachers, setTeachers] = useState([]);
  const [assignteacher, setassignteacher] = useState([]);
  const [formErrors, setFormErrors] = useState({
    tid: "",
    studentname: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const info = JSON.parse(localStorage.getItem("userdata"));
    let studentparam = {
      schoolid: info.id,
    };
    fetch("https://projectlogi.club/mathmate/public/api/getexternalstudents", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(studentparam),
    })
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
      });
    fetch("https://projectlogi.club/mathmate/public/api/getschoolteachers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(studentparam),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTeachers(data);
      });
  }, [refresh]);

  const editstudent_school = (id) => {
    navigate("/editstudentpage4", { state: { id: id } });
  };

  const approvestudent = (id) => {
    console.log(id);

    let teacherarr = assignteacher;

    console.log(teacherarr);
    let teacherid = teacherarr.filter((m) => {
      return m.id == id;
    });

    const info = JSON.parse(localStorage.getItem("userdata"));

    let param = {
      studentid: id,
      teacherid: teacherid[0]?.teacher,
      schoolid: info.id,
    };

    fetch("https://projectlogi.club/mathmate/public/api/approvestudentschool", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(param),
    })
      .then((response) => response.json())
      .then((data) => { 
        setRefresh(prev=>prev+1)
      });
  };
  return (
    <>
      <School />
      <>
        <div className="row">
          <div className="col-2"></div>
          <div className="col" style={{ marginTop: "-645px" }}>
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
                        <th scope="col">Teacher</th>
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
                              <select
                                onChange={(e) =>
                                  setassignteacher((prev) => [
                                    ...prev,
                                    { id: value.id, teacher: e.target.value },
                                  ])
                                }
                                className="form-control"
                              >
                                <option>Select Teacher</option>
                                {teachers.map((data) => {
                                  return (
                                    <option value={data.uid}>
                                      {data.tename}
                                    </option>
                                  );
                                })}
                              </select>
                            </td>

                            <td>
                              <button
                                className="btn btn-info"
                                onClick={(event) => {
                                  event.preventDefault();
                                  approvestudent(value.id);
                                }}
                              >
                                Approve
                              </button>
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
                    <ul class="pagination">
                      <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Externalstudents;
