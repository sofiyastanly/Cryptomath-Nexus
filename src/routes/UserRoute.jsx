import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage1 from "../components/AdminPage1";
import EditAdminPage1 from "../pages/EditAdminPage1";
import AdminPage2 from "../components/AdminPage2";
import EditAdminPage2 from "../pages/EditAdminPage2";
import AdminPage3 from "../components/AdminPage3";
import EditAdminPage3 from "../pages/EditAdminPage3";
import AdminPage4 from "../components/AdminPage4";
import AdminPage5 from "../components/AdminPage5";
import AdminPage6 from "../components/AdminPage6";
import EditAdminPage4 from "../pages/EditAdminPage4";

import AdminPage from "../pages/AdminPage";
import HomePage from "../pages/HomePage";


import TeacherPage from "../pages/TeacherPage";
import TeacherPage1 from "../components/TeacherPage1";
import EditTeacherPage1 from "../pages/EditTeacherPage1";
import TeacherPage2 from "../components/TeacherPage2";
import TeacherPage3 from "../components/TeacherPage3";

import StudentPage from "../pages/StudentPage";
import StudentPage1 from "../components/StudentPage1";

import StudentPage2 from "../components/StudentPage2";
import StudentPage3 from "../components/StudentPage3";
// import StudentPage4 from "../components/StudentPage4";


import SchoolPage from "../pages/SchoolPage";
import Schoolpage1 from "../components/Schoolpage1";
import EditSchoolPage1 from "../pages/EditSchoolPage1";
import Studentpage4 from "../components/Studentpage4";
import EditStudentPage4 from "../pages/EditStudentPage4";
import Schoolpage2 from "../components/Schoolpage2";
import Schoolpage3 from "../components/Schoolpage3";
import ParentPage2 from "../components/ParentPage2";
import GamePage from "../pages/GamePage";
import ParentMessage from "../components/ParentMessage";
import TeacherMessage from "../components/TeacherMessage";
import StudentPage5 from "../components/Studentpage5";
import Registration from "../components/Registration";
import Externalstudents from "../pages/Externalstudents";
import PerformanceReport from "../pages/PerformanceReport";
import ScoreReport from "../pages/ScoreReport";
import Studentreport from "../pages/StudentReport";
import ScoreReportParent from "../pages/ScoreReportParent";
import AssignmentsTeacher from "../components/AssignmentsTeacher";
import Assignments from "../components/Assignments";
export default function UserRoute() {

  const info = localStorage.getItem('userdata');
  let usertype='';
  console.log('====================================');
  console.log(info);
  console.log('====================================');

  if(info!=null){

    usertype= (JSON.parse(info)).usertype;
    
  }
  if(info==null){
    return (

      <Routes>
        <Route element={<HomePage />}  path="/"></Route>
        <Route element={<Registration />}  path="/register"></Route>


      </Routes>

    )
  }
  else{
    if (usertype == 3) {
      return (
        <Routes>
          <Route element={<AdminPage1 />} path="/adminpage1"></Route>
          <Route element={<AdminPage1 />} path="/"></Route>
          <Route element={<AdminPage1 />} path="/adminpage1"></Route>
          <Route element={<EditAdminPage1 />} path="/editadminpage1"></Route>
          <Route element={<AdminPage2 />} path="/adminpage2"></Route>
          <Route element={<EditAdminPage2 />} path="/editadminpage2"></Route>
          <Route element={<AdminPage3 />} path="/adminpage3"></Route>
          <Route element={<EditAdminPage3 />} path="/editadminpage3"></Route>
          <Route element={<EditAdminPage4 />} path="/editadminpage4"></Route>
          <Route element={<AdminPage4 />} path="/adminpage4"></Route>
          <Route element={<AdminPage5 />} path="/adminpage5"></Route>
          <Route element={<AdminPage6 />} path="/adminpage6"></Route>
        </Routes>
      )
    }
    else if (usertype == 1) {
      return (
        <Routes>
          <Route element={<TeacherPage1 />} path="/"></Route>
          <Route element={<TeacherPage />} path="/teacher"></Route>
          <Route element={<TeacherPage1 />} path="/teacherpage1"></Route>
          <Route element={<EditTeacherPage1 />} path="/editteacherpage1"></Route>
          <Route element={<TeacherPage2 />} path="/teacherpage2"></Route>
          <Route element={<TeacherPage3 />} path="/teacherpage3"></Route>
          <Route element={<TeacherMessage />} path="/teacherchats"></Route>
          <Route element={<PerformanceReport />} path="/peformancereport"></Route>
          <Route element={<ScoreReport />} path="/scorerepot"></Route>
          <Route element={<AssignmentsTeacher />} path="/assignments"></Route>
                         
        </Routes>
      )
    }
    else if (usertype == 2) {
      return (
        <Routes>
          <Route element={<StudentPage1 />} path="/"></Route>
          <Route element={<StudentPage />} path="/student"></Route>
          <Route element={<StudentPage1 />} path="/studentpage1"></Route>

          <Route element={<StudentPage2 />} path="/studentpage2"></Route>
          <Route element={<StudentPage3 />} path="/studentpage3"></Route>
          <Route element={<GamePage />} path="/gamepage"></Route>
        </Routes>
      )
    }
    else if (usertype == 0) {
      return (
        <Routes>
          <Route element={<Schoolpage1 />} path="/"></Route>
          <Route element={<AdminPage />} path="/admin"></Route>
          <Route element={<AdminPage1 />} path="/adminpage1"></Route>
          <Route element={<EditAdminPage1 />} path="/editadminpage1"></Route>
          <Route element={<AdminPage2 />} path="/adminpage2"></Route>
          <Route element={<EditAdminPage2 />} path="/editadminpage2"></Route>
          <Route element={<AdminPage3 />} path="/adminpage3"></Route>
          <Route element={<EditAdminPage3 />} path="/editadminpage3"></Route>
          <Route element={<Schoolpage1 />} path="/schoolpage1"></Route>
          <Route element={<EditSchoolPage1 />} path="/editschoolpage1"></Route>
          <Route element={<Studentpage4 />} path="/studentpage4"></Route>
          <Route element={<EditStudentPage4 />} path="/editstudentpage4"></Route>
          <Route element={<Schoolpage2 />} path="/schoolpage2"></Route>
          <Route element={<Schoolpage3 />} path="/schoolpage3"></Route>
          <Route element={<AdminPage4 />} path="/adminpage4"></Route>
          <Route element={<AdminPage5 />} path="/adminpage5"></Route>
          <Route element={<AdminPage6 />} path="/adminpage6"></Route>
          <Route element={<AdminPage6 />} path="/adminpage6"></Route>
          <Route element={<Externalstudents />} path="/extstudents"></Route>
        </Routes>
      )
    }
    else if (usertype == 4) {
      return (
        <Routes>
          <Route element={<ParentMessage />} path="/"></Route>
          <Route element={<ParentMessage />} path="/parentmsg"></Route> 
          <Route element={<StudentPage5/>} path="/studentpage5"></Route>
          <Route element={<Studentreport />} path="/studentreport"></Route>
          <Route element={<ScoreReportParent />} path="/studentscorereport"></Route>
          <Route element={<Assignments />} path="/assignments"></Route>


        </Routes>
      )
    }

  }


}