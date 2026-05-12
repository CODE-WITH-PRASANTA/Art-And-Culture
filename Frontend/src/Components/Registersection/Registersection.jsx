import React from "react";
import "./Registersection.css";

import educationImg from "../../assets/About1.webp";
import artisanImg from "../../assets/Brass.webp";
import communityImg from "../../assets/Bass2.webp";

const Registersection = () => {
  return (
    <section className="registerSection">

      {/* TOP CONTENT */}
      <div className="registerSection__top">

        <span className="registerSection__tag">
          OUR INITIATIVES
        </span>

        <h2 className="registerSection__title">
          Creating Positive Change
        </h2>

        <p className="registerSection__subtitle">
          Our impact flows beyond creating beautiful objects.
          We’re committed to making a real difference in communities
          through meaningful initiatives, sustainable practices,
          and empowering people for a better future.
        </p>

      </div>

      {/* CARDS */}
      <div className="registerSection__cards">

        {/* CARD 1 */}
        <div className="registerSection__card">

          <div className="registerSection__imageWrapper">
            <img
              src={educationImg}
              alt="Education Support"
              className="registerSection__image"
            />

            <div className="registerSection__overlay"></div>
          </div>

          <div className="registerSection__content">

            <h3 className="registerSection__cardTitle">
              Education Support
            </h3>

            <p className="registerSection__cardText">
              Supporting children’s education in rural communities
              by providing learning resources, opportunities,
              and brighter pathways for the future.
            </p>

          </div>

        </div>

        {/* CARD 2 */}
        <div className="registerSection__card">

          <div className="registerSection__imageWrapper">
            <img
              src={artisanImg}
              alt="Artisan Empowerment"
              className="registerSection__image"
            />

            <div className="registerSection__overlay"></div>
          </div>

          <div className="registerSection__content">

            <h3 className="registerSection__cardTitle">
              Artisan Empowerment
            </h3>

            <p className="registerSection__cardText">
              Preserving traditional craftsmanship by supporting
              local artisans with fair opportunities, training,
              and sustainable livelihoods.
            </p>

          </div>

        </div>

        {/* CARD 3 */}
        <div className="registerSection__card">

          <div className="registerSection__imageWrapper">
            <img
              src={communityImg}
              alt="Community Development"
              className="registerSection__image"
            />

            <div className="registerSection__overlay"></div>
          </div>

          <div className="registerSection__content">

            <h3 className="registerSection__cardTitle">
              Community Development
            </h3>

            <p className="registerSection__cardText">
              Building stronger communities through housing,
              infrastructure, and impactful initiatives that
              create long-term positive change.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Registersection;