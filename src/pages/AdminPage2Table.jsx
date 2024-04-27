import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminPage2Table() {
  const navigate = useNavigate();
  const [teacher, setTeacher] = useState([]);
  const [tename, setTename] = useState('');
  const [tid, setId] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState([]);
  const [nameID, setNameID] = useState('');
  const [password, setPassword] = useState('');
  const [refresh, setRefresh] = useState(0);

  const [errors, setErrors] = useState({
    tid: '',
    tename: '',
    email: '',
    nameID: '',
    password: '',
  });

  useEffect(() => {
    fetch('https://projectlogi.club/mathmate/public/api/getteacher', {
      method: 'GET',
    }).then((response) => {
      response.json().then((data) => {
        setTeacher(data);
      });
    });
  }, [refresh]);

  useEffect(() => {
    fetch('https://projectlogi.club/mathmate/public/api/getschool').then((res) => {
      res.json().then((data) => {
        setName(data);
      });
    });
  }, [refresh]);

  const isValidEmail = (email) => {
    // Basic email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Updated password validation


  const saveTeacher = () => {
    const validationErrors = {};
    let isValid = true;

    // Validate Teacher ID
    if (!tid) {
      validationErrors.tid = 'Teacher ID is required.';
      isValid = false;
    }

    // Validate Teacher Name
    if (!tename) {
      validationErrors.tename = 'Teacher Name is required.';
      isValid = false;
    }

    // Validate Teacher Email
    if (!email) {
      validationErrors.email = 'Teacher Email is required.';
      isValid = false;
    } else if (!isValidEmail(email)) {
      validationErrors.email = 'Invalid email format.';
      isValid = false;
    }

    // Validate School Name
    if (!nameID || nameID === 'Select') {
      validationErrors.nameID = 'School Name is required.';
      isValid = false;
    }

    // Validate Teacher Password
    if (!password || password.length < 3) {
      validationErrors.password = 'Teacher Password must be at least 3 characters long.';
      isValid = false;
  }

    setErrors(validationErrors);

    if (isValid) {
      const param = {
        teacher: tid,
        tename: tename,
        email: email,
        name: nameID,
        password: password,
      };
      fetch('https://projectlogi.club/mathmate/public/api/saveteacher', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(param),
      }).then((res) => {
        if (res.status === 400) {
          // Handle validation error response
          return res.json().then((data) => {
            toast.error(data.error); // Show error message in toast
          });
        } else {
          // Success response
          setRefresh((prev) => prev + 1);
          toast.success('Teacher saved successfully'); 
          setTename('');
          setId('');
          setEmail('');
          setNameID('');
          setPassword('');


          navigate('/adminpage2');
        }
      });
    } else {
      showErrorToast('Please fix the validation errors before submitting.');
    }
  };

  const showErrorToast = (message) => {
    toast.error(message, {
      position: 'top-right',
      autoClose: 5000, // Adjust as needed
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const deleteTeacher = (id) => {
    let param = {
      uid: id,
    };

    fetch('https://projectlogi.club/mathmate/public/api/deleteteacher', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(param),
    }).then((res) => {
      res.json().then((data) => {
          if (res.ok) {
              toast.success("Teacher deleted successfully"); // Show success message in toast
              setRefresh((prev) => prev + 1);
          } else {
              toast.error("Error deleting school.");
          }
      });
  });
};

  const editTeacher = (id) => {
    navigate('/editadminpage2', { state: { id: id } });
  };

  return (
    <>
    <div className="row">
    <div className="col-2"></div>
    <div className="col" style={{marginTop:'-645px'}}>

      <div className="card mt-5">
        <div className="card-header">
          <i className="fa fa-plus"></i>
        </div>
        <div className="card-body">
          <form>
            {/* Teacher ID */}
            <div className="col-4">
              <label htmlFor="inputPassword6" className="col-form-label">
                Teacher ID
              </label>
              <input
                type="text"
                id="inputPassword6"
                className={`form-control ${errors.tid ? 'is-invalid' : ''}`}
                placeholder="Enter Teacher ID"
                aria-describedby=""
                value={tid}
                onChange={(e) => {
                  setId(e.target.value);
                  setErrors({ ...errors, tid: '' });
                }}
              />
              {errors.tid && (
                <div className="invalid-feedback">{errors.tid}</div>
              )}
            </div>

            {/* Teacher Name */}
            <div className="col-4">
              <label htmlFor="inputPassword6" className="col-form-label">
                Teacher Name
              </label>
              <input
                type="text"
                id="inputPassword6"
                className={`form-control ${
                  errors.tename ? 'is-invalid' : ''
                }`}
                placeholder="Enter Teacher Name"
                aria-describedby=""
                value={tename}
                onChange={(e) => {
                  setTename(e.target.value);
                  setErrors({ ...errors, tename: '' });
                }}
              />
              {errors.tename && (
                <div className="invalid-feedback">{errors.tename}</div>
              )}
            </div>

            {/* Teacher Email */}
            <div className="col-4">
              <label htmlFor="inputPassword6" className="col-form-label">
                Teacher Email
              </label>
              <input
                type="email"
                id="inputPassword6"
                className={`form-control ${
                  errors.email ? 'is-invalid' : ''
                }`}
                placeholder="Enter Teacher Email"
                aria-describedby=""
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors({ ...errors, email: '' });
                }}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>

            {/* School Name */}
            <div className="col-4">
              <label htmlFor="inputPassword6" className="col-form-label">
                School Name
              </label>
              <select
                style={{
                  width: '100%',
                  padding: 10,
                  borderRadius: 9,
                  borderWidth: 0.01,
                  borderColor: 'rgba(0,0,0,0.1)',
                }}
                onChange={(e) => {
                  setNameID(e.target.value);
                  setErrors({ ...errors, nameID: '' });
                }}
                className={`form-select ${
                  errors.nameID ? 'is-invalid' : ''
                }`}
              >
                <option>Select</option>
                {name.map((data, index) => {
                  return (
                    <option value={data.id} key={index}>
                      {data.name}
                    </option>
                  );
                })}
              </select>
              {errors.nameID && (
                <div className="invalid-feedback">{errors.nameID}</div>
              )}
            </div>

            {/* Teacher Password */}
            <div className="col-4">
              <label htmlFor="inputPassword6" className="col-form-label">
                Teacher Password
              </label>
              <input
                type="password"
                id="inputPassword6"
                className={`form-control ${
                  errors.password ? 'is-invalid' : ''
                }`}
                placeholder="Enter Teacher Password"
                aria-describedby=""
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrors({ ...errors, password: '' });
                }}
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-success mt-2"
              onClick={(event) => {
                event.preventDefault();
                saveTeacher();
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="dataTable my-5 pb-5">
        <div className="row justify-content-between my-3">
          <div className="col-sm-12 col-md-2">
            <div className="dataTables_length d-flex align-items-center gap-3" id="dataTable_length">
              <label> Show</label>
              <select name="dataTable_length" aria-controls="dataTable" className="form-control form-control-sm">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              <label>entries </label>
            </div>
          </div>
          <div className="col-sm-12 col-md-3">
            <div id="dataTable_filter" className="dataTables_filter d-flex align-items-center gap-3">
              <label>Search:</label>
              <input type="search" className="form-control form-control-sm  " placeholder="" aria-controls="dataTable" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <table className="table table-bordered table-hover rounded">
              <thead>
                <tr>
                  <th scope="col">Teacher ID</th>
                  <th scope="col">Teacher Name</th>
                  <th scope="col">Teacher Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {teacher.map((value, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">
                        <span className="mb-0 text-sm" scope="row"><td> {value.teacher}</td></span>
                      </th>
                      <td>{value.tename}</td>
                      <td>{value.email}</td>
                      <td>
                        <button className="btn btn-info" onClick={() => editTeacher(value.id)}>Edit</button>
                        <button className="btn btn-danger" onClick={() => deleteTeacher(value.uid)}>Delete</button>
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
            <div className="dataTables_length d-flex align-items-center gap-3" id="dataTable_length">
              <label> Showing 1 to 6 of 6 entries</label>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <nav aria-label="Page navigation">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    
      <ToastContainer />
      </div>
      </div>
    </>
  );
}

export default AdminPage2Table;
