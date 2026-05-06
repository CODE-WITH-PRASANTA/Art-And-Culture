import React, { useEffect, useRef, useState } from "react";
import "./ShopSec.css";

import {
  FaHeart,
  FaRegHeart,
  FaEye,
  FaExchangeAlt,
  FaStar,
  FaRegStar,
  FaStarHalfAlt, // ✅ FIXED
} from "react-icons/fa";

import ShopBreadCrum from "../../Components/ShopBreadCrum/ShopBreadCrum";
import API, { IMG_URL } from "../../api/axios";

const ShopSec = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortType, setSortType] = useState("default");
  const [wishlistState, setWishlistState] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 3;

  const [columns, setColumns] = useState(
    window.innerWidth > 1400 ? 5 :
    window.innerWidth > 1024 ? 4 :
    window.innerWidth > 768 ? 3 :
    window.innerWidth > 576 ? 2 : 1
  );

  const [productsPerPage, setProductsPerPage] =
    useState(rowsPerPage * columns);

  const resizeTimer = useRef(null);

  /* ================= FETCH ================= */
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await API.get("/products");
        if (res.data.success) {
          setProducts(res.data.data);
        }
      } catch (err) {
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  /* ================= RESPONSIVE ================= */
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;

      const cols =
        w > 1400 ? 5 :
        w > 1024 ? 4 :
        w > 768 ? 3 :
        w > 576 ? 2 : 1;

      if (resizeTimer.current) clearTimeout(resizeTimer.current);

      resizeTimer.current = setTimeout(() => {
        setColumns(cols);
        setProductsPerPage(rowsPerPage * cols);
      }, 80);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleWishlist = (id) => {
    setWishlistState((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  /* ================= SORT ================= */
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortType) {
      case "low-high": return a.price - b.price;
      case "high-low": return b.price - a.price;
      case "rating": return b.rating - a.rating;
      case "latest": return new Date(b.createdAt) - new Date(a.createdAt);
      default: return 0;
    }
  });

  /* ================= PAGINATION ================= */
  const totalPages = Math.max(
    1,
    Math.ceil(sortedProducts.length / productsPerPage)
  );

  const currentProducts = sortedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

  return (
    <>
      <ShopBreadCrum />

      <div className="shopsec-container">

        {/* TOPBAR */}
        <div className="shopsec-topbar">
          <div className="shopsec-topbar-right">
            <div className="shopsec-sort-wrapper">
              <span className="shopsec-sort-label">Sort By:</span>

              <select
                className="shopsec-sort-dropdown"
                value={sortType}
                onChange={(e) => {
                  setSortType(e.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="default">Default</option>
                <option value="rating">Rating</option>
                <option value="latest">Latest</option>
                <option value="low-high">Low to High</option>
                <option value="high-low">High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="shopsec-product-grid">
          {currentProducts.map((item) => {

            const price = item.price || 0;
            const discount = item.discount || 0;
            const finalPrice =
                      price && discount
                      ? price - (price * discount) / 100
                      : price;

            const discountPercent = discount;

            return (
              <div className="shopsec-product-card" key={item._id}>

                {/* IMAGE */}
                <div className="shopsec-product-image-wrapper">
                  <img
                    src={
                      item.images?.[0]
                        ? `${IMG_URL}${item.images[0]}`
                        : "/no-image.png"
                    }
                    alt={item.title}
                    className="shopsec-product-img"
                  />

                  {/* BADGE */}
                  {discount > 0 && (
                    <div className="shopsec-sale-badge">
                      {discountPercent}% OFF
                    </div>
                  )}

                  {/* ACTIONS */}
                  <div className="shopsec-quick-actions">
                    <button onClick={() => toggleWishlist(item._id)}>
                      {wishlistState[item._id] ? <FaHeart /> : <FaRegHeart />}
                    </button>
                    <button><FaEye /></button>
                    <button><FaExchangeAlt /></button>
                  </div>

                  <div className="shopsec-product-overlay">
                    <button className="shopsec-addtocart-btn">
                      Add To Cart
                    </button>
                  </div>
                </div>

                {/* INFO */}
                <div className="shopsec-product-info">

                  <h2 className="shopsec-product-name">{item.title}</h2>

                 <div className="shopsec-product-desc">{item.details}</div>

                  {/* ⭐ RATING FIX */}
                  <div className="shopsec-product-rating">
                    {[...Array(5)].map((_, i) => {
                      const val = i + 1;
                      if (item.rating >= val) return <FaStar key={i} />;
                      if (item.rating >= val - 0.5) return <FaStarHalfAlt key={i} />;
                      return <FaRegStar key={i} />;
                    })}
                    <span className="shopsec-rating-text">
                      ({item.rating || 0})
                    </span>
                  </div>

                  {/* 💰 PRICE FIX */}
                  <div className="shopsec-price-area">
                    <div className="shopsec-price-box">

                      {discount > 0 && (
                        <span className="shopsec-old-price">
                          ₹{price}
                        </span>
                      )}

                      <span className="shopsec-price">
                        ₹{finalPrice}
                      </span>

                    </div>

                    {discount > 0 && (
                      <span className="shopsec-save-price">
                        {discountPercent}% OFF
                      </span>
                    )}
                  </div>

                  {/* BUTTONS */}
                  <div className="shopsec-card-bottom">
                    <button className="shopsec-buy-btn">Buy Now</button>
                    <button className="shopsec-cart-btn">Add Cart</button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </>
  );
};

export default ShopSec;