// Layout/Sidebar/Sidebar.jsx

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

const Sidebar = ({ collapsed }) => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);

  /* =========================
     AUTO OPEN DROPDOWN (IMPORTANT)
  ========================= */
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

  /* =========================
     MAIN MENU
  ========================= */
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
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>

      {/* ================= LOGO ================= */}
      <div className="sidebar-top">
        <div className="logo-box">A</div>

        {!collapsed && (
          <div className="logo-text">
            <h2>Admin Panel</h2>
            <p>Management System</p>
          </div>
        )}
      </div>

      {/* ================= MENU ================= */}
      <div className="sidebar-menu">

        {/* MAIN LINKS */}
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

        {/* ================= SUB MANAGEMENT ================= */}
        {/* {!collapsed && <p className="menu-title">Sub Management</p>} */}

        <div className={`dropdown ${openMenu === "sub" ? "open" : ""}`}>
          <div
            className="menu-link"
            onClick={() => toggleMenu("sub")}
          >
            <Package size={18} />
            {!collapsed && <span>Sub Management</span>}

            {!collapsed &&
              (openMenu === "sub" ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              ))}
          </div>

          <div className="submenu">
            <NavLink
              to="/sub/view"
              className={({ isActive }) =>
                isActive ? "submenu-link active" : "submenu-link"
              }
            >
              <Eye size={16} />
              <span>Sub View</span>
            </NavLink>

            <NavLink
              to="/sub/list"
              className={({ isActive }) =>
                isActive ? "submenu-link active" : "submenu-link"
              }
            >
              <List size={16} />
              <span>Sub List</span>
            </NavLink>
          </div>
        </div>

        {/* ================= BLOG MANAGEMENT ================= */}
        {/* {!collapsed && <p className="menu-title">Blog Management</p>} */}

        <div className={`dropdown ${openMenu === "blog" ? "open" : ""}`}>
          <div
            className="menu-link"
            onClick={() => toggleMenu("blog")}
          >
            <Newspaper size={18} />
            {!collapsed && <span>Blog Management</span>}

            {!collapsed &&
              (openMenu === "blog" ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              ))}
          </div>

          <div className="submenu">
            <NavLink
              to="/blog/view"
              className={({ isActive }) =>
                isActive ? "submenu-link active" : "submenu-link"
              }
            >
              <Eye size={16} />
              <span>Blog View</span>
            </NavLink>

            <NavLink
              to="/blog/list"
              className={({ isActive }) =>
                isActive ? "submenu-link active" : "submenu-link"
              }
            >
              <List size={16} />
              <span>Blog List</span>
            </NavLink>
          </div>
        </div>

        {/* ================= PRODUCT ================= */}
        {/* {!collapsed && <p className="menu-title">Product</p>} */}

        <NavLink
          to="/product/details"
          className={({ isActive }) =>
            isActive ? "menu-link active" : "menu-link"
          }
        >
          <Package size={18} />
          {!collapsed && <span>Product Details</span>}
        </NavLink>

        <NavLink
          to="/product/gift"
          className={({ isActive }) =>
            isActive ? "menu-link active" : "menu-link"
          }
        >
          <Gift size={18} />
          {!collapsed && <span>Gift Posting</span>}
        </NavLink>

      </div>

      {/* ================= FOOTER ================= */}
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