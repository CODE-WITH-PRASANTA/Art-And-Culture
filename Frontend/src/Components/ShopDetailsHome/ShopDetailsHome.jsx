import React, { useState } from "react";
import { BASE_URL } from "../../api/axios";
import {
  FaChevronLeft,
  FaChevronRight,
  FaSearchPlus,
} from "react-icons/fa";
import "./ShopDetailsHome.css";

const ShopDetailsHome = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(0);

  // Fallback UI if product data hasn't arrived from parent yet
  if (!product) {
    return (
      <div className="shopDetailsHome__loading">
        Loading Product...
      </div>
    );
  }

  // Image URL configuration setup
  const images =
    product.images?.length > 0
      ? product.images.map(
          (img) => `${BASE_URL}/uploads/shopview/${img}`
        )
      : ["/no-image.png"];

  const nextImage = () => {
    if (images.length <= 1) return;
    setCurrentImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (images.length <= 1) return;
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section className="shopDetailsHome">
      <div className="shopDetailsHome__gallery">
        
        {/* ================= MAIN IMAGE ================= */}
        <div className="shopDetailsHome__mainImageWrapper">
          <img
            src={images[currentImage]}
            alt={product.productTitle}
            className="shopDetailsHome__mainImage"
            onError={(e) => {
              e.target.src = "/no-image.png";
            }}
          />

          <button className="shopDetailsHome__zoomBtn">
            <FaSearchPlus />
          </button>

          {images.length > 1 && (
            <>
              <button
                className="shopDetailsHome__navBtn shopDetailsHome__prevBtn"
                onClick={prevImage}
              >
                <FaChevronLeft />
              </button>

              <button
                className="shopDetailsHome__navBtn shopDetailsHome__nextBtn"
                onClick={nextImage}
              >
                <FaChevronRight />
              </button>
            </>
          )}
        </div>

        {/* ================= THUMBNAILS ================= */}
        {images.length > 1 && (
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
                  alt="thumbnail"
                  className="shopDetailsHome__thumbnail"
                  onError={(e) => {
                    e.target.src = "/no-image.png";
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ================= PRODUCT INFORMATION ================= */}
      <div className="shopDetailsHome__content">
        <h1>{product.productTitle}</h1>

        {product.description && <p>{product.description}</p>}

        {/* Using your updated key variables fields structurally */}
        {(product.newPrice || product.price) && (
          <h3>₹ {product.newPrice || product.price}</h3>
        )}
      </div>
    </section>
  );
};

export default ShopDetailsHome;