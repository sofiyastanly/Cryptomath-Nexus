import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
function ParentTable2() {
  const [gamescore, setGamescore] = useState([]);

  const [checkData, setCheckData] = useState([]);
  const [teacherdata, setTeacherdata] = useState([]);
  Chart.register(...registerables);

  const userdata = JSON.parse(localStorage.getItem("userdata"));

  useEffect(() => {
    let info = JSON.parse(localStorage.getItem("userdata"));

    console.log("infooooooooooo", info);

    let param = {
      id: info.childid,
    };
    console.log(param);
    fetch("https://projectlogi.club/mathmate/public/api/getchilddata", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(param),
    }).then((response) => {
      response.json().then((data) => {
        setTeacherdata(data);
      });
    });
  }, []);

  useEffect(() => {
    fetch("https://projectlogi.club/mathmate/public/api/viewallscores")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data = data.filter((d) => {
          return d.sid == userdata.childid;
        });
        setCheckData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const chartData = {
    labels: checkData.map((score) => `${score.gamename}`),
    datasets: checkData.reduce((acc, score) => {
      const existingDataset = acc.find(
        (dataset) => dataset.label === `${score.studentname}`
      );
      if (existingDataset) {
        existingDataset.data.push(score.score);
      } else {
        acc.push({
          label: `${score.studentname}`,
          data: [score.score],
          fill: false,
          borderColor: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
            Math.random() * 255
          })`,
        });
      }
      return acc;
    }, []),
  };

  useEffect(() => {
    let info = JSON.parse(localStorage.getItem("userdata"));

    console.log("infooooooooooo", info);

    let param = {
      id: info.childid,
    };
    console.log(param);
    fetch("https://projectlogi.club/mathmate/public/api/getgamescore", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(param),
    }).then((response) => {
      response.json().then((data) => {
        console.log(data);
        setGamescore(data);
      });
    });
  }, []);
  const deletescore = (id) => {
    let param = {
      scoreid: id,
    };

    fetch("https://projectlogi.club/mathmate/public/api/deletescore", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(param),
    }).then((res) => {
      res.json().then((data) => {});
    });
  };

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb bg-light p-2 px-4 border border-1 rounded-3">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Score Card
          </li>
        </ol>
      </nav>

      <div className="row">
        <div className="col-4">
          Teacher Name: {teacherdata.tename}
        </div>
      </div>

      <div className="row">
        <div className="col-4">
          Contact: {teacherdata.teachermail}
        </div>
      </div>

      <div className="dataTable my-5 pb-5">
        <div className="row">
          <div className="col-12">
            <table className="table table-bordered table-hover rounded">
              <thead>
                <tr>
                  <th scope="col">Score ID</th>
                  <th scope="col">Game Name</th>
                  <th scope="col">Score</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {gamescore.map((data, index) => {
                  return (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{data.name}</td>
                      <td>{data.gamescore}</td>
                      <td>
                        <button
                          type="submit"
                          className="btn btn-danger  ms-2"
                          onClick={(event) => {
                            event.preventDefault();
                            deletescore(data.scoreid);
                          }}
                        >
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
        <Line data={chartData} />
      </div>
    </>
  );
}

export default ParentTable2;
