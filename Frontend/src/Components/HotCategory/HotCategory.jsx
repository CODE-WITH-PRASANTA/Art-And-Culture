import React, { useState } from "react";
import "./HotCategory.css";

import {
  FiImage,
  FiX,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

// =================== IMPORT IMAGES ===================
import drawing from "../../assets/category1.webp";
import abstract from "../../assets/category2.webp";
import modern from "../../assets/category3.webp";
import colorful from "../../assets/category4.webp";
import blackwhite from "../../assets/category5.webp";
import plants from "../../assets/category6.webp";

// =================== DATA ===================
const categoryData = [
  {
    title: "Drawing",
    image: drawing,
  },
  {
    title: "Abstract",
    image: abstract,
  },
  {
    title: "Modern",
    image: modern,
  },
  {
    title: "Colorful Walls",
    image: colorful,
  },
  {
    title: "Black & White",
    image: blackwhite,
  },
  {
    title: "Plants",
    image: plants,
  },
];

const HotCategory = () => {
  const [currentImage, setCurrentImage] = useState(null);

  // Open Image
  const openImage = (index) => {
    setCurrentImage(index);
  };

  // Close Image
  const closeImage = () => {
    setCurrentImage(null);
  };

  // Next Image
  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === categoryData.length - 1 ? 0 : prev + 1
    );
  };

  // Previous Image
  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? categoryData.length - 1 : prev - 1
    );
  };

  return (
    <>
      <section className="HotCategory">
        <div className="HotCategory-container">
          {categoryData.map((item, index) => (
            <div
              className="HotCategory-card"
              key={index}
              onClick={() => openImage(index)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="HotCategory-image"
              />

              <div className="HotCategory-overlay">
                <div className="HotCategory-titleBox">
                  <FiImage className="HotCategory-titleIcon" />
                  <span>{item.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= LIGHTBOX ================= */}

      {currentImage !== null && (
        <div className="HotCategory-lightbox">
          <button
            className="HotCategory-close"
            onClick={closeImage}
          >
            <FiX />
          </button>

          <button
            className="HotCategory-prev"
            onClick={prevImage}
          >
            <FiChevronLeft />
          </button>

          <img
            src={categoryData[currentImage].image}
            alt=""
            className="HotCategory-lightboxImage"
          />

          <button
            className="HotCategory-next"
            onClick={nextImage}
          >
            <FiChevronRight />
          </button>

          <div className="HotCategory-counter">
            {currentImage + 1} / {categoryData.length}
          </div>

          <div className="HotCategory-lightboxTitle">
            {categoryData[currentImage].title}
          </div>
        </div>
      )}
    </>
  );
};

export default HotCategory;