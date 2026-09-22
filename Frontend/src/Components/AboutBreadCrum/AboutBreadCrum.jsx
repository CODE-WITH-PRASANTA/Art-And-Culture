import React from "react";
import "./AboutBreadCrum.css";
import aboutImg from "../../assets/art-1.webp";

const AboutBreadCrum = () => {
  return (
    <div className="about-wrapper">

      {/* HERO SECTION */}
      <section
        className="about-hero-section"
        style={{ backgroundImage: `url(${aboutImg})` }}
      >
        <div className="about-left">
          <h1>
            About <br />
            <span>Art &amp; Culture Hub</span>
          </h1>
          <p className="about-subtitle">
            India's No.1 Destination for Authentic Idols, Lipan Art Wall Decor,
            Pooja Essentials &amp; Handcrafted Home Decor. We Bring Traditional
            Artistry to Your Home with Premium Temple Art, Divine God Statues
            &amp; Culturally Inspired Designs Crafted by Skilled Indian Artists.
          </p>
        </div>
      </section>

    </div>
  );
};

export default AboutBreadCrum;