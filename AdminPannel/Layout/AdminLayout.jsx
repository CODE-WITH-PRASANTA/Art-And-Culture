import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar";
import "./AdminLayout.css";

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // On mobile -> open/close the slide-in sidebar
  // On desktop/tablet -> collapse to icon-only mode
  const toggleSidebar = () => {
    if (window.innerWidth <= 768) {
      setMobileOpen((prev) => !prev);
    } else {
      setCollapsed((prev) => !prev);
    }
  };

  return (
    <div className="admin-wrapper">
      <Navbar toggleSidebar={toggleSidebar} />

      <div className="admin-body">
        <Sidebar
          collapsed={collapsed}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />

        <div className={collapsed ? "content expanded" : "content"}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;