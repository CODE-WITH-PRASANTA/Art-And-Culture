import React from "react";
import { Link } from "react-router-dom";
import { FiUser, FiMail, FiPhone, FiCalendar, FiShoppingBag, FiDollarSign } from "react-icons/fi";
import "./AccountDetails.css";

const AccountDetails = () => {
  // Mock data matching the reference image exactly
  const userData = {
    name: "Saroj Kishor Sahoo", 
    email: "santanuranjanbal@gmail.com",
    phone: "+918260779490",
    customerSince: "November 2025",
    totalOrders: 0,
    totalSpent: "₹ 0.00",
  };

  return (
    <div className="accountDetailsContainer">
      <div className="accountDetailsCard">
        {/* Component Title */}
        <h2 className="accountDetailsHeaderTitle">Account Details</h2>

        {/* Details Grid / Table rows */}
        <div className="accountDetailsList">
          
          {/* Name Row */}
          <div className="accountDetailsRow">
            <div className="accountDetailsLabel">
              <FiUser className="accountDetailsIcon" />
              <span>Name</span>
            </div>
            <div className="accountDetailsValue">{userData.name}</div>
          </div>

          {/* Email Row */}
          <div className="accountDetailsRow">
            <div className="accountDetailsLabel">
              <FiMail className="accountDetailsIcon" />
              <span>Email</span>
            </div>
            <div className="accountDetailsValue">{userData.email}</div>
          </div>

          {/* Phone Row */}
          <div className="accountDetailsRow">
            <div className="accountDetailsLabel">
              <FiPhone className="accountDetailsIcon" />
              <span>Phone</span>
            </div>
            <div className="accountDetailsValue">{userData.phone}</div>
          </div>

          {/* Customer Since Row */}
          <div className="accountDetailsRow">
            <div className="accountDetailsLabel">
              <FiCalendar className="accountDetailsIcon" />
              <span>Customer Since</span>
            </div>
            <div className="accountDetailsValue">{userData.customerSince}</div>
          </div>

          {/* Total Orders Row */}
          <div className="accountDetailsRow">
            <div className="accountDetailsLabel">
              <FiShoppingBag className="accountDetailsIcon" />
              <span>Total Orders</span>
            </div>
            <div className="accountDetailsValue">{userData.totalOrders}</div>
          </div>

          {/* Total Spent Row */}
          <div className="accountDetailsRow">
            <div className="accountDetailsLabel">
              <FiDollarSign className="accountDetailsIcon" />
              <span>Total Spent</span>
            </div>
            <div className="accountDetailsValue">{userData.totalSpent}</div>
          </div>

        </div>

        {/* Action Buttons Section */}
        <div className="accountDetailsActions">
          <Link to="/account/address" className="accountDetailsBtnManage">
            Manage Addresses (0)
          </Link>
          <button className="accountDetailsBtnPassword">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;