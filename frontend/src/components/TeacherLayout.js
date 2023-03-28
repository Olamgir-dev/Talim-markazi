import React from "react";
import { Outlet } from "react-router";
import TeacherNavbar from "./TeacherNavbar";

function TeacherLayout() {
  return (
    <>
      <TeacherNavbar />
      <Outlet />
    </>
  );
}

export default TeacherLayout;
