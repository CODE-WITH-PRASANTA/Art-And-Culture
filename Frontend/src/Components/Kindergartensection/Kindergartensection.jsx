import React from "react";
import "./Kindergartensection.css";

import {
  Sparkles,
  HeartHandshake,
  Hammer,
  BadgeCheck,
} from "lucide-react";

const Kindergartensection = () => {
  return (
    <section className="kindergartenSection">

      {/* TOP CONTENT */}
      <div className="kindergartenSection__top">

        <span className="kindergartenSection__tag">
          OUR VALUES
        </span>

        <h2 className="kindergartenSection__title">
          Our Commitment
        </h2>

        <p className="kindergartenSection__subtitle">
          Every creation reflects our dedication to meaningful design,
          timeless craftsmanship, and creating a positive impact.
        </p>

      </div>

      {/* CARDS */}
      <div className="kindergartenSection__grid">

        {/* CARD 1 */}
        <div className="kindergartenSection__card">

          <div className="kindergartenSection__iconWrap">
            <Sparkles className="kindergartenSection__icon" />
          </div>

          <h3 className="kindergartenSection__cardTitle">
            Positive Energy
          </h3>

          <p className="kindergartenSection__cardText">
            Creating objects that carry positivity,
            warmth, and purposeful meaning.
          </p>

        </div>

        {/* CARD 2 */}
        <div className="kindergartenSection__card">

          <div className="kindergartenSection__iconWrap">
            <HeartHandshake className="kindergartenSection__icon" />
          </div>

          <h3 className="kindergartenSection__cardTitle">
            Community Support
          </h3>

          <p className="kindergartenSection__cardText">
            Supporting communities through
            meaningful and impactful initiatives.
          </p>

        </div>

        {/* CARD 3 */}
        <div className="kindergartenSection__card">

          <div className="kindergartenSection__iconWrap">
            <Hammer className="kindergartenSection__icon" />
          </div>

          <h3 className="kindergartenSection__cardTitle">
            Craftsmanship
          </h3>

          <p className="kindergartenSection__cardText">
            Preserving and celebrating timeless
            traditional craftsmanship.
          </p>

        </div>

        {/* CARD 4 */}
        <div className="kindergartenSection__card">

          <div className="kindergartenSection__iconWrap">
            <BadgeCheck className="kindergartenSection__icon" />
          </div>

          <h3 className="kindergartenSection__cardTitle">
            Quality
          </h3>

          <p className="kindergartenSection__cardText">
            Ensuring exceptional quality and
            premium detailing in every creation.
          </p>

        </div>

      </div>

    </section>
  );
};

export default Kindergartensection;