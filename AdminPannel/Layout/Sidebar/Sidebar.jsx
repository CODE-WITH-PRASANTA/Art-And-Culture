// src/Layout/Sidebar.jsx

import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Phone,
  Newspaper,
  Package,
  MessageSquare,
  Settings,
  LogOut,
  ChevronDown,
  ChevronRight,
  List,
  Eye,
  Tag,
  Plus,
} from "lucide-react";

import "./Sidebar.css";

const Sidebar = ({ collapsed, mobileOpen, setMobileOpen }) => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);

  // ================= AUTO OPEN FOR MULTI-LEVEL MENUS =================

  useEffect(() => {
    const path = location.pathname;

    if (path.startsWith("/admin/sub")) {
      setOpenMenu("sub");
    } else if (path.startsWith("/admin/blog")) {
      setOpenMenu("blog");
    } else {
      setOpenMenu(null); // Close dropdowns if on a single link route
    }
  }, [location.pathname]);

  // ================= TOGGLE MENU =================

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  // ================= MOBILE CLOSE =================

  const closeMobile = () => {
    setMobileOpen(false);
  };

  return (
    <div
      className={`Sidebar-container 
      ${collapsed ? "Sidebar-container--collapsed" : ""} 
      ${mobileOpen ? "Sidebar-container--mobileOpen" : ""}
    `}
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
        {/* ================= DASHBOARD (SINGLE) ================= */}

        <NavLink
          to="/admin/dashboard"
          onClick={closeMobile}
          className={({ isActive }) =>
            `Sidebar-link ${isActive ? "Sidebar-link--active" : ""}`
          }
        >
          <LayoutDashboard size={18} />
          {!collapsed && <span>Dashboard</span>}
        </NavLink>

        {/* ================= CONTACT (SINGLE) ================= */}

        <NavLink
          to="/admin/contact"
          onClick={closeMobile}
          className={({ isActive }) =>
            `Sidebar-link ${isActive ? "Sidebar-link--active" : ""}`
          }
        >
          <Phone size={18} />
          {!collapsed && <span>Contact</span>}
        </NavLink>

        {/* ================= CONTACT TABLE (SINGLE) ================= */}

        <NavLink
          to="/admin/contact-table"
          onClick={closeMobile}
          className={({ isActive }) =>
            `Sidebar-link ${isActive ? "Sidebar-link--active" : ""}`
          }
        >
          <MessageSquare size={18} />
          {!collapsed && <span>Contact Table</span>}
        </NavLink>

        {/* ================= SHOP (DROPDOWN) ================= */}

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

            {!collapsed && (
              <>
                <span>Shop Management</span>
                <div className="Sidebar-arrow">
                  {openMenu === "sub" ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </div>
              </>
            )}
          </div>

          <div className="Sidebar-submenu">
            <NavLink
              to="/admin/sub/view"
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
              to="/admin/sub/list"
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

        {/* ================= TESTIMONIAL (SINGLE) ================= */}

        <NavLink
          to="/admin/testimonial"
          onClick={closeMobile}
          className={({ isActive }) =>
            `Sidebar-link ${isActive ? "Sidebar-link--active" : ""}`
          }
        >
          <Settings size={18} />
          {!collapsed && <span>Testimonial</span>}
        </NavLink>

        {/* ================= CATEGORY (SINGLE) ================= */}

        <NavLink
          to="/admin/category/add"
          onClick={closeMobile}
          className={({ isActive }) =>
            `Sidebar-link ${isActive ? "Sidebar-link--active" : ""}`
          }
        >
          <Tag size={18} />
          {!collapsed && <span>Category</span>}
        </NavLink>

        {/* ================= BLOG (DROPDOWN) ================= */}

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

            {!collapsed && (
              <>
                <span>Blog Management</span>
                <div className="Sidebar-arrow">
                  {openMenu === "blog" ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </div>
              </>
            )}
          </div>

          <div className="Sidebar-submenu">
            <NavLink
              to="/admin/blog/post"
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
              to="/admin/blog/view"
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