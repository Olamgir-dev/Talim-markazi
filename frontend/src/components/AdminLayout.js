import React from "react";
import { Outlet } from "react-router";
import AdminNavbar from "./AdminNavbar";

function AdminLayout() {
  return (
    <>
      <AdminNavbar />
      <Outlet />
    </>
  );
}

export default AdminLayout;
