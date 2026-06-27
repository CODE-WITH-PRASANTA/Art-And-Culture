import React, { useState } from "react";
import "./ShopDetailsAddToCart.css";

import {
  FiHeart,
  FiMinus,
  FiPlus,
  FiTruck,
  FiMapPin,
  FiCheck,
  FiHeadphones,
  FiArrowRight,
  FiPackage,
  FiRefreshCcw,
} from "react-icons/fi";

const ShopDetailsAddToCart = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("3.5 Inch");

  const increaseQty = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <aside className="sdac">

      {/* PRODUCT HEADER */}

      <div className="sdac__top">

        <div className="sdac__titleWrap">

          <h1 className="sdac__title">
            Svastika Vel Mayil Murugan Idol
            <span>(999 Silver Plated)</span>
          </h1>

          <div className="sdac__ratingRow">
            <span className="sdac__rating">5.0</span>

            <div className="sdac__stars">
              ★★★★★
            </div>

            <span className="sdac__reviews">(14 Reviews)</span>
          </div>

        </div>

        <button className="sdac__wishlist">
          <FiHeart />
        </button>

      </div>

      {/* PRICE */}

      <div className="sdac__priceRow">

        <h2 className="sdac__price">
          ₹ 1,499.00
        </h2>

        <span className="sdac__oldPrice">
          ₹ 1,999.00
        </span>

        <span className="sdac__saveTag">
          Save ₹500
        </span>

      </div>

      {/* SIZE */}

      <div className="sdac__section">

        <h4 className="sdac__label">
          Select Size:
          <span> {selectedSize}</span>
        </h4>

        <div className="sdac__sizeWrap">

          <button
            className={`sdac__sizeBtn ${
              selectedSize === "3.5 Inch" ? "active" : ""
            }`}
            onClick={() => setSelectedSize("3.5 Inch")}
          >
            3.5 Inch
          </button>

          <button
            className={`sdac__sizeBtn ${
              selectedSize === "5 Inch" ? "active" : ""
            }`}
            onClick={() => setSelectedSize("5 Inch")}
          >
            5 Inch
          </button>

        </div>

      </div>

      {/* QUANTITY */}

      <div className="sdac__section">

        <h4 className="sdac__label">
          Quantity
        </h4>

        <div className="sdac__cartRow">

          <div className="sdac__qtyBox">

            <button onClick={decreaseQty}>
              <FiMinus />
            </button>

            <span>{quantity}</span>

            <button onClick={increaseQty}>
              <FiPlus />
            </button>

          </div>

          <button className="sdac__addCartBtn">
            ADD TO CART
          </button>

        </div>

        <button className="sdac__buyNowBtn">
          BUY NOW
          <FiArrowRight />
        </button>

      </div>

      {/* DELIVERY */}

      <div className="sdac__delivery">

        <h4 className="sdac__deliveryTitle">
          <FiMapPin />
          Estimated Delivery Time
        </h4>

        <div className="sdac__deliveryGrid">

          <div className="sdac__deliveryCard">

            <FiTruck />

            <div>
              <h5>
                Mumbai <span>Express</span>
              </h5>

              <p>Jun 26 - Jun 27</p>
            </div>

          </div>

          <div className="sdac__deliveryCard">

            <FiTruck />

            <div>
              <h5>All Over India</h5>

              <p>Jun 28 - Jul 01</p>
            </div>

          </div>

        </div>

      </div>

      {/* COUPON */}

      <div className="sdac__coupon">

        <div className="sdac__couponLeft">

          <div className="sdac__couponIcon">
            %
          </div>

          <div>
            <h4>Get this for ₹1,353</h4>
            <span>Save ₹146</span>
          </div>

        </div>

        <button className="sdac__couponBtn">
          View Coupons
          <strong> 2</strong>
        </button>

      </div>

      {/* BULK ENQUIRY */}

      <div className="sdac__bulk">

        <div className="sdac__bulkLeft">

          <div className="sdac__bulkIcon">
            <FiPackage />
          </div>

          <h4>
            Looking for Bulk Pricing (30+ Qty)?
          </h4>

        </div>

        <button>
          Enquire Now
        </button>

      </div>

      {/* BUYBACK */}

      <div className="sdac__buyback">

        <div className="sdac__buybackTop">

          <div>

            <h3>
              3-Year Buyback Guarantee
              <span> INCLUDED</span>
            </h3>

            <p>
              Crafted with Pure Gold & Silver plating.
            </p>

          </div>

          <div className="sdac__check">
            <FiCheck />
          </div>

        </div>

        <div className="sdac__tags">

          <span>Authenticity Certificate</span>
          <span>100% Purity</span>
          <span>Svastika Trust</span>

        </div>

      </div>

      {/* FEATURES */}

      <div className="sdac__features">

        <div className="sdac__feature">

          <div className="sdac__featureIcon">
            <FiTruck />
          </div>

          <h5>Free Shipping</h5>

        </div>

        <div className="sdac__feature">

          <div className="sdac__featureIcon">
            <FiRefreshCcw />
          </div>

          <h5>7 Days Return</h5>

        </div>

        <div className="sdac__feature">

          <div className="sdac__featureIcon">
            <FiMapPin />
          </div>

          <h5>Trusted by 3L+ Customers</h5>

        </div>

      </div>

      {/* HELP */}

      <div className="sdac__help">

        <div className="sdac__helpLeft">

          <FiHeadphones />

          <div>

            <h4>Need Help?</h4>

            <p>
              Get assistance or bulk discounts
            </p>

          </div>

        </div>

        <FiArrowRight />

      </div>

      {/* SKU */}

      <div className="sdac__sku">

        <span>SKU :</span>

        <strong>
          SVS-IDL-VLMRGN3
        </strong>

      </div>

    </aside>
  );
};

export default ShopDetailsAddToCart;