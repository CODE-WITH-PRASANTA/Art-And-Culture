// Review.jsx

import React, { useState } from "react";
import "./ShopDetailsReviews.css";

import {
  FaStar,
  FaRegStar,
  FaSearch,
  FaFilter,
  FaChevronDown,
  FaTimes,
} from "react-icons/fa";

import reviewImg from "../../assets/poojaph1.webp";

const ShopDetailsReviews = () => {

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

        <div className="shopdetailsreviews_top">

          <div>

            <h2 className="shopdetailsreviews_heading">
              Customer Reviews
            </h2>

            <div className="shopdetailsreviews_ratingRow">

              <span className="shopdetailsreviews_rating">
                4.7
              </span>

              <span className="shopdetailsreviews_count">
                6 reviews
              </span>

            </div>
          </div>

          {/* BUTTONS */}

          <div className="shopdetailsreviews_topButtons">

            <button
              className="shopdetailsreviews_writeBtn"
              onClick={() =>
                setShowReviewPopup(true)
              }
            >
              Write a review
            </button>

            <button
              className="shopdetailsreviews_questionBtn"
              onClick={() =>
                setShowQuestionPopup(true)
              }
            >
              Ask a question
            </button>

          </div>
        </div>

        {/* IMAGE */}

        <div className="shopdetailsreviews_previewImage">

          <img
            src={reviewImg}
            alt="review"
          />

        </div>

        {/* TABS */}

        <div className="shopdetailsreviews_tabsRow">

          <div className="shopdetailsreviews_tabs">

            <button
              className={`shopdetailsreviews_tab ${
                activeTab === "reviews"
                  ? "shopdetailsreviews_tabActive"
                  : ""
              }`}
              onClick={() =>
                setActiveTab("reviews")
              }
            >
              Reviews (6)
            </button>

            <button
              className={`shopdetailsreviews_tab ${
                activeTab === "questions"
                  ? "shopdetailsreviews_tabActive"
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

          <div className="shopdetailsreviews_filterArea">

            <button className="shopdetailsreviews_iconBtn">
              <FaSearch />
            </button>

            <button className="shopdetailsreviews_iconBtn">
              <FaFilter />
            </button>

            <div className="shopdetailsreviews_dropdownWrapper">

              <button
                className="shopdetailsreviews_dropdownBtn"
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

                <div className="shopdetailsreviews_dropdownMenu">

                  {filterOptions.map(
                    (item, index) => (

                      <div
                        key={index}
                        className={`shopdetailsreviews_dropdownItem ${
                          selectedFilter ===
                          item
                            ? "shopdetailsreviews_dropdownItemActive"
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

          <div className="shopdetailsreviews_reviewWrapper">

            {reviews.map((item) => (

              <div
                className="shopdetailsreviews_card"
                key={item.id}
              >

                {/* STARS */}

                <div className="shopdetailsreviews_stars">

                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />

                </div>

                {/* USER */}

                <div className="shopdetailsreviews_userRow">

                  <div className="shopdetailsreviews_avatar">
                    {item.name.charAt(0)}
                  </div>

                  <div>

                    <div className="shopdetailsreviews_nameRow">

                      <h3>
                        {item.name}
                      </h3>

                      <span>
                        Verified
                      </span>

                    </div>

                    <p className="shopdetailsreviews_date">
                      {item.date}
                    </p>

                  </div>
                </div>

                {/* TITLE */}

                <h2 className="shopdetailsreviews_title">
                  {item.title}
                </h2>

                {/* TEXT */}

                <p className="shopdetailsreviews_text">
                  {item.review}
                </p>

                {/* IMAGE */}

                <img
                  src={item.image}
                  alt="review"
                  className="shopdetailsreviews_image"
                />

              </div>
            ))}
          </div>
        )}

      </section>

      {/* QUESTION POPUP */}

      {showQuestionPopup && (

        <div className="shopdetailsreviews_popupOverlay">

          <div className="shopdetailsreviews_popup">

            <button
              className="shopdetailsreviews_closeBtn"
              onClick={() =>
                setShowQuestionPopup(false)
              }
            >
              <FaTimes />
            </button>

            <h2 className="shopdetailsreviews_popupTitle">
              Ask a question about this
              product
            </h2>

            <div className="shopdetailsreviews_formGroup">

              <label>
                Question
              </label>

              <textarea
                placeholder="Write your question here"
              />

            </div>

            <div className="shopdetailsreviews_formGroup">

              <label>
                Email address
                (Required)
              </label>

              <input
                type="email"
                placeholder="Your email address"
              />

            </div>

            <div className="shopdetailsreviews_formGroup">

              <label>
                Display name
                (Required)
              </label>

              <input
                type="text"
                placeholder="Display name"
              />

            </div>

            <button className="shopdetailsreviews_submitBtn">
              Next
            </button>

          </div>
        </div>
      )}

      {/* REVIEW POPUP */}

      {showReviewPopup && (

        <div className="shopdetailsreviews_popupOverlay">

          <div className="shopdetailsreviews_popup shopdetailsreviews_reviewPopup">

            <button
              className="shopdetailsreviews_closeBtn"
              onClick={() =>
                setShowReviewPopup(false)
              }
            >
              <FaTimes />
            </button>

            <h2 className="shopdetailsreviews_popupTitle">
              How would you rate this
              product?
            </h2>

            <p className="shopdetailsreviews_popupSubtitle">
              We would love it if you
              would share a bit about your
              experience.
            </p>

            <img
              src={reviewImg}
              alt="product"
              className="shopdetailsreviews_popupImage"
            />

            <h3 className="shopdetailsreviews_popupProduct">
              Brass Floral Meenakari
              Pooja Thali (10 Inch)
            </h3>

            <div className="shopdetailsreviews_popupStars">

              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />

            </div>

            <div className="shopdetailsreviews_popupLabel">

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

export default ShopDetailsReviews;