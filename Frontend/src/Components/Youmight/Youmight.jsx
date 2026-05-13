// Youmight.jsx

import React, {
  useEffect,
  useState,
} from "react";

import "./Youmight.css";

import {
  FaChevronLeft,
  FaChevronRight,
  FaHeart,
  FaEye,
  FaStar,
  FaRegStar,
} from "react-icons/fa";

import {
  Link,
  useParams,
} from "react-router-dom";

import API, {
  IMG_URL,
} from "../../api/axios";

const Youmight = () => {
  const { id } = useParams();

  const [products, setProducts] =
    useState([]);

  const [wishlist, setWishlist] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  /* =====================================================
     CURRENT IMAGE INDEX
  ===================================================== */

  const [activeImages, setActiveImages] =
    useState({});

  /* =====================================================
     FETCH PRODUCTS
  ===================================================== */

  useEffect(() => {
    fetchProducts();
  }, [id]);

  const fetchProducts = async () => {
    try {
      const res = await API.get(
        "/pooja"
      );

      if (res.data.success) {
        const filtered =
          res.data.data.filter(
            (item) =>
              item._id !== id
          );

        setProducts(filtered);
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
     WISHLIST
  ===================================================== */

  const toggleWishlist = (
    id
  ) => {
    if (
      wishlist.includes(id)
    ) {
      setWishlist(
        wishlist.filter(
          (item) =>
            item !== id
        )
      );
    } else {
      setWishlist([
        ...wishlist,
        id,
      ]);
    }
  };

  /* =====================================================
     SLIDER
  ===================================================== */

  const scrollLeft = () => {
    document
      .getElementById(
        "youmight__slider"
      )
      .scrollBy({
        left: -400,
        behavior: "smooth",
      });
  };

  const scrollRight = () => {
    document
      .getElementById(
        "youmight__slider"
      )
      .scrollBy({
        left: 400,
        behavior: "smooth",
      });
  };

  /* =====================================================
     IMAGE DOT CLICK
  ===================================================== */

  const handleImageChange = (
    productId,
    index
  ) => {
    setActiveImages(
      (prev) => ({
        ...prev,
        [productId]:
          index,
      })
    );
  };

  /* =====================================================
     STARS
  ===================================================== */

  const renderStars = (
    rating
  ) => {
    const fullStars =
      Math.floor(
        rating || 0
      );

    const emptyStars =
      5 - fullStars;

    return (
      <>
        {[...Array(fullStars)].map(
          (_, i) => (
            <FaStar key={i} />
          )
        )}

        {[...Array(emptyStars)].map(
          (_, i) => (
            <FaRegStar
              key={i}
            />
          )
        )}
      </>
    );
  };

  /* =====================================================
     LOADING
  ===================================================== */

  if (loading) {
    return (
      <div className="youmight__loading">
        Loading...
      </div>
    );
  }

  return (
    <section className="youmight">
      {/* =====================================================
          TOP
      ===================================================== */}

      <div className="youmight__top">
        <h2 className="youmight__heading">
          You Might Also
          Like
        </h2>

        <div className="youmight__arrowRow">
          <button
            className="youmight__arrow"
            onClick={
              scrollLeft
            }
          >
            <FaChevronLeft />
          </button>

          <button
            className="youmight__arrow"
            onClick={
              scrollRight
            }
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* =====================================================
          PRODUCTS
      ===================================================== */}

      <div
        className="youmight__slider"
        id="youmight__slider"
      >
        {products.map(
          (item) => {
            const discount =
              item.oldPrice >
              item.price
                ? `-${Math.round(
                    ((item.oldPrice -
                      item.price) /
                      item.oldPrice) *
                      100
                  )}%`
                : "-10%";

            const currentIndex =
              activeImages[
                item._id
              ] || 0;

            const currentImage =
              item.images?.[
                currentIndex
              ];

            return (
              <div
                className="youmight__card"
                key={
                  item._id
                }
              >
                {/* IMAGE */}

                <div className="youmight__imageWrapper">
                  <Link
                    to={`/poojadetails/${item._id}`}
                  >
                    <img
                      src={`${IMG_URL}${currentImage}`}
                      alt={
                        item.title
                      }
                      className="youmight__image"
                    />
                  </Link>

                  {/* DISCOUNT */}

                  <span className="youmight__discount">
                    {
                      discount
                    }
                  </span>

                  {/* ICONS */}

                  <div className="youmight__icons">
                    <button
                      className={`youmight__icon ${
                        wishlist.includes(
                          item._id
                        )
                          ? "youmight__iconActive"
                          : ""
                      }`}
                      onClick={() =>
                        toggleWishlist(
                          item._id
                        )
                      }
                    >
                      <FaHeart />
                    </button>

                    <Link
                      to={`/poojadetails/${item._id}`}
                    >
                      <button className="youmight__icon">
                        <FaEye />
                      </button>
                    </Link>
                  </div>

                  {/* QUICK BTN */}

                  <button className="youmight__quickBtn">
                    QUICK ADD
                  </button>

                  {/* DOT PAGINATION */}

                  {item.images
                    ?.length >
                    1 && (
                    <div className="youmight__dots">
                      {item.images.map(
                        (
                          _,
                          index
                        ) => (
                          <button
                            key={
                              index
                            }
                            className={`youmight__dot ${
                              currentIndex ===
                              index
                                ? "youmight__dotActive"
                                : ""
                            }`}
                            onClick={() =>
                              handleImageChange(
                                item._id,
                                index
                              )
                            }
                          />
                        )
                      )}
                    </div>
                  )}
                </div>

                {/* CONTENT */}

                <div className="youmight__content">
                  <Link
                    to={`/poojadetails/${item._id}`}
                    className="youmight__titleLink"
                  >
                    <h3 className="youmight__title">
                      {item.title
                        ?.split(
                          " "
                        )
                        .slice(
                          0,
                          8
                        )
                        .join(
                          " "
                        )}

                      {item.title
                        ?.split(
                          " "
                        )
                        .length >
                        8 &&
                        "..."}
                    </h3>
                  </Link>

                  {/* RATING */}

                  <div className="youmight__rating">
                    <span>
                      {item.rating ||
                        "0"}
                    </span>

                    <div className="youmight__stars">
                      {renderStars(
                        item.rating
                      )}
                    </div>

                    <p>
                      {item.stock ||
                        0}{" "}
                      In Stock
                    </p>
                  </div>

                  {/* PRICE */}

                  <div className="youmight__priceRow">
                    <span className="youmight__price">
                      ₹
                      {Number(
                        item.price
                      ).toLocaleString()}
                    </span>

                    <span className="youmight__oldPrice">
                      ₹
                      {Number(
                        item.oldPrice
                      ).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Youmight;