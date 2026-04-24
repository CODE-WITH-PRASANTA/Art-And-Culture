// Layout/Sidebar/Sidebar.jsx

import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Phone,
  ShoppingCart,
  User,
  Newspaper,
  Package,
  MessageSquare,
  FileText,
  Shield,
  Settings,
  LogOut,
} from "lucide-react";

import "./Sidebar.css";

const Sidebar = ({ collapsed }) => {
  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard size={18} /> },
    { name: "Contact", path: "/contact", icon: <Phone size={18} /> },
    { name: "Orders", path: "/orders", icon: <ShoppingCart size={18} /> },
    { name: "Accounts", path: "/accounts", icon: <User size={18} /> },
    { name: "Cart", path: "/cart", icon: <ShoppingCart size={18} /> },
    { name: "News", path: "/news", icon: <Newspaper size={18} /> },
    { name: "Pooja", path: "/pooja", icon: <Package size={18} /> },
    { name: "Enquiry", path: "/enquiry", icon: <MessageSquare size={18} /> },
    { name: "Terms", path: "/terms", icon: <FileText size={18} /> },
    { name: "Privacy", path: "/privacy", icon: <Shield size={18} /> },
    { name: "Settings", path: "/settings", icon: <Settings size={18} /> },
  ];

  return (
    <div className={collapsed ? "sidebar collapsed" : "sidebar"}>
      
      {/* Logo */}
      <div className="sidebar-top">
        <div className="logo-box">A</div>

        {!collapsed && (
          <div className="logo-text">
            <h2>Admin Panel</h2>
            <p>Management System</p>
          </div>
        )}
      </div>

      {/* Menu */}
      <div className="sidebar-menu">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "menu-link active" : "menu-link"
            }
          >
            {item.icon}
            {!collapsed && <span>{item.name}</span>}
          </NavLink>
        ))}
      </div>

      {/* Logout */}
      <div className="sidebar-footer">
        <button className="logout-btn">
          <LogOut size={18} />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;