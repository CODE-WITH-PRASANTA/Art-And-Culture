import React from "react";
import "./BestsellersBreadcrum.css";
import aboutImg from "../../assets/art-7.webp";

const AboutBreadCrum = () => {
  return (
    <div className="bestsellers-wrapper">

      {/* HERO SECTION */}
      <section
        className="bestsellers-hero-section"
        style={{ backgroundImage: `url(${aboutImg})` }}
      >
       <div className="bestsellers-left">
          <h1>
            Best Sellers <br />
            <span>Best-Selling Indian Art, Handicrafts & Cultural Creations</span>
          </h1>
          <p className="bestsellers-subtitle">
            Discover our most-loved collection of authentic Indian handicrafts, temple art, divine statues, Lipan Art, and essential pooja items. Each bestseller is crafted by skilled Indian artists, reflecting India’s rich cultural heritage and meaningful idol-making traditions. Explore timeless pieces that bring beauty, devotion, and artistry to your home or sacred space.
          </p>
        </div>

      </section>

      {/* BREADCRUMB */}
      <div className="breadcrumb-wrapper">
        <div className="breadcrumb-box">
          <span>Home</span>
          <span className="dash">-</span>
          <span className="active">Best Sellers</span>
        </div>
      </div>

    </div>
  );
};

export default AboutBreadCrum;
