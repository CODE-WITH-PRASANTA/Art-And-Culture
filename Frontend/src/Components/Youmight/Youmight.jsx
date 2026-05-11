// Youmight.jsx

import React, { useState } from "react";
import "./Youmight.css";

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

const Youmight = () => {

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

  return (
    <section className="youmight">

      {/* TOP */}

      <div className="youmight__top">

        <h2 className="youmight__heading">
          You Might Also Like
        </h2>

        {/* ARROWS */}

        <div className="youmight__arrowRow">

          <button
            className="youmight__arrow"
            onClick={scrollLeft}
          >
            <FaChevronLeft />
          </button>

          <button
            className="youmight__arrow"
            onClick={scrollRight}
          >
            <FaChevronRight />
          </button>

        </div>
      </div>

      {/* PRODUCTS */}

      <div
        className="youmight__slider"
        id="youmight__slider"
      >

        {products.map((item) => (

          <div
            className="youmight__card"
            key={item.id}
          >

            {/* IMAGE */}

            <div className="youmight__imageWrapper">

              <img
                src={item.image}
                alt={item.title}
                className="youmight__image"
              />

              {/* DISCOUNT */}

              <span className="youmight__discount">
                {item.discount}
              </span>

              {/* SIDE ICONS */}

              <div className="youmight__icons">

                <button
                  className={`youmight__icon ${
                    wishlist.includes(
                      item.id
                    )
                      ? "youmight__iconActive"
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

                <button className="youmight__icon">
                  <FaEye />
                </button>

              </div>

              {/* QUICK ADD */}

              <button className="youmight__quickBtn">
                QUICK ADD
              </button>

            </div>

            {/* CONTENT */}

            <div className="youmight__content">

              <h3 className="youmight__title">
                {item.title}
              </h3>

              {/* RATING */}

              <div className="youmight__rating">

                <span>
                  5.0
                </span>

                <div className="youmight__stars">

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

              <div className="youmight__priceRow">

                <span className="youmight__price">
                  {item.price}
                </span>

                <span className="youmight__oldPrice">
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

export default Youmight;