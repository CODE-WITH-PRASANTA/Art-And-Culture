import React from "react";
import "./OrderDetails.css";

const products = [
  { id: "01", title: "Sangria Girls Mint Green & Off-White Solid Open Toe Flats", subtitle: "Graphic Print Men & Women Footwear", rate: 24.0, qty: 2, imgBg: "#D9F7EE" },
  { id: "02", title: "Rockerz Ear Bluetooth Smart Watch", subtitle: "32.5mm (1.28 Inch) TFT Color Touch Display", rate: 160.0, qty: 1, imgBg: "#E9E9EE" },
  { id: "03", title: "Monte Carlo Sweaters", subtitle: "Graphic Print Men & Women Fashion", rate: 244.99, qty: 3, imgBg: "#FFF4D9" },
  { id: "04", title: "World's most expensive t shirt", subtitle: "Graphic Print Men & Women Fashion", rate: 120.3, qty: 2, imgBg: "#EFE9FF" },
];

const OrderDetails = () => {
  const subTotal = products.reduce((s, p) => s + p.rate * p.qty, 0);
  const tax = +(subTotal * 0.125).toFixed(2);
  const discount = 177.54;
  const shipping = 65.0;
  const total = +(subTotal + tax + shipping - discount).toFixed(2);

  return (
    <div className="od-page">
      <div className="od-inner">
        {/* Header */}
        <header className="od-header fade-in-up">
          <div className="od-title-wrap">
            <h1 className="od-order-id">
              <a href="#order" className="od-order-link">
                Order <span className="od-order-hash">#HY1452451452</span>
              </a>
            </h1>
            <p className="od-subtitle">Thank you — your order is on the way.</p>
          </div>
          <div className="od-actions-top">
            <button className="btn-outline" aria-label="Print invoice">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden>
                <path d="M6 9V3h12v6M6 14v7h12v-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <rect x="8" y="9" width="8" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              </svg>
              Print
            </button>
            <button className="btn-ghost" aria-label="Share order">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden>
                <path d="M14 9l6-6M21 3v6h-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M16 13a4 4 0 1 0-2-3.45" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              Share
            </button>
          </div>
        </header>

        {/* Progress tracker */}
        <nav className="od-tracker slide-in-left" aria-label="Order progress">
          {[
            { title: "Order Received", date: "Nov 23, 2021", status: "completed" },
            { title: "Shipped", date: "Nov 23, 2021", status: "completed" },
            { title: "Out For Delivery", date: "Expected Nov 26, 2021", status: "inprogress" },
            { title: "Delivered", date: "Nov 27, 2021", status: "upcoming" },
          ].map((step, i) => (
            <div className={`od-step ${step.status}`} key={i}>
              <div className="od-step-circle">
                {step.status === "completed" ? (
                  <svg className="icon-check" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg className="icon-truck" viewBox="0 0 24 24">
                    <path d="M3 7h13l4 4v6a1 1 0 0 1-1 1h-1" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="7" cy="18" r="1.6"/>
                    <circle cx="18" cy="18" r="1.6"/>
                  </svg>
                )}
              </div>
              <div className="od-step-info">
                <div className="od-step-title">{step.title}</div>
                <div className="od-step-date">{step.date}</div>
              </div>
            </div>
          ))}
        </nav>

        {/* Invoice summary */}
        <section className="od-card od-invoice card-fade">
          <div className="od-grid od-invoice-top">
            <div className="od-col"><div className="od-label">Invoice</div><div className="od-strong">#HYP14567513010120</div></div>
            <div className="od-col center"><div className="od-label">Date</div><div className="od-strong">23 Nov, 2021 <span className="od-muted">02:36 PM</span></div></div>
            <div className="od-col center"><div className="od-label">Status</div><div className="od-pill paid">Paid</div></div>
            <div className="od-col right"><div className="od-label">Total</div><div className="od-strong od-total-figure">${total.toFixed(2)}</div></div>
          </div>
          <hr className="od-sep"/>
          <div className="od-grid od-addresses">
            <address className="od-address"><div className="od-label">Billing Address</div><div className="od-strong">Diana Nichols</div><div className="od-small">305 S San Gabriel Blvd</div><div className="od-small">Phone: +(123) 456-7890</div><div className="od-small">Tax: 12-3456789</div></address>
            <address className="od-address"><div className="od-label">Shipping Address</div><div className="od-strong">Diana Nichols</div><div className="od-small">305 S San Gabriel Blvd</div><div className="od-small">Phone: +(123) 456-7890</div></address>
          </div>
        </section>

        {/* Items / Summary Grid */}
        <section className="od-card od-items card-pop">
          <div className="items-grid">
            {/* Items list */}
            <div className="items-list" role="table">
              <div className="items-header" role="row">
                <div className="h-col h-num">#</div>
                <div className="h-col h-product">Product</div>
                <div className="h-col h-rate">Rate</div>
                <div className="h-col h-qty">Qty</div>
                <div className="h-col h-amount">Amount</div>
              </div>
              {products.map((p, i) => {
                const amount = (p.rate * p.qty).toFixed(2);
                return (
                  <div className="item-row" role="row" key={p.id}>
                    <div className="cell col-num">{p.id}</div>
                    <div className="cell col-product">
                      <div className="prod-card">
                        <div className="prod-thumb flip-front" style={{ background: p.imgBg }}></div>
                        <div className="prod-content"><div className="prod-title">{p.title}</div><div className="prod-sub">{p.subtitle}</div></div>
                      </div>
                    </div>
                    <div className="cell col-rate">${p.rate.toFixed(2)}</div>
                    <div className="cell col-qty">{String(p.qty).padStart(2,"0")}</div>
                    <div className="cell col-amount">${amount}</div>
                  </div>
                );
              })}
            </div>

            {/* Sticky summary aside */}
            <aside className="od-summary card-slide">
              <div className="od-summary-row"><span>Sub Total</span><strong>${subTotal.toFixed(2)}</strong></div>
              <div className="od-summary-row"><span>Estimated Tax (12.5%)</span><strong>${tax.toFixed(2)}</strong></div>
              <div className="od-summary-row"><span>Discount <em>(Toner15)</em></span><strong className="neg">- ${discount.toFixed(2)}</strong></div>
              <div className="od-summary-row"><span>Shipping Charge</span><strong>${shipping.toFixed(2)}</strong></div>
              <div className="divider" />
              <div className="od-summary-row total"><span>Total Amount</span><strong>${total.toFixed(2)}</strong></div>

              <div className="summary-actions">
                <button className="btn-primary">Continue Shopping <span className="arr">→</span></button>
                <button className="btn-outline small">Download Invoice</button>
              </div>
            </aside>
          </div>
        </section>

        {/* Footer: logistics + actions */}
        <footer className="od-footer fade-in-up">
          <div className="od-logistics">
            <div className="od-log-block">
              <div className="od-label small">Logistics</div>
              <div className="od-strong">RQK Logistics</div>
              <div className="od-small">ID: MFDS140045</div>
            </div>
            <div className="od-log-block">
              <div className="od-label small">Payment</div>
              <div className="od-small">Debit Card • **** 4242</div>
            </div>
          </div>
          <div className="od-actions">
            <button className="btn-ghost action-btn">Track Order</button>
            <button className="btn-help action-btn">Help Center</button>
            <button className="btn-primary action-btn">Continue Shopping →</button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default OrderDetails;
