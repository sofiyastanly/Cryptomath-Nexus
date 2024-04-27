
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminPage1Table = () => {
    const navigate = useNavigate();

    const [school, setSchool] = useState([]);
    const [name, setName] = useState("");
    const [sid, setId] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [refresh, setRefresh] = useState(0);

    const [errors, setErrors] = useState({
        sid: "",
        name: "",
        email: "",
        password: "",
    });

    useEffect(() => {
        fetch("https://projectlogi.club/mathmate/public/api/getschool", {
            method: "GET",
        }).then((response) => {
            response.json().then((data) => {
                console.log("res", data);
                setSchool(data);
            });
        });
    }, [refresh]);

        
    const saveSchool = () => {
        const validationErrors = {};
        let isValid = true;
        const isValidEmail = (email) => {
            // Basic email validation regex
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        };


        // Validate School ID
        if (!sid) {
            validationErrors.sid = "School ID is required.";
            isValid = false;
        }

        // Validate School Name
        if (!name) {
            validationErrors.name = "School Name is required.";
            isValid = false;
        }

        // Validate School Email
        if (!email) {
            validationErrors.email = "School Email is required.";
            isValid = false;
        } else if (!isValidEmail(email)) {
            validationErrors.email = "Invalid email format.";
            isValid = false;
        }

        // Validate School Password
        if (!password) {
            validationErrors.password = "School Password is required.";
            isValid = false;
        }

        setErrors(validationErrors);

        if (isValid) {
            let param = {
                school: sid,
                name: name,
                email: email,
                password: password,
            };

            fetch("https://projectlogi.club/mathmate/public/api/saveschool", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(param),
            })
                .then((res) => {
                    if (res.status === 400) {
                        // Handle validation error response
                        return res.json().then((data) => {
                            toast.error(data.error); // Show error message in toast
                        });
                    } else {
                        // Success response
                        setRefresh((prev) => prev + 1);
                        toast.success("School saved successfully"); 
    
                    
                        setName("");
                        setId("");
                        setEmail("");
                        setPassword(""); 
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
    };

    // const deleteSchool = (id) => {
    //     let param = {
    //         uid: id,
    //     };

    //     fetch("https://projectlogi.club/mathmate/public/api/deleteschool", {
    //         method: "post",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(param),
    //     }).then((res) => {
    //         res.json().then((data) => {
    //             navigate("/adminpage1");
    //         });
    //     });
    // };
    const deleteSchool = (id) => {
        let param = {
            uid: id,
        };

        fetch("https://projectlogi.club/mathmate/public/api/deleteschool", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(param),
        }).then((res) => {
            res.json().then((data) => {
                if (res.ok) {
                    toast.success("School deleted successfully"); // Show success message in toast
                    setRefresh((prev) => prev + 1);
                } else {
                    toast.error("Error deleting school.");
                }
            });
        });
    };
    const editSchool = (id) => {
        navigate("/editadminpage1", { state: { id: id } });
    };

    const isValidEmail = (email) => {
        // Add your email validation logic here
        // For a simple example, we are checking if the email contains '@'
        return email.includes("@");
    };

    return (
        <>
            {/* <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-light p-2 px-4 border border-1 rounded-3">
                    <li className="breadcrumb-item">
                        <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        School
                    </li>
                </ol>
            </nav> */}
   <div className="row">
    <div className="col-2"></div>
    <div className="col" style={{marginTop:'-645px'}}>
            <div className="card mt-5">
                <div className="card-header">
                    <i className="fa fa-plus"></i>
                </div>
                <div className="card-body">
                    <form>
                        <div className="row g-3 align-items-center">
                            <div className="col-2">
                                <label htmlFor="inputPassword6" className="col-form-label">
                                    School ID
                                </label>
                            </div>
                            <div className="col-4">
                                <input
                                    type="text"
                                    id="inputPassword6"
                                    className={`form-control ${errors.sid ? "is-invalid" : ""}`}
                                    placeholder="Enter School ID"
                                    aria-describedby=""
                                    value={sid}
                                    onChange={(e) => {
                                        setId(e.target.value);
                                        setErrors({ ...errors, sid: "" });
                                    }}
                                />
                                {errors.sid && <div className="invalid-feedback">{errors.sid}</div>}
                            </div>
                        </div>
                        <div className="row g-3 mt-2 align-items-center">
                            <div className="col-2">
                                <label htmlFor="inputPassword6" className="col-form-label">
                                    School Name
                                </label>
                            </div>
                            <div className="col-4">
                                <input
                                    type="text"
                                    id="inputPassword6"
                                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                                    placeholder="Enter School Name"
                                    aria-describedby=""
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                        setErrors({ ...errors, name: "" });
                                    }}
                                />
                                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                            </div>
                        </div>
                        <div className="row g-3 mt-2 align-items-center">
                            <div className="col-2">
                                <label htmlFor="inputPassword6" className="col-form-label">
                                    School Email
                                </label>
                            </div>
                            <div className="col-4">
                                <input
                                    type="email"
                                    id="inputPassword6"
                                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                    placeholder="Enter School Email"
                                    aria-describedby=""
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setErrors({ ...errors, email: "" });
                                    }}
                                />
                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                            </div>
                        </div>
                        <div className="row g-3 mt-2 align-items-center">
                            <div className="col-2">
                                <label htmlFor="inputPassword6" className="col-form-label">
                                    School Password
                                </label>
                            </div>
                            <div className="col-4">
                                <input
                                    type="password"
                                    id="inputPassword6"
                                    className={`form-control ${errors.password ? "is-invalid" : ""}`}
                                    placeholder="Enter School Password"
                                    aria-describedby=""
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setErrors({ ...errors, password: "" });
                                    }}
                                />
                                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-success mt-2"
                            onClick={(event) => {
                                event.preventDefault();
                                saveSchool();
                            }}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            <div className="dataTable my-5 pb-5">
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
                        <th scope="col">School ID</th>
                        <th scope="col">School Name</th>
                        <th scope="col">School Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {school.map((value, index) => {
                        console.log(value);

                        return (
                            <tr key={index}>
                                <th scope="row">
                                    <span className="mb-0 text-sm" scope="row">
                                        <td> {value.school}</td>
                                    </span>
                                </th>

                                <td>{value.name}</td>
                                <td>{value.email}</td>

                                <td>
                                    {" "}
                                    <button
                                        className="btn btn-info"
                                        onClick={() => {
                                            editSchool(value.id);
                                        }}
                                    >
                                        {" "}
                                        Edit
                                    </button>{" "}
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => {
                                            deleteSchool(value.uid);
                                        }}
                                    >
                                        {" "}
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
                    <li className="page-item">
                        <a className="page-link" href="#">
                            1
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            2
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            3
                        </a>
                    </li>
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
            </div>
        </>
    );
};

export default AdminPage1Table;
