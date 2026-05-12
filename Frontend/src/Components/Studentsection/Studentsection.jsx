import React from "react";
import "./Studentsection.css";

import philosophyImage from "../../assets/Philosphy.webp";

const Studentsection = () => {
  return (
    <section className="studentSection">
      <div className="studentSection__wrapper">

        {/* LEFT IMAGE */}
        <div className="studentSection__imageBox">
          <img
            src={philosophyImage}
            alt="Our Philosophy"
            className="studentSection__image"
          />

          <div className="studentSection__overlay"></div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="studentSection__content">

          <span className="studentSection__tag">
            OUR PHILOSOPHY
          </span>

          <h2 className="studentSection__title">
            Crafted With
            <br />
            Tradition & Elegance
          </h2>

          <p className="studentSection__description">
            The true essence of luxury lies in how it makes you feel.
            Every creation begins with thoughtful craftsmanship,
            blending timeless artistry with modern sophistication.
          </p>

          <p className="studentSection__description">
            Through meaningful design and premium detailing,
            we create experiences that radiate harmony,
            elegance, and positive energy for every space.
          </p>

          <div className="studentSection__buttonWrap">
            <button className="studentSection__button">
              Discover More
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Studentsection;