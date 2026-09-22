import React, { useState } from "react";
import {
  Heart,
  Eye,
  Star,
  ChevronRight,
  ShoppingBag,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Wishlist.css";

/* =========================================================
   DUMMY WISHLIST DATA
========================================================= */

const INITIAL_WISHLIST = [
  {
    id: 1,
    title: "Dagdusheth Halwai Ganpati Murti - Gold Plated",
    image:
      "https://images.unsplash.com/photo-1609511853151-e5227490f899?auto=format&fit=crop&w=700&q=85",
    discount: "SAVE UP TO 26%",
    rating: 5.0,
    price: "2,199.00",
    oldPrice: "2,999.00",
    category: "Ganpati Idol",
  },

  {
    id: 2,
    title: "Silver Plated Kamdhenu Cow with Calf Idol",
    image:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=700&q=85",
    discount: "SAVE UP TO 26%",
    rating: 5.0,
    price: "2,199.00",
    oldPrice: "2,999.00",
    category: "Kamdhenu Idol",
  },

  {
    id: 3,
    title: "Lord Balaji Venkateswara Premium Idol",
    image:
      "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?auto=format&fit=crop&w=700&q=85",
    discount: "SAVE UP TO 20%",
    rating: 5.0,
    price: "1,899.00",
    oldPrice: "2,499.00",
    category: "Balaji Idol",
  },

  {
    id: 4,
    title: "Beautiful Krishna Flute Decorative Idol",
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01988d5?auto=format&fit=crop&w=700&q=85",
    discount: "SAVE UP TO 18%",
    rating: 4.9,
    price: "1,499.00",
    oldPrice: "1,999.00",
    category: "Krishna Idol",
  },

  {
    id: 5,
    title: "Goddess Lakshmi Gold Finish Decorative Idol",
    image:
      "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=700&q=85",
    discount: "SAVE UP TO 25%",
    rating: 5.0,
    price: "2,499.00",
    oldPrice: "3,299.00",
    category: "Lakshmi Idol",
  },

  {
    id: 6,
    title: "Lord Shiva Meditation Premium Brass Idol",
    image:
      "https://images.unsplash.com/photo-1535366552623-0f0c6f3c6d8b?auto=format&fit=crop&w=700&q=85",
    discount: "SAVE UP TO 15%",
    rating: 4.9,
    price: "1,799.00",
    oldPrice: "2,199.00",
    category: "Shiva Idol",
  },
];


/* =========================================================
   COMPONENT
========================================================= */

const Wishlist = () => {
  const navigate = useNavigate();

  const [wishlistItems, setWishlistItems] =
    useState(INITIAL_WISHLIST);

  /* =====================================================
     REMOVE PRODUCT
  ===================================================== */

  const handleRemoveWish = (id) => {
    setWishlistItems((items) =>
      items.filter((item) => item.id !== id)
    );
  };


  /* =====================================================
     HOME
  ===================================================== */

  const handleHomeClick = () => {
    navigate("/");
  };


  /* =====================================================
     SHOP
  ===================================================== */

  const handleShopping = () => {
    navigate("/shop");
  };


  /* =====================================================
     SELECT OPTIONS
  ===================================================== */

  const handleProductClick = (product) => {
    console.log("Selected product:", product);
  };


  return (
    <main className="wishlist-page">

      {/* =================================================
          BACKGROUND DECORATION
      ================================================= */}

      <div className="wishlist-bg-pattern"></div>


      {/* =================================================
          HEADER
      ================================================= */}

      <section className="wishlist-header">

        <div className="wishlist-heading-decoration">

          <span className="heading-line"></span>

          <span className="heading-diamond">
            ◆
          </span>

          <span className="heading-line"></span>

        </div>


        <h1 className="wishlist-title">
          Wishlist
        </h1>


        <div className="wishlist-breadcrumb">

          <button
            type="button"
            className="breadcrumb-home"
            onClick={handleHomeClick}
          >
            Home
          </button>

          <ChevronRight
            size={13}
            strokeWidth={1.5}
          />

          <span>
            Wishlist
          </span>

        </div>

      </section>


      {/* =================================================
          PRODUCT AREA
      ================================================= */}

      {wishlistItems.length > 0 ? (

        <section className="wishlist-products-section">

          <div className="wishlist-products">

            {wishlistItems.map((product) => (

              <article
                className="wishlist-product-card"
                key={product.id}
              >

                {/* =========================================
                    IMAGE
                ========================================= */}

                <div className="wishlist-image-box">

                  {/* DISCOUNT */}

                  <div className="wishlist-discount">
                    {product.discount}
                  </div>


                  {/* IMAGE */}

                  <img
                    src={product.image}
                    alt={product.title}
                    className="wishlist-product-image"
                  />


                  {/* IMAGE OVERLAY */}

                  <div className="wishlist-image-overlay"></div>


                  {/* ACTION BUTTONS */}

                  <div className="wishlist-actions">

                    <button
                      type="button"
                      className="wishlist-action wishlist-heart"
                      onClick={() =>
                        handleRemoveWish(product.id)
                      }
                      aria-label="Remove from wishlist"
                    >

                      <Heart
                        size={18}
                        strokeWidth={1.6}
                        fill="currentColor"
                      />

                    </button>


                    <button
                      type="button"
                      className="wishlist-action"
                      aria-label="Quick view"
                    >

                      <Eye
                        size={18}
                        strokeWidth={1.6}
                      />

                    </button>

                  </div>


                  {/* SELECT OPTIONS */}

                  <div className="wishlist-option-area">

                    <button
                      type="button"
                      className="wishlist-option-button"
                      onClick={() =>
                        handleProductClick(product)
                      }
                    >

                      <span>
                        SELECT OPTIONS
                      </span>

                      <ChevronRight
                        size={14}
                        strokeWidth={1.5}
                      />

                    </button>

                  </div>

                </div>


                {/* =========================================
                    DETAILS
                ========================================= */}

                <div className="wishlist-product-details">

                  {/* CATEGORY */}

                  <span className="wishlist-category">
                    {product.category}
                  </span>


                  {/* TITLE */}

                  <h2 className="wishlist-product-title">
                    {product.title}
                  </h2>


                  {/* RATING */}

                  <div className="wishlist-rating">

                    <span className="wishlist-rating-number">
                      {product.rating.toFixed(1)}
                    </span>


                    <div className="wishlist-stars">

                      {[...Array(5)].map(
                        (_, index) => (

                          <Star
                            key={index}
                            size={13}
                            strokeWidth={0}
                            fill="#C99A55"
                          />

                        )
                      )}

                    </div>

                  </div>


                  {/* PRICE */}

                  <div className="wishlist-price">

                    <span className="wishlist-from">
                      From
                    </span>

                    <span className="wishlist-current-price">
                      ₹ {product.price}
                    </span>

                    <span className="wishlist-old-price">
                      ₹ {product.oldPrice}
                    </span>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </section>

      ) : (

        /* =================================================
           EMPTY WISHLIST
        ================================================= */

        <section className="wishlist-empty">

          <div className="empty-icon">
            <Heart
              size={38}
              strokeWidth={1}
            />
          </div>

          <h2>
            Your Wishlist is Empty
          </h2>

          <p>
            Save your favourite divine idols here
            and discover them whenever you wish.
          </p>

          <button
            type="button"
            onClick={handleShopping}
            className="empty-shopping-button"
          >

            <ShoppingBag
              size={17}
              strokeWidth={1.6}
            />

            Continue Shopping

          </button>

        </section>

      )}

    </main>
  );
};

export default Wishlist;