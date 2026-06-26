import React from "react";
import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiMapPin,
  FiShoppingBag,
  FiUser,
  FiMail,
  FiLogOut,
  FiChevronRight,
} from "react-icons/fi";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      {/* Profile Card */}
      <div className="Sidebar-profileCard">
        <div className="Sidebar-profileTop">
          <div className="Sidebar-profileInfo">
            <h3>
              Hey,<span> ›</span>
            </h3>
            <p>adyasa60@gmail.com</p>
          </div>
          <div className="Sidebar-avatar">U</div>
        </div>
        
    

        <div className="Sidebar-profileBottom">
          <span className="Sidebar-orderCount">0</span>
          <span className="Sidebar-orderText">
            Total Orders <FiChevronRight className="Sidebar-inlineArrow" />
          </span>
        </div>
      </div>

      {/* Account Card */}
      <div className="Sidebar-menuCard">
        <div className="Sidebar-title">
          <h4>Account</h4>
        </div>

        {/* Overview (Active) */}
        <NavLink 
          to="/overview" 
          className={({ isActive }) => `Sidebar-item ${isActive ? 'Sidebar-active' : ''}`}
        >
          <div className="Sidebar-left">
            <FiHome className="Sidebar-icon" />
            <div>
              <h5>Overview</h5>
              <p>All details in one place</p>
            </div>
          </div>
          <FiChevronRight className="Sidebar-arrow" />
        </NavLink>

        {/* Address */}
        <NavLink 
          to="/myaddress" 
          className={({ isActive }) => `Sidebar-item ${isActive ? 'Sidebar-active' : ''}`}
        >
          <div className="Sidebar-left">
            <FiMapPin className="Sidebar-icon" />
            <div>
              <h5>My Address</h5>
              <p>Manage shipping addresses</p>
            </div>
          </div>
          <FiChevronRight className="Sidebar-arrow" />
        </NavLink>

        {/* Orders */}
        <NavLink 
          to="/orders" 
          className={({ isActive }) => `Sidebar-item ${isActive ? 'Sidebar-active' : ''}`}
        >
          <div className="Sidebar-left">
            <FiShoppingBag className="Sidebar-icon" />
            <div>
              <h5>My Orders</h5>
              <p>Track your recent purchases</p>
            </div>
          </div>
          <FiChevronRight className="Sidebar-arrow" />
        </NavLink>

        {/* Account Details */}
        <NavLink 
          to="/account" 
          className={({ isActive }) => `Sidebar-item ${isActive ? 'Sidebar-active' : ''}`}
        >
          <div className="Sidebar-left">
            <FiUser className="Sidebar-icon" />
            <div>
              <h5>Account Details</h5>
              <p>View your profile info</p>
            </div>
          </div>
          <FiChevronRight className="Sidebar-arrow" />
        </NavLink>

        {/* Contact */}
        <NavLink 
          to="/contact" 
          className={({ isActive }) => `Sidebar-item ${isActive ? 'Sidebar-active' : ''}`}
        >
          <div className="Sidebar-left">
            <FiMail className="Sidebar-icon" />
            <div>
              <h5>Contact Us</h5>
              <p>Get help from our team</p>
            </div>
          </div>
          <FiChevronRight className="Sidebar-arrow" />
        </NavLink>

        {/* Logout */}
        <div className="Sidebar-logout">
          <FiLogOut className="Sidebar-logoutIcon" />
          <span>Log Out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;