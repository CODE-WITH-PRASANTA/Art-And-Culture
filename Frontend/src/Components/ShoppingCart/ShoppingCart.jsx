import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ShoppingCart.css";

import {
  FaMinus,
  FaPlus,
} from "react-icons/fa";

const ShoppingCart = () => {

  const [qty, setQty] = useState(1);

  return (
    <div className="Shoppingcart">

      {/* =========================================
          TOP
      ========================================= */}

      <div className="Shoppingcart__top">

        <h1>Shopping Cart</h1>

<div className="Shoppingcart__breadcrumb">

  <Link
    to="/"
    className="Shoppingcart__breadcrumbLink"
  >
    Home
  </Link>

  <span>›</span>

  <span>Your Shopping Cart</span>

</div>

      </div>

      {/* =========================================
          TABLE HEADER
      ========================================= */}

      <div className="Shoppingcart__header">

        <h4>Product</h4>

        <h4>Price</h4>

        <h4>Quantity</h4>

        <h4>Total</h4>

      </div>

      {/* =========================================
          CART BODY
      ========================================= */}

      <div className="Shoppingcart__body">

        {/* PRODUCT */}

        <div className="Shoppingcart__product">

          <img
            src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1200&auto=format&fit=crop"
            alt=""
          />

          <div className="Shoppingcart__productContent">

            <h3>
              Brass Floral Meenakari
              Pooja Thali (10 Inch)
            </h3>

            <button className="Shoppingcart__removeBtn">
              Remove
            </button>

          </div>

        </div>

        {/* PRICE */}

        <div className="Shoppingcart__priceArea">

          <p className="Shoppingcart__price">
            ₹ 5,899.00
          </p>

        </div>

        {/* QUANTITY */}

        <div className="Shoppingcart__qtyArea">

          <div className="Shoppingcart__qtyBox">

            <button
              onClick={() =>
                setQty(qty > 1 ? qty - 1 : 1)
              }
            >
              <FaMinus />
            </button>

            <span>{qty}</span>

            <button onClick={() => setQty(qty + 1)}>
              <FaPlus />
            </button>

          </div>

        </div>

        {/* TOTAL */}

        <div className="Shoppingcart__totalArea">

          <p className="Shoppingcart__total">
            ₹ 5,899.00
          </p>

        </div>

      </div>

      {/* =========================================
          SUMMARY
      ========================================= */}

      <div className="Shoppingcart__summary">

        {/* GIFT */}

        <div className="Shoppingcart__gift">

          <input type="checkbox" />

          <p>
            Add Gift wrap for <span>₹ 64.00</span> each
          </p>

        </div>

        {/* SUBTOTAL */}

        <div className="Shoppingcart__subtotal">

          <h3>Subtotal</h3>

          <span>₹ 5,899.00</span>

        </div>

        <p className="Shoppingcart__tax">
          Tax included. Shipping calculated at checkout.
        </p>

        {/* BUTTON */}

        <button className="Shoppingcart__buyBtn">
          BUY NOW
        </button>

        {/* FEATURES */}

        <div className="Shoppingcart__features">

          <div className="Shoppingcart__feature">

            <div className="Shoppingcart__featureIcon">
              📦
            </div>

            <p>7 Days Easy Returns</p>

          </div>

          <div className="Shoppingcart__feature">

            <div className="Shoppingcart__featureIcon">
              ❤️
            </div>

            <p>24/7 Support</p>

          </div>

          <div className="Shoppingcart__feature">

            <div className="Shoppingcart__featureIcon">
              💳
            </div>

            <p>Secure Payments</p>

          </div>

        </div>

      </div>

{/* =========================================
    RECENTLY VIEWED
========================================= */}

<div className="Shoppingcart__recent">

  <h2>Recently Viewed Products</h2>

  <div className="Shoppingcart__recentGrid">

    {/* CARD */}

    <div className="Shoppingcart__recentCard">

      {/* IMAGE */}

      <div className="Shoppingcart__recentImageWrapper">

        <img
          src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1200&auto=format&fit=crop"
          alt=""
        />

        <span className="Shoppingcart__recentBadge">
          10% OFF
        </span>

      </div>

      {/* CONTENT */}

      <div className="Shoppingcart__recentContent">

        <h3>
          Brass Floral Meenakari
          Pooja Thali (10 Inch)
        </h3>

        {/* RATING */}

        <div className="Shoppingcart__recentRating">

          <span>5.0</span>

          <div className="Shoppingcart__recentStars">
            ★ ★ ★ ★ ☆
          </div>

          <p>(12)</p>

        </div>

        {/* PRICE */}

        <div className="Shoppingcart__recentPriceRow">

          <h4>₹ 5,899.00</h4>

          <span>₹ 6,499.00</span>

        </div>

        {/* BUTTON */}

        <button className="Shoppingcart__recentBtn">
          Add To Cart
        </button>

      </div>

    </div>

  </div>

</div>

    </div>
  );
};

export default ShoppingCart;