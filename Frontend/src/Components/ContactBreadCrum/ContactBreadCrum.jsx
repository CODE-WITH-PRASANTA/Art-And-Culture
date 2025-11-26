import React from "react";
import "./ContactBreadCrum.css";
import aboutImg from "../../assets/art-2.webp";

const AboutBreadCrum = () => {
  return (
    <div className="contact-wrapper">

      {/* HERO SECTION */}
      <section
        className="contact-hero-section"
        style={{ backgroundImage: `url(${aboutImg})` }}
      >
       <div className="contact-left">
          <h1>
            Contact <br />
            <span>Art & Culture Hub for Indian Art & Handicraft Assistance</span>
          </h1>
          <p className="contact-subtitle">
           Reach out to Art & Culture Hub for any queries related to authentic Indian handicrafts, temple art, divine statues, Lipan Art, and essential pooja items. We work with skilled Indian artists who preserve rich cultural heritage through handcrafted idols and traditional artwork. Contact us for product details, custom requests, or support in choosing meaningful cultural creations for your home or sacred space.
          </p>
        </div>

      </section>

      {/* BREADCRUMB */}
      <div className="breadcrumb-wrapper">
        <div className="breadcrumb-box">
          <span>Home</span>
          <span className="dash">-</span>
          <span className="active">Contact</span>
        </div>
      </div>

    </div>
  );
};

export default AboutBreadCrum;
