import React from "react";
import "./Clubsection.css";

const Clubsection = () => {
  return (
    <section className="clubSection">

      {/* BACKGROUND GLOW */}
      <div className="clubSection__glow"></div>

      {/* CONTENT */}
      <div className="clubSection__container">

        <span className="clubSection__tag">
          DISCOVER ELEGANCE
        </span>

        <h2 className="clubSection__title">
          Join Our Story
        </h2>

        <p className="clubSection__description">
          Experience the difference of Svastika —
          where every piece carries positive energy,
          enhances your space, and helps create a more
          beautiful and meaningful world.
        </p>

        {/* BUTTON */}
        <button className="clubSection__button">
          Explore Our Collection
        </button>

      </div>

    </section>
  );
};

export default Clubsection;