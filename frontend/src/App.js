import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TeacherAdd from './Routers/TeacherAdd';
import StudentAdd from './Routers/StudentAdd';
import GroupAdd from './Routers/GroupAdd';
import ShowGroups from './Routers/ShowGroups';
import LoginLayout from './components/LoginLayout';
import TeacherLogin from './Routers/TeacherLogin';
import StudentLogin from './Routers/StudentLogin';
import ShowExams from './Routers/ShowExams';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// stylesheet
import "./sass/main.scss"
import AdminLogin from './Routers/AdminLogin';
import AdminLayout from './components/AdminLayout';
import TeacherLayout from './components/TeacherLayout';
import StudentLayout from './components/StudentLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginLayout />} >
            <Route index element={<AdminLogin />} />
            <Route path="teacher-login" element={<TeacherLogin />} />
            <Route path="student-login" element={<StudentLogin />} />
          </Route>
          <Route path='/admin' element={<AdminLayout />}>
            <Route index element={<TeacherAdd />} />
            <Route path='student-add' element={<StudentAdd />} />
          </Route>
          <Route path='/teacher' element={<TeacherLayout />}>
            <Route index element={<GroupAdd />} />
          </Route>
          <Route path='/student' element={<StudentLayout />}>
            <Route index element={<ShowGroups />} />
            <Route path='exams' element={<ShowExams />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;