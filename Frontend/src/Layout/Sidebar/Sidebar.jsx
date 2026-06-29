import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

import {
  FiHome,
  FiMapPin,
  FiShoppingBag,
  FiUser,
  FiPhone,
  FiLogOut,
  FiChevronRight,
} from "react-icons/fi";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* ================= USER CARD ================= */}

      <div className="sidebarProfileCard">
        <div className="sidebarProfileTop">
          <div className="sidebarProfileInfo">
            <h3>
              Hey,
              <FiChevronRight className="sidebarMiniArrow" />
            </h3>

            <p>adyasabarik@gmail.com</p>
          </div>

          <div className="sidebarAvatar">U</div>
        </div>

        <div className="sidebarDivider" />

        <NavLink to="/account/orders" className="sidebarTotalOrders">
          <span>0</span>

          <p>
            Total Orders
            <FiChevronRight />
          </p>
        </NavLink>
      </div>

      {/* ================= ACCOUNT MENU ================= */}

      <div className="sidebarMenuCard">
        <div className="sidebarHeading">Account</div>

        {/* Overview */}

        <NavLink
          end
          to="/account"
          className={({ isActive }) =>
            isActive ? "sidebarMenuItem active" : "sidebarMenuItem"
          }
        >
          <div className="sidebarMenuLeft">
            <div className="sidebarIcon">
              <FiHome />
            </div>

            <div className="sidebarMenuContent">
              <h4>Overview</h4>
              <p>All details in one place</p>
            </div>
          </div>

          <FiChevronRight className="sidebarArrow" />
        </NavLink>

        {/* Address */}

        <NavLink
          to="/account/address"
          className={({ isActive }) =>
            isActive ? "sidebarMenuItem active" : "sidebarMenuItem"
          }
        >
          <div className="sidebarMenuLeft">
            <div className="sidebarIcon">
              <FiMapPin />
            </div>

            <div className="sidebarMenuContent">
              <h4>My Address</h4>
              <p>Manage shipping addresses</p>
            </div>
          </div>

          <FiChevronRight className="sidebarArrow" />
        </NavLink>

        {/* Orders */}

        <NavLink
          to="/account/orders"
          className={({ isActive }) =>
            isActive ? "sidebarMenuItem active" : "sidebarMenuItem"
          }
        >
          <div className="sidebarMenuLeft">
            <div className="sidebarIcon">
              <FiShoppingBag />
            </div>

            <div className="sidebarMenuContent">
              <h4>My Orders</h4>
              <p>Track your recent purchases</p>
            </div>
          </div>

          <FiChevronRight className="sidebarArrow" />
        </NavLink>

        {/* Account Details */}

        <NavLink
          to="/account/details"
          className={({ isActive }) =>
            isActive ? "sidebarMenuItem active" : "sidebarMenuItem"
          }
        >
          <div className="sidebarMenuLeft">
            <div className="sidebarIcon">
              <FiUser />
            </div>

            <div className="sidebarMenuContent">
              <h4>Account Details</h4>
              <p>View your profile information</p>
            </div>
          </div>

          <FiChevronRight className="sidebarArrow" />
        </NavLink>

        {/* Contact */}

        <NavLink
          to="/account/contact"
          className={({ isActive }) =>
            isActive ? "sidebarMenuItem active" : "sidebarMenuItem"
          }
        >
          <div className="sidebarMenuLeft">
            <div className="sidebarIcon">
              <FiPhone />
            </div>

            <div className="sidebarMenuContent">
              <h4>Contact Us</h4>
              <p>Get help from our support team</p>
            </div>
          </div>

          <FiChevronRight className="sidebarArrow" />
        </NavLink>

        {/* Logout */}

        <button className="sidebarLogout">
          <FiLogOut />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;