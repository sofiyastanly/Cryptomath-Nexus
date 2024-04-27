import React, { useEffect, useState } from "react";
import Teacher from "../components/Teacher";
import { useLocation } from "react-router-dom";

function ScoreReport() {
  const[viewscore, SetViewData] = useState([]);
  const [nmae, setName] = useState()
  const [parentname, setParentname] = useState()
  const [schoolname, setSchoolName] = useState()
  const [teachername, setTeacherName] = useState()
  



  const location = useLocation()




  useEffect(() => {
    const info = JSON.parse(localStorage.getItem("userdata"));
    let params = {
      id:location.state.id,
      techerid: info.id,
    };
  
    fetch('https://projectlogi.club/mathmate/public/api/scoredetails',{
      method:'post',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(params)
    }).then((res)=>res.json()).then((result)=>{
      console.log(result,"results");
      setName(result[0].studentname)
      setParentname(result[0].parentname)
      setSchoolName(result[0].name)
      setTeacherName(result[0].tename)
      // setGame(result[0].gamename)
      // setGamescore(result[0].score)
      SetViewData(result)


    })
  }, []);
  return (
    <div>
      <Teacher />
      <div
        className="row"
        style={{ marginTop: "-600px", width: "70%", marginLeft: "250px" }}
      >
        <div className="col-2"></div>
        <div className="col"></div>
        <div class="container">
          <h2 class="text-primary">Student Score Report</h2>
          <div class="row mt-3">
            <div class="col-2">Name: </div>
            <div class="col-6">{nmae}</div>
          </div>
          <div class="row mt-3">
            <div class="col-2">Parent Name: </div>
            <div class="col-6">{parentname}</div>
          </div>

          <div class="row mt-3">
            <div class="col-2">School Name: </div>
            <div class="col-6">{schoolname}</div>
          </div>
          <div class="row mt-3">
            <div class="col-2">Teacher Name: </div>
            <div class="col-6">{teachername}</div>
          </div>
          <div class="row mt-3">
            <table class="table table-bordered table-primary">
              <tr>
                <th>
                  <i class="fa-solid fa-chess text-primary"></i> Games
                </th>
                <th>
                  <i class="fa-solid fa-calendar-days text-primary"></i> Date
                </th>
                <th>
                  <i class="fa-solid fa-star text-warning"></i> Score
                </th>
              </tr>
              {viewscore.map((values)=>{
              
                return(
                  <tr>
                  <td>{values.gamename}</td>
                  <td>{values.currentdate}</td>
                  <td> {values.score}</td>
                </tr>
                )
              })}
           

             
            </table>
          </div>

     
        </div>
      </div>
    </div>
  );
}

export default ScoreReport;
