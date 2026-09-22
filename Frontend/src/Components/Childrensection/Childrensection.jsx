import React from "react";
import "./Childrensection.css";

import aboutImage from "../../assets/About1.webp";
import bgPattern from "../../assets/Artall background.webp";

const Childrensection = () => {
  return (
    <section 
      className="childrenSection"
      style={{ backgroundImage: `url(${bgPattern})` }}
    >
      <div className="childrenSection__overlay-tint"></div>
      
      <div className="childrenSection__container">

        {/* =========================
            LEFT CONTENT
        ========================= */}
        <div className="childrenSection__content">
          <div className="childrenSection__tag-wrapper">
            <span className="childrenSection__tag">OUR STORY</span>
          </div>

          <h2 className="childrenSection__title">
            Where Art, Culture & Purpose Come Together
          </h2>

          <p className="childrenSection__description">
            Every meaningful creation begins with a story. Ours began with a simple belief—that art should inspire, culture should be preserved, and every handcrafted piece should carry a deeper purpose.
          </p>

          <p className="childrenSection__description">
            Founded in 2022, our journey started with a vision to transform everyday décor and gifting into timeless expressions of heritage, craftsmanship, and positive energy.
          </p>

          <div className="childrenSection__action">
            <button className="childrenSection__button">
              Explore More
            </button>
          </div>
        </div>

        {/* =========================
            RIGHT IMAGE SECTION
        ========================= */}
        <div className="childrenSection__imageWrapper">
          <div className="childrenSection__imageCard">
            <img
              src={aboutImage}
              alt="Luxury Interior"
              className="childrenSection__image"
            />

            <div className="childrenSection__image-overlay"></div>

            <div className="childrenSection__floatingCard">
              <h4>Premium Decor</h4>
              <p>Crafted with elegance, luxury & positive energy</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Childrensection;