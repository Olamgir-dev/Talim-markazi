import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TeacherAdd from './Routers/TeacherAdd';
import StudentAdd from './Routers/StudentAdd';
import "./sass/style.scss"
import GroupAdd from './Routers/GroupAdd';
import ShowGroups from './Routers/ShowGroups';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/teacher-add' element={<TeacherAdd />}/>
          <Route path='/student-add' element={<StudentAdd />} />
          <Route path='/group-add' element={<GroupAdd />} />
          <Route path='/group-show' element={<ShowGroups />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
