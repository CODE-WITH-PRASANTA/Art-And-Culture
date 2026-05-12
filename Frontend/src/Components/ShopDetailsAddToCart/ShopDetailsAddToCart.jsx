// shopdetailsaddtocart.jsx

import React, { useState } from "react";
import "./ShopDetailsAddToCart.css";

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

const ShopDetailsAddToCart = () => {

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
      <section className="shopdetailsaddtocart">

        {/* TOP */}

        <div className="shopdetailsaddtocart__top">

          <div>

            <h1 className="shopdetailsaddtocart__title">
              Brass Floral Meenakari
              Pooja Thali (10 Inch)
            </h1>

            {/* RATING */}

            <div className="shopdetailsaddtocart__ratingRow">

              <span className="shopdetailsaddtocart__rating">
                5.0
              </span>

              <div className="shopdetailsaddtocart__stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>

              <span className="shopdetailsaddtocart__reviews">
                (6)
              </span>

            </div>

            {/* PRICE */}

            <h2 className="shopdetailsaddtocart__price">
              ₹ 5,899.00
            </h2>

          </div>

          {/* WISHLIST */}

          <button className="shopdetailsaddtocart__wishlist">
            <FaHeart />
          </button>

        </div>

        {/* QUANTITY */}

        <div className="shopdetailsaddtocart__quantityArea">

          <h3 className="shopdetailsaddtocart__quantityTitle">
            Quantity
          </h3>

          <div className="shopdetailsaddtocart__actionRow">

            {/* QUANTITY BOX */}

            <div className="shopdetailsaddtocart__quantityBox">

              <button
                onClick={decreaseQty}
                className="shopdetailsaddtocart__qtyBtn"
              >
                <FaMinus />
              </button>

              <span className="shopdetailsaddtocart__qtyValue">
                {quantity}
              </span>

              <button
                onClick={increaseQty}
                className="shopdetailsaddtocart__qtyBtn"
              >
                <FaPlus />
              </button>

            </div>

            {/* ADD TO CART */}

            <button
              className="shopdetailsaddtocart__cartBtn"
              onClick={handleAddToCart}
            >
              ADD TO CART
            </button>

          </div>

          {/* BUY NOW */}

          <button
            className="shopdetailsaddtocart__buyBtn"
            onClick={handleBuyNow}
          >
            BUY NOW
          </button>

        </div>

        {/* DELIVERY */}

        <div className="shopdetailsaddtocart__deliverySection">

          <div className="shopdetailsaddtocart__deliveryTitle">

            <FaMapMarkerAlt />

            Estimated Delivery Time

          </div>

          <div className="shopdetailsaddtocart__deliveryGrid">

            {/* CARD */}

            <div className="shopdetailsaddtocart__deliveryCard">

              <div className="shopdetailsaddtocart__deliveryIcon">
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

            <div className="shopdetailsaddtocart__deliveryCard">

              <div className="shopdetailsaddtocart__deliveryIcon">
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

        <div className="shopdetailsaddtocart__couponWrapper">

          {/* TOP BAR */}

          <div className="shopdetailsaddtocart__couponTop">

            <div className="shopdetailsaddtocart__couponLeft">

              <div className="shopdetailsaddtocart__couponIcon">
                %
              </div>

              <div className="shopdetailsaddtocart__couponContent">

                <h3>
                  Get this for
                  <span> ₹5,324</span>
                </h3>

                <div className="shopdetailsaddtocart__saveTag">
                  Save ₹575
                </div>

              </div>

            </div>

            {/* TOGGLE */}

            <button
              className="shopdetailsaddtocart__couponToggle"
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

            <div className="shopdetailsaddtocart__couponDropdown">

              {/* CARD 1 */}

              <div className="shopdetailsaddtocart__couponCard shopdetailsaddtocart__couponCardActive">

                <div className="shopdetailsaddtocart__couponBadge">
                  BEST OFFER
                </div>

                <h2>
                  Get 5% Off
                </h2>

                <p>
                  Extra 5% OFF on all
                  Online Payments
                </p>

                <div className="shopdetailsaddtocart__couponApps">
                  GPay • Paytm • PhonePe
                </div>

              </div>

              {/* CARD 2 */}

              <div className="shopdetailsaddtocart__couponCard">

                <div className="shopdetailsaddtocart__couponBadge shopdetailsaddtocart__couponBadgeOrange">
                  NEW CUSTOMERS
                </div>

                <h2>
                  Get 5% Off
                </h2>

                <p>
                  5% OFF On Your First
                  Order Only
                </p>

                <div className="shopdetailsaddtocart__couponBottom">

                  <div className="shopdetailsaddtocart__couponCode">

                    CODE:
                    <span>
                      WELCOME5
                    </span>

                  </div>

                  <button
                    className="shopdetailsaddtocart__copyBtn"
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

        <div className="shopdetailsaddtocart__bulkSection">

          <h2 className="shopdetailsaddtocart__bulkTitle">
            Bulk Discounts
            (Min. Quantity)
          </h2>

          {/* ITEM */}

          <div className="shopdetailsaddtocart__bulkItem">

            <div>

              <span className="shopdetailsaddtocart__popular">
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

          <div className="shopdetailsaddtocart__bulkItem">

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

          <div className="shopdetailsaddtocart__bulkItem shopdetailsaddtocart__disabled">

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

        <div className="shopdetailsaddtocart__enquire">

          <div className="shopdetailsaddtocart__enquireLeft">

            <div className="shopdetailsaddtocart__enquireIcon">
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

        <div className="shopdetailsaddtocart__serviceGrid">

          <div className="shopdetailsaddtocart__serviceCard">

            <div className="shopdetailsaddtocart__serviceIcon">
              <FaTruck />
            </div>

            <div>

              <h4>
                Free Shipping
              </h4>

            </div>

          </div>

          <div className="shopdetailsaddtocart__serviceCard">

            <div className="shopdetailsaddtocart__serviceIcon">
              <FaExchangeAlt />
            </div>

            <div>

              <h4>
                7 Days Easy Returns
              </h4>

            </div>

          </div>

          <div className="shopdetailsaddtocart__serviceCard">

            <div className="shopdetailsaddtocart__serviceIcon">
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
          className="shopdetailsaddtocart__help"
          onClick={() =>
            setShowPopup(true)
          }
        >

          <div className="shopdetailsaddtocart__helpLeft">

            <div className="shopdetailsaddtocart__helpIcon">
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

        <div className="shopdetailsaddtocart__sku">

          <span>
            SKU:
          </span>

          SVS-PE-THL-4

        </div>

      </section>

      {/* POPUP */}

      {showPopup && (

        <div className="shopdetailsaddtocart__popupOverlay">

          <div className="shopdetailsaddtocart__popup">

            {/* HEADER */}

            <div className="shopdetailsaddtocart__popupHeader">

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

            <div className="shopdetailsaddtocart__popupContent">

              {/* CARD */}

              <div className="shopdetailsaddtocart__popupCard">

                <div className="shopdetailsaddtocart__popupIcon">
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

              <div className="shopdetailsaddtocart__popupCard">

                <div className="shopdetailsaddtocart__popupIcon">
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

export default ShopDetailsAddToCart;