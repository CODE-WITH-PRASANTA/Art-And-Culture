// ShopDetailsAddToCart.jsx

import React, {
  useEffect,
  useState,
} from "react";

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

import API from "../../api/axios";

import { useParams } from "react-router-dom";

const ShopDetailsAddToCart = () => {

  /* ================= PRODUCT ID ================= */

  const { id } = useParams();

  /* ================= STATES ================= */

  const [quantity, setQuantity] =
    useState(1);

  const [showPopup, setShowPopup] =
    useState(false);

  const [showCoupons, setShowCoupons] =
    useState(false);

  const [product, setProduct] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  /* ================= FETCH PRODUCT ================= */

 useEffect(() => {

  if (!id) {
    setLoading(false);
    return;
  }

  const fetchProduct = async () => {

    try {

      const res = await API.get(
        `/products/${id}`
      );

      setProduct(res.data.data);

    } catch (error) {

      console.error(
        "Failed to fetch product",
        error
      );

    } finally {

      setLoading(false);

    }
  };

  fetchProduct();

}, [id]);

  /* ================= QUANTITY ================= */

  const increaseQty = () => {

    setQuantity(quantity + 1);

  };

  const decreaseQty = () => {

    if (quantity > 1) {

      setQuantity(quantity - 1);

    }
  };

  /* ================= ADD TO CART ================= */

  const handleAddToCart = () => {

    alert(
      `${quantity} item added to cart`
    );

  };

  /* ================= BUY NOW ================= */

  const handleBuyNow = () => {

    alert("Proceeding to checkout");

  };

  /* ================= COPY COUPON ================= */

  const handleCopyCoupon = () => {

    navigator.clipboard.writeText(
      "WELCOME5"
    );

    alert(
      "Coupon copied successfully"
    );

  };

  /* ================= LOADING ================= */

  if (loading) {

    return (
      <div className="shopdetailsaddtocart__loading">

        Loading...

      </div>
    );

  }

  /* ================= NO PRODUCT ================= */

  if (!product) {

    return (
      <div className="shopdetailsaddtocart__loading">

        Product Not Found

      </div>
    );

  }

  /* ================= PRICE ================= */

  const finalPrice =
    product.discount > 0
      ? product.price -
        (
          product.price *
          product.discount
        ) /
          100
      : product.price;

  return (
    <>
      <section className="shopdetailsaddtocart">

        {/* ================= TOP ================= */}

        <div className="shopdetailsaddtocart__top">

          <div>

            {/* TITLE */}

            <h1 className="shopdetailsaddtocart__title">

              {product.title}

            </h1>

            {/* RATING */}

            <div className="shopdetailsaddtocart__ratingRow">

              <span className="shopdetailsaddtocart__rating">

                {product.rating || 0}

              </span>

              <div className="shopdetailsaddtocart__stars">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />

              </div>

              <span className="shopdetailsaddtocart__reviews">

                ({product.stock || 0})

              </span>

            </div>

            {/* PRICE */}

            <h2 className="shopdetailsaddtocart__price">

              ₹ {finalPrice}

            </h2>

          </div>

          {/* WISHLIST */}

          <button className="shopdetailsaddtocart__wishlist">

            <FaHeart />

          </button>

        </div>

        {/* ================= QUANTITY ================= */}

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

        {/* ================= DELIVERY ================= */}

        <div className="shopdetailsaddtocart__deliverySection">

          <div className="shopdetailsaddtocart__deliveryTitle">

            <FaMapMarkerAlt />

            Estimated Delivery Time

          </div>

          <div className="shopdetailsaddtocart__deliveryGrid">

            {/* EXPRESS */}

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

                  {product.expressDelivery ||
                    "2-3 Days"}

                </p>

              </div>

            </div>

            {/* INDIA */}

            <div className="shopdetailsaddtocart__deliveryCard">

              <div className="shopdetailsaddtocart__deliveryIcon">

                <FaTruck />

              </div>

              <div>

                <h4>
                  All Over India
                </h4>

                <p>

                  {product.indiaDelivery ||
                    "5-7 Days"}

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* ================= COUPON ================= */}

        <div className="shopdetailsaddtocart__couponWrapper">

          <div className="shopdetailsaddtocart__couponTop">

            <div className="shopdetailsaddtocart__couponLeft">

              <div className="shopdetailsaddtocart__couponIcon">

                %

              </div>

              <div className="shopdetailsaddtocart__couponContent">

                <h3>

                  Get this for

                  <span>
                    ₹ {finalPrice}
                  </span>

                </h3>

                <div className="shopdetailsaddtocart__saveTag">

                  Save ₹
                  {product.price -
                    finalPrice}

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

              {/* CARD */}

              <div className="shopdetailsaddtocart__couponCard">

                <div className="shopdetailsaddtocart__couponBadge">

                  BEST OFFER

                </div>

                <h2>
                  Get 5% Off
                </h2>

                <p>
                  Extra 5% OFF on all Online Payments
                </p>

                <div className="shopdetailsaddtocart__couponApps">

                  GPay • Paytm • PhonePe

                </div>

              </div>

              {/* CARD */}

              <div className="shopdetailsaddtocart__couponCard">

                <div className="shopdetailsaddtocart__couponBadge shopdetailsaddtocart__couponBadgeOrange">

                  NEW CUSTOMERS

                </div>

                <h2>
                  Get 5% Off
                </h2>

                <p>
                  5% OFF On Your First Order
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

        {/* ================= BULK DISCOUNT ================= */}

        <div className="shopdetailsaddtocart__bulkSection">

          <h2 className="shopdetailsaddtocart__bulkTitle">

            Bulk Discounts
            (Min. Quantity)

          </h2>

          {product.quantityDiscounts &&
            product.quantityDiscounts.map(
              (item, index) => (

                <div
                  key={index}
                  className="shopdetailsaddtocart__bulkItem"
                >

                  <div>

                    {index === 0 && (

                      <span className="shopdetailsaddtocart__popular">

                        Most popular

                      </span>
                    )}

                    <h3>

                      Buy {item.quantity}
                      {" "}get{" "}
                      {item.discount}% off

                    </h3>

                    <p>
                      on each product
                    </p>

                  </div>

                  <button>

                    GRAB THIS DEAL

                  </button>

                </div>
              )
            )}

        </div>

        {/* ================= ENQUIRE ================= */}

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

        {/* ================= SHIPPING ================= */}

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
                Trusted by 3,00,000+
              </h4>

            </div>

          </div>

        </div>

        {/* ================= HELP ================= */}

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
                Get assistance or bulk order discounts
              </p>

            </div>

          </div>

          <FaChevronRight />

        </div>

        {/* ================= SKU ================= */}

        <div className="shopdetailsaddtocart__sku">

          <span>
            SKU:
          </span>

          {product.sku || "N/A"}

        </div>

      </section>

      {/* ================= POPUP ================= */}

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

              <div className="shopdetailsaddtocart__popupCard">

                <div className="shopdetailsaddtocart__popupIcon">

                  <FaBoxOpen />

                </div>

                <div>

                  <h3>
                    Bulk Order Inquiry
                  </h3>

                  <p>
                    Get discounts for orders above 30 pieces
                  </p>

                </div>

              </div>

              <div className="shopdetailsaddtocart__popupCard">

                <div className="shopdetailsaddtocart__popupIcon">

                  <FaQuestionCircle />

                </div>

                <div>

                  <h3>
                    General Help
                  </h3>

                  <p>
                    Questions about size, delivery, or product details
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