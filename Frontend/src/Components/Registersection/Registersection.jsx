import React from "react";
import "./Registersection.css";

export default function HeroPromotion({ onCTAClick }) {
  return (
    <section className="hp-hero" aria-labelledby="hp-heading">
      <div className="hp-inner">
        <div className="hp-left">
          <div className="hp-sub">LEARNING BY CONNECTING PRACTICE</div>
          <h1 id="hp-heading" className="hp-title">
            Promoting High Quality Learning
            <br />
            Of Young Children
          </h1>
        </div>

        <div className="hp-right">
          <button
            className="hp-cta"
            onClick={onCTAClick}
            aria-label="Start Registration"
          >
            Start Registration
          </button>
        </div>
      </div>
    </section>
  );
}
