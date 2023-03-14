import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TeacherAdd from './Routers/TeacherAdd';
import StudentAdd from './Routers/StudentAdd';
import "./sass/style.scss"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/teacher-add' element={<TeacherAdd />}/>
          <Route path='/student-add' element={<StudentAdd />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
