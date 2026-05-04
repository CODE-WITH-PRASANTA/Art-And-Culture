import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import {
  LayoutDashboard,
  Phone,
  ShoppingCart,
  Newspaper,
  Package,
  MessageSquare,
  FileText,
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
    if (location.pathname.startsWith("/dashboard")) {
      setOpenMenu("dashboard");
    } else if (location.pathname.startsWith("/contact")) {
      setOpenMenu("contact");
    } else if (location.pathname.startsWith("/orders")) {
      setOpenMenu("orders");
    } else if (location.pathname.startsWith("/cart")) {
      setOpenMenu("cart");
    } else if (location.pathname.startsWith("/pooja")) {
      setOpenMenu("pooja");
    } else if (location.pathname.startsWith("/enquiry")) {
      setOpenMenu("enquiry");
    } else if (location.pathname.startsWith("/terms")) {
      setOpenMenu("terms");
    } else if (location.pathname.startsWith("/testimonial")) {
      setOpenMenu("testimonial");
    } else if (location.pathname.startsWith("/sub")) {
      setOpenMenu("sub");
    } else if (location.pathname.startsWith("/blog")) {
      setOpenMenu("blog");
    } else if (location.pathname.startsWith("/product")) {
      setOpenMenu("product");
    }
  }, [location.pathname]);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

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

        <div className="Sidebar-logoBox">
          A
        </div>

        {!collapsed && (
          <div className="Sidebar-logoText">
            <h2>Admin Panel</h2>
            <p>Management System</p>
          </div>
        )}

      </div>

      {/* ================= MENU ================= */}
      <div className="Sidebar-menu">

        {/* ================= DASHBOARD ================= */}
        <div className={`Sidebar-dropdown ${openMenu === "dashboard" ? "Sidebar-dropdown--open" : ""}`}>

          <div
            className="Sidebar-link Sidebar-dropdownHeader"
            onClick={() => toggleMenu("dashboard")}
          >

            <LayoutDashboard size={18} />

            {!collapsed && (
              <>
                <span>Dashboard</span>

                <div className="Sidebar-arrow">
                  {openMenu === "dashboard" ? (
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
              to="/dashboard"
              onClick={closeMobile}
              className={({ isActive }) =>
                isActive
                  ? "Sidebar-subLink Sidebar-subLink--active"
                  : "Sidebar-subLink"
              }
            >
              <Eye size={15} />
              <span>Dashboard View</span>
            </NavLink>

          </div>

        </div>

        {/* ================= CONTACT ================= */}
        <div className={`Sidebar-dropdown ${openMenu === "contact" ? "Sidebar-dropdown--open" : ""}`}>

          <div
            className="Sidebar-link Sidebar-dropdownHeader"
            onClick={() => toggleMenu("contact")}
          >

            <Phone size={18} />

            {!collapsed && (
              <>
                <span>Contact</span>

                <div className="Sidebar-arrow">
                  {openMenu === "contact" ? (
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
              to="/contact"
              onClick={closeMobile}
              className={({ isActive }) =>
                isActive
                  ? "Sidebar-subLink Sidebar-subLink--active"
                  : "Sidebar-subLink"
              }
            >
              <Eye size={15} />
              <span>Contact View</span>
            </NavLink>

          </div>

        </div>

        {/* ================= ORDERS ================= */}
        <div className={`Sidebar-dropdown ${openMenu === "orders" ? "Sidebar-dropdown--open" : ""}`}>

          <div
            className="Sidebar-link Sidebar-dropdownHeader"
            onClick={() => toggleMenu("orders")}
          >

            <ShoppingCart size={18} />

            {!collapsed && (
              <>
                <span>Orders</span>

                <div className="Sidebar-arrow">
                  {openMenu === "orders" ? (
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
              to="/orders"
              onClick={closeMobile}
              className={({ isActive }) =>
                isActive
                  ? "Sidebar-subLink Sidebar-subLink--active"
                  : "Sidebar-subLink"
              }
            >
              <List size={15} />
              <span>Order List</span>
            </NavLink>

          </div>

        </div>

        {/* ================= CART ================= */}
        <div className={`Sidebar-dropdown ${openMenu === "cart" ? "Sidebar-dropdown--open" : ""}`}>

          <div
            className="Sidebar-link Sidebar-dropdownHeader"
            onClick={() => toggleMenu("cart")}
          >

            <ShoppingCart size={18} />

            {!collapsed && (
              <>
                <span>Cart</span>

                <div className="Sidebar-arrow">
                  {openMenu === "cart" ? (
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
              to="/cart"
              onClick={closeMobile}
              className={({ isActive }) =>
                isActive
                  ? "Sidebar-subLink Sidebar-subLink--active"
                  : "Sidebar-subLink"
              }
            >
              <Eye size={15} />
              <span>Cart View</span>
            </NavLink>

          </div>

        </div>

        {/* ================= POOJA ================= */}
        <div className={`Sidebar-dropdown ${openMenu === "pooja" ? "Sidebar-dropdown--open" : ""}`}>

          <div
            className="Sidebar-link Sidebar-dropdownHeader"
            onClick={() => toggleMenu("pooja")}
          >

            <Package size={18} />

            {!collapsed && (
              <>
                <span>Pooja</span>

                <div className="Sidebar-arrow">
                  {openMenu === "pooja" ? (
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
              to="/pooja"
              onClick={closeMobile}
              className={({ isActive }) =>
                isActive
                  ? "Sidebar-subLink Sidebar-subLink--active"
                  : "Sidebar-subLink"
              }
            >
              <Eye size={15} />
              <span>Pooja View</span>
            </NavLink>

          </div>

        </div>

        {/* ================= ENQUIRY ================= */}
        <div className={`Sidebar-dropdown ${openMenu === "enquiry" ? "Sidebar-dropdown--open" : ""}`}>

          <div
            className="Sidebar-link Sidebar-dropdownHeader"
            onClick={() => toggleMenu("enquiry")}
          >

            <MessageSquare size={18} />

            {!collapsed && (
              <>
                <span>Enquiry</span>

                <div className="Sidebar-arrow">
                  {openMenu === "enquiry" ? (
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
              to="/enquiry"
              onClick={closeMobile}
              className={({ isActive }) =>
                isActive
                  ? "Sidebar-subLink Sidebar-subLink--active"
                  : "Sidebar-subLink"
              }
            >
              <List size={15} />
              <span>Enquiry List</span>
            </NavLink>

          </div>

        </div>

        {/* ================= TERMS ================= */}
        <div className={`Sidebar-dropdown ${openMenu === "terms" ? "Sidebar-dropdown--open" : ""}`}>

          <div
            className="Sidebar-link Sidebar-dropdownHeader"
            onClick={() => toggleMenu("terms")}
          >

            <FileText size={18} />

            {!collapsed && (
              <>
                <span>Terms</span>

                <div className="Sidebar-arrow">
                  {openMenu === "terms" ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </div>
              </>
            )}

          </div>
        </div>

        {/* ================= TESTIMONIAL ================= */}
        <div className={`Sidebar-dropdown ${openMenu === "testimonial" ? "Sidebar-dropdown--open" : ""}`}>

          <div
            className="Sidebar-link Sidebar-dropdownHeader"
            onClick={() => toggleMenu("testimonial")}
          >

            <Settings size={18} />

            {!collapsed && (
              <>
                <span>Testimonial</span>

                <div className="Sidebar-arrow">
                  {openMenu === "testimonial" ? (
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
              to="/testimonial"
              onClick={closeMobile}
              className={({ isActive }) =>
                isActive
                  ? "Sidebar-subLink Sidebar-subLink--active"
                  : "Sidebar-subLink"
              }
            >
              <Eye size={15} />
              <span>Testimonial View</span>
            </NavLink>

          </div>

        </div>

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
        <div className={`Sidebar-dropdown ${openMenu === "product" ? "Sidebar-dropdown--open" : ""}`}>

          <div
            className="Sidebar-link Sidebar-dropdownHeader"
            onClick={() => toggleMenu("product")}
          >

            <Gift size={18} />

            {!collapsed && (
              <>
                <span>Product Section</span>

                <div className="Sidebar-arrow">
                  {openMenu === "product" ? (
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
              to="/product/details"
              onClick={closeMobile}
              className={({ isActive }) =>
                isActive
                  ? "Sidebar-subLink Sidebar-subLink--active"
                  : "Sidebar-subLink"
              }
            >
              <Package size={15} />
              <span>Product Details</span>
            </NavLink>

            <NavLink
              to="/product/gift"
              onClick={closeMobile}
              className={({ isActive }) =>
                isActive
                  ? "Sidebar-subLink Sidebar-subLink--active"
                  : "Sidebar-subLink"
              }
            >
              <Gift size={15} />
              <span>Gift Posting</span>
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