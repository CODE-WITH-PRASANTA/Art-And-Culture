// PoojaDetailsHome.jsx

import React, { useState } from "react";
import "./PoojaDetailsHome.css";

import pooja1 from "../../assets/poojaph1.webp";
import pooja2 from "../../assets/poojaph2.webp";
import pooja3 from "../../assets/poojaph3.webp";
import pooja4 from "../../assets/poojaph4.webp";

import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const PoojaDetailsHome = () => {
  const images = [
    pooja1,
    pooja2,
    pooja3,
    pooja4,
  ];

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const activeImage = images[currentIndex];

  // NEXT IMAGE
  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1
        ? 0
        : prev + 1
    );
  };

  // PREVIOUS IMAGE
  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0
        ? images.length - 1
        : prev - 1
    );
  };

  return (
    <section className="poojaDetailsHome">
      <div className="poojaDetailsHome__container">

        {/* LEFT SIDE */}
        <div className="poojaDetailsHome__gallery">

          <div className="poojaDetailsHome__mainImageWrapper">

            {/* LEFT BUTTON */}
            <button
              className="poojaDetailsHome__arrow poojaDetailsHome__leftArrow"
              onClick={prevImage}
            >
              <FaChevronLeft />
            </button>

            {/* IMAGE */}
            <img
              src={activeImage}
              alt="pooja"
              className="poojaDetailsHome__mainImage"
            />

            {/* RIGHT BUTTON */}
            <button
              className="poojaDetailsHome__arrow poojaDetailsHome__rightArrow"
              onClick={nextImage}
            >
              <FaChevronRight />
            </button>
          </div>

          {/* THUMBNAILS */}
          <div className="poojaDetailsHome__thumbWrapper">
            {images.map((img, index) => (
              <div
                key={index}
                className={`poojaDetailsHome__thumbBox ${
                  currentIndex === index
                    ? "poojaDetailsHome__thumbActive"
                    : ""
                }`}
                onClick={() =>
                  setCurrentIndex(index)
                }
              >
                <img
                  src={img}
                  alt="thumbnail"
                  className="poojaDetailsHome__thumbImage"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PoojaDetailsHome;