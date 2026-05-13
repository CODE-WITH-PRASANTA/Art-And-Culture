// ShopDetailsYoumight.jsx

import React, {
  useEffect,
  useState,
} from "react";

import "./ShopDetailsYoumight.css";

import {
  FaChevronLeft,
  FaChevronRight,
  FaHeart,
  FaEye,
  FaStar,
  FaRegStar,
} from "react-icons/fa";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import API, {
  IMG_URL,
} from "../../api/axios";

const ShopDetailsYoumight = () => {

  /* ================= NAVIGATE ================= */

  const navigate = useNavigate();

  /* ================= PRODUCT ID ================= */

  const { id } = useParams();

  /* ================= STATES ================= */

  const [products, setProducts] =
    useState([]);

  const [wishlist, setWishlist] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  /* ================= FETCH PRODUCTS ================= */

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const res = await API.get(
          "/products"
        );

        if (
          res.data.success
        ) {

          /* REMOVE CURRENT PRODUCT */

          const filteredProducts =
            res.data.data.filter(
              (item) =>
                item._id !== id
            );

          setProducts(
            filteredProducts
          );

        }

      } catch (error) {

        console.error(
          "Failed to fetch products",
          error
        );

      } finally {

        setLoading(false);

      }
    };

    fetchProducts();

  }, [id]);

  /* ================= WISHLIST ================= */

  const toggleWishlist = (id) => {

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

  /* ================= SLIDER ================= */

  const scrollLeft = () => {

    document
      .getElementById(
        "shopdetailsyoumight__slider"
      )
      .scrollBy({
        left: -400,
        behavior: "smooth",
      });

  };

  const scrollRight = () => {

    document
      .getElementById(
        "shopdetailsyoumight__slider"
      )
      .scrollBy({
        left: 400,
        behavior: "smooth",
      });

  };

  /* ================= LOADING ================= */

  if (loading) {

    return (
      <div
        style={{
          textAlign:
            "center",
          padding: "20px",
        }}
      >

        Loading...

      </div>
    );

  }

  return (
    <section className="shopdetailsyoumight">

      {/* ================= TOP ================= */}

      <div className="shopdetailsyoumight__top">

        <h2 className="shopdetailsyoumight__heading">

          You Might Also Like

        </h2>

        {/* ================= ARROWS ================= */}

        <div className="shopdetailsyoumight__arrowRow">

          <button
            className="shopdetailsyoumight__arrow"
            onClick={scrollLeft}
          >

            <FaChevronLeft />

          </button>

          <button
            className="shopdetailsyoumight__arrow"
            onClick={scrollRight}
          >

            <FaChevronRight />

          </button>

        </div>

      </div>

      {/* ================= PRODUCTS ================= */}

      <div
        className="shopdetailsyoumight__slider"
        id="shopdetailsyoumight__slider"
      >

        {products.map(
          (item) => {

            const price =
              item.price || 0;

            const discount =
              item.discount || 0;

            const finalPrice =
              discount > 0
                ? price -
                  (
                    price *
                    discount
                  ) /
                    100
                : price;

            return (

              <div
                className="shopdetailsyoumight__card"
                key={item._id}
              >

                {/* ================= IMAGE ================= */}

                <div className="shopdetailsyoumight__imageWrapper">

                  <img
                    src={
                      item.images?.[0]
                        ? `${IMG_URL}${item.images[0]}`
                        : "/no-image.png"
                    }
                    alt={
                      item.title
                    }
                    className="shopdetailsyoumight__image"
                    onClick={() =>
                      navigate(
                        `/shopdetails/${item._id}`
                      )
                    }
                  />

                  {/* ================= DISCOUNT ================= */}

                  {discount >
                    0 && (

                    <span className="shopdetailsyoumight__discount">

                      -{discount}%

                    </span>
                  )}

                  {/* ================= SIDE ICONS ================= */}

                  <div className="shopdetailsyoumight__icons">

                    <button
                      className={`shopdetailsyoumight__icon ${
                        wishlist.includes(
                          item._id
                        )
                          ? "shopdetailsyoumight__iconActive"
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

                    <button className="shopdetailsyoumight__icon">

                      <FaEye />

                    </button>

                  </div>

                  {/* ================= QUICK ADD ================= */}

                  <button className="shopdetailsyoumight__quickBtn">

                    QUICK ADD

                  </button>

                </div>

                {/* ================= CONTENT ================= */}

                <div className="shopdetailsyoumight__content">

                  {/* ================= TITLE ================= */}

                  <h3
                    className="shopdetailsyoumight__title"
                    onClick={() =>
                      navigate(
                        `/shopdetails/${item._id}`
                      )
                    }
                  >

                    {item.title}

                  </h3>

                  {/* ================= RATING ================= */}

                  <div className="shopdetailsyoumight__rating">

                    <span>

                      {item.rating ||
                        0}

                    </span>

                    <div className="shopdetailsyoumight__stars">

                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStar />

                    </div>

                    <p>

                      1 review

                    </p>

                  </div>

                  {/* ================= PRICE ================= */}

                  <div className="shopdetailsyoumight__priceRow">

                    <span className="shopdetailsyoumight__price">

                      ₹
                      {finalPrice}

                    </span>

                    {discount >
                      0 && (

                      <span className="shopdetailsyoumight__oldPrice">

                        ₹
                        {price}

                      </span>
                    )}

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

export default ShopDetailsYoumight;