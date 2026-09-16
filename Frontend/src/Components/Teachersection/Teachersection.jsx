import React from "react";
import "./Teachersection.css";

import bgPattern from "../../assets/Artall background.webp";

const videos = [
  "ScMzIvxBSi4",
  "ysz5S6PUM-U",
  "aqz-KE-bpKQ",
  "M7lc1UVf-VE",
];

const Teachersection = () => {
  return (
    <section 
      className="teacherSection"
      style={{ backgroundImage: `url(${bgPattern})` }}
    >
      <div className="teacherSection__overlay-tint"></div>

      <div className="teacherSection__innerWrapper">
        {/* TOP QUOTE */}
        <div className="teacherSection__quoteWrapper">
          <span className="teacherSection__quoteIcon teacherSection__quoteIcon--left">
            “
          </span>

          <h3 className="teacherSection__quote">
            What surrounds us shapes us, not by what it is, <br />
            but by what it makes us feel.
          </h3>

          <span className="teacherSection__quoteIcon teacherSection__quoteIcon--right">
            ”
          </span>
        </div>

        {/* CONTENT */}
        <div className="teacherSection__container">
          <span className="teacherSection__tag">OUR STORY</span>

          <h2 className="teacherSection__title">
            Experience Our Journey
          </h2>

          <p className="teacherSection__description">
            Every detail tells a story of craftsmanship, emotion, and timeless elegance. Discover the inspiration behind our philosophy and how we create experiences that transform spaces into meaningful environments.
          </p>

          {/* VIDEOS */}
          <div className="teacherSection__videoGrid">
            {videos.map((video, index) => (
              <div className="teacherSection__videoWrapper" key={index}>
                <iframe
                  className="teacherSection__video"
                  src={`https://www.youtube.com/embed/${video}`}
                  title={`Video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teachersection;