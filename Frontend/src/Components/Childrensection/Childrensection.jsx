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
            A Vision Born from Purpose
          </h1>

          <p className="childrenSection__description">
            In August 2022, Ajinkya & Saiyam embarked on a
            journey to redefine what meaningful objects
            could be. Tired of seeing gifts and decor that
            felt empty of purpose, they envisioned
            Svastika—a brand that would create pieces
            carrying genuine positive energy and
            intention.
          </p>

          <p className="childrenSection__description">
            Our vision is simple yet profound: to create a
            world where every object carries meaning,
            every purchase creates impact, and every
            space resonates with positive energy.
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