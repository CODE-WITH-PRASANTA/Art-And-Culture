// src/Layout/Sidebar.jsx

import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  List,
  Plus,
  Tag,
  SlidersHorizontal,
  ShoppingCart,
  Users,
  Star,
  Ticket,
  Image,
  Settings,
  FileText,
  LogOut,
  ChevronDown,
  ChevronRight,
  User,
  X,
} from "lucide-react";

import "./Sidebar.css";

const Sidebar = ({ collapsed = false, mobileOpen = false, setMobileOpen = () => {} }) => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);

  // Labels should always show on mobile (when the drawer is open),
  // and only hide on desktop when explicitly collapsed.
  const showLabels = mobileOpen ? true : !collapsed;

  // ================= AUTO OPEN FOR MULTI-LEVEL MENUS =================

  useEffect(() => {
    const path = location.pathname;

    if (path.startsWith("/admin/products")) {
      setOpenMenu("products");
    } else {
      setOpenMenu(null);
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
    <>
      {mobileOpen && (
        <div className="Sidebar-overlay" onClick={closeMobile} aria-hidden="true" />
      )}

      <div
        className={`Sidebar-container 
        ${collapsed && !mobileOpen ? "Sidebar-container--collapsed" : ""} 
        ${mobileOpen ? "Sidebar-container--mobileOpen" : ""}
      `}
      >
        {/* ================= TOP ================= */}

        <div className="Sidebar-top">
          <div className="Sidebar-topLeft">
            <div className="Sidebar-logoBox">A</div>

            {showLabels && (
              <div className="Sidebar-logoText">
                <h2>Admin Panel</h2>
                <p>Management System</p>
              </div>
            )}
          </div>

          {/* CLOSE BUTTON — MOBILE ONLY */}
          <button
            type="button"
            className="Sidebar-closeBtn"
            onClick={closeMobile}
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
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
            {showLabels && <span>Dashboard</span>}
          </NavLink>

          {/* ================= PRODUCTS (DROPDOWN) ================= */}

          <div
            className={`Sidebar-dropdown ${
              openMenu === "products" ? "Sidebar-dropdown--open" : ""
            }`}
          >
            <div
              className="Sidebar-link Sidebar-dropdownHeader"
              onClick={() => toggleMenu("products")}
            >
              <Package size={18} />

              {showLabels && (
                <>
                  <span>Products</span>
                  <div className="Sidebar-arrow">
                    {openMenu === "products" ? (
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
                to="/admin/products/all"
                onClick={closeMobile}
                className={({ isActive }) =>
                  isActive
                    ? "Sidebar-subLink Sidebar-subLink--active"
                    : "Sidebar-subLink"
                }
              >
                <List size={14} />
                <span>All Products</span>
              </NavLink>

              <NavLink
                to="/admin/products/add"
                onClick={closeMobile}
                className={({ isActive }) =>
                  isActive
                    ? "Sidebar-subLink Sidebar-subLink--active"
                    : "Sidebar-subLink"
                }
              >
                <Plus size={14} />
                <span>Add New Product</span>
              </NavLink>

              <NavLink
                to="/admin/products/categories"
                onClick={closeMobile}
                className={({ isActive }) =>
                  isActive
                    ? "Sidebar-subLink Sidebar-subLink--active"
                    : "Sidebar-subLink"
                }
              >
                <Tag size={14} />
                <span>Categories</span>
              </NavLink>

              <NavLink
                to="/admin/products/attributes"
                onClick={closeMobile}
                className={({ isActive }) =>
                  isActive
                    ? "Sidebar-subLink Sidebar-subLink--active"
                    : "Sidebar-subLink"
                }
              >
                <SlidersHorizontal size={14} />
                <span>Attributes</span>
              </NavLink>
            </div>
          </div>

          {/* ================= ORDERS (SINGLE) ================= */}

          <NavLink
            to="/admin/orders"
            onClick={closeMobile}
            className={({ isActive }) =>
              `Sidebar-link ${isActive ? "Sidebar-link--active" : ""}`
            }
          >
            <ShoppingCart size={18} />
            {showLabels && <span>Orders</span>}
          </NavLink>

          {/* ================= CATEGORIES (SINGLE) ================= */}

          <NavLink
            to="/admin/categories"
            onClick={closeMobile}
            className={({ isActive }) =>
              `Sidebar-link ${isActive ? "Sidebar-link--active" : ""}`
            }
          >
            <Tag size={18} />
            {showLabels && <span>Categories</span>}
          </NavLink>

          {/* ================= CUSTOMERS (SINGLE) ================= */}

          <NavLink
            to="/admin/customers"
            onClick={closeMobile}
            className={({ isActive }) =>
              `Sidebar-link ${isActive ? "Sidebar-link--active" : ""}`
            }
          >
            <Users size={18} />
            {showLabels && <span>Customers</span>}
          </NavLink>

          {/* ================= REVIEWS (SINGLE) ================= */}

          <NavLink
            to="/admin/reviews"
            onClick={closeMobile}
            className={({ isActive }) =>
              `Sidebar-link ${isActive ? "Sidebar-link--active" : ""}`
            }
          >
            <Star size={18} />
            {showLabels && <span>Reviews</span>}
          </NavLink>

          {/* ================= COUPONS (SINGLE) ================= */}

          <NavLink
            to="/admin/coupons"
            onClick={closeMobile}
            className={({ isActive }) =>
              `Sidebar-link ${isActive ? "Sidebar-link--active" : ""}`
            }
          >
            <Ticket size={18} />
            {showLabels && <span>Coupons</span>}
          </NavLink>

          {/* ================= BANNERS (SINGLE) ================= */}

          <NavLink
            to="/admin/banners"
            onClick={closeMobile}
            className={({ isActive }) =>
              `Sidebar-link ${isActive ? "Sidebar-link--active" : ""}`
            }
          >
            <Image size={18} />
            {showLabels && <span>Banners</span>}
          </NavLink>

          {/* ================= SETTINGS (SINGLE) ================= */}

          <NavLink
            to="/admin/settings"
            onClick={closeMobile}
            className={({ isActive }) =>
              `Sidebar-link ${isActive ? "Sidebar-link--active" : ""}`
            }
          >
            <Settings size={18} />
            {showLabels && <span>Settings</span>}
          </NavLink>

          {/* ================= REPORTS (SINGLE) ================= */}

          <NavLink
            to="/admin/reports"
            onClick={closeMobile}
            className={({ isActive }) =>
              `Sidebar-link ${isActive ? "Sidebar-link--active" : ""}`
            }
          >
            <FileText size={18} />
            {showLabels && <span>Reports</span>}
          </NavLink>
        </div>

        {/* ================= FOOTER ================= */}

        <div className="Sidebar-footer">
          <div className="Sidebar-profileCard">
            <div className="Sidebar-profileAvatar">
              <User size={18} />
              <span className="Sidebar-onlineDot" />
            </div>

            {showLabels && (
              <>
                <div className="Sidebar-profileInfo">
                  <p className="Sidebar-profileName">Admin User</p>
                  <p className="Sidebar-profileRole">Super Admin</p>
                </div>
                <ChevronDown size={15} className="Sidebar-profileChevron" />
              </>
            )}
          </div>

          <button className="Sidebar-logoutBtn">
            <LogOut size={18} />
            {showLabels && <span>Logout</span>}
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;