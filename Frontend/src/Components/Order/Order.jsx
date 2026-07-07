import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import "./Order.css";

const Order = () => {
  return (
    <div className="orderContainer">
      <div className="orderCard">
        {/* Component Header */}
        <h2 className="orderHeaderTitle">My Orders</h2>

        {/* Empty State Content */}
        <div className="orderEmptyState">
          <div className="orderIconWrapper">
            <FiShoppingBag className="orderEmptyIcon" />
          </div>

          <h3 className="orderEmptyHeading">No orders yet</h3>
          <p className="orderEmptyText">
            When you place your first order, it will appear here.
          </p>

          <Link to="/" className="orderStartShoppingBtn">
            Start Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Order;