import React from 'react';
import './OrderCompleted.css';
import successImg from '../../assets/success-img.webp';

const OrderCompleted = () => {
  return (
    <main className="oc-root" role="main" aria-labelledby="oc-title">
      <div className="oc-card" role="region" aria-label="Order completed card">
        <figure className="oc-illustration" aria-hidden="true">
          <img src={successImg} alt="Celebration trophy illustration" />
        </figure>

        <h1 id="oc-title" className="oc-title">Your Order Is Completed !</h1>

        <p className="oc-sub">
          You will receive an order confirmation email with details of your order.
        </p>

        <div className="oc-order-id" aria-live="polite">
          Order ID:&nbsp;
          <span className="oc-order-id-value">267676GHERT105467</span>
        </div>

        <div className="oc-cta-row">
          <button
            type="button"
            className="oc-btn oc-btn-primary"
            aria-label="View Order"
            onClick={() => { /* navigate to order details */ }}
          >
            <span className="oc-btn-text">View Order</span>
            <svg
              className="oc-icon"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            type="button"
            className="oc-btn oc-btn-secondary"
            aria-label="Back to Home"
            onClick={() => { /* navigate to home */ }}
          >
            <span className="oc-btn-text">Back To Home</span>
            <svg
              className="oc-icon"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M3 11.5L12 4l9 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 22V13.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
};

export default OrderCompleted;
