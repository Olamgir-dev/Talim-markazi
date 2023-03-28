import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TeacherAdd from './Routers/TeacherAdd';
import StudentAdd from './Routers/StudentAdd';
import GroupAdd from './Routers/GroupAdd';
import ShowGroups from './Routers/ShowGroups';
import Layout from './components/Layout';
import TeacherLogin from './Routers/TeacherLogin';
import StudentLogin from './Routers/StudentLogin';
import ShowExams from './Routers/ShowExams';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// stylesheet
import "./sass/main.scss"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/teacher-login" element={<TeacherLogin />} />
            <Route path="/student-login" element={<StudentLogin />} />
            <Route path='/teacher-add' element={<TeacherAdd />} />
            <Route path='/student-add' element={<StudentAdd />} />
            <Route path='/group-add' element={<GroupAdd />} />
            <Route path='/group-show' element={<ShowGroups />} />
            <Route path='/exams' element={<ShowExams />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;