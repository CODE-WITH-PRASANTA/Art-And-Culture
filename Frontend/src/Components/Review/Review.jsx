// Review.jsx

import React, { useState } from "react";
import "./Review.css";

import {
  FaStar,
  FaRegStar,
  FaSearch,
  FaFilter,
  FaChevronDown,
  FaTimes,
} from "react-icons/fa";

import reviewImg from "../../assets/poojaph1.webp";

const Review = () => {

  const [activeTab, setActiveTab] =
    useState("reviews");

  const [showQuestionPopup, setShowQuestionPopup] =
    useState(false);

  const [showReviewPopup, setShowReviewPopup] =
    useState(false);

  const [showDropdown, setShowDropdown] =
    useState(false);

  const [selectedFilter, setSelectedFilter] =
    useState("Pictures first");

  const filterOptions = [
    "Most recent",
    "Highest rating",
    "Lowest rating",
    "Only pictures",
    "Pictures first",
    "Videos first",
    "Most helpful",
  ];

  const reviews = [
    {
      id: 1,
      name: "Parimala S Maroor",
      date: "18/03/2024",
      title:
        "Meenakshi Handwork Brass Pooja Thalia Set",
      review:
        "Wonderful craftsmanship and premium brass finishing. The meenakari work looks luxurious and elegant.",
      image: reviewImg,
    },

    {
      id: 2,
      name: "Sonal Patel",
      date: "06/01/2026",
      title:
        "Traditional Brass Pooja Set",
      review:
        "Ohh i just loved it. I bought it to gift my younger sister marriage as shagun and she also loved it.",
      image: reviewImg,
    },

    {
      id: 3,
      name: "Ritika Sharma",
      date: "14/02/2026",
      title:
        "Premium Floral Brass Thali",
      review:
        "Beautifully packed and premium quality. Perfect for gifting and festive occasions.",
      image: reviewImg,
    },
  ];

  return (
    <>
      <section className="review">

        {/* TOP */}

        <div className="review__top">

          <div>

            <h2 className="review__heading">
              Customer Reviews
            </h2>

            <div className="review__ratingRow">

              <span className="review__rating">
                4.7
              </span>

              <span className="review__count">
                6 reviews
              </span>

            </div>
          </div>

          {/* BUTTONS */}

          <div className="review__topButtons">

            <button
              className="review__writeBtn"
              onClick={() =>
                setShowReviewPopup(true)
              }
            >
              Write a review
            </button>

            <button
              className="review__questionBtn"
              onClick={() =>
                setShowQuestionPopup(true)
              }
            >
              Ask a question
            </button>

          </div>
        </div>

        {/* IMAGE */}

        <div className="review__previewImage">

          <img
            src={reviewImg}
            alt="review"
          />

        </div>

        {/* TABS */}

        <div className="review__tabsRow">

          <div className="review__tabs">

            <button
              className={`review__tab ${
                activeTab === "reviews"
                  ? "review__tabActive"
                  : ""
              }`}
              onClick={() =>
                setActiveTab("reviews")
              }
            >
              Reviews (6)
            </button>

            <button
              className={`review__tab ${
                activeTab === "questions"
                  ? "review__tabActive"
                  : ""
              }`}
              onClick={() =>
                setActiveTab("questions")
              }
            >
              Questions (0)
            </button>

          </div>

          {/* FILTER */}

          <div className="review__filterArea">

            <button className="review__iconBtn">
              <FaSearch />
            </button>

            <button className="review__iconBtn">
              <FaFilter />
            </button>

            <div className="review__dropdownWrapper">

              <button
                className="review__dropdownBtn"
                onClick={() =>
                  setShowDropdown(
                    !showDropdown
                  )
                }
              >
                {selectedFilter}
                <FaChevronDown />
              </button>

              {showDropdown && (

                <div className="review__dropdownMenu">

                  {filterOptions.map(
                    (item, index) => (

                      <div
                        key={index}
                        className={`review__dropdownItem ${
                          selectedFilter ===
                          item
                            ? "review__dropdownItemActive"
                            : ""
                        }`}
                        onClick={() => {
                          setSelectedFilter(
                            item
                          );

                          setShowDropdown(
                            false
                          );
                        }}
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* REVIEWS */}

        {activeTab === "reviews" && (

          <div className="review__reviewWrapper">

            {reviews.map((item) => (

              <div
                className="review__card"
                key={item.id}
              >

                {/* STARS */}

                <div className="review__stars">

                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />

                </div>

                {/* USER */}

                <div className="review__userRow">

                  <div className="review__avatar">
                    {item.name.charAt(0)}
                  </div>

                  <div>

                    <div className="review__nameRow">

                      <h3>
                        {item.name}
                      </h3>

                      <span>
                        Verified
                      </span>

                    </div>

                    <p className="review__date">
                      {item.date}
                    </p>

                  </div>
                </div>

                {/* TITLE */}

                <h2 className="review__title">
                  {item.title}
                </h2>

                {/* TEXT */}

                <p className="review__text">
                  {item.review}
                </p>

                {/* IMAGE */}

                <img
                  src={item.image}
                  alt="review"
                  className="review__image"
                />

              </div>
            ))}
          </div>
        )}

      </section>

      {/* QUESTION POPUP */}

      {showQuestionPopup && (

        <div className="review__popupOverlay">

          <div className="review__popup">

            <button
              className="review__closeBtn"
              onClick={() =>
                setShowQuestionPopup(false)
              }
            >
              <FaTimes />
            </button>

            <h2 className="review__popupTitle">
              Ask a question about this
              product
            </h2>

            <div className="review__formGroup">

              <label>
                Question
              </label>

              <textarea
                placeholder="Write your question here"
              />

            </div>

            <div className="review__formGroup">

              <label>
                Email address
                (Required)
              </label>

              <input
                type="email"
                placeholder="Your email address"
              />

            </div>

            <div className="review__formGroup">

              <label>
                Display name
                (Required)
              </label>

              <input
                type="text"
                placeholder="Display name"
              />

            </div>

            <button className="review__submitBtn">
              Next
            </button>

          </div>
        </div>
      )}

      {/* REVIEW POPUP */}

      {showReviewPopup && (

        <div className="review__popupOverlay">

          <div className="review__popup review__reviewPopup">

            <button
              className="review__closeBtn"
              onClick={() =>
                setShowReviewPopup(false)
              }
            >
              <FaTimes />
            </button>

            <h2 className="review__popupTitle">
              How would you rate this
              product?
            </h2>

            <p className="review__popupSubtitle">
              We would love it if you
              would share a bit about your
              experience.
            </p>

            <img
              src={reviewImg}
              alt="product"
              className="review__popupImage"
            />

            <h3 className="review__popupProduct">
              Brass Floral Meenakari
              Pooja Thali (10 Inch)
            </h3>

            <div className="review__popupStars">

              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />

            </div>

            <div className="review__popupLabel">

              <span>
                Poor
              </span>

              <span>
                Great
              </span>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Review;