import React, { useState } from "react";
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
import ShopBreadCrum from "../../Components/ShopBreadCrum/ShopBreadCrum";

const ShopSec = () => {
  const [sortType, setSortType] = useState("default");
  const [wishlistState, setWishlistState] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 16;

  const toggleWishlist = (id) => {
    setWishlistState((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const products = [
    { id: 1, name: "Aliquam id quam elementum arcu", price: 144, img: product1, popularity: 5, rating: 4.8, date: "2023-05-10" },
    { id: 2, name: "Cras viverra rhoncu", price: 77, img: product2, popularity: 2, rating: 4.1, date: "2023-07-10" },
    { id: 3, name: "Cras viverra rhoncus metu", price: 77, img: product3, popularity: 3, rating: 4.5, date: "2023-09-20" },
    { id: 4, name: "Delllus molestie id mi sit amet", price: 426, oldPrice: 742, sale: true, img: product4, popularity: 10, rating: 5.0, date: "2024-01-01" },

    { id: 5, name: "Golden Buddha Statue", price: 215, img: product5, popularity: 7, rating: 4.6, date: "2023-03-18" },
    { id: 6, name: "Handcrafted Shiva Idol", price: 350, img: product6, popularity: 6, rating: 4.7, date: "2023-04-05" },
    { id: 7, name: "Traditional Krishna Murti", price: 199, img: product7, popularity: 8, rating: 4.9, date: "2023-08-14" },
    { id: 8, name: "Brass Ram Darbar", price: 299, img: product8, popularity: 4, rating: 4.3, date: "2023-02-22" },

    { id: 9, name: "Vintage Ganesha Sculpture", price: 159, img: product9, popularity: 9, rating: 4.8, date: "2024-02-01" },
    { id: 10, name: "Meditating Monk Statue", price: 89, img: product10, popularity: 3, rating: 4.2, date: "2024-01-15" },
    { id: 11, name: "Temple Art Idol", price: 269, img: product11, popularity: 6, rating: 4.4, date: "2023-11-11" },
    { id: 12, name: "Lord Vishnu Sculpture", price: 340, img: product12, popularity: 8, rating: 5.0, date: "2024-02-10" },

    { id: 13, name: "Divine Saraswati Idol", price: 310, img: product13, popularity: 7, rating: 4.7, date: "2024-03-05" },
    { id: 14, name: "Lakshmi Sitting Statue", price: 225, img: product14, popularity: 9, rating: 4.9, date: "2023-12-12" },
    { id: 15, name: "Shiva Parvati Murti", price: 385, img: product15, popularity: 6, rating: 4.6, date: "2023-10-25" },
    { id: 16, name: "Radha Krishna Idol", price: 270, img: product16, popularity: 10, rating: 5.0, date: "2024-04-01" },
  ];

  // SORTING LOGIC
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortType) {
      case "low-high": return a.price - b.price;
      case "high-low": return b.price - a.price;
      case "popularity": return b.popularity - a.popularity;
      case "rating": return b.rating - a.rating;
      case "latest": return new Date(b.date) - new Date(a.date);
      default: return 0;
    }
  });

  // PAGINATION LOGIC
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  return (
    <>
    <ShopBreadCrum />
    <div className="shop-container">
      <h1 className="shop-title">Shop</h1>

      <div className="breadcrumb">Home / Shop</div>

      <div className="shop-topbar">
        <span className="results-text">Showing 1–16 of 24 results</span>

        <div className="sort-wrapper">
          <span className="sort-label">Sort By:</span>
          <select className="sort-dropdown" onChange={(e) => setSortType(e.target.value)}>
            <option value="default">Default sorting</option>
            <option value="popularity">Sort by popularity</option>
            <option value="rating">Sort by average rating</option>
            <option value="latest">Sort by latest</option>
            <option value="low-high">Sort by price: low to high</option>
            <option value="high-low">Sort by price: high to low</option>
          </select>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="product-grid">
        {currentProducts.map((item) => (
          <div className="product-card" key={item.id}>

            {item.sale && <span className="sale-badge">Sale</span>}

            <img src={item.img} alt={item.name} className="product-img" />

            {/* HOVER SECTION */}
            <div className="card-hover-box">
              <button className="add-to-cart-btn">Add to cart</button>

              <div className="hover-links">
                
                {/* ❤️ Wishlist */}
                <button
                  className={`wishlist-btn ${wishlistState[item.id] ? "active" : ""}`}
                  onClick={() => toggleWishlist(item.id)}
                >
                  {wishlistState[item.id] ? "❤️ Wishlist" : "♡ Wishlist"}
                </button>

                {/* ⇄ Compare */}
                <button className="compare-btn">⇄ Compare</button>

              </div>
            </div>

            <h2 className="product-name">{item.name}</h2>

            <div className="price-box">
              {item.oldPrice && <span className="old-price">{item.oldPrice} ₹</span>}
              <span className="price">{item.price} ₹</span>
            </div>

          </div>
        ))}
      </div>

      {/* PAGINATION  */}
      <div className="pagination">
        <button
          className="page-btn"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          ←
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`page-number ${currentPage === index + 1 ? "active" : ""}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="page-btn"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          →
        </button>
      </div>

    </div>

    </>
  );
};

export default ShopSec;
