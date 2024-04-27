import React from 'react'

function StudentTable3() {
  return (
   <>
    <nav aria-label="breadcrumb"  >
                <ol className="breadcrumb bg-light p-2 px-4 border border-1 rounded-3">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Score Improvement</li>
                </ol>
            </nav>

            <div className="card mt-5">
                <div className='card-header'><i className="fa fa-plus"></i></div>
                <div className="card-body">

                    <form>
                        <div className="row g-3 align-items-center">
                            <div className="col-2">
                                <label for="inputPassword6" className="col-form-label">Student ID</label>
                            </div>
                            <div className="col-4">
                                <input type="text" id="inputPassword6" className="form-control" placeholder='Enter Student  ID' aria-describedby="" />
                            </div>
                        </div>
                        <div className="row g-3 mt-2 align-items-center">
                            <div className="col-2">
                                <label for="inputPassword6" className="col-form-label">Student Name</label>
                            </div>
                            <div className="col-4">
                                <input type="text" id="inputPassword6" className="form-control" placeholder='Enter Student Name' aria-describedby="" />
                            </div>
                        </div>
                        <div className="row g-3 mt-2 align-items-center">
                            <div className="col-2">
                                <label for="inputPassword6" className="col-form-label">School Name</label>
                            </div>
                            <div className="col-4">
                                <input type="email" id="inputPassword6" className="form-control" placeholder='Enter School Name ' aria-describedby="" />
                            </div>
                        </div>


                        <button type="submit" className="btn btn-success mt-2">Submit</button>
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
                                    <th scope="col">Student ID</th>
                                    <th scope="col">Student Name</th>
                                    <th scope="col">School Name</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                   
                                    <td>Amal</td>
                                    <td>MarThoma Institute of Information Technology</td>
                                    <td>
                                        <button type="submit" className="btn btn-primary ">Check</button>
                                       
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    
                                    <td>Kripa</td>
                                    <td>MarThoma Institute of Information Technology,</td>
                                    <td>
                                        <button type="submit" className="btn btn-primary ">Check</button>
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                   
                                    <td>Aslam</td>
                                    <td>MarThoma Institute of Information Technology</td>
                                    <td>
                                        <button type="submit" className="btn btn-primary ">Check</button>
                                        
                                    </td>
                                </tr>
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
                            <ul class="pagination">
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
   </>
  )
}

export default StudentTable3