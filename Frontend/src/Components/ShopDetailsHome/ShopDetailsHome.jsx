// ShopDetailsHome.jsx

import React, { useState } from "react";
import "./ShopDetailsHome.css";

import pooja1 from "../../assets/poojaph1.webp";
import pooja2 from "../../assets/poojaph2.webp";
import pooja3 from "../../assets/poojaph3.webp";
import pooja4 from "../../assets/poojaph4.webp";

import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const ShopDetailsHome = () => {
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
    <section className="ShopDetailsHome">
      <div className="shopdetailshome-container">

        {/* LEFT SIDE */}
        <div className="shopdetailshome-gallery">

          <div className="shopdetailshome-mainimagewrapper">

            {/* LEFT BUTTON */}
            <button
              className="shopdetailshome-arrow shopdetailshome-leftarrow"
              onClick={prevImage}
            >
              <FaChevronLeft />
            </button>

            {/* IMAGE */}
            <img
              src={activeImage}
              alt="product"
              className="shopdetailshome-mainimage"
            />

            {/* RIGHT BUTTON */}
            <button
              className="shopdetailshome-arrow shopdetailshome-rightarrow"
              onClick={nextImage}
            >
              <FaChevronRight />
            </button>
          </div>

          {/* THUMBNAILS */}
          <div className="shopdetailshome-thumbwrapper">
            {images.map((img, index) => (
              <div
                key={index}
                className={`shopdetailshome-thumbbox ${
                  currentIndex === index
                    ? "shopdetailshome-thumbactive"
                    : ""
                }`}
                onClick={() =>
                  setCurrentIndex(index)
                }
              >
                <img
                  src={img}
                  alt="thumbnail"
                  className="shopdetailshome-thumbimage"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ShopDetailsHome;