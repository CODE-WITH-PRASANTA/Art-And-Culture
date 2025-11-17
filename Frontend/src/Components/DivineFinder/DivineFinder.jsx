import React, { useState } from "react";
import { FiLayers, FiChevronDown, FiArrowRight } from "react-icons/fi";
import Hero from "../../assets/hero-banner.webp";
import "./DivineFinder.css";

const DivineFinder = () => {
  const [deityOpen, setDeityOpen] = useState(false);
  const [typeOpen, setTypeOpen] = useState(false);

  const [selectedDeity, setSelectedDeity] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const deities = [
    "Vishnu",
    "Vishnu Lakshmi",
    "Shiva",
    "Ganesha",
    "Ganesha Lakshmi",
    "Krishna",
    "Radha Krishna",
    "Hanuman",
    "Balaji",
    "Maa Durga",
    "Maa Lakshmi",
    "Saibaba",
    "Jagannath",
    "Buddha"
  ];

  const types = [
    "For Home Decor",
    "For Pooja",
    "For Wall Decor",
    "For Gifting"
  ];

  return (
    <section className="df-hero-section">

      {/* HERO */}
      <div className="df-hero-image-wrap">
        <img src={Hero} alt="hero banner" className="df-hero-image" />

        <div className="df-hero-overlay">
          <div className="df-hero-label">SACRED TREASURES</div>

          <h1 className="df-hero-title">
            Find divine pieces that bring spiritual essence to your space.
          </h1>
        </div>
      </div>

      {/* FINDER */}
      <div className="df-finder-wrapper">
        <div className="df-card">

          {/* LEFT TITLE / ICON */}
          <div className="df-card-left">
            <div className="df-icon" aria-hidden>
              <FiLayers size={22} />
            </div>
            <div className="df-card-title">DIVINE FINDER</div>
          </div>

          {/* FORM */}
          <form className="df-form" onSubmit={(e) => e.preventDefault()}>

            {/* LEFT DROPDOWN — SELECT DEITY */}
            <div className="df-field">
              <div className="df-select">

                <input
                  className="df-input"
                  readOnly
                  placeholder="Select Deity Ganesha, Krishna etc."
                  value={selectedDeity}
                  onClick={() => {
                    setDeityOpen((s) => !s);
                    setTypeOpen(false);
                  }}
                  aria-expanded={deityOpen}
                  aria-haspopup="listbox"
                />

                <button
                  type="button"
                  className="df-chevron"
                  onClick={() => {
                    setDeityOpen((s) => !s);
                    setTypeOpen(false);
                  }}
                  aria-label="Toggle deity dropdown"
                >
                  <FiChevronDown size={18} />
                </button>

                {deityOpen && (
                  <ul className="df-dropdown" role="listbox" tabIndex={-1}>
                    {deities.map((item) => (
                      <li
                        key={item}
                        onClick={() => {
                          setSelectedDeity(item);
                          setDeityOpen(false);
                        }}
                        className={item === selectedDeity ? "selected" : ""}
                        role="option"
                        aria-selected={item === selectedDeity}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* RIGHT DROPDOWN — TYPE */}
            <div className="df-field">
              <div className="df-select">

                <input
                  className="df-input"
                  readOnly
                  placeholder="Type For Pooja"
                  value={selectedType}
                  onClick={() => {
                    setTypeOpen((s) => !s);
                    setDeityOpen(false);
                  }}
                  aria-expanded={typeOpen}
                  aria-haspopup="listbox"
                />

                <button
                  type="button"
                  className="df-chevron"
                  onClick={() => {
                    setTypeOpen((s) => !s);
                    setDeityOpen(false);
                  }}
                  aria-label="Toggle type dropdown"
                >
                  <FiChevronDown size={18} />
                </button>

                {typeOpen && (
                  <ul className="df-dropdown" role="listbox" tabIndex={-1}>
                    {types.map((item) => (
                      <li
                        key={item}
                        onClick={() => {
                          setSelectedType(item);
                          setTypeOpen(false);
                        }}
                        className={item === selectedType ? "selected" : ""}
                        role="option"
                        aria-selected={item === selectedType}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* CTA BUTTON */}
            <div className="df-actions">
              <button
                className="df-cta"
                aria-label="Find divine gifts"
                onClick={() => {
                  // you can hook this to search/navigation
                  console.log("Searching: ", selectedDeity, selectedType);
                }}
              >
                FIND DIVINE GIFTS <span className="df-cta-arrow"><FiArrowRight /></span>
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default DivineFinder;
