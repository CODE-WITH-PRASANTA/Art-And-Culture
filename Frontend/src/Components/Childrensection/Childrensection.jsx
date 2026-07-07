// Childrensection.jsx

import React from "react";
import "./Childrensection.css";

import aboutImage from "../../assets/About1.webp";

const Childrensection = () => {
  return (
    <section className="childrenSection">
      <div className="childrenSection__container">

        {/* =========================
            LEFT CONTENT
        ========================= */}

        <div className="childrenSection__content">

          <span className="childrenSection__tag">
            OUR STORY
          </span>

          <h1 className="childrenSection__title">
            Where Art, Culture & Purpose Come Together
          </h1>

          <p className="childrenSection__description">
           Every meaningful creation begins with a story. Ours began with a simple belief—that art should inspire, culture should be preserved, and every handcrafted piece should carry a deeper purpose.
           Founded in 2022, our journey started with a vision to transform everyday décor and gifting into timeless expressions of heritage, craftsmanship, and positive energy. Inspired by India's rich artistic traditions and cultural legacy, we carefully design and curate products that celebrate creativity while adding elegance and meaning to modern living spaces.
          </p>

          <p className="childrenSection__description">
            Our mission is to bring together art, culture, sustainability, and craftsmanship to create products that enrich homes, strengthen relationships, and preserve the beauty of handmade traditions for generations to come.
          </p>

          <button className="childrenSection__button">
            Explore More
          </button>

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

            {/* Overlay */}
            <div className="childrenSection__overlay"></div>

            {/* Floating Glass Card */}
            <div className="childrenSection__floatingCard">

              <h4>
                Premium Decor
              </h4>

              <p>
                Crafted with elegance,
                luxury & positive energy
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Childrensection;