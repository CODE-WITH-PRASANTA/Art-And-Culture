import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./MainLayout.css";

const MainLayout = () => {
  return (
    <div className="mainLayout">

      <div className="mainLayout-sidebar">
        <Sidebar />
      </div>

      <div className="mainLayout-content">
        <Outlet />
      </div>

    </div>
  );
};

export default MainLayout;