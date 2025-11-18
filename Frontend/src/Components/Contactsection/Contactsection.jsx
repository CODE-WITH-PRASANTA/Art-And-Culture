import React from "react";
import "./Contactsection.css";


export default function AboutUs() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-left">
          <h1>Contact Us</h1>
          <p className="subtitle">
            Montessori Is A Nurturing And Holistic Approach To Learning
          </p>
        </div>
        
      </section>

      {/* Breadcrumb */}
      <div className="breadcrumb-section">
        <div className="breadcrumb-box">
          <span>Home</span>
          <span className="dash">-</span>
          <span className="active">Contact Us</span>
        </div>
      </div>
    </div>
  );
}
