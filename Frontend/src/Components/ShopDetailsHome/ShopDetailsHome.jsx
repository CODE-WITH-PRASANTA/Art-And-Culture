import React, { useState } from "react";
import "./ShopDetailsHome.css";

import { FaChevronLeft, FaChevronRight, FaSearchPlus } from "react-icons/fa";

import Murti1 from "../../assets/Murti1.webp";
import Murti2 from "../../assets/Murti2.webp";
import Murti3 from "../../assets/Murti3.webp";
import Murti4 from "../../assets/Murti4.webp";
import Murti5 from "../../assets/Murti5.webp";

const ShopDetailsHome = () => {
  const images = [Murti1, Murti2, Murti3, Murti4, Murti5];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section className="shopDetailsHome">
      <div className="shopDetailsHome__gallery">

        {/* Main Image */}

        <div className="shopDetailsHome__mainImageWrapper">
          <img
            src={images[currentImage]}
            alt="Product"
            className="shopDetailsHome__mainImage"
          />

          {/* Zoom Icon */}

          <button className="shopDetailsHome__zoomBtn">
            <FaSearchPlus />
          </button>

          {/* Prev Button */}

          <button
            className="shopDetailsHome__navBtn shopDetailsHome__prevBtn"
            onClick={prevImage}
          >
            <FaChevronLeft />
          </button>

          {/* Next Button */}

          <button
            className="shopDetailsHome__navBtn shopDetailsHome__nextBtn"
            onClick={nextImage}
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Thumbnail Gallery */}

        <div className="shopDetailsHome__thumbnailContainer">
          {images.map((img, index) => (
            <div
              key={index}
              className={`shopDetailsHome__thumbnailBox ${
                currentImage === index
                  ? "shopDetailsHome__thumbnailBox--active"
                  : ""
              }`}
              onClick={() => setCurrentImage(index)}
            >
              <img
                src={img}
                alt={`Thumbnail ${index}`}
                className="shopDetailsHome__thumbnail"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopDetailsHome;