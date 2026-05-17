// PoojaDetailsHome.jsx

import React, {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "react-router-dom";

import "./PoojaDetailsHome.css";

import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import API, {
  IMG_URL,
} from "../../api/axios";

const PoojaDetailsHome = () => {
  const { id } = useParams();

  const [product, setProduct] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [currentIndex, setCurrentIndex] =
    useState(0);

  /* =====================================================
     FETCH PRODUCT
  ===================================================== */

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const res = await API.get(
        `/pooja/${id}`
      );

      if (res.data.success) {
        setProduct(res.data.data);
      }
    } catch (error) {
      console.log(
        "FETCH ERROR :",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  /* =====================================================
     LOADING
  ===================================================== */

  if (loading) {
    return (
      <div className="poojaDetailsHome__loading">
        Loading...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="poojaDetailsHome__loading">
        Product Not Found
      </div>
    );
  }

  /* =====================================================
     IMAGES
  ===================================================== */

  const images =
    product.images?.map(
      (img) => `${IMG_URL}${img}`
    ) || [];

  const activeImage =
    images[currentIndex];

  /* =====================================================
     NEXT IMAGE
  ===================================================== */

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1
        ? 0
        : prev + 1
    );
  };

  /* =====================================================
     PREVIOUS IMAGE
  ===================================================== */

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
        {/* =====================================================
            LEFT SIDE
        ===================================================== */}

        <div className="poojaDetailsHome__gallery">
          <div className="poojaDetailsHome__mainImageWrapper">
            {/* LEFT BUTTON */}

            {images.length > 1 && (
              <button
                className="poojaDetailsHome__arrow poojaDetailsHome__leftArrow"
                onClick={prevImage}
              >
                <FaChevronLeft />
              </button>
            )}

            {/* IMAGE */}

            <img
              src={activeImage}
              alt={product.title}
              className="poojaDetailsHome__mainImage"
            />

            {/* RIGHT BUTTON */}

            {images.length > 1 && (
              <button
                className="poojaDetailsHome__arrow poojaDetailsHome__rightArrow"
                onClick={nextImage}
              >
                <FaChevronRight />
              </button>
            )}

            {/* DOTS */}

            {images.length > 1 && (
              <div className="poojaDetailsHome__dots">
                {images.map(
                  (_, index) => (
                    <button
                      key={index}
                      className={`poojaDetailsHome__dot ${
                        currentIndex ===
                        index
                          ? "active"
                          : ""
                      }`}
                      onClick={() =>
                        setCurrentIndex(
                          index
                        )
                      }
                    />
                  )
                )}
              </div>
            )}
          </div>

          {/* =====================================================
              THUMBNAILS
          ===================================================== */}

          <div className="poojaDetailsHome__thumbWrapper">
            {images.map(
              (img, index) => (
                <div
                  key={index}
                  className={`poojaDetailsHome__thumbBox ${
                    currentIndex ===
                    index
                      ? "poojaDetailsHome__thumbActive"
                      : ""
                  }`}
                  onClick={() =>
                    setCurrentIndex(
                      index
                    )
                  }
                >
                  <img
                    src={img}
                    alt="thumbnail"
                    className="poojaDetailsHome__thumbImage"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoojaDetailsHome;