// ShopSec.jsx

import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import "./ShopSec.css";

import {
  FaHeart,
  FaRegHeart,
  FaEye,
  FaExchangeAlt,
  FaStar,
  FaRegStar,
  FaStarHalfAlt,
} from "react-icons/fa";

import {
  useNavigate,
} from "react-router-dom";

import ShopBreadCrum from "../../Components/ShopBreadCrum/ShopBreadCrum";

import API, {
  IMG_URL,
} from "../../api/axios";

const ShopSec = () => {

  /* ================= NAVIGATE ================= */

  const navigate = useNavigate();

  /* ================= STATES ================= */

  const [products, setProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [sortType, setSortType] =
    useState("default");

  const [wishlistState, setWishlistState] =
    useState({});

  const [currentPage, setCurrentPage] =
    useState(1);

  /* ================= IMAGE PAGINATION ================= */

  const [
    currentImageIndexes,
    setCurrentImageIndexes,
  ] = useState({});

  const rowsPerPage = 3;

  const [columns, setColumns] =
    useState(
      window.innerWidth > 1400
        ? 5
        : window.innerWidth > 1024
        ? 4
        : window.innerWidth > 768
        ? 3
        : window.innerWidth > 576
        ? 2
        : 1
    );

  const [
    productsPerPage,
    setProductsPerPage,
  ] = useState(
    rowsPerPage * columns
  );

  const resizeTimer =
    useRef(null);

  /* ================= FETCH PRODUCTS ================= */

  useEffect(() => {

    const getProducts =
      async () => {

        try {

          const res =
            await API.get(
              "/products"
            );

          if (
            res.data.success
          ) {

            setProducts(
              res.data.data
            );

          }

        } catch (err) {

          console.error(
            "API Error:",
            err
          );

        } finally {

          setLoading(false);

        }
      };

    getProducts();

  }, []);

  /* ================= AUTO IMAGE SLIDE ================= */

  useEffect(() => {

    const interval =
      setInterval(() => {

        setCurrentImageIndexes(
          (prev) => {

            const updated = {
              ...prev,
            };

            products.forEach(
              (product) => {

                if (
                  product.images
                    ?.length > 1
                ) {

                  const current =
                    prev[
                      product._id
                    ] || 0;

                  updated[
                    product._id
                  ] =
                    current ===
                    product
                      .images
                      .length -
                      1
                      ? 0
                      : current + 1;
                }
              }
            );

            return updated;
          }
        );

      }, 2500);

    return () =>
      clearInterval(
        interval
      );

  }, [products]);

  /* ================= RESPONSIVE ================= */

  useEffect(() => {

    const handleResize =
      () => {

        const w =
          window.innerWidth;

        const cols =
          w > 1400
            ? 5
            : w > 1024
            ? 4
            : w > 768
            ? 3
            : w > 576
            ? 2
            : 1;

        if (
          resizeTimer.current
        ) {

          clearTimeout(
            resizeTimer.current
          );

        }

        resizeTimer.current =
          setTimeout(() => {

            setColumns(
              cols
            );

            setProductsPerPage(
              rowsPerPage *
                cols
            );

          }, 80);
      };

    window.addEventListener(
      "resize",
      handleResize
    );

    handleResize();

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );

  }, []);

  /* ================= WISHLIST ================= */

  const toggleWishlist =
    (id) => {

      setWishlistState(
        (prev) => ({
          ...prev,
          [id]:
            !prev[id],
        })
      );

    };

  /* ================= SORT ================= */

  const sortedProducts = [
    ...products,
  ].sort((a, b) => {

    switch (sortType) {

      case "low-high":

        return (
          a.price -
          b.price
        );

      case "high-low":

        return (
          b.price -
          a.price
        );

      case "rating":

        return (
          b.rating -
          a.rating
        );

      case "latest":

        return (
          new Date(
            b.createdAt
          ) -
          new Date(
            a.createdAt
          )
        );

      default:

        return 0;
    }
  });

  /* ================= PAGINATION ================= */

  const totalPages =
    Math.max(
      1,
      Math.ceil(
        sortedProducts.length /
          productsPerPage
      )
    );

  const currentProducts =
    sortedProducts.slice(
      (currentPage - 1) *
        productsPerPage,
      currentPage *
        productsPerPage
    );

  /* ================= LOADING ================= */

  if (loading) {

    return (
      <h2
        style={{
          textAlign:
            "center",
        }}
      >
        Loading...
      </h2>
    );

  }

  return (
    <>
      <ShopBreadCrum />

      <div className="shopsec-container">

        {/* ================= TOPBAR ================= */}

        <div className="shopsec-topbar">

          <div className="shopsec-topbar-right">

            <div className="shopsec-sort-wrapper">

              <span className="shopsec-sort-label">

                Sort By:

              </span>

              <select
                className="shopsec-sort-dropdown"
                value={
                  sortType
                }
                onChange={(
                  e
                ) => {

                  setSortType(
                    e.target
                      .value
                  );

                  setCurrentPage(
                    1
                  );

                }}
              >

                <option value="default">
                  Default
                </option>

                <option value="rating">
                  Rating
                </option>

                <option value="latest">
                  Latest
                </option>

                <option value="low-high">
                  Low to High
                </option>

                <option value="high-low">
                  High to Low
                </option>

              </select>

            </div>

          </div>

        </div>

        {/* ================= PRODUCTS ================= */}

        <div className="shopsec-product-grid">

          {currentProducts.map(
            (item) => {

              const price =
                item.price ||
                0;

              const discount =
                item.discount ||
                0;

              const finalPrice =
                price &&
                discount
                  ? price -
                    (price *
                      discount) /
                      100
                  : price;

              return (

                <div
                  className="shopsec-product-card"
                  key={
                    item._id
                  }
                >

                  {/* ================= IMAGE ================= */}

                  <div className="shopsec-product-image-wrapper">

                    <img
                      src={
                        item
                          .images
                          ?.length >
                        0
                          ? `${IMG_URL}${
                              item
                                .images[
                                currentImageIndexes[
                                  item
                                    ._id
                                ] ||
                                  0
                              ]
                            }`
                          : "/no-image.png"
                      }
                      alt={
                        item.title
                      }
                      className="shopsec-product-img"
                      onClick={() =>
                        navigate(
                          `/shopdetails/${item._id}`
                        )
                      }
                    />

                    {/* ================= IMAGE DOTS ================= */}

                    {item.images
                      ?.length >
                      1 && (

                      <div className="shopsec-image-dots">

                        {item.images.map(
                          (
                            _,
                            imgIndex
                          ) => (

                            <span
                              key={
                                imgIndex
                              }
                              className={`shopsec-image-dot ${
                                (
                                  currentImageIndexes[
                                    item
                                      ._id
                                  ] ||
                                  0
                                ) ===
                                imgIndex
                                  ? "active"
                                  : ""
                              }`}
                              onClick={() =>
                                setCurrentImageIndexes(
                                  (
                                    prev
                                  ) => ({
                                    ...prev,
                                    [item._id]:
                                      imgIndex,
                                  })
                                )
                              }
                            />

                          )
                        )}

                      </div>
                    )}

                    {/* ================= BADGE ================= */}

                    {discount >
                      0 && (

                      <div className="shopsec-sale-badge">

                        {
                          discount
                        }
                        % OFF

                      </div>
                    )}

                    {/* ================= ACTIONS ================= */}

                    <div className="shopsec-quick-actions">

                      <button
                        onClick={() =>
                          toggleWishlist(
                            item._id
                          )
                        }
                      >

                        {wishlistState[
                          item
                            ._id
                        ] ? (
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

                    {/* ================= OVERLAY ================= */}

                    <div className="shopsec-product-overlay">

                      <button className="shopsec-addtocart-btn">

                        Add To Cart

                      </button>

                    </div>

                  </div>

                  {/* ================= INFO ================= */}

                  <div className="shopsec-product-info">

                    {/* ================= TITLE ================= */}

                    <h2
                      className="shopsec-product-name"
                      onClick={() =>
                        navigate(
                          `/shopdetails/${item._id}`
                        )
                      }
                    >

                      {
                        item.title
                      }

                    </h2>

                    {/* ================= DESCRIPTION ================= */}

                    <div className="shopsec-product-desc">

                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            item.aboutProduct ||
                            "",
                        }}
                      />

                    </div>

                    {/* ================= RATING ================= */}

                    <div className="shopsec-product-rating">

                      {[...Array(
                        5
                      )].map(
                        (
                          _,
                          i
                        ) => {

                          const val =
                            i +
                            1;

                          if (
                            item.rating >=
                            val
                          ) {

                            return (
                              <FaStar
                                key={
                                  i
                                }
                              />
                            );

                          }

                          if (
                            item.rating >=
                            val -
                              0.5
                          ) {

                            return (
                              <FaStarHalfAlt
                                key={
                                  i
                                }
                              />
                            );

                          }

                          return (
                            <FaRegStar
                              key={
                                i
                              }
                            />
                          );
                        }
                      )}

                      <span className="shopsec-rating-text">

                        (
                        {item.rating ||
                          0}
                        )

                      </span>

                    </div>

                    {/* ================= PRICE ================= */}

                    <div className="shopsec-price-area">

                      <div className="shopsec-price-box">

                        {discount >
                          0 && (

                          <span className="shopsec-old-price">

                            ₹
                            {
                              price
                            }

                          </span>
                        )}

                        <span className="shopsec-price">

                          ₹
                          {
                            finalPrice
                          }

                        </span>

                      </div>

                      {discount >
                        0 && (

                        <span className="shopsec-save-price">

                          {
                            discount
                          }
                          % OFF

                        </span>
                      )}

                    </div>

                    {/* ================= BUTTONS ================= */}

                    <div className="shopsec-card-bottom">

                      <button
                        className="shopsec-buy-btn"
                        onClick={() =>
                          navigate(
                            `/shopdetails/${item._id}`
                          )
                        }
                      >

                        Buy Now

                      </button>

                      <button className="shopsec-cart-btn">

                        Add Cart

                      </button>

                    </div>

                  </div>

                </div>
              );
            }
          )}

        </div>

        {/* ================= PAGINATION ================= */}

        {totalPages >
          1 && (

          <div className="shopsec-pagination">

            {[...Array(
              totalPages
            )].map(
              (
                _,
                index
              ) => (

                <button
                  key={
                    index
                  }
                  className={`shopsec-page-btn ${
                    currentPage ===
                    index +
                      1
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setCurrentPage(
                      index +
                        1
                    )
                  }
                >

                  {index + 1}

                </button>
              )
            )}

          </div>
        )}

      </div>
    </>
  );
};

export default ShopSec;