import React, { useState } from "react";
import "./AccOverview.css";
import {
  FiShoppingBag,
  FiArrowRight,
  FiMapPin,
} from "react-icons/fi";
import "./AccOverview.css";

const AccOverview = () => {
  return (
    <section className="AccOverview">

      {/* Orders */}

      <div className="AccOverview-card">

        <div className="AccOverview-header">
          <h2>My Orders</h2>

          <a href="#">
            See All
          </a>
        </div>

        <div className="AccOverview-orders">

          <div className="AccOverview-orderIcon">
            <FiShoppingBag />
          </div>

          <h3>No orders yet</h3>

          <p>
            When you place your first order, it will appear here.
          </p>

          <button className="AccOverview-btn">
            Start Shopping
            <FiArrowRight />
          </button>

        </div>

      </div>

      {/* Address */}

      <div className="AccOverview-card">

        <div className="AccOverview-header">
          <h2>Saved Addresses</h2>

          <a href="#">
            See All
          </a>
        </div>

        <div className="AccOverview-addressCard">

          <div className="AccOverview-addressTop">

            <h3>Adyasa Barik</h3>

            <span>DEFAULT</span>

          </div>

          <div className="AccOverview-address">

            <FiMapPin />

            <div>

              <p>Malhasahi,mangalabag,cuttack, jhb</p>

              <p>Cuttack, India 753001</p>

              <p>54565546422</p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AccOverview;