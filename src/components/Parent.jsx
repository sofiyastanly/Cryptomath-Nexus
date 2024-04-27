import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Parent() {
  const [is_certificate,setIscertificate] = useState(false)
  const [certname,setcertname] = useState(false)
  useEffect(() => {
    let userdata = JSON.parse(localStorage.getItem("userdata"));
    fetch("https://projectlogi.club/mathmate/public/api/getstudent_schoolbyuid", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: userdata.childid }),
    })
      .then((res) => res.json())
      .then((result) => {
        result = result[0] 
        if(result.is_certificate!=0){
          setcertname(result.certificatename)
          setIscertificate(true)
        }
      });
  });
  return (
    <>
      <nav
        className="navbar navbar-light"
        style={{ backgroundColor: "#3a0ca3" }}
      >
        <a className="navbar-brand text-white ">PARENT</a>
        <div className="d-flex align-items-center ms-auto">
          {/* <img src="img/logos.webp" alt="" style={{ width: "40px", borderRadius: '80px' }} /> */}
          <img src="img/user.jpg" alt="User" style={{ borderRadius: "80px" }} />
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div
            className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 min-vh-100"
            style={{ backgroundColor: "#b8bedd" }}
          >
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a
                href="/"
                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <span className="fs-5 d-none d-sm-inline"></span>
              </a>
              <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li className="nav-item">
                  {/* <a href="/admin" className="nav-link align-middle px-0">
                        <span className="ms-1 d-none d-sm-inline">Admin</span>
                      </a> */}
                </li>
                <li>
                  <ul
                    className="collapse show nav flex-column ms-1"
                    id="submenu1"
                    data-bs-parent="#menu"
                  >
                    <li className="w-100">
                      <a href="/parentmsg" className="nav-link px-0">
                        <i className="fs-4 bi-envelope-fill"></i>
                        <span className="d-none d-sm-inline">Messages</span>
                      </a>
                    </li>
                    <li>
                      <a href="/studentpage5" className="nav-link px-0">
                        
                        <i className="fs-4 bi-person-badge"></i>
                        <span className="d-none d-sm-inline">Students</span>
                      </a>
                    </li>
                    <li>
                      <a href="/studentreport" className="nav-link px-0">
                        
                        <i className="fs-4 bi-graph-up"></i>
                        <span className="d-none d-sm-inline">
                          Improvement Report
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/assignments" className="nav-link px-0">
                        
                        <i className="fs-4 bi-file-earmark-text"></i>
                        <span className="d-none d-sm-inline">
                        Curriculum
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/studentscorereport" className="nav-link px-0">
                        
                        <i className="fs-4 bi-file-earmark-bar-graph"></i>
                        <span className="d-none d-sm-inline">Score Report</span>
                      </a>
                    </li>
                    {
                      is_certificate&&(

                    <li>
                      <a
                      target={'_blank'}
                       href={'https://projectlogi.club/mathmate/public/upload/'+certname}
                        className="nav-link px-0"
                        style={{ cursor: "pointer" }}
                      > 
                     <i className="fs-4 bi-file-earmark-text"></i>

                        <span className="d-none d-sm-inline">Certificate</span>
                      </a>
                    </li>
                      )
                    }
                  </ul>
                </li>
                <li>
                  <Link to="/" className="nav-link px-0 align-middle">
                    <span
                      className="ms-1 d-none d-sm-inline"
                      onClick={() => {
                        localStorage.clear();
                        window.location.href = "/";
                      }}
                    >
                      Logout
                    </span>
                  </Link>
                </li>
              </ul>
              <hr />

              <div className="dropdown pb-4"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Parent;
