import React, { useState } from "react";
import "./AccountDetails.css";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiCalendar,
  FiShoppingBag,
  FiDollarSign,
  FiMapPin,
  FiLock,
} from "react-icons/fi";
import "./AccountDetails.css";

const AccountDetails = () => {
  return (
    <div className="AccountDetails">
      <div className="AccountDetails-card">
        <h2 className="AccountDetails-title">Account Details</h2>

        <div className="AccountDetails-list">

          <div className="AccountDetails-row">
            <div className="AccountDetails-label">
              <FiUser className="AccountDetails-icon" />
              Name
            </div>
            <div className="AccountDetails-value"></div>
          </div>

          <div className="AccountDetails-row">
            <div className="AccountDetails-label">
              <FiMail className="AccountDetails-icon" />
              Email
            </div>
            <div className="AccountDetails-value">
            dipti0@gmail.com
            </div>
          </div>

          <div className="AccountDetails-row">
            <div className="AccountDetails-label">
              <FiPhone className="AccountDetails-icon" />
              Phone
            </div>
            <div className="AccountDetails-value">
              +91 9876543225
            </div>
          </div>

          <div className="AccountDetails-row">
            <div className="AccountDetails-label">
              <FiCalendar className="AccountDetails-icon" />
              Customer Since
            </div>
            <div className="AccountDetails-value"></div>
          </div>

          <div className="AccountDetails-row">
            <div className="AccountDetails-label">
              <FiShoppingBag className="AccountDetails-icon" />
              Total Orders
            </div>
            <div className="AccountDetails-value">0</div>
          </div>

          <div className="AccountDetails-row">
            <div className="AccountDetails-label">
              <FiDollarSign className="AccountDetails-icon" />
              Total Spent
            </div>
            <div className="AccountDetails-value">
              ₹ 0.00
            </div>
          </div>

        </div>

        <div className="AccountDetails-buttons">
          <button className="AccountDetails-addressBtn">
            <FiMapPin />
            Manage Addresses (1)
          </button>

          <button className="AccountDetails-passwordBtn">
            <FiLock />
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;