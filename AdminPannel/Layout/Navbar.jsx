// Layout/Navbar.jsx

import React, { useState } from "react";
import { Menu, User, Settings, LogOut } from "lucide-react";
import "./Navbar.css";

const Navbar = ({ toggleSidebar }) => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="navbar">

      {/* Left Side */}
      <div className="navbar-left">
        <button className="menu-btn" onClick={toggleSidebar}>
          <Menu size={22} />
        </button>

        <h2>Admin Dashboard</h2>
      </div>

      {/* Right Side */}
      <div className="navbar-right">

        {/* Profile Image */}
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="profile"
          className="profile-img"
          onClick={() => setShowProfile(!showProfile)}
        />

        {/* Dropdown */}
        {showProfile && (
          <div className="profile-dropdown">

            <div className="dropdown-item">
              <User size={18} />
              <span>Profile</span>
            </div>

            <div className="dropdown-item">
              <Settings size={18} />
              <span>Settings</span>
            </div>

            <div className="dropdown-item logout-item">
              <LogOut size={18} />
              <span>Logout</span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default Navbar;