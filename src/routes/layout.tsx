import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <nav>
      <p>Min elkostnad</p>
      <Link to="/">Home</Link> |{' '}
      <Link to="/about">About</Link>
      <Outlet />
    </nav>
  );
}

export default Layout;
