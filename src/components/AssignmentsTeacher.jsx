import React from "react";
import AdminPage3Table from "../pages/AdminPage3Table";

import Teacher from "./Teacher";
import TeacherPage1Table from "../pages/TeacherTable1";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function AssignmentsTeacher() {
  const navigate = useNavigate();
  const [file, setfile] = useState();
  const info = JSON.parse(localStorage.getItem("userdata"));

  const handleFileUpload = (event) => {
    const formdata = new FormData();
    formdata.append("image", event.target.files[0]);
    fetch("https://projectlogi.club/mathmate/public/api/fileupload", {
      method: "POST",
      body: formdata,
    }).then((res) => {
      res.json().then((data) => {
        setfile(data);
      });
    });
  };

  const savefile = () => {
    let param = {
      teacherid: info.id,
      filename: file,
    };

    fetch("https://projectlogi.club/mathmate/public/api/savecontent", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(param),
    }).then((res) => {
      res.json().then((data) => {
         
        console.log("data", data);
      });
    });
  };

  return (
    <>
      <Teacher />
      <div className="row">
        <div className="col-2"></div>
        <div className="col" style={{ marginTop: "-645px" }}>
          <div className="card mt-5">
            <div className="card-header">
              <i className="fa fa-plus"></i>
            </div>
            <div className="card-body">
              <form>
                <div className="row g-3 align-items-center">
                  <div className="col-2">
                    <label for="inputPassword6" className="col-form-label text-success">
                     Upload Syllabus/Text
                    </label>
                  </div>
                  <div className="col-4">
                    <input
                      type="file"
                      id="inputPassword6"
                      className="form-control"
                      placeholder="Upload File"
                      aria-describedby=""
                      onChange={handleFileUpload}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary mt-2"
                  onClick={(event) => {
                    savefile();
                    event.preventDefault();
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AssignmentsTeacher;
