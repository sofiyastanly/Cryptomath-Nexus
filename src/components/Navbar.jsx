import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();
  const [Login, setLogin] = useState(true);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [status, setStatus] = useState();
  const info = localStorage.getItem("userdata");
  let usertype = "";
  console.log(info);

  const login = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return false;
    }

    if (!password || password.length < 3) {
      alert("Password must be at least 5 characters long");
      return false;
    }
    if (email == null || password == null) {
      alert("Please Fill Both Fields");
      return false;
    } else {
      let loginparam = {
        email: email,
        password: password,
      };
      fetch("https://projectlogi.club/mathmate/public/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginparam),
      }).then((res) => {
        res.json().then((data) => {

          console.log(data);
          if (data?.length == 0) {
            alert("Wrong Credentials");
          } else {
            if (data[0].usertype == 2) {
              fetch("https://projectlogi.club/mathmate/public/api/checkapproved", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: data[0].id }),
              }).then((res) => {
                res.json().then((userdata) => {  
                  if (userdata == "true") {
                    localStorage.setItem("userdata", JSON.stringify(data[0]));
                    window.location.reload();
                  } else {
                    alert("User Not Approved");
                  }
                });
              });
            } else {
              localStorage.setItem("userdata", JSON.stringify(data[0]));
              window.location.reload();
            }
          }
        });
      });
    }
  };

  return (
    <>
      <header>
        <div className="header-top" style={{ backgroundColor: "#ade8f4" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-8">
                <div className="header-top-info">
                  <span style={{ backgroundColor: "#ade8f4" }}>
                    <h2 style={{color:'#00b4d8'}}><b style={{textShadow:'7px 5px 5px white'}}>CRYPTOMATH</b></h2>
                  </span>
                  <span style={{ backgroundColor: "#ade8f4" }}>
                    <b>Open hours: 8.00-18.00 Mon-Sat</b>
                  </span>
                </div>
              </div>

              <div className="col-lg-2 col-md-4 mt-2">
                <div className="">
                  <div>
                    <Link
                      to="/register"
                      className="btn btn-info btn-sm text-white"
                    >
                      External Registeration
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="header-login-register">
                  <ul className="login">
                    <li>
                      {info == null ? (
                        <>
                          <a href="#">
                            <i className="fa fa-key"></i>Login
                          </a>
                          <div className="login-form">
                            <h4>Login</h4>
                            <form action="#" method="post">
                              <div className="form-box">
                                <i className="fa fa-user"></i>
                                <input
                                  type="text"
                                  name="user-name"
                                  onChange={(e) => setEmail(e.target.value)}
                                  placeholder="Username"
                                />
                              </div>
                              <div className="form-box">
                                <i className="fa fa-lock"></i>
                                <input
                                  type="password"
                                  name="user-password"
                                  onChange={(e) => setPassword(e.target.value)}
                                  placeholder="Password"
                                />
                              </div>
                              <div className="button-box">
                                <button
                                  type="button"
                                  className="login-btn"
                                  onClick={login}
                                >
                                  Login
                                </button>
                              </div>
                            </form>
                          </div>
                        </>
                      ) : (
                        <>
                          <a>Logout</a>
                        </>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 
        <div className="header-logo-menu sticker">
          <div className="container">
            <div className="logo-menu-bg">
              <div className="row">
                <div className="col-lg-3 col-md-12">
                  <div className="logo">
                    
                    <div
                      id="carouselExampleSlidesOnly"
                      class="carousel slide"
                      data-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img
                            className="d-block w-100"
                            src="img/school.avif"
                            alt="First slide"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9 d-none d-lg-block">
                  <div className="mainmenu-area">
                    <div className="mainmenu"></div>

                    <div className="search">
                      <div className="search-form">
                        <form id="search-form" action="#">
                          <input
                            type="search"
                            placeholder="Search here..."
                            name="search"
                          />
                          <button type="submit">
                            <span>
                              <i className="fa fa-search"></i>
                            </span>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-menu-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="mobile-menu">
                  <nav id="dropdown">
                    <ul>
                      <li>
                        <a href="index-2.html">HOME</a>
                        <ul>
                          <li>
                            <a href="index-3.html">Homepage Version 2</a>
                          </li>
                          <li>
                            <a href="index-4.html">Homepage Version 3</a>
                          </li>
                          <li>
                            <a href="index-5.html">Homepage Version 4</a>
                          </li>
                          <li>
                            <a href="index-6.html">Homepage Version 5</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li>
                        <a href="class-grid.html">Classes</a>
                        <ul>
                          <li>
                            <a href="class-grid.html">Classes Grid</a>
                          </li>
                          <li>
                            <a href="class-list.html">Classes List</a>
                          </li>
                          <li>
                            <a href="class-details.html">Class Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="teacher.html">Teachers Page</a>
                        <ul>
                          <li>
                            <a href="teacher-info.html">Teachers Info</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="gallery.html">Gallery</a>
                      </li>
                      <li>
                        <a href="blog.html">Blog Page</a>
                        <ul>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">CONTACT</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </header>
    </>
  );
}

export default Navbar;
