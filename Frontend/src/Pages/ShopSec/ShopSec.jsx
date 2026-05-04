import React, { useEffect, useRef, useState } from "react";
import "./ShopSec.css";

import product1 from "../../assets/01.webp";
import product2 from "../../assets/02.webp";
import product3 from "../../assets/03.webp";
import product4 from "../../assets/05.webp";
import product5 from "../../assets/06.webp";
import product6 from "../../assets/07.webp";
import product7 from "../../assets/08.webp";
import product8 from "../../assets/01.webp";
import product9 from "../../assets/10.webp";
import product10 from "../../assets/11.webp";
import product11 from "../../assets/12.webp";
import product12 from "../../assets/13.webp";
import product13 from "../../assets/14.webp";
import product14 from "../../assets/15.webp";
import product15 from "../../assets/16.webp";
import product16 from "../../assets/04.webp";

import {
  FaHeart,
  FaRegHeart,
  FaEye,
  FaExchangeAlt,
  FaStar,
} from "react-icons/fa";

import ShopBreadCrum from "../../Components/ShopBreadCrum/ShopBreadCrum";

const ShopSec = () => {
  const [sortType, setSortType] = useState("default");
  const [wishlistState, setWishlistState] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 3;

  const [columns, setColumns] = useState(
    getColumnsFromWidth(
      typeof window !== "undefined"
        ? window.innerWidth
        : 1200
    )
  );

  const [productsPerPage, setProductsPerPage] =
    useState(rowsPerPage * columns);

  const resizeTimer = useRef(null);

  function getColumnsFromWidth(width) {
    if (width > 1400) return 5;
    if (width > 1024) return 4;
    if (width > 768) return 3;
    if (width > 576) return 2;

    return 1;
  }

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;

      const cols = getColumnsFromWidth(w);

      if (resizeTimer.current) {
        clearTimeout(resizeTimer.current);
      }

      resizeTimer.current = setTimeout(() => {
        setColumns(cols);

        setProductsPerPage(rowsPerPage * cols);
      }, 80);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );

      if (resizeTimer.current) {
        clearTimeout(resizeTimer.current);
      }
    };
  }, []);

  const toggleWishlist = (id) => {
    setWishlistState((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const products = [
    {
      id: 1,
      name: "Aliquam Luxury Spiritual Idol",
      price: 144,
      img: product1,
      popularity: 5,
      rating: 4.8,
      date: "2023-05-10",
    },

    {
      id: 2,
      name: "Traditional Brass Decor",
      price: 77,
      img: product2,
      popularity: 2,
      rating: 4.1,
      date: "2023-07-10",
    },

    {
      id: 3,
      name: "Premium Heritage Statue",
      price: 77,
      img: product3,
      popularity: 3,
      rating: 4.5,
      date: "2023-09-20",
    },

    {
      id: 4,
      name: "Luxury Temple Art Sculpture",
      price: 426,
      oldPrice: 742,
      discount: "35% OFF",
      sale: true,
      img: product4,
      popularity: 10,
      rating: 5,
      date: "2024-01-01",
    },

    {
      id: 5,
      name: "Golden Buddha Statue",
      price: 215,
      oldPrice: 320,
      discount: "25% OFF",
      sale: true,
      img: product5,
      popularity: 7,
      rating: 4.6,
      date: "2023-03-18",
    },

    {
      id: 6,
      name: "Handcrafted Shiva Idol",
      price: 350,
      img: product6,
      popularity: 6,
      rating: 4.7,
      date: "2023-04-05",
    },

    {
      id: 7,
      name: "Traditional Krishna Murti",
      price: 199,
      oldPrice: 299,
      discount: "30% OFF",
      sale: true,
      img: product7,
      popularity: 8,
      rating: 4.9,
      date: "2023-08-14",
    },

    {
      id: 8,
      name: "Brass Ram Darbar",
      price: 299,
      img: product8,
      popularity: 4,
      rating: 4.3,
      date: "2023-02-22",
    },

    {
      id: 9,
      name: "Vintage Ganesha Sculpture",
      price: 159,
      oldPrice: 260,
      discount: "20% OFF",
      sale: true,
      img: product9,
      popularity: 9,
      rating: 4.8,
      date: "2024-02-01",
    },

    {
      id: 10,
      name: "Meditating Monk Statue",
      price: 89,
      img: product10,
      popularity: 3,
      rating: 4.2,
      date: "2024-01-15",
    },

    {
      id: 11,
      name: "Temple Art Idol",
      price: 269,
      img: product11,
      popularity: 6,
      rating: 4.4,
      date: "2023-11-11",
    },

    {
      id: 12,
      name: "Lord Vishnu Sculpture",
      price: 340,
      oldPrice: 520,
      discount: "40% OFF",
      sale: true,
      img: product12,
      popularity: 8,
      rating: 5,
      date: "2024-02-10",
    },

    {
      id: 13,
      name: "Divine Saraswati Idol",
      price: 310,
      img: product13,
      popularity: 7,
      rating: 4.7,
      date: "2024-03-05",
    },

    {
      id: 14,
      name: "Lakshmi Sitting Statue",
      price: 225,
      oldPrice: 360,
      discount: "28% OFF",
      sale: true,
      img: product14,
      popularity: 9,
      rating: 4.9,
      date: "2023-12-12",
    },

    {
      id: 15,
      name: "Shiva Parvati Murti",
      price: 385,
      img: product15,
      popularity: 6,
      rating: 4.6,
      date: "2023-10-25",
    },

    {
      id: 16,
      name: "Radha Krishna Idol",
      price: 270,
      oldPrice: 430,
      discount: "32% OFF",
      sale: true,
      img: product16,
      popularity: 10,
      rating: 5,
      date: "2024-04-01",
    },
  ];

  const sortedProducts = [...products].sort(
    (a, b) => {
      switch (sortType) {
        case "low-high":
          return a.price - b.price;

        case "high-low":
          return b.price - a.price;

        case "popularity":
          return b.popularity - a.popularity;

        case "rating":
          return b.rating - a.rating;

        case "latest":
          return (
            new Date(b.date) - new Date(a.date)
          );

        default:
          return 0;
      }
    }
  );

  const totalPages = Math.max(
    1,
    Math.ceil(
      sortedProducts.length / productsPerPage
    )
  );

  const indexOfLast =
    currentPage * productsPerPage;

  const indexOfFirst =
    indexOfLast - productsPerPage;

  const currentProducts =
    sortedProducts.slice(
      indexOfFirst,
      indexOfLast
    );

  const goToPage = (page) => {
    const p = Math.max(
      1,
      Math.min(totalPages, page)
    );

    setCurrentPage(p);

    const grid = document.querySelector(
      ".shopsec-product-grid"
    );

    if (grid) {
      grid.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <ShopBreadCrum />

      <div className="shopsec-container">
        {/* TOPBAR */}

        <div className="shopsec-topbar">
          <div className="shopsec-topbar-right">
            <div className="shopsec-sort-wrapper">
              <span className="shopsec-sort-label">
                Sort By:
              </span>

              <select
                className="shopsec-sort-dropdown"
                value={sortType}
                onChange={(e) => {
                  setSortType(e.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="default">
                  Default sorting
                </option>

                <option value="popularity">
                  Popularity
                </option>

                <option value="rating">
                  Average Rating
                </option>

                <option value="latest">
                  Latest
                </option>

                <option value="low-high">
                  Price: Low To High
                </option>

                <option value="high-low">
                  Price: High To Low
                </option>
              </select>
            </div>
          </div>
        </div>

        {/* PRODUCT GRID */}

        <div className="shopsec-product-grid">
          {currentProducts.map((item) => (
            <div
              className="shopsec-product-card"
              key={item.id}
            >
              {/* SALE BADGE */}

              {item.sale && (
                <span className="shopsec-sale-badge">
                  {item.discount}
                </span>
              )}

              {/* IMAGE */}

              <div className="shopsec-product-image-wrapper">
                <img
                  src={item.img}
                  alt={item.name}
                  className="shopsec-product-img"
                />

                {/* QUICK ACTIONS */}

                <div className="shopsec-quick-actions">
                  <button
                    onClick={() =>
                      toggleWishlist(item.id)
                    }
                  >
                    {wishlistState[item.id] ? (
                      <FaHeart />
                    ) : (
                      <FaRegHeart />
                    )}
                  </button>

                  <button>
                    <FaEye />
                  </button>

                  <button>
                    <FaExchangeAlt />
                  </button>
                </div>

                {/* OVERLAY */}

                <div className="shopsec-product-overlay">
                  <button className="shopsec-addtocart-btn">
                    Add To Cart
                  </button>
                </div>
              </div>

              {/* PRODUCT INFO */}

              <div className="shopsec-product-info">
                <div className="shopsec-product-top">
                  <span className="shopsec-product-category">
                    Premium Spiritual Collection
                  </span>

                  <span className="shopsec-product-stock in-stock">
                    In Stock
                  </span>
                </div>

                <h2 className="shopsec-product-name">
                  {item.name}
                </h2>

                <p className="shopsec-product-desc">
                  Handcrafted premium spiritual
                  decor designed with artistic
                  excellence, devotion, heritage
                  craftsmanship, and luxury
                  finishing for modern homes.
                </p>

                {/* RATING */}

                <div className="shopsec-product-rating-wrap">
                  <div className="shopsec-product-rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>

                  <span className="shopsec-rating-text">
                    (4.9 Reviews)
                  </span>
                </div>

                {/* FEATURES */}

                <div className="shopsec-feature-list">
                  <span>
                    ✔ Premium Quality
                  </span>

                  <span>
                    ✔ Handmade
                  </span>

                  <span>
                    ✔ Fast Delivery
                  </span>
                </div>

                {/* PRICE */}

                <div className="shopsec-price-area">
                  <div className="shopsec-price-box">
                    {item.oldPrice && (
                      <span className="shopsec-old-price">
                        ₹ {item.oldPrice}
                      </span>
                    )}

                    <span className="shopsec-price">
                      ₹ {item.price}
                    </span>
                  </div>

                  {item.sale && (
                    <span className="shopsec-save-price">
                      Save ₹
                      {item.oldPrice -
                        item.price}
                    </span>
                  )}
                </div>

                {/* BUTTONS */}

                <div className="shopsec-card-bottom">
                  <button className="shopsec-buy-btn">
                    Buy Now
                  </button>

                  <button className="shopsec-cart-btn">
                    Add Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION */}

        <div className="shopsec-pagination">
          <button
            className="shopsec-page-btn"
            disabled={currentPage === 1}
            onClick={() =>
              goToPage(currentPage - 1)
            }
          >
            ←
          </button>

          {[...Array(totalPages)].map(
            (_, index) => {
              const pageNum = index + 1;

              return (
                <button
                  key={pageNum}
                  className={`shopsec-page-number ${
                    currentPage === pageNum
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    goToPage(pageNum)
                  }
                >
                  {pageNum}
                </button>
              );
            }
          )}

          <button
            className="shopsec-page-btn"
            disabled={
              currentPage === totalPages
            }
            onClick={() =>
              goToPage(currentPage + 1)
            }
          >
            →
          </button>
        </div>
      </div>
    </>
  );
};

export default ShopSec;