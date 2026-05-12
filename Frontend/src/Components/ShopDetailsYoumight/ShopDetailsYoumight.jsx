// shopdetailsyoumight.jsx

import React, { useState } from "react";
import "./ShopDetailsYoumight.css";

import {
  FaChevronLeft,
  FaChevronRight,
  FaHeart,
  FaEye,
  FaStar,
  FaRegStar,
} from "react-icons/fa";

import product1 from "../../assets/poojaph1.webp";
import product2 from "../../assets/poojaph2.webp";
import product3 from "../../assets/poojaph3.webp";
import product4 from "../../assets/poojaph4.webp";

const ShopDetailsYoumight = () => {

  const products = [
    {
      id: 1,
      image: product1,
      discount: "-6%",
      title:
        "German Silver Pooja Thali Set with Ghungroo (12 Inch)",
      price: "₹ 7,449.00",
      oldPrice: "₹ 7,999.00",
      reviews: "1 review",
    },

    {
      id: 2,
      image: product2,
      discount: "-21%",
      title:
        "Divine Brass Ganesha Diya (4.5 Inch)",
      price: "₹ 2,749.00",
      oldPrice: "₹ 3,499.00",
      reviews: "1 review",
    },

    {
      id: 3,
      image: product3,
      discount: "-45%",
      title:
        "Brass Om Engraved Pooja Thali Set (10 Inch)",
      price: "₹ 3,549.00",
      oldPrice: "₹ 6,499.00",
      reviews: "1 review",
    },

    {
      id: 4,
      image: product4,
      discount: "-19%",
      title:
        "Brass Designer Meenakari Pooja Thali (10 Inch)",
      price: "₹ 4,449.00",
      oldPrice: "₹ 5,499.00",
      reviews: "1 review",
    },

    {
      id: 5,
      image: product1,
      discount: "-32%",
      title:
        "Luxury Brass Pooja Decor Set",
      price: "₹ 5,249.00",
      oldPrice: "₹ 7,299.00",
      reviews: "2 reviews",
    },

    {
      id: 6,
      image: product3,
      discount: "-15%",
      title:
        "Traditional Floral Brass Plate",
      price: "₹ 3,999.00",
      oldPrice: "₹ 4,999.00",
      reviews: "3 reviews",
    },
  ];

  const [wishlist, setWishlist] =
    useState([]);

  const toggleWishlist = (id) => {

    if (wishlist.includes(id)) {
      setWishlist(
        wishlist.filter(
          (item) => item !== id
        )
      );
    } else {
      setWishlist([...wishlist, id]);
    }
  };

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

  return (
    <section className="shopdetailsyoumight">

      {/* TOP */}

      <div className="shopdetailsyoumight__top">

        <h2 className="shopdetailsyoumight__heading">
          You Might Also Like
        </h2>

        {/* ARROWS */}

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

      {/* PRODUCTS */}

      <div
        className="shopdetailsyoumight__slider"
        id="shopdetailsyoumight__slider"
      >

        {products.map((item) => (

          <div
            className="shopdetailsyoumight__card"
            key={item.id}
          >

            {/* IMAGE */}

            <div className="shopdetailsyoumight__imageWrapper">

              <img
                src={item.image}
                alt={item.title}
                className="shopdetailsyoumight__image"
              />

              {/* DISCOUNT */}

              <span className="shopdetailsyoumight__discount">
                {item.discount}
              </span>

              {/* SIDE ICONS */}

              <div className="shopdetailsyoumight__icons">

                <button
                  className={`shopdetailsyoumight__icon ${
                    wishlist.includes(
                      item.id
                    )
                      ? "shopdetailsyoumight__iconActive"
                      : ""
                  }`}
                  onClick={() =>
                    toggleWishlist(
                      item.id
                    )
                  }
                >
                  <FaHeart />
                </button>

                <button className="shopdetailsyoumight__icon">
                  <FaEye />
                </button>

              </div>

              {/* QUICK ADD */}

              <button className="shopdetailsyoumight__quickBtn">
                QUICK ADD
              </button>

            </div>

            {/* CONTENT */}

            <div className="shopdetailsyoumight__content">

              <h3 className="shopdetailsyoumight__title">
                {item.title}
              </h3>

              {/* RATING */}

              <div className="shopdetailsyoumight__rating">

                <span>
                  5.0
                </span>

                <div className="shopdetailsyoumight__stars">

                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />

                </div>

                <p>
                  {item.reviews}
                </p>

              </div>

              {/* PRICE */}

              <div className="shopdetailsyoumight__priceRow">

                <span className="shopdetailsyoumight__price">
                  {item.price}
                </span>

                <span className="shopdetailsyoumight__oldPrice">
                  {item.oldPrice}
                </span>

              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopDetailsYoumight;