import React, { useState } from "react";
import "./ShopCart.css";

const ShopCart = ({ onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [isGiftWrap, setIsGiftWrap] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const basePrice = 1499;
  const giftWrapPrice = 64;

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleRemove = () => {
    setQuantity(0);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 350);
  };

  const calculateSubtotal = () => {
    if (quantity === 0) return 0;
    let total = basePrice * quantity;
    if (isGiftWrap) {
      total += giftWrapPrice * quantity;
    }
    return total;
  };

  return (
    <>
      {/* Background Overlay */}
      <div
        className={`cart-overlay ${isClosing ? "overlay-hide" : "overlay-show"}`}
        onClick={handleClose}
      />

      {/* Cart Drawer Container */}
      <div
        className={`cart-container premium-theme ${
          isClosing ? "cart-slide-out" : "cart-slide-in"
        }`}
      >
        {/* Persistent Header */}
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button
            className="close-btn"
            onClick={handleClose}
            aria-label="Close Cart"
          >
            &times;
          </button>
        </div>

        {/* Dynamic Cart Content */}
        {quantity === 0 ? (
          /* EMPTY STATE */
          <div className="cart-empty-state">
            <div className="empty-icon">🛒</div>
            <h3>Your cart is empty</h3>
            <p>Add products to continue shopping.</p>
          </div>
        ) : (
          /* ACTIVE STATE */
          <>
            {/* Cart Items List */}
            <div className="cart-body">
              <div className="cart-item">
                <div className="item-image-wrapper">
                  <img
                    src="https://picsum.photos/300"
                    alt="Svastika Vel Mayil Murugan Idol"
                    className="item-image"
                  />
                </div>

                <div className="item-details">
                  <h3 className="item-title">
                    Svastika Vel Mayil Murugan Idol (999 Silver Plated)
                  </h3>

                  <p className="item-variant">Size: 3.5 Inch</p>

                  <p className="item-price">
                    ₹{" "}
                    {basePrice.toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                    })}
                  </p>

                  <div className="item-actions">
                    <div className="quantity-selector">
                      <button
                        className="qty-btn"
                        onClick={handleDecrease}
                        disabled={quantity <= 1}
                      >
                        −
                      </button>

                      <span className="qty-value">{quantity}</span>

                      <button className="qty-btn" onClick={handleIncrease}>
                        +
                      </button>
                    </div>

                    <button className="remove-btn" onClick={handleRemove}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky Summary / Checkout Footer */}
            <div className="cart-footer">
              <label className="gift-wrap-container">
                <input
                  type="checkbox"
                  checked={isGiftWrap}
                  onChange={(e) => setIsGiftWrap(e.target.checked)}
                />
                <span className="checkmark"></span>
                <span className="gift-wrap-text">
                  Add Gift Wrap for{" "}
                  <strong>₹ {giftWrapPrice.toFixed(2)}</strong> each
                </span>
              </label>

              <hr className="divider" />

              <div className="subtotal-row">
                <span className="subtotal-label">Subtotal</span>
                <span className="subtotal-amount">
                  ₹{" "}
                  {calculateSubtotal().toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                  })}
                </span>
              </div>

              <button
                className="buy-now-btn"
                onClick={() => alert("Proceeding to checkout!")}
              >
                <span>BUY NOW</span>
                <div className="payment-icons-inline">
                  <span className="mini-badge">GPay</span>
                  <span className="mini-badge">PhonePe</span>
                  <span className="mini-badge">UPI</span>
                </div>
                <span className="arrow-icon">➜</span>
              </button>

              <div className="shiprocket-powered">
                Powered By <span>Shiprocket</span>
              </div>

              <button
                className="view-cart-link"
                onClick={() => alert("Opening Cart Page")}
              >
                VIEW CART
              </button>

              {/* Trust & Policy Badges */}
              <div className="trust-badges-container">
                <div className="badge-item">
                  <div className="badge-icon">↺</div>
                  <div className="badge-text">
                    <span className="dot active-dot"></span>
                    7 Days Easy Returns
                  </div>
                </div>

                <div className="badge-item">
                  <div className="badge-icon">☎</div>
                  <div className="badge-text">
                    <span className="dot active-dot"></span>
                    24/7 Support
                  </div>
                </div>

                <div className="badge-item">
                  <div className="badge-icon">🔒</div>
                  <div className="badge-text">
                    <span className="dot active-dot"></span>
                    Secure Payments
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ShopCart;