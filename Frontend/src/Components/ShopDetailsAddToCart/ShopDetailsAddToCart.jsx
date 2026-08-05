import React, { useEffect, useState } from "react";
import "./ShopDetailsAddToCart.css";

import {
  FiHeart,
  FiMinus,
  FiPlus,
  FiTruck,
  FiMapPin,
  FiHeadphones,
  FiArrowRight,
  FiRefreshCcw,
  FiCheck,
  FiPercent,
  FiChevronDown,
  FiChevronUp
} from "react-icons/fi";

const ShopDetailsAddToCart = ({ product: initialProduct }) => {
  // State management
  const [product, setProduct] = useState(initialProduct || null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [isExpanded, setIsExpanded] = useState(false); // Controls description toggle

  // Helper function to strip HTML tags from MongoDB strings safely
  const stripHtml = (htmlString) => {
    if (!htmlString) return "";
    return htmlString.replace(/<\/?[^>]+(>|$)/g, "").trim();
  };

  // Helper function to parse sizes from the sizeManagement field
  const parseSizes = (sizeField) => {
    if (!sizeField) return [];
    const cleanString = stripHtml(sizeField);
    return cleanString ? cleanString.split(",").map(s => s.trim()).filter(Boolean) : [];
  };

  // Sync product state whenever the incoming prop changes (no API fetch)
  useEffect(() => {
    setProduct(initialProduct || null);
    const parsedSizes = parseSizes(initialProduct?.sizeManagement);
    if (parsedSizes.length > 0) {
      setSelectedSize(parsedSizes[0]);
    } else {
      setSelectedSize("");
    }
    setQuantity(1);
    setIsExpanded(false); // reset toggle when product changes
  }, [initialProduct]);

  // Quantity Handlers
  const increaseQty = () => {
    const maxAvailable = product && product.quantity !== undefined ? Number(product.quantity) : 1;
    if (quantity < maxAvailable) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  // Add to Cart Logic
  const handleAddToCart = () => {
    if (!product) return;

    const item = {
      productId: product._id,
      title: product.productTitle,
      image: product.images?.[0] || "",
      price: product.newPrice || product.price || 0,
      oldPrice: product.oldPrice || 0,
      quantity,
      size: selectedSize,
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.findIndex(
      (x) => x.productId === item.productId && x.size === item.size
    );

    if (existing !== -1) {
      cart[existing].quantity += quantity;
    } else {
      cart.push(item);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart");
  };

  if (!product) {
    return <div className="sdac-loading">Product Not Found</div>;
  }

  const sizes = parseSizes(product.sizeManagement);
  const price = product.newPrice || product.price || 0;
  const oldPrice = product.oldPrice || 0;
  const saving = Number(oldPrice) - Number(price);

  return (
    <aside className="sdac">
      {/* Top Title Section */}
      <div className="sdac__top">
        <div>
          <h1 className="sdac__title">
            {product.productTitle}
            {product.location && (
              <span className="sdac__location"> (ALL Odisha)</span>
            )}
          </h1>
          <div className="sdac__ratingRow">
            <span className="sdac__rating">5.0</span>
            <span className="sdac__stars">★★★★★</span>
            <span className="sdac__reviews">(14 Reviews)</span>
          </div>
        </div>
        <button className="sdac__wishlist" aria-label="Add to wishlist">
          <FiHeart />
        </button>
      </div>

      {/* Pricing Section */}
      <div className="sdac__priceRow">
        <h2 className="sdac__price">₹ {price}</h2>
        {oldPrice > 0 && <span className="sdac__oldPrice">₹ {oldPrice}</span>}
        {saving > 0 && <span className="sdac__saveTag">Save ₹{saving} ({product.discount}% OFF)</span>}
      </div>

      {/* Description Section — original markup, Read More / Read Less */}
      {/* {(product.productDetails || product.aboutProduct) && (
        <div className="sdac__section sdac__description-container">
          <div className={`sdac__description ${isExpanded ? "expanded" : "collapsed"}`}>
            {product.productDetails && (
              <div dangerouslySetInnerHTML={{ __html: product.productDetails }} />
            )}
            {product.aboutProduct && (
              <div dangerouslySetInnerHTML={{ __html: product.aboutProduct }} />
            )}
          </div>

          <button
            type="button"
            className="sdac__read-more-btn"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <>Read Less <FiChevronUp /></>
            ) : (
              <>Read More <FiChevronDown /></>
            )}
          </button>

          <div className="sdac__description-line"></div>
        </div>
      )} */}

      {/* Sizes Section */}
      {sizes.length > 0 && (
        <div className="sdac__section">
          <h4 className="sdac__label">
            Select Size: <span>{selectedSize}</span>
          </h4>
          <div className="sdac__sizeWrap">
            {sizes.map((cleanSize, index) => (
              <button
                key={index}
                className={selectedSize === cleanSize ? "sdac__sizeBtn active" : "sdac__sizeBtn"}
                onClick={() => setSelectedSize(cleanSize)}
              >
                {cleanSize}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Action / Quantity Section */}
      <div className="sdac__section">
        <h4 className="sdac__label">Quantity</h4>
        <div className="sdac__cartRow">
          <div className="sdac__qtyBox">
            <button onClick={decreaseQty} type="button">
              <FiMinus />
            </button>
            <span>{quantity}</span>
            <button onClick={increaseQty} type="button">
              <FiPlus />
            </button>
          </div>
          <button className="sdac__addCartBtn" onClick={handleAddToCart}>
            ADD TO CART
          </button>
        </div>

        <button className="sdac__buyNowBtn" onClick={handleAddToCart}>
          BUY NOW
          <FiArrowRight />
        </button>

        <p style={{ marginTop: "12px", fontSize: "13px", color: "#666", fontWeight: "500" }}>
          Available Stock: {product.quantity || 0}
        </p>
      </div>

      {/* Exclusive Bulk Discounts Container */}
      <div className="sdac__bulk">
        <div className="sdac__bulkLeft">
          <div className="sdac__bulkIcon">
            <FiPercent />
          </div>
          <h4>Buy in bulk and get up to <br /><strong>15% off</strong> on checkout!</h4>
        </div>
        <button className="sdac__bulkBtn">View Offers</button>
      </div>

      {/* Exclusive Value Adds System Container */}
      {(product.guarantee || product.warranty) && (
        <div className="sdac__buyback">
          <div className="sdac__buybackTop">
            <div>
              <h3>
                Warranty: {stripHtml(product.warranty || product.guarantee)}
                <span> Active</span>
              </h3>
              {product.mainMaterial && (
                <p>Material Composition: {stripHtml(product.mainMaterial)}</p>
              )}
            </div>
            <div className="sdac__check">
              <FiCheck />
            </div>
          </div>
          <div className="sdac__tags">
            <span>Assured Quality</span>
            <span>Genuine Product</span>
          </div>
        </div>
      )}

      {/* Delivery Timings Section */}
      <div className="sdac__delivery">
        <h4 className="sdac__deliveryTitle">
          <span className="sdac__deliveryTitleRow"><FiMapPin /> Estimated Delivery Time</span>
        </h4>
        <div className="sdac__deliveryGrid">
          <div className="sdac__deliveryCard">
            <FiTruck />
            <div>
              <h5>Standard Shipping</h5>
              <p>{product.deliveryTime ? stripHtml(product.deliveryTime) : "3-5 Days"}</p>
            </div>
          </div>
          <div className="sdac__deliveryCard">
            <FiRefreshCcw />
            <div>
              <h5>Express Delivery</h5>
              <p>Available at checkout</p>
            </div>
          </div>
        </div>
      </div>

      {/* Marketing Feature Badges Trust Matrix */}
      <div className="sdac__features">
        <div className="sdac__feature">
          <FiTruck className="sdac__featureIcon" />
          <h5>Free Shipping</h5>
        </div>
        <div className="sdac__feature">
          <FiRefreshCcw className="sdac__featureIcon" />
          <h5>7 Days Return</h5>
        </div>
        <div className="sdac__feature">
          <FiMapPin className="sdac__featureIcon" />
          <h5>Delivery Location: ALL Odisha</h5>
        </div>
      </div>

      {/* Customer Service Link */}
      <div className="sdac__help" onClick={() => console.log("Help redirect")}>
        <div className="sdac__helpLeft">
          <FiHeadphones />
          <div>
            <h4>Need Help?</h4>
            <p>Get assistance instantly</p>
          </div>
        </div>
        <FiArrowRight className="sdac__helpArrow" />
      </div>
    </aside>
  );
};

export default ShopDetailsAddToCart;