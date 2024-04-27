import React, { useEffect, useState } from "react";
import Parent from "./Parent";

function Assignments() {
  const [content, setcontent] = useState([]);

  const userdata = JSON.parse(localStorage.getItem("userdata"));

  useEffect(() => {
    let info = JSON.parse(localStorage.getItem("userdata"));

    let param = {
      childid: info.childid,
    };
    console.log(param);
    fetch("https://projectlogi.club/mathmate/public/api/getcontents", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(param),
    }).then((response) => {
      response.json().then((data) => {
        console.log("dataaaaaaa", data);
        setcontent(data);
      });
    });
  }, []);

  return (
    <>
      <Parent />

      <div className="row">
        <div className="col-2"></div>
        <div className="col" style={{ marginTop: "-645px" }}>
          <div className="dataTable my-5 pb-5">
            <div className="row">
              <div className="col-12">
                <table className="table table-bordered table-hover rounded">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">File Name</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {content.map((data, index) => {
                      return (
                        <tr>
                          <th scope="row">{index + 1}</th>
                          <td>{data.filename}</td>
                          <td>
                            <a
                              target={'_blank'}
                              href={
                                "https://projectlogi.club/mathmate/public/upload/" + data.filename
                              }
                              className="btn btn-success"
                              style={{ cursor: "pointer" }}
                            >Download</a>
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

export default Assignments;
