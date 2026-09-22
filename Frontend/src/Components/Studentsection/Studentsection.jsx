import React from "react";
import "./Studentsection.css";

import philosophyImage from "../../assets/Philosphy.webp";
import bgPattern from "../../assets/Artall background.webp";

const Studentsection = () => {
  return (
    <section 
      className="studentSection"
      style={{ backgroundImage: `url(${bgPattern})` }}
    >
      <div className="studentSection__overlay-tint"></div>

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

          <div className="studentSection__tag-wrapper">
            <span className="studentSection__tag">
              OUR PHILOSOPHY
            </span>
          </div>

          <h2 className="studentSection__title">
            Crafted Through <br />
            Art, Culture & Timeless Elegance
          </h2>

          <p className="studentSection__description">
            We believe that true luxury is more than exceptional design—it is the harmony of art, culture, heritage. Every piece we create reflects a commitment to preserving traditional artistry while embracing modern sophistication.
          </p>

          <p className="studentSection__description">
            Our philosophy is rooted in creating products that tell stories, preserve traditions, and inspire positive living, designed to enrich your surroundings with warmth and authenticity.
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