import React from "react";
import "./BlogBreadCrum.css";
import aboutImg from "../../assets/blog banner.webp";

const AboutBreadCrum = () => {
  return (
    <div className="blog-wrapper">

      {/* HERO SECTION */}
      <section
        className="blog-hero-section"
        style={{ backgroundImage: `url(${aboutImg})` }}
      >
       <div className="blog-left">
          <h1>
            Blog <br />
            <span>Indian Art, Culture & Handicraft Insights</span>
          </h1>
          <p className="blog-subtitle">
            Welcome to the Art & Culture Hub Blog, where you’ll explore authentic Indian handicrafts, temple art, divine statues, Lipan Art, and essential pooja items. Our stories highlight skilled Indian artists, cultural heritage, and meaningful idol selections—bringing you closer to the traditions and craftsmanship that define India’s artistic legacy.
          </p>
        </div>

      </section>

      {/* BREADCRUMB */}
      <div className="breadcrumb-wrapper">
        <div className="breadcrumb-box">
          <span>Home</span>
          <span className="dash">-</span>
          <span className="active">Blog</span>
        </div>
      </div>

    </div>
  );
};

export default AboutBreadCrum;
