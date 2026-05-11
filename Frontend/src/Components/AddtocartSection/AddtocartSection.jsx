// AddtocartSection.jsx

import React, { useState } from "react";
import "./AddtocartSection.css";

import {
  FaHeart,
  FaStar,
  FaRegStar,
  FaMinus,
  FaPlus,
  FaTruck,
  FaMapMarkerAlt,
  FaExchangeAlt,
  FaHeadphones,
  FaChevronRight,
  FaTimes,
  FaQuestionCircle,
  FaBoxOpen,
} from "react-icons/fa";

const AddtocartSection = () => {

  const [quantity, setQuantity] =
    useState(1);

  const [showPopup, setShowPopup] =
    useState(false);

  const [showCoupons, setShowCoupons] =
    useState(false);

  // QUANTITY

  const increaseQty = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // ADD TO CART

  const handleAddToCart = () => {
    alert(
      `${quantity} item added to cart`
    );
  };

  // BUY NOW

  const handleBuyNow = () => {
    alert("Proceeding to checkout");
  };

  // COPY COUPON

  const handleCopyCoupon = () => {
    navigator.clipboard.writeText(
      "WELCOME5"
    );

    alert(
      "Coupon copied successfully"
    );
  };

  return (
    <>
      <section className="addtocartSection">

        {/* TOP */}

        <div className="addtocartSection__top">

          <div>

            <h1 className="addtocartSection__title">
              Brass Floral Meenakari
              Pooja Thali (10 Inch)
            </h1>

            {/* RATING */}

            <div className="addtocartSection__ratingRow">

              <span className="addtocartSection__rating">
                5.0
              </span>

              <div className="addtocartSection__stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>

              <span className="addtocartSection__reviews">
                (6)
              </span>

            </div>

            {/* PRICE */}

            <h2 className="addtocartSection__price">
              ₹ 5,899.00
            </h2>

          </div>

          {/* WISHLIST */}

          <button className="addtocartSection__wishlist">
            <FaHeart />
          </button>

        </div>

        {/* QUANTITY */}

        <div className="addtocartSection__quantityArea">

          <h3 className="addtocartSection__quantityTitle">
            Quantity
          </h3>

          <div className="addtocartSection__actionRow">

            {/* QUANTITY BOX */}

            <div className="addtocartSection__quantityBox">

              <button
                onClick={decreaseQty}
                className="addtocartSection__qtyBtn"
              >
                <FaMinus />
              </button>

              <span className="addtocartSection__qtyValue">
                {quantity}
              </span>

              <button
                onClick={increaseQty}
                className="addtocartSection__qtyBtn"
              >
                <FaPlus />
              </button>

            </div>

            {/* ADD TO CART */}

            <button
              className="addtocartSection__cartBtn"
              onClick={handleAddToCart}
            >
              ADD TO CART
            </button>

          </div>

          {/* BUY NOW */}

          <button
            className="addtocartSection__buyBtn"
            onClick={handleBuyNow}
          >
            BUY NOW
          </button>

        </div>

        {/* DELIVERY */}

        <div className="addtocartSection__deliverySection">

          <div className="addtocartSection__deliveryTitle">

            <FaMapMarkerAlt />

            Estimated Delivery Time

          </div>

          <div className="addtocartSection__deliveryGrid">

            {/* CARD */}

            <div className="addtocartSection__deliveryCard">

              <div className="addtocartSection__deliveryIcon">
                <FaTruck />
              </div>

              <div>

                <h4>
                  Mumbai
                  <span>
                    ⚡ Express
                  </span>
                </h4>

                <p>
                  May 13 - May 14
                </p>

              </div>

            </div>

            {/* CARD */}

            <div className="addtocartSection__deliveryCard">

              <div className="addtocartSection__deliveryIcon">
                <FaTruck />
              </div>

              <div>

                <h4>
                  All Over India
                </h4>

                <p>
                  May 15 - May 18
                </p>

              </div>

            </div>

          </div>
        </div>

        {/* COUPON */}

        <div className="addtocartSection__couponWrapper">

          {/* TOP BAR */}

          <div className="addtocartSection__couponTop">

            <div className="addtocartSection__couponLeft">

              <div className="addtocartSection__couponIcon">
                %
              </div>

              <div className="addtocartSection__couponContent">

                <h3>
                  Get this for
                  <span> ₹5,324</span>
                </h3>

                <div className="addtocartSection__saveTag">
                  Save ₹575
                </div>

              </div>

            </div>

            {/* TOGGLE */}

            <button
              className="addtocartSection__couponToggle"
              onClick={() =>
                setShowCoupons(
                  !showCoupons
                )
              }
            >
              {showCoupons
                ? "Hide Coupons"
                : "View Coupons"}

              <span>
                2
              </span>

            </button>

          </div>

          {/* DROPDOWN */}

          {showCoupons && (

            <div className="addtocartSection__couponDropdown">

              {/* CARD 1 */}

              <div className="addtocartSection__couponCard addtocartSection__couponCardActive">

                <div className="addtocartSection__couponBadge">
                  BEST OFFER
                </div>

                <h2>
                  Get 5% Off
                </h2>

                <p>
                  Extra 5% OFF on all
                  Online Payments
                </p>

                <div className="addtocartSection__couponApps">
                  GPay • Paytm • PhonePe
                </div>

              </div>

              {/* CARD 2 */}

              <div className="addtocartSection__couponCard">

                <div className="addtocartSection__couponBadge addtocartSection__couponBadgeOrange">
                  NEW CUSTOMERS
                </div>

                <h2>
                  Get 5% Off
                </h2>

                <p>
                  5% OFF On Your First
                  Order Only
                </p>

                <div className="addtocartSection__couponBottom">

                  <div className="addtocartSection__couponCode">

                    CODE:
                    <span>
                      WELCOME5
                    </span>

                  </div>

                  <button
                    className="addtocartSection__copyBtn"
                    onClick={
                      handleCopyCoupon
                    }
                  >
                    Copy
                  </button>

                </div>

              </div>

            </div>
          )}
        </div>

        {/* BULK DISCOUNT */}

        <div className="addtocartSection__bulkSection">

          <h2 className="addtocartSection__bulkTitle">
            Bulk Discounts
            (Min. Quantity)
          </h2>

          {/* ITEM */}

          <div className="addtocartSection__bulkItem">

            <div>

              <span className="addtocartSection__popular">
                Most popular
              </span>

              <h3>
                Buy 2 get 5% off
              </h3>

              <p>
                on each product
              </p>

            </div>

            <button>
              GRAB THIS DEAL
            </button>

          </div>

          {/* ITEM */}

          <div className="addtocartSection__bulkItem">

            <div>

              <h3>
                Buy 3 get 8% off
              </h3>

              <p>
                on each product
              </p>

            </div>

            <button>
              GRAB THIS DEAL
            </button>

          </div>

          {/* ITEM */}

          <div className="addtocartSection__bulkItem addtocartSection__disabled">

            <div>

              <h3>
                Buy 10 get 10% off
              </h3>

              <p>
                on each product
              </p>

            </div>

            <button>
              GRAB THIS DEAL
            </button>

          </div>

        </div>

        {/* ENQUIRE */}

        <div className="addtocartSection__enquire">

          <div className="addtocartSection__enquireLeft">

            <div className="addtocartSection__enquireIcon">
              📦
            </div>

            <h3>
              Looking for Bulk Pricing
              (30+ Qty)?
            </h3>

          </div>

          <button>
            Enquire Now
          </button>

        </div>

        {/* SHIPPING */}

        <div className="addtocartSection__serviceGrid">

          <div className="addtocartSection__serviceCard">

            <div className="addtocartSection__serviceIcon">
              <FaTruck />
            </div>

            <div>

              <h4>
                Free Shipping
              </h4>

            </div>

          </div>

          <div className="addtocartSection__serviceCard">

            <div className="addtocartSection__serviceIcon">
              <FaExchangeAlt />
            </div>

            <div>

              <h4>
                7 Days Easy Returns
              </h4>

            </div>

          </div>

          <div className="addtocartSection__serviceCard">

            <div className="addtocartSection__serviceIcon">
              <FaMapMarkerAlt />
            </div>

            <div>

              <h4>
                Trusted by
                3,00,000+
              </h4>

            </div>

          </div>

        </div>

        {/* NEED HELP */}

        <div
          className="addtocartSection__help"
          onClick={() =>
            setShowPopup(true)
          }
        >

          <div className="addtocartSection__helpLeft">

            <div className="addtocartSection__helpIcon">
              <FaHeadphones />
            </div>

            <div>

              <h3>
                Need Help?
              </h3>

              <p>
                Get assistance or bulk
                order discounts
              </p>

            </div>

          </div>

          <FaChevronRight />

        </div>

        {/* SKU */}

        <div className="addtocartSection__sku">

          <span>
            SKU:
          </span>

          SVS-PE-THL-4

        </div>

      </section>

      {/* POPUP */}

      {showPopup && (

        <div className="addtocartSection__popupOverlay">

          <div className="addtocartSection__popup">

            {/* HEADER */}

            <div className="addtocartSection__popupHeader">

              <h2>
                How can we help you?
              </h2>

              <button
                onClick={() =>
                  setShowPopup(false)
                }
              >
                <FaTimes />
              </button>

            </div>

            {/* CONTENT */}

            <div className="addtocartSection__popupContent">

              {/* CARD */}

              <div className="addtocartSection__popupCard">

                <div className="addtocartSection__popupIcon">
                  <FaBoxOpen />
                </div>

                <div>

                  <h3>
                    Bulk Order Inquiry
                  </h3>

                  <p>
                    Get special discounts
                    for orders above 30
                    pieces
                  </p>

                </div>

              </div>

              {/* CARD */}

              <div className="addtocartSection__popupCard">

                <div className="addtocartSection__popupIcon">
                  <FaQuestionCircle />
                </div>

                <div>

                  <h3>
                    General Help
                  </h3>

                  <p>
                    Questions about size,
                    delivery, or other
                    details
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      )}
    </>
  );
};

export default AddtocartSection;