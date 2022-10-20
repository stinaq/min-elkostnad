import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
      <Outlet />
    </div>

  );
}

export default Layout;
