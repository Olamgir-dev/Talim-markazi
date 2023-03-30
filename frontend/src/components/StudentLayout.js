import React from "react";
import { Outlet } from "react-router";
import StudentNavbar from "./StudentNavbar";

function StudentLayout() {
  return (
    <>
      <StudentNavbar />
      <Outlet />
    </>
  );
}

export default StudentLayout;
