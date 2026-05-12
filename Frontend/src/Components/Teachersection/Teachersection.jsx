import React from "react";
import "./Teachersection.css";

const Teachersection = () => {
  return (
    <section className="teacherSection">

      {/* TOP QUOTE */}
      <div className="teacherSection__quoteWrapper">

        <span className="teacherSection__quoteIcon teacherSection__quoteIcon--left">
          “
        </span>

        <h2 className="teacherSection__quote">
          What surrounds us shapes us,
          not by what it is,
          <br />
          but by what it makes us feel.
        </h2>

        <span className="teacherSection__quoteIcon teacherSection__quoteIcon--right">
          ”
        </span>

      </div>

      {/* CONTENT */}
      <div className="teacherSection__container">

        {/* SMALL TAG */}
        <span className="teacherSection__tag">
          OUR STORY
        </span>

        {/* TITLE */}
        <h1 className="teacherSection__title">
          Experience Our Journey
        </h1>

        {/* DESCRIPTION */}
        <p className="teacherSection__description">
          Every detail tells a story of craftsmanship,
          emotion, and timeless elegance. Discover the
          inspiration behind our philosophy and how we
          create experiences that transform spaces into
          meaningful environments.
        </p>

        {/* VIDEO SECTION */}
        <div className="teacherSection__videoWrapper">

          <iframe
            className="teacherSection__video"
            src="https://www.youtube.com/embed/ScMzIvxBSi4"
            title="Luxury Story Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

        </div>

      </div>

    </section>
  );
};

export default Teachersection;