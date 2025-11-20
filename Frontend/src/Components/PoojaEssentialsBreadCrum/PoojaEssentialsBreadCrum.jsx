import React from "react";
import "./PoojaEssentialsBreadCrum.css";
import aboutImg from "../../assets/poojaessential banner.webp";

const AboutBreadCrum = () => {
  return (
    <div className="poojaessentials-wrapper">

      {/* HERO SECTION */}
      <section
        className="poojaessentials-hero-section"
        style={{ backgroundImage: `url(${aboutImg})` }}
      >
       <div className="poojaessentials-left">
          <h1>
            Pooja Essentials <br />
            <span>Pooja Essentials, Indian Handicrafts & Sacred Art</span>
          </h1>
          <p className="poojaessentials-subtitle">
           Discover our curated range of pooja essentials, featuring authentic Indian handicrafts, temple art, divine statues, and handcrafted idols made by skilled Indian artists. Each piece reflects India’s rich cultural heritage, blending devotion with traditional craftsmanship. Explore sacred items and artistic creations that bring purity, beauty, and meaning to your spiritual space.
          </p>
        </div>

      </section>

      {/* BREADCRUMB */}
      <div className="breadcrumb-wrapper">
        <div className="breadcrumb-box">
          <span>Home</span>
          <span className="dash">-</span>
          <span className="active">Pooja Essentials</span>
        </div>
      </div>

    </div>
  );
};

export default AboutBreadCrum;
