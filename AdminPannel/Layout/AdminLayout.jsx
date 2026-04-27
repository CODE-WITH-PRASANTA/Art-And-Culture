import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar";
import "./AdminLayout.css";

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="admin-wrapper">

      {/* Full Navbar */}
      <Navbar toggleSidebar={() => setCollapsed(!collapsed)} />

      {/* Body */}
      <div className="admin-body">

        {/* Sidebar */}
        <Sidebar collapsed={collapsed} />

        {/* Content */}
        <div className={collapsed ? "content expanded" : "content"}>
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default AdminLayout;