// Layout/Navbar.jsx

import React, {
  useState,
} from "react";

import {
  Menu,
  User,
  Settings,
  LogOut,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

import "./Navbar.css";

const Navbar = ({
  toggleSidebar,
}) => {
  const [showProfile, setShowProfile] =
    useState(false);

  const navigate =
    useNavigate();

  // ================= LOGOUT =================

  const handleLogout = () => {
    // REMOVE LOGIN DATA

    localStorage.removeItem(
      "adminAuth"
    );

    localStorage.removeItem(
      "adminUser"
    );

    // CLOSE DROPDOWN

    setShowProfile(false);

    // REDIRECT TO LOGIN

    navigate("/login");
  };

  return (
    <div className="navbar">
      {/* ================= LEFT SIDE ================= */}

      <div className="navbar-left">
        <button
          className="menu-btn"
          onClick={
            toggleSidebar
          }
        >
          <Menu size={22} />
        </button>

        <h2>
          Admin Dashboard
        </h2>
      </div>

      {/* ================= RIGHT SIDE ================= */}

      <div className="navbar-right">
        {/* PROFILE IMAGE */}

        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="profile"
          className="profile-img"
          onClick={() =>
            setShowProfile(
              !showProfile
            )
          }
        />

        {/* ================= DROPDOWN ================= */}

        {showProfile && (
          <div className="profile-dropdown">
            {/* PROFILE */}

            <div className="dropdown-item">
              <User size={18} />

              <span>
                Profile
              </span>
            </div>

            {/* SETTINGS */}

            <div className="dropdown-item">
              <Settings size={18} />

              <span>
                Settings
              </span>
            </div>

            {/* LOGOUT */}

            <div
              className="dropdown-item logout-item"
              onClick={
                handleLogout
              }
            >
              <LogOut size={18} />

              <span>
                Logout
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;