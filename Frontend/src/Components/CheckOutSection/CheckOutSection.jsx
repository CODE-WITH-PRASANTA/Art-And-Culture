import React, { useState, useMemo } from "react";
import './CheckOutSection.css';
import { FiX, FiShoppingCart, FiChevronRight, FiCheckCircle } from "react-icons/fi";
import { FaRegCreditCard } from "react-icons/fa";

const SAMPLE_PRODUCTS = [
  { id: "01", title: "Girls Mint Green & Off-White Solid Open", subtitle: "Graphic Print Men & Women Footwear", rate: 24.0, qty: 2, color: "#D9F7EE" },
  { id: "02", title: "Rockerz Ear Bluetooth Smart Watch", subtitle: "32.5mm (1.28 Inch) TFT Color Touch Display", rate: 160.0, qty: 1, color: "#E9E9EE" },
  { id: "03", title: "Monte Carlo Sweaters", subtitle: "Graphic Print Men & Women Fashion", rate: 244.99, qty: 3, color: "#FFF4D9" },
  { id: "04", title: "World's most expensive t shirt", subtitle: "Graphic Print Men & Women Fashion", rate: 120.3, qty: 2, color: "#EFE9FF" },
];

const CheckOutSection = () => {
  const [step, setStep] = useState("summary");
  const [promo, setPromo] = useState("Toner15");
  const [promoApplied, setPromoApplied] = useState(true);
  const [products] = useState(SAMPLE_PRODUCTS);
  const [paymentMethod, setPaymentMethod] = useState("paypal");
  const [buyer, setBuyer] = useState({ firstName: "", lastName: "", email: "" });

  const subTotal = useMemo(() => products.reduce((sum, p) => sum + p.rate * p.qty, 0), [products]);
  const discount = promoApplied ? 18.0 : 0;
  const shipping = 2.4;
  const tax = +(subTotal * 0.0125).toFixed(2);
  const total = +(subTotal - discount + shipping + tax).toFixed(2);

  const handleChange = (e) => setBuyer({ ...buyer, [e.target.name]: e.target.value });
  const togglePromo = () => setPromoApplied(v => !v);
  const handleContinueToPayment = () => setStep("payment");
  const handleBackToSummary = () => setStep("summary");

  const NoticeBar = () => (
    <div className="checkoutsection-notice">
      <div className="checkoutsection-notice-inner">
        <div className="checkoutsection-notice-text">
          Save Up To <strong>30% To 40%</strong> Off! Just Look At The <strong>Great Deals!</strong>
        </div>
        <button className="checkoutsection-notice-close" onClick={() => alert("Notice dismissed (demo)")}>
          <FiX />
        </button>
      </div>
    </div>
  );

  const CheckoutSummary = () => (
    <div className="checkoutsection-animate-fade">
      {/* Products */}
      <div className="checkoutsection-card checkoutsection-products">
        <table className="checkoutsection-table">
          <thead>
            <tr>
              <th className="col-product">Product</th>
              <th className="col-rate">Rate</th>
              <th className="col-orderid">Qty</th>
              <th className="col-price">Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id} className="checkoutsection-hover-row">
                <td className="col-product">
                  <div className="checkoutsection-prod">
                    <div className="checkoutsection-thumb" style={{ background: p.color }}>
                      <FiShoppingCart className="checkoutsection-thumb-icon"/>
                    </div>
                    <div className="checkoutsection-prod-meta">
                      <div className="checkoutsection-prod-title">{p.title}</div>
                      <div className="checkoutsection-prod-sub">{p.subtitle}</div>
                    </div>
                  </div>
                </td>
                <td className="col-rate">${p.rate.toFixed(2)}</td>
                <td className="col-orderid">{String(p.qty).padStart(2, "0")}</td>
                <td className="col-price">${(p.rate * p.qty).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Shipping Address */}
      <h3 className="checkoutsection-section-title">Shipping Address</h3>
      <div className="checkoutsection-address-grid">
        <div className="checkoutsection-address-card">
          <div className="checkoutsection-address-title">HOME ADDRESS</div>
          <div className="checkoutsection-address-name">Witney Blessington</div>
          <div className="checkoutsection-address-line">144 Cavendish Avenue, Indianapolis, IN 46251</div>
          <div className="checkoutsection-address-phone">+1 234 567 890</div>
        </div>
        <div className="checkoutsection-address-card">
          <div className="checkoutsection-address-title">OFFICE ADDRESS</div>
          <div className="checkoutsection-address-name">Edwin Adenike</div>
          <div className="checkoutsection-address-line">2971 Westheimer Road, Santa Ana, IL 80214</div>
          <div className="checkoutsection-address-phone">+1 987 654 321</div>
        </div>
      </div>
    </div>
  );

  const PaymentSelection = () => (
    <div className="checkoutsection-animate-slide">
      <h2 className="checkoutsection-section-title">Payment Selection</h2>
      <div className="checkoutsection-card checkoutsection-payment-tabs">
        {/* Tabs */}
        <div className="checkoutsection-tabs">
          <button className={`tab ${paymentMethod==="paypal"?"active":""}`} onClick={()=>setPaymentMethod("paypal")}><span className="tab-icon">P</span> Paypal</button>
          <button className={`tab ${paymentMethod==="card"?"active":""}`} onClick={()=>setPaymentMethod("card")}><span className="tab-icon">💳</span> Credit/Debit</button>
          <button className={`tab ${paymentMethod==="cod"?"active":""}`} onClick={()=>setPaymentMethod("cod")}><span className="tab-icon">💵</span> Cash on Delivery</button>
        </div>

        {/* Buyer Info */}
        <div className="checkoutsection-form-grid">
          <label className="checkoutsection-label">Buyers First Name</label>
          <input name="firstName" className="checkoutsection-input" value={buyer.firstName} onChange={handleChange} placeholder="Enter First Name"/>

          <div className="checkoutsection-row">
            <div className="checkoutsection-col">
              <label className="checkoutsection-label">Buyers Last Name</label>
              <input name="lastName" className="checkoutsection-input" value={buyer.lastName} onChange={handleChange} placeholder="Enter Last Name"/>
            </div>
            <div className="checkoutsection-col">
              <label className="checkoutsection-label">Email Address</label>
              <input name="email" className="checkoutsection-input" value={buyer.email} onChange={handleChange} placeholder="Enter Email Address"/>
            </div>
          </div>

          {/* PayPal Option */}
          {paymentMethod==="paypal" && (
            <div className="checkoutsection-radio-row">
              <div>
                <div className="checkoutsection-label">Select your PayPal account type</div>
                <label className="checkoutsection-radio"><input type="radio" name="paypal_type" defaultChecked /> Domestic</label>
                <label className="checkoutsection-radio"><input type="radio" name="paypal_type" /> International</label>
              </div>
              <div className="checkoutsection-login-row">
                <button className="checkoutsection-btn checkoutsection-primary" onClick={()=>alert("Login to Paypal (demo)")}>
                  <FiCheckCircle /> Log into my Paypal
                </button>
              </div>
            </div>
          )}

          {/* Cash on Delivery */}
          {paymentMethod==="cod" && (
            <div className="checkoutsection-card" style={{marginTop:16, background:"#f4f7f9"}}>
              <p>You have selected <strong>Cash on Delivery</strong>. Payment will be collected upon delivery.</p>
            </div>
          )}

          <div className="checkoutsection-actions">
            <button className="checkoutsection-btn checkoutsection-back" onClick={handleBackToSummary}>← Back</button>
            <button className="checkoutsection-btn checkoutsection-primary" onClick={()=>alert("Proceeding to payment (demo)")}>
              Pay Now <FaRegCreditCard className="icon-right"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const Sidebar = () => (
    <aside className="checkoutsection-sidebar">
      <div className="checkoutsection-card checkoutsection-promo">
        <div className="checkoutsection-promo-title">Have a promo code?</div>
        <div className="checkoutsection-promo-form">
          <input className="checkoutsection-input" type="text" value={promo} onChange={e=>setPromo(e.target.value)}/>
          <button className="checkoutsection-apply checkoutsection-btn" onClick={togglePromo}>Apply</button>
        </div>
      </div>

      <div className="checkoutsection-card checkoutsection-summary">
        <div className="checkoutsection-summary-title">Order Summary</div>
        <div className="checkoutsection-summary-body">
          <div className="checkoutsection-summary-row"><span>Sub Total :</span><strong>${subTotal.toFixed(2)}</strong></div>
          <div className="checkoutsection-summary-row"><span>Discount <em>({promoApplied?promo:"-"})</em>:</span><strong>-${discount.toFixed(2)}</strong></div>
          <div className="checkoutsection-summary-row"><span>Shipping :</span><strong>${shipping.toFixed(2)}</strong></div>
          <div className="checkoutsection-summary-row"><span>Estimated Tax :</span><strong>${tax.toFixed(2)}</strong></div>
        </div>
        <div className="checkoutsection-summary-total"><span>Total (USD) :</span><strong>${total.toFixed(2)}</strong></div>
      </div>

      {step==="summary" && (
        <div className="checkoutsection-actions">
          <button className="checkoutsection-btn checkoutsection-back" onClick={()=>alert("Back to cart (demo)")}>Back To Cart <FiChevronRight className="icon-right"/></button>
          <button className="checkoutsection-btn checkoutsection-primary" onClick={handleContinueToPayment}>Continue Payment <FaRegCreditCard className="icon-right"/></button>
        </div>
      )}
    </aside>
  );

  return (
    <section className="checkoutsection-root">
      <NoticeBar/>
      <div className="checkoutsection-container">
        <main className="checkoutsection-main">
          {step==="summary"?<CheckoutSummary/>:<PaymentSelection/>}
        </main>
        <Sidebar/>
      </div>
    </section>
  );
};

export default CheckOutSection;
