import React, { useState } from "react";
import "./LoginForm.css";
import { FaStar } from "react-icons/fa";

const LoginForm = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="hub-page-wrapper">
      <div className="hub-main-container">
        
        {/* RIGHT SECTION: LOGIN/SIGNUP (STAYS TOP IN MOBILE) */}
        <div className="hub-form-section">
          <div className="hub-form-box">
            <h2>{isSignup ? "Create Account" : "Login"}</h2>
            
            <div className="hub-input-group">
              
              <input type="text" placeholder="Email ID / Mobile Number" />
              
              {isSignup ? (
                <>
                  <input type="password" placeholder="New Password" />
                  <input type="password" placeholder="Confirm Password" />
                </>
              ) : (
                <input type="password" placeholder="Enter Password" />
              )}
            </div>

            <div className="hub-checkboxes">
              <label>
                <input type="checkbox" /> Notify me for updates & offers
              </label>
              <label>
                <input type="checkbox" /> I accept Terms & Conditions
              </label>
            </div>

            <button className="hub-login-btn">
              {isSignup ? "Register" : "Login"}
            </button>

            <span className="hub-toggle-link" onClick={() => setIsSignup(!isSignup)}>
              {isSignup ? "back to login" : "signup"}
            </span>
          </div>
        </div>

        {/* LEFT SECTION: CONTENT & CARDS */}
        <div className="hub-content-section">
          <div className="hub-header">
            <h1>The Art & Culture Hub</h1>
            <p>Unlock features, profile and much more</p>
          </div>

          <div className="hub-cards-container">
            <div className="hub-card">
              <FaStar className="hub-icon" />
              <h3>Easy Returns</h3>
              <p>Enjoy hassle-free returns and quick support whenever needed.</p>
            </div>
            <div className="hub-card">
              <FaStar className="hub-icon" />
              <h3>Fast Delivery</h3>
              <p>Get your orders delivered quickly with reliable service.</p>
            </div>
            <div className="hub-card">
              <FaStar className="hub-icon" />
              <h3>Secure Access</h3>
              <p>Login securely and manage your account with ease.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginForm;
