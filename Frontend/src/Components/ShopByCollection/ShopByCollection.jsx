import React, { useState, useEffect } from "react";
import goldSilver from "../../assets/Lord-Tirupati-Balaji-Venkateswara-24-Karat-Gold-Silver-Plated-Idol.webp";
import antiqueRustic from "../../assets/Lord_Vishnu.webp";
import pureBrass from "../../assets/Brass-Lord-Shiva-Meditating.webp";
import premiumCollection from "../../assets/Shiv-Parvati.webp";
import animals from "../../assets/animals.webp";
import carDashboard from "../../assets/Lord-Hanuman.webp";

import "./ShopByCollection.css";

const collections = [
  { img: goldSilver, label: "24 K GOLD & SILVER PLATED" },
  { img: antiqueRustic, label: "ANTIQUE/RUSTIC" },
  { img: pureBrass, label: "PURE BRASS" },
  { img: premiumCollection, label: "PREMIUM COLLECTION" },
  { img: animals, label: "ANIMALS" },
  { img: carDashboard, label: "CAR DASHBOARD" },
];

const isTouchDevice = () =>
  typeof window !== "undefined" &&
  ("ontouchstart" in window || navigator.maxTouchPoints > 0);

const ShopByCollection = () => {
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
    <section className="shopbycollection-root shopbycollection-section" aria-labelledby="shopbycollection-heading">
      <div className="shopbycollection-inner">
        <div className="shopbycollection-heading-wrap">
          <h2 id="shopbycollection-heading" className="shopbycollection-heading">
            Shop by
            <br />
            Collection
          </h2>
          <p className="shopbycollection-sub">Curated selections — new, premium, and timeless.</p>
        </div>

        <div className="shopbycollection-cards" role="list" aria-label="Collections">
          {collections.map(({ img, label }, i) => {
            const isFlipped = flipped === i;
            return (
              <div
                key={label}
                role="button"
                tabIndex={0}
                aria-pressed={isFlipped}
                aria-label={`Open collection ${label}`}
                className={`shopbycollection-card ${isFlipped ? "is-flipped" : ""}`}
                onClick={() => {
                  if (touch) {
                    toggleFlip(i);
                  } else {
                    console.log("Open collection:", label);
                  }
                }}
                onKeyDown={(e) => onKey(e, i)}
                style={{ ["--delay"]: `${i * 80}ms` }}
              >
                <div className="shopbycollection-card-face shopbycollection-card-front">
                  <div className="shopbycollection-img-wrap">
                    <img src={img} alt={label} className="shopbycollection-image" />
                    <div className="shopbycollection-badge">New</div>
                    <div className="shopbycollection-hover-icon" aria-hidden>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M8 9l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>

                  <div className="shopbycollection-front-meta">
                    <div className="shopbycollection-title">{label}</div>
                  </div>
                </div>

                <div className="shopbycollection-card-face shopbycollection-card-back" aria-hidden={!isFlipped}>
                  <div className="shopbycollection-back-inner">
                    <h3 className="shopbycollection-back-title">{label}</h3>
                    <p className="shopbycollection-back-desc">Explore handpicked pieces and artisan-curated collections.</p>
                    <div className="shopbycollection-back-actions">
                      <button
                        className="shopbycollection-btn"
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

export default ShopByCollection;
