import React, { useEffect, useRef } from "react";

function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  return (
    <>
      <div className="header-logo-menu sticker">
        <div>
          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100"
                  src="img/school.avif"
                  alt="First slide"
                  style={{ height: "300px" }}
                />
              </div>
            </div>
          </div>
          {/* <div className="logo-menu-bg">
              <div className="row">
                <div className="col-lg-3 col-md-12">
                  <div className="logo">
                    
                  <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="img/i1.webp" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide"/>
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
            </div> */}
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
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-4">
            <div class="card" style={{ width: "18rem" }}>
              <img src="img/img1.jpeg" class="card-img-top" alt="..." />
              <h4 className="text-center" style={{ color: "#219ebc" }}>
                Empowering Student
              </h4>
              <div class="card-body">
                <p class="card-text">
                  Empowering Every Student: Creating Inclusive Spaces for
                  Academic and Personal Growth.Providing comprehensive support
                  and resources to students.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div class="card" style={{ width: "18rem" }}>
              <img src="img/img4.jpg" class="card-img-top" alt="..." />
              <h4 className="text-center" style={{ color: "#219ebc" }}>
                Breaking Barriers
              </h4>
              <div class="card-body">
                <p class="card-text">
                  Through tailored support and inclusive practices, we aim to
                  foster an educational environment where every learner can
                  thrive regardless of their abilities.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div class="card" style={{ width: "18rem" }}>
              <img src="img/img3.jpeg" class="card-img-top" alt="..." />
              <h4 className="text-center" style={{ color: "#219ebc" }}>
                Bright Futures
              </h4>
              <div class="card-body">
                <p class="card-text">
                  Unlocking Potential, Fostering Inclusion. Discover how our
                  tailored programs and resources empower disabled students to
                  thrive academically and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid" style={{backgroundColor:'#ade8f4'}}>
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Home</a></li>
      <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Features</a></li>
   
      {/* <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary"></a></li> */}
    </ul>
    <p className="text-center text-body-secondary">&copy; 2024 CryptoMath</p>
  </footer>
</div>
    </>
  );
}

export default Home;
