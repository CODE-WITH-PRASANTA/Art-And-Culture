// ShopDetailsHome.jsx

import React, {
  useEffect,
  useState,
} from "react";

import "./ShopDetailsHome.css";

import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import API from "../../api/axios";

import { useParams } from "react-router-dom";

const ShopDetailsHome = () => {

  /* ================= PRODUCT ID ================= */

  const { id } = useParams();

  /* ================= STATES ================= */

  const [images, setImages] = useState([]);

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [loading, setLoading] =
    useState(true);

  /* ================= FETCH PRODUCT ================= */

 useEffect(() => {

  if (!id) {
    setLoading(false);
    return;
  }

  const fetchProduct = async () => {

    try {

      const res = await API.get(
        `/products/${id}`
      );

      const product =
        res.data.data;

      if (
        product &&
        product.images
      ) {

        const formattedImages =
          product.images.map(
            (img) =>
              `http://localhost:5000${img}`
          );

        setImages(formattedImages);

      }

    } catch (error) {

      console.error(
        "Failed to fetch product",
        error
      );

    } finally {

      setLoading(false);

    }
  };

  fetchProduct();

}, [id]);

  /* ================= ACTIVE IMAGE ================= */

  const activeImage =
    images[currentIndex];

  /* ================= NEXT IMAGE ================= */

  const nextImage = () => {

    setCurrentIndex((prev) =>
      prev === images.length - 1
        ? 0
        : prev + 1
    );

  };

  /* ================= PREVIOUS IMAGE ================= */

  const prevImage = () => {

    setCurrentIndex((prev) =>
      prev === 0
        ? images.length - 1
        : prev - 1
    );

  };

  /* ================= LOADING ================= */

  if (loading) {

    return (
      <div className="shopdetailshome-loading">

        Loading...

      </div>
    );

  }

  return (
    <section className="ShopDetailsHome">

      <div className="shopdetailshome-container">

        {/* ================= GALLERY ================= */}

        <div className="shopdetailshome-gallery">

          {/* ================= MAIN IMAGE ================= */}

          <div className="shopdetailshome-mainimagewrapper">

            {/* LEFT BUTTON */}

            {images.length > 1 && (

              <button
                className="shopdetailshome-arrow shopdetailshome-leftarrow"
                onClick={prevImage}
              >

                <FaChevronLeft />

              </button>
            )}

            {/* IMAGE */}

            <img
              src={
                activeImage ||
                "https://via.placeholder.com/500"
              }
              alt="product"
              className="shopdetailshome-mainimage"
            />

            {/* RIGHT BUTTON */}

            {images.length > 1 && (

              <button
                className="shopdetailshome-arrow shopdetailshome-rightarrow"
                onClick={nextImage}
              >

                <FaChevronRight />

              </button>
            )}

          </div>

          {/* ================= THUMBNAILS ================= */}

          <div className="shopdetailshome-thumbwrapper">

            {images.map(
              (img, index) => (

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
              )
            )}

          </div>

        </div>

      </div>

    </section>
  );
};

export default ShopDetailsHome;