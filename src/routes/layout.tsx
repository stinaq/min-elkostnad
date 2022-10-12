import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
      <nav>
        <h1>Min elkostnad</h1>
        <Link to="/">Home</Link> |{' '}
        <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </div>

  );
}

export default Layout;
