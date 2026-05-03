import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
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
  ChevronDown,
  ChevronRight,
  List,
  Eye,
  Gift,
} from "lucide-react";

import "./Sidebar.css";

const Sidebar = ({ collapsed, mobileOpen, setMobileOpen }) => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);

  /* ================= AUTO OPEN ================= */
  useEffect(() => {
    if (location.pathname.startsWith("/sub")) {
      setOpenMenu("sub");
    } else if (location.pathname.startsWith("/blog")) {
      setOpenMenu("blog");
    }
  }, [location.pathname]);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const closeMobile = () => {
    setMobileOpen(false);
  };

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
    { name: "Testimonial", path: "/testimonial", icon: <Settings size={18} /> },
  ];

  return (
    <div
      className={`Sidebar-container 
        ${collapsed ? "Sidebar-container--collapsed" : ""} 
        ${mobileOpen ? "Sidebar-container--mobileOpen" : ""}`
      }
    >

      {/* ================= TOP ================= */}
      <div className="Sidebar-top">
        <div className="Sidebar-logoBox">A</div>

        {!collapsed && (
          <div className="Sidebar-logoText">
            <h2>Admin Panel</h2>
            <p>Management System</p>
          </div>
        )}
      </div>

      {/* ================= MENU ================= */}
      <div className="Sidebar-menu">

        {/* MAIN LINKS */}
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            onClick={closeMobile}
            className={({ isActive }) =>
              isActive
                ? "Sidebar-link Sidebar-link--active"
                : "Sidebar-link"
            }
          >
            {item.icon}
            {!collapsed && <span>{item.name}</span>}
          </NavLink>
        ))}

        {/* ================= SHOP ================= */}
        <div
          className={`Sidebar-dropdown ${
            openMenu === "sub" ? "Sidebar-dropdown--open" : ""
          }`}
        >
          <div
            className="Sidebar-link Sidebar-dropdownHeader"
            onClick={() => toggleMenu("sub")}
          >
            <Package size={18} />
            {!collapsed && <span>Shop Management</span>}

            {!collapsed &&
              (openMenu === "sub" ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              ))}
          </div>

          <div className="Sidebar-submenu">
            <NavLink
              to="/sub/view"
              onClick={closeMobile}
              className={({ isActive }) =>
                isActive
                  ? "Sidebar-subLink Sidebar-subLink--active"
                  : "Sidebar-subLink"
              }
            >
              <Eye size={16} />
              <span>Shop View</span>
            </NavLink>

            <NavLink
              to="/sub/list"
              onClick={closeMobile}
              className={({ isActive }) =>
                isActive
                  ? "Sidebar-subLink Sidebar-subLink--active"
                  : "Sidebar-subLink"
              }
            >
              <List size={16} />
              <span>Shop List</span>
            </NavLink>
          </div>
        </div>

        {/* ================= BLOG ================= */}
        <div
          className={`Sidebar-dropdown ${
            openMenu === "blog" ? "Sidebar-dropdown--open" : ""
          }`}
        >
          <div
            className="Sidebar-link Sidebar-dropdownHeader"
            onClick={() => toggleMenu("blog")}
          >
            <Newspaper size={18} />
            {!collapsed && <span>Blog Management</span>}
          </div>

          <div className="Sidebar-submenu">
            <NavLink
              to="/blog/post"
              onClick={closeMobile}
              className={({ isActive }) =>
                isActive
                  ? "Sidebar-subLink Sidebar-subLink--active"
                  : "Sidebar-subLink"
              }
            >
              <Eye size={16} />
              <span>Blog Post</span>
            </NavLink>

            <NavLink
              to="/blog/view"
              onClick={closeMobile}
              className={({ isActive }) =>
                isActive
                  ? "Sidebar-subLink Sidebar-subLink--active"
                  : "Sidebar-subLink"
              }
            >
              <List size={16} />
              <span>Blog View</span>
            </NavLink>
          </div>
        </div>

        {/* ================= PRODUCT ================= */}
        <NavLink
          to="/product/details"
          onClick={closeMobile}
          className={({ isActive }) =>
            isActive
              ? "Sidebar-link Sidebar-link--active"
              : "Sidebar-link"
          }
        >
          <Package size={18} />
          {!collapsed && <span>Product Details</span>}
        </NavLink>

        <NavLink
          to="/product/gift"
          onClick={closeMobile}
          className={({ isActive }) =>
            isActive
              ? "Sidebar-link Sidebar-link--active"
              : "Sidebar-link"
          }
        >
          <Gift size={18} />
          {!collapsed && <span>Gift Posting</span>}
        </NavLink>

      </div>

      {/* ================= FOOTER ================= */}
      <div className="Sidebar-footer">
        <button className="Sidebar-logoutBtn">
          <LogOut size={18} />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;