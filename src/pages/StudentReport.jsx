import React, { useEffect, useState } from "react";
import Teacher from "../components/Teacher";
import { useLocation } from "react-router-dom";
import Parent from "../components/Parent";
function Studentreport() {
  const [viewperformance, SetViewData] = useState([]);
  const [name, setName] = useState();
  const [parentname, setParentname] = useState();
  const [schoolname, setSchoolName] = useState();
  const [teachername, setTeacherName] = useState();

  const location = useLocation();
  console.log(location);

  useEffect(() => {
    const info = JSON.parse(localStorage.getItem("userdata"));
    let params = {
      id: info.childid, 
    };

    fetch("https://projectlogi.club/mathmate/public/api/getPerformanceport", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result, "resultsaps");
        setName(result[0].studentname)
        setParentname(result[0].parentname)
        setSchoolName(result[0].name)
        setTeacherName(result[0].tename)

        SetViewData(result)
      });
  }, []);
  return (
    <div>
      <Parent />

      <div className="row">
        <div className="col-2"></div>
        <div className="col" style={{ marginTop: "-600px" }}>
          <div className="container">
            <h2 className="text-success">Student Performance Report</h2>
            <div className="row mt-3">
              <div className="col-2">Name: </div>
              <div className="col-6">{name}</div>
            </div>
            <div className="row mt-3">
              <div className="col-2">Parent Name: </div>
              <div className="col-6">{parentname}</div>
            </div>

            <div className="row mt-3">
              <div className="col-2">School Name: </div>
              <div className="col-6">{schoolname}</div>
            </div>
            <div className="row mt-3">
              <div className="col-2">Teacher Name: </div>
              <div className="col-6">{teachername}</div>
            </div>
            <div className="row mt-3">
              <table className="table table-bordered table-success">
                <tr>
                  <th>Games</th>
                  <th>Score</th>
                  <th>Date</th>
                  <th>Improvements</th>
                </tr>
                {viewperformance.map((items) => {
                  return (
                    <tr>
                      <td>{items.gamename}</td>
                      <td>{items.score}</td>
                      <td>{items.currentdate}</td>
                     
                      <td>{items.imp}</td>
                    </tr>
                  );
                })}
              </table>
            </div>

            <div className="row">
              <div className="col">
                <div>
                  <b>Date:02-03-2024</b>
                </div>
                <div>
                  <b>Day:Monday</b>
                </div>
              </div>
              <div className="col"></div>
              <div className="col">
                <div>
                  <img src="img/images.png" alt="" width="100px" />
                </div>
                <div>
                  <b>
                    Sign:
                    <img src="img/download.png" alt="" width="100px" />
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Studentreport;
