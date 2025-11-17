import React, { useState, useEffect } from "react";
import antiqueRustic from "../../assets/Lord_Vishnu.webp";
import pureBrass from "../../assets/Brass-Lord-Shiva-Meditating.webp";
import premiumCollection from "../../assets/Shiv-Parvati.webp";
import animals from "../../assets/animals.webp";
import carDashboard from "../../assets/Lord-Hanuman.webp";

import "./ShopByPurpose.css";

const items = [
  { img: antiqueRustic, label: "FOR POOJA" },
  { img: pureBrass, label: "FOR TABLE DECOR" },
  { img: premiumCollection, label: "FOR WALL DECOR" },
  { img: animals, label: "FOR GIFTING" },
  { img: carDashboard, label: "HOME ASCENTS" },
];

const isTouchDevice = () =>
  typeof window !== "undefined" &&
  ("ontouchstart" in window || navigator.maxTouchPoints > 0);

const ShopByPurpose = () => {
  const [flipped, setFlipped] = useState(null);
  const [touch, setTouch] = useState(false);

  useEffect(() => {
    setTouch(isTouchDevice());
  }, []);

  const toggleFlip = (index) => {
    setFlipped((prev) => (prev === index ? null : index));
  };

  const onKey = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFlip(index);
    }
  };

  return (
    <section
      className="shopbypurpose-root shopbypurpose-section"
      aria-labelledby="shopbypurpose-heading"
    >
      <div className="shopbypurpose-inner">
        <div className="shopbypurpose-heading-wrap">
          <h2 id="shopbypurpose-heading" className="shopbypurpose-heading">
            Shop by
            <br />
            Purpose
          </h2>
          <p className="shopbypurpose-sub">
            Curated selections — new, premium, and timeless.
          </p>
        </div>

        <div
          className="shopbypurpose-cards"
          role="list"
          aria-label="Purpose categories"
        >
          {items.map(({ img, label }, i) => {
            const isFlipped = flipped === i;
            return (
              <div
                key={label}
                role="button"
                tabIndex={0}
                aria-pressed={isFlipped}
                aria-label={`Open purpose ${label}`}
                className={`shopbypurpose-card ${
                  isFlipped ? "is-flipped" : ""
                }`}
                onClick={() => {
                  if (touch) {
                    toggleFlip(i);
                  } else {
                    console.log("Open:", label);
                  }
                }}
                onKeyDown={(e) => onKey(e, i)}
                style={{ ["--delay"]: `${i * 80}ms` }}
              >
                <div className="shopbypurpose-card-face shopbypurpose-card-front">
                  <div className="shopbypurpose-img-wrap">
                    <img
                      src={img}
                      alt={label}
                      className="shopbypurpose-image"
                    />

                    <div className="shopbypurpose-badge">New</div>

                    <div className="shopbypurpose-hover-icon" aria-hidden>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d="M8 9l4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="shopbypurpose-front-meta">
                    <div className="shopbypurpose-title">{label}</div>
                  </div>
                </div>

                <div
                  className="shopbypurpose-card-face shopbypurpose-card-back"
                  aria-hidden={!isFlipped}
                >
                  <div className="shopbypurpose-back-inner">
                    <h3 className="shopbypurpose-back-title">{label}</h3>
                    <p className="shopbypurpose-back-desc">
                      Explore handpicked pieces and artisan-curated collections.
                    </p>

                    <div className="shopbypurpose-back-actions">
                      <button
                        className="shopbypurpose-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          console.log("Explore clicked:", label);
                        }}
                      >
                        Explore
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ShopByPurpose;
