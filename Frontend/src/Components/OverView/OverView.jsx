import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import './OverView.css'; // Importing the corresponding CSS file

const OverView = () => {
  return (
    <div className="overview-container">
      
      {/* My Orders Section */}
      <div className="overview-card">
        <div className="overview-card-header">
          <h2 className="overview-card-title">My Orders</h2>
          <button className="overview-see-all-btn">See All</button>
        </div>
        
        <div className="overview-card-content">
          <div className="overview-icon-wrapper">
            <FiShoppingBag strokeWidth={1.2} />
          </div>
          <h3 className="overview-empty-heading">No orders yet</h3>
          <p className="overview-empty-text">
            When you place your first order, it will appear here.
          </p>
          <button className="overview-action-btn">Start Shopping</button>
        </div>
      </div>

      {/* Saved Addresses Section */}
      <div className="overview-card">
        <div className="overview-card-header">
          <h2 className="overview-card-title">Saved Addresses</h2>
          <button className="overview-see-all-btn">See All</button>
        </div>
        
        <div className="overview-card-content">
          <div className="overview-icon-wrapper">
            <IoLocationOutline strokeWidth={1.2} />
          </div>
          <h3 className="overview-empty-heading">No saved addresses</h3>
          <p className="overview-empty-text">
            Add a shipping address for faster checkout.
          </p>
          <button className="overview-action-btn">Add Address</button>
        </div>
      </div>

    </div>
  );
};

export default OverView;