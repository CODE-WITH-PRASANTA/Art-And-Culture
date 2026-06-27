import React, { useState } from "react";
import "./CustomerReviews.css";

import {
  FaStar,
  FaRegStar,
  FaSearch,
  FaFilter,
  FaChevronDown,
  FaTimes,
} from "react-icons/fa";

import reviewImg from "../../assets/cos 1.avif";
import productImg from "../../assets/alr.png";

const CustomerReviews = () => {
  const [activeTab, setActiveTab] = useState("reviews");
  const [showQuestion, setShowQuestion] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [rating, setRating] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Parimala S Maroor",
      date: "18/03/2024",
      title: "Meenakshi Handwork Brass Pooja Thali Set",
      text: "Wonderful.",
      image: reviewImg,
    },
    {
      id: 2,
      name: "Sonal Patel",
      date: "06/01/2026",
      title: "",
      text: "Ohh i just loved it. I bought it to gift to my younger sister marriage as shagun and she also loved it.",
    },
    {
      id: 3,
      name: "Priyanka Mishra",
      date: "27/08/2024",
      title: "meenakari pooja thali",
      text: "The pooja thali I received was exactly the same as the photo on the website.",
    },
    {
      id: 4,
      name: "anushree",
      date: "20/08/2024",
      title: "best product",
      text: "This meenakari pooja thali is elegant and sturdy. Perfect for pooja and festive occasions.",
    },
    {
      id: 5,
      name: "Princy",
      date: "07/11/2023",
      title: "",
      text: "Brass Pooja Thali Set with Intricate Floral Patterns",
    },
    {
      id: 6,
      name: "T.H.P.",
      date: "29/04/2024",
      title: "Best Gift",
      text: "This is such a thoughtful gift. Thank you so much.",
    },
  ];

  return (
    <>
      <section className="customerreviews">

        {/* Top Section */}

        <div className="customerreviews_top">

          <div className="customerreviews_info">

            <h2>Customer Reviews</h2>

            <div className="customerreviews_ratingbox">
              <h3>4.7</h3>
              <span>6 reviews</span>
            </div>

            <img src={reviewImg} alt="review" />

          </div>

          <div className="customerreviews_buttons">

            <button
              className="customerreviews_reviewbtn"
              onClick={() => setShowReview(true)}
            >
              Write a review
            </button>

            <button
              className="customerreviews_questionbtn"
              onClick={() => setShowQuestion(true)}
            >
              Ask a question
            </button>

          </div>

        </div>

        {/* Tabs */}

        <div className="customerreviews_tabs">

          <button
            className={activeTab === "reviews" ? "active" : ""}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews (6)
          </button>

          <button
            className={activeTab === "questions" ? "active" : ""}
            onClick={() => setActiveTab("questions")}
          >
            Questions (0)
          </button>

        </div>

        {activeTab === "questions" ? (
          <div className="customerreviews_questions">

            <h3>Ask a question about this product</h3>

            <button onClick={() => setShowQuestion(true)}>
              Ask a question
            </button>

          </div>
        ) : (
          <>
            {/* Toolbar */}

            <div className="customerreviews_toolbar">

              <button
                className="iconbtn"
                onClick={() => setShowSearch(!showSearch)}
              >
                <FaSearch />
              </button>

              <button
                className="iconbtn"
                onClick={() => setShowFilter(!showFilter)}
              >
                <FaFilter />
              </button>

              <div className="customerreviews_dropdown">

                <button
                  className="dropdown_btn"
                  onClick={() => setDropdown(!dropdown)}
                >
                  Pictures first
                  <FaChevronDown
                    className={dropdown ? "rotate" : ""}
                  />
                </button>

                {dropdown && (
                  <ul className="dropdown_menu">
                    <li>Most recent</li>
                    <li>Highest rating</li>
                    <li>Lowest rating</li>
                    <li>Only pictures</li>
                    <li>Pictures first</li>
                    <li>Videos first</li>
                    <li>Most helpful</li>
                  </ul>
                )}

              </div>

            </div>

            {/* Search */}

            {showSearch && (
              <div className="customerreviews_search">

                <FaSearch />

                <input
                  type="text"
                  placeholder="Search"
                />

              </div>
            )}

            {/* Filter */}

            {showFilter && (
              <div className="customerreviews_filter">

                <h3>Filters</h3>

                <h4>Rating</h4>

                <div className="rating_filter">

                  {[1, 2, 3, 4, 5].map((item) => (
                    <button key={item}>
                      {item} ★
                    </button>
                  ))}

                </div>

              </div>
            )}

            {/* Reviews Grid */}

            <div className="customerreviews_grid">

              {reviews.map((item) => (
                <div
                  className="customerreviews_card"
                  key={item.id}
                >

                  <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                  </div>

                  <h4>{item.name}</h4>

                  <span>{item.date}</span>

                  {item.title && (
                    <h3>{item.title}</h3>
                  )}

                  <p>{item.text}</p>

                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                    />
                  )}

                </div>
              ))}

            </div>
          </>
        )}
      </section>

      {/* Ask Question Modal */}

      {showQuestion && (
        <div className="customerreviews_modal">

          <div className="customerreviews_popup">

            <FaTimes
              className="close"
              onClick={() => setShowQuestion(false)}
            />

            <h2>Ask a question about this product</h2>

            <textarea
              placeholder="Write your question here"
            />

            <input
              type="email"
              placeholder="Your email address"
            />

            <input
              type="text"
              placeholder="Display name"
            />

            <button>
              Next
            </button>

          </div>

        </div>
      )}

      {/* Review Modal */}

      {showReview && (
        <div className="customerreviews_modal">

          <div className="customerreviews_popup reviewpopup">

            <FaTimes
              className="close"
              onClick={() => setShowReview(false)}
            />

            <h2>
              How would you rate this product?
            </h2>

            <p>
              We would love it if you would share a bit
              about your experience.
            </p>

            <img
              src={productImg}
              alt="product"
            />

            <h3>
              Brass Floral Meenakari Pooja Thali
            </h3>

            <div className="reviewstars">

              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  onClick={() => setRating(star)}
                  className={
                    star <= rating
                      ? "activeStar"
                      : ""
                  }
                />
              ))}

            </div>

          </div>

        </div>
      )}
    </>
  );
};

export default CustomerReviews;