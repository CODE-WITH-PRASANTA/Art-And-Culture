// src/Layout/Sidebar.jsx

import React, {
  useState,
  useEffect,
} from "react";

import {
  NavLink,
  useLocation,
} from "react-router-dom";

import {
  LayoutDashboard,
  Phone,
  ShoppingCart,
  Newspaper,
  Package,
  MessageSquare,
  Settings,
  LogOut,
  ChevronDown,
  ChevronRight,
  List,
  Eye,
  Gift,
  Tag,
  Plus,
  Sparkles,
  Gem,
} from "lucide-react";

import "./Sidebar.css";

const Sidebar = ({
  collapsed,
  mobileOpen,
  setMobileOpen,
}) => {
  const location =
    useLocation();

  const [openMenu, setOpenMenu] =
    useState(null);

  // ================= AUTO OPEN =================

  useEffect(() => {
    const path =
      location.pathname;

    if (
      path.startsWith(
        "/admin/dashboard"
      )
    ) {
      setOpenMenu(
        "dashboard"
      );
    } else if (
      path.startsWith(
        "/admin/contact-table"
      )
    ) {
      setOpenMenu(
        "contactTable"
      );
    } else if (
      path.startsWith(
        "/admin/contact"
      )
    ) {
      setOpenMenu(
        "contact"
      );
    } else if (
      path.startsWith(
        "/admin/orders"
      )
    ) {
      setOpenMenu("orders");
    } else if (
      path.startsWith(
        "/admin/pooja"
      )
    ) {
      setOpenMenu("pooja");
    } else if (
      path.startsWith(
        "/admin/testimonial"
      )
    ) {
      setOpenMenu(
        "testimonial"
      );
    } else if (
      path.startsWith(
        "/admin/sub"
      )
    ) {
      setOpenMenu("sub");
    } else if (
      path.startsWith(
        "/admin/blog"
      )
    ) {
      setOpenMenu("blog");
    } else if (
      path.startsWith(
        "/admin/team"
      )
    ) {
      setOpenMenu("team");
    } else if (
      path.startsWith(
        "/admin/category"
      )
    ) {
      setOpenMenu(
        "category"
      );
    } else if (
      path.startsWith(
        "/admin/fresh-collection"
      )
    ) {
      setOpenMenu(
        "freshCollection"
      );
    }
  }, [location.pathname]);

  // ================= TOGGLE MENU =================

  const toggleMenu = (
    menu
  ) => {
    setOpenMenu(
      openMenu === menu
        ? null
        : menu
    );
  };

  // ================= MOBILE CLOSE =================

  const closeMobile = () => {
    setMobileOpen(false);
  };

  return (
    <div
      className={`Sidebar-container
      ${
        collapsed
          ? "Sidebar-container--collapsed"
          : ""
      }
      ${
        mobileOpen
          ? "Sidebar-container--mobileOpen"
          : ""
      }
    `}
    >
      {/* ================= TOP ================= */}

      <div className="Sidebar-top">
        <div className="Sidebar-logoBox">
          A
        </div>

        {!collapsed && (
          <div className="Sidebar-logoText">
            <h2>
              Admin Panel
            </h2>

            <p>
              Management
              System
            </p>
          </div>
        )}
      </div>

      {/* ================= MENU ================= */}

      <div className="Sidebar-menu">

        {/* ================= DASHBOARD ================= */}

        <div
          className={`Sidebar-dropdown ${
            openMenu ===
            "dashboard"
              ? "Sidebar-dropdown--open"
              : ""
          }`}
        >
          <div
            className="Sidebar-link Sidebar-dropdownHeader"
            onClick={() =>
              toggleMenu(
                "dashboard"
              )
            }
          >
            <LayoutDashboard size={18} />

            {!collapsed && (
              <>
                <span>
                  Dashboard
                </span>

                <div className="Sidebar-arrow">
                  {openMenu ===
                  "dashboard" ? (
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
              to="/admin/dashboard"
              onClick={
                closeMobile
              }
              className={({
                isActive,
              }) =>
                isActive
                  ? "Sidebar-subLink Sidebar-subLink--active"
                  : "Sidebar-subLink"
              }
            >
              <Eye size={15} />

              <span>
                Dashboard
              </span>
            </NavLink>
          </div>
        </div>

        {/* ================= CONTACT TABLE ================= */}

        <div
          className={`Sidebar-dropdown ${
            openMenu ===
            "contactTable"
              ? "Sidebar-dropdown--open"
              : ""
          }`}
        >
          <div
            className="Sidebar-link Sidebar-dropdownHeader"
            onClick={() =>
              toggleMenu(
                "contactTable"
              )
            }
          >
            <MessageSquare size={18} />

            {!collapsed && (
              <>
                <span>
                  Contact Table
                </span>

                <div className="Sidebar-arrow">
                  {openMenu ===
                  "contactTable" ? (
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
              to="/admin/contact-table"
              onClick={
                closeMobile
              }
              className={({
                isActive,
              }) =>
                isActive
                  ? "Sidebar-subLink Sidebar-subLink--active"
                  : "Sidebar-subLink"
              }
            >
              <Eye size={15} />

              <span>
                Contact Table
              </span>
            </NavLink>
          </div>
        </div>

        {/* ================= CONTACT ================= */}

        <div
          className={`Sidebar-dropdown ${
            openMenu ===
            "contact"
              ? "Sidebar-dropdown--open"
              : ""
          }`}
        >
          <div
            className="Sidebar-link Sidebar-dropdownHeader"
            onClick={() =>
              toggleMenu(
                "contact"
              )
            }
          >
            <Phone size={18} />

            {!collapsed && (
              <>
                <span>
                  Contact
                </span>

                <div className="Sidebar-arrow">
                  {openMenu ===
                  "contact" ? (
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
              to="/admin/contact"
              onClick={
                closeMobile
              }
              className={({
                isActive,
              }) =>
                isActive
                  ? "Sidebar-subLink Sidebar-subLink--active"
                  : "Sidebar-subLink"
              }
            >
              <Eye size={15} />

              <span>
                Contact View
              </span>
            </NavLink>
          </div>
        </div>

        {/* ================= ORDERS ================= */}

        <div
          className={`Sidebar-dropdown ${
            openMenu ===
            "orders"
              ? "Sidebar-dropdown--open"
              : ""
          }`}
        >
          <div
            className="Sidebar-link Sidebar-dropdownHeader"
            onClick={() =>
              toggleMenu(
                "orders"
              )
            }
          >
            <ShoppingCart size={18} />

            {!collapsed && (
              <>
                <span>
                  Orders
                </span>

                <div className="Sidebar-arrow">
                  {openMenu ===
                  "orders" ? (
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
              to="/admin/orders"
              onClick={
                closeMobile
              }
              className={({
                isActive,
              }) =>
                isActive
                  ? "Sidebar-subLink Sidebar-subLink--active"
                  : "Sidebar-subLink"
              }
            >
              <Eye size={15} />

              <span>
                Orders View
              </span>
            </NavLink>
          </div>
        </div>

        {/* ================= POOJA ================= */}

        <div
          className={`Sidebar-dropdown ${
            openMenu ===
            "pooja"
              ? "Sidebar-dropdown--open"
              : ""
          }`}
        >
          <div
            className="Sidebar-link Sidebar-dropdownHeader"
            onClick={() =>
              toggleMenu(
                "pooja"
              )
            }
          >
            <Sparkles size={18} />

            {!collapsed && (
              <>
                <span>
                  Pooja
                </span>

                <div className="Sidebar-arrow">
                  {openMenu ===
                  "pooja" ? (
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
              to="/admin/pooja"
              onClick={
                closeMobile
              }
              className={({
                isActive,
              }) =>
                isActive
                  ? "Sidebar-subLink Sidebar-subLink--active"
                  : "Sidebar-subLink"
              }
            >
              <Eye size={15} />

              <span>
                Pooja View
              </span>
            </NavLink>
          </div>
        </div>

        {/* ================= TEAM ================= */}

        <div
          className={`Sidebar-dropdown ${
            openMenu ===
            "team"
              ? "Sidebar-dropdown--open"
              : ""
          }`}
        >
          <div
            className="Sidebar-link Sidebar-dropdownHeader"
            onClick={() =>
              toggleMenu(
                "team"
              )
            }
          >
            <Gift size={18} />

            {!collapsed && (
              <>
                <span>
                  Team Members
                </span>

                <div className="Sidebar-arrow">
                  {openMenu ===
                  "team" ? (
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
              to="/admin/team/members-post"
              onClick={
                closeMobile
              }
              className={({
                isActive,
              }) =>
                isActive
                  ? "Sidebar-subLink Sidebar-subLink--active"
                  : "Sidebar-subLink"
              }
            >
              <Package size={15} />

              <span>
                Post Team
                Members
              </span>
            </NavLink>
          </div>
        </div>

        {/* ================= BLOG ================= */}

        <div
          className={`Sidebar-dropdown ${
            openMenu ===
            "blog"
              ? "Sidebar-dropdown--open"
              : ""
          }`}
        >
          <div
            className="Sidebar-link Sidebar-dropdownHeader"
            onClick={() =>
              toggleMenu(
                "blog"
              )
            }
          >
            <Newspaper size={18} />

            {!collapsed && (
              <>
                <span>
                  Blog
                  Management
                </span>

                <div className="Sidebar-arrow">
                  {openMenu ===
                  "blog" ? (
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
              onClick={
                closeMobile
              }
              className={({
                isActive,
              }) =>
                isActive
                  ? "Sidebar-subLink Sidebar-subLink--active"
                  : "Sidebar-subLink"
              }
            >
              <Eye size={16} />

              <span>
                Blog Post
              </span>
            </NavLink>

            <NavLink
              to="/admin/blog/view"
              onClick={
                closeMobile
              }
              className={({
                isActive,
              }) =>
                isActive
                  ? "Sidebar-subLink Sidebar-subLink--active"
                  : "Sidebar-subLink"
              }
            >
              <List size={16} />

              <span>
                Blog View
              </span>
            </NavLink>
          </div>
        </div>

        {/* ================= TESTIMONIAL ================= */}

        <div
          className={`Sidebar-dropdown ${
            openMenu ===
            "testimonial"
              ? "Sidebar-dropdown--open"
              : ""
          }`}
        >
          <div
            className="Sidebar-link Sidebar-dropdownHeader"
            onClick={() =>
              toggleMenu(
                "testimonial"
              )
            }
          >
            <Settings size={18} />

            {!collapsed && (
              <>
                <span>
                  Testimonial
                </span>

                <div className="Sidebar-arrow">
                  {openMenu ===
                  "testimonial" ? (
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
              to="/admin/testimonial"
              onClick={
                closeMobile
              }
              className={({
                isActive,
              }) =>
                isActive
                  ? "Sidebar-subLink Sidebar-subLink--active"
                  : "Sidebar-subLink"
              }
            >
              <Eye size={15} />

              <span>
                Testimonial
                View
              </span>
            </NavLink>
          </div>
        </div>

        {/* ================= CATEGORY ================= */}

        <div
          className={`Sidebar-dropdown ${
            openMenu ===
            "category"
              ? "Sidebar-dropdown--open"
              : ""
          }`}
        >
          <div
            className="Sidebar-link Sidebar-dropdownHeader"
            onClick={() =>
              toggleMenu(
                "category"
              )
            }
          >
            <Tag size={18} />

            {!collapsed && (
              <>
                <span>
                  Category
                </span>

                <div className="Sidebar-arrow">
                  {openMenu ===
                  "category" ? (
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
              to="/admin/category/add"
              onClick={
                closeMobile
              }
              className={({
                isActive,
              }) =>
                isActive
                  ? "Sidebar-subLink Sidebar-subLink--active"
                  : "Sidebar-subLink"
              }
            >
              <Plus size={15} />

              <span>
                Add Category
              </span>
            </NavLink>
          </div>
        </div>

        {/* ================= SHOP ================= */}

        <div
          className={`Sidebar-dropdown ${
            openMenu ===
            "sub"
              ? "Sidebar-dropdown--open"
              : ""
          }`}
        >
          <div
            className="Sidebar-link Sidebar-dropdownHeader"
            onClick={() =>
              toggleMenu(
                "sub"
              )
            }
          >
            <Package size={18} />

            {!collapsed && (
              <>
                <span>
                  Shop
                  Management
                </span>

                <div className="Sidebar-arrow">
                  {openMenu ===
                  "sub" ? (
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
              onClick={
                closeMobile
              }
              className={({
                isActive,
              }) =>
                isActive
                  ? "Sidebar-subLink Sidebar-subLink--active"
                  : "Sidebar-subLink"
              }
            >
              <Eye size={16} />

              <span>
                Shop View
              </span>
            </NavLink>

            <NavLink
              to="/admin/sub/list"
              onClick={
                closeMobile
              }
              className={({
                isActive,
              }) =>
                isActive
                  ? "Sidebar-subLink Sidebar-subLink--active"
                  : "Sidebar-subLink"
              }
            >
              <List size={16} />

              <span>
                Shop List
              </span>
            </NavLink>
          </div>
        </div>

        {/* ================= FRESH COLLECTION ================= */}

        <div
          className={`Sidebar-dropdown ${
            openMenu ===
            "freshCollection"
              ? "Sidebar-dropdown--open"
              : ""
          }`}
        >
          <div
            className="Sidebar-link Sidebar-dropdownHeader"
            onClick={() =>
              toggleMenu(
                "freshCollection"
              )
            }
          >
            <Gem size={18} />

            {!collapsed && (
              <>
                <span>
                  Fresh Collection
                </span>

                <div className="Sidebar-arrow">
                  {openMenu ===
                  "freshCollection" ? (
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
              to="/admin/fresh-collection"
              onClick={
                closeMobile
              }
              className={({
                isActive,
              }) =>
                isActive
                  ? "Sidebar-subLink Sidebar-subLink--active"
                  : "Sidebar-subLink"
              }
            >
              <Eye size={15} />

              <span>
                Fresh Collection
              </span>
            </NavLink>
          </div>
        </div>
      </div>

      {/* ================= FOOTER ================= */}

      <div className="Sidebar-footer">
        <button className="Sidebar-logoutBtn">
          <LogOut size={18} />

          {!collapsed && (
            <span>
              Logout
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;