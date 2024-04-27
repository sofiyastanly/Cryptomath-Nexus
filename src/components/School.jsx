import React from 'react'
import { Link } from 'react-router-dom'

function School() {
  return (
    <>
  <nav className="navbar navbar-light" style={{ backgroundColor: '#3a0ca3' }}>
  <a className="navbar-brand text-white ">SCHOOL</a>
  <div className="d-flex align-items-center ms-auto">
    {/* <img src="img/logos.webp" alt="" style={{ width: "40px", borderRadius: '80px' }} /> */}
    <img src='img/user.jpg' alt="User" style={{ borderRadius: '80px' }} />
  </div>
</nav>


      <div class="container-fluid">
        <div class="row flex-nowrap">
          <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 min-vh-100" style={{backgroundColor:'#b8bedd'}}>
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span class="fs-5 d-none d-sm-inline"></span>
              </a>
              <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                
                <li>
                <a href="/schoolpage1" class="nav-link px-0">
                        <i class="fs-4 bi-person-circle"></i> <span class="d-none d-sm-inline">Teachers</span>  </a>
                  <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                    <li class="w-100">
                      <a href="/studentpage4" class="nav-link px-0">
                        <i class="fs-4 bi-people"></i> <span class="d-none d-sm-inline">Students</span>  </a>
                    </li>
                  
                  </ul>
                </li>
                <li>
                  <a href="/schoolpage2" class="nav-link px-0 align-middle">
                    <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Games</span></a>
                </li>
                <li>
                <a href="/schoolpage3" class="nav-link px-0 align-middle">
                    <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Score card</span></a>
                
                  <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">

                  </ul>
                </li>
                <li>
                <a href="/extstudents" class="nav-link px-0 align-middle">
                    <i class="fs-4 bi-person-badge"></i> <span class="ms-1 d-none d-sm-inline">External Students</span></a>
                
                  <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">

                  </ul>
                </li>

                
                <li>
                  <Link to="/adminpage6" className="nav-link px-0 align-middle">
                    <span className="ms-1 d-none d-sm-inline" onClick={() => {
                      localStorage.clear()
                      window.location.href = '/'
                    }}>Logout</span>
                  </Link>
                </li>
              </ul>
              <hr />
              <div class="dropdown pb-4">
              
              </div>
            </div>
          </div>
          
        </div>
      </div>
      {/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
        <span class="navbar-text">
              <button class="btn btn-success" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">OPEN</button>
            </span>
          <a class="navbar-brand" href="#">School</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            

            </ul>
            
          </div>
        </div>
      </nav>
      
      <div class="offcanvas offcanvas-start" tabindex="-1" data-bs-backdrop="false" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header bg-dark text-white">
          <h5 id="offcanvasRightLabel">School</h5>
          <button type="button" class="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
        </div>
        <div class="offcanvas-body bg-dark text-light">

          <div className="row">
            <Link to="/schoolpage1" style={{ 'textDecoration': 'none', 'color': 'white' }}>
              <div className="col-12 p-4">
                Teachers
              </div>
            </Link>
          </div>

          <div className="row">
            <Link to="/studentpage4" style={{ 'textDecoration': 'none', 'color': 'white' }}>
              <div className="col-12 p-4">
                Students
              </div>
            </Link>

          </div>
          <div className="row">
            <Link to="/schoolpage2" style={{ 'textDecoration': 'none', 'color': 'white' }}>
              <div className="col-12 p-4">
                Games
              </div>
            </Link>

          </div>

          <div className="row">
            <Link to="/schoolpage3" style={{ 'textDecoration': 'none', 'color': 'white' }}>
              <div className="col-12 p-4">
                Score Card
              </div>
            </Link>

          </div>
         

          <div className="row">
          <Link >
              <div className="col-12 p-4" style={{ 'textDecoration': 'none', 'color': 'white' }} onClick={()=>{
                localStorage.clear()
                window.location.href='/'
                }}>
                Logout
              </div>

              </Link>



          </div>


        </div>
      </div> */}

      {/* navigation bar end */}


    </>
  )
}

export default School