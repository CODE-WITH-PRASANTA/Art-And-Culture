import React, { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiChevronDown,
  FiChevronUp,
  FiChevronRight,
} from "react-icons/fi";
import {
  FaTwitter,
  FaBox,
  FaTruck,
  FaUndoAlt,
  FaMoneyBillWave,
} from "react-icons/fa";
import "./SupportFaq.css";
import HERO_ART_URL from "../../assets/team-1.webp";

/* NOTE: using local path (from conversation assets) for hero artwork.
   If you prefer an import alias or different path, update HERO_ART_URL accordingly.
*/

const faqItems = [
  {
    q: "What are FAQ questions?",
    a: "FAQ (Frequently Asked Questions) are common questions and answers about a product, service or topic. They reduce repetitive support requests and help customers find quick answers.",
  },
  {
    q: "What is FAQ process?",
    a: "The FAQ process typically involves collecting common questions, creating concise answers, organizing them into sections, and publishing them where users expect to find help.",
  },
  {
    q: "What is the purpose of FAQ?",
    a: "The purpose is to help users self-serve, to reduce support load, and to improve user experience by providing quick answers to common issues or concerns.",
  },
  {
    q: "What is an online FAQ?",
    a: "An online FAQ is a web page or help center section that lists common questions and answers — often searchable and organized by topic.",
  },
];

const IconBox = ({ label, Icon }) => (
  <div
    className="support-card-icon-box"
    role="button"
    tabIndex={0}
    aria-label={label}
  >
    <div className="support-icon-circle">
      <Icon className="support-icon-lg" aria-hidden />
    </div>
    <div className="support-card-label">{label}</div>
  </div>
);

const SupportFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <div className="support-faq-page">
      {/* TOP HERO - modern, with image on the right */}
      <section className="support-top-hero" aria-hidden={false}>
        <div className="support-top-hero-inner">
          <div className="support-top-copy">
            <div className="support-crumbs-row">
              <div className="support-breadcrumbs" aria-label="Breadcrumb">
                <span className="crumb">Support</span>
                <FiChevronRight className="crumb-icon" aria-hidden />
                <span className="crumb active">Help Center</span>
              </div>
            </div>

            <h1 className="support-top-title">
              We’ve got answers — fast, friendly, and helpful.
            </h1>
            <p className="support-top-sub">
              Explore curated help topics or search the FAQ. If you still need help our team is ready — call or chat anytime.
            </p>

            <div className="support-top-ctas">
              <button
                className="support-pill support-pill-email"
                aria-label="Email us"
                type="button"
              >
                <FiMail className="support-pill-icon" aria-hidden />
                <span>Email Us</span>
              </button>

              <button
                className="support-pill support-pill-tweet"
                aria-label="Send us tweet"
                type="button"
              >
                <FaTwitter className="support-pill-icon" aria-hidden />
                <span>Tweet Us</span>
              </button>
            </div>
          </div>

          <div className="support-top-art-wrap" aria-hidden>
            <img
              src={HERO_ART_URL}
              alt="Decorative support artwork"
              className="support-hero-art"
            />
          </div>
        </div>
      </section>

      <div className="support-faq-inner">
        {/* Main area: left = FAQ list, right = quick assistance panel */}
        <div className="support-main-grid">
          <main className="support-main-col">
            {/* Search box (visual only - can be wired later) */}
            <div className="support-search-row">
              <input
                type="search"
                placeholder="Search FAQs, e.g. 'returns', 'shipping', 'invoice'..."
                className="support-search"
                aria-label="Search FAQs"
              />
              <div className="support-need-help">Need help now?</div>
            </div>

            {/* Frequently Asked */}
            <section
              className="support-faq-accordion"
              aria-label="General Questions"
            >
              <h3 className="support-accordion-title">Frequently Asked</h3>

              <div className="support-accordion-list" role="list">
                {faqItems.map((it, i) => {
                  const open = openIndex === i;
                  return (
                    <div
                      className={`support-accordion-item ${open ? "open" : ""}`}
                      key={i}
                      role="listitem"
                    >
                      <button
                        className="support-accordion-header"
                        onClick={() => toggle(i)}
                        aria-expanded={open}
                        aria-controls={`faq-body-${i}`}
                        id={`faq-header-${i}`}
                        type="button"
                      >
                        <span className="support-question">{it.q}</span>
                        <span className="support-chev-wrap" aria-hidden>
                          {open ? (
                            <FiChevronUp className="support-chev" />
                          ) : (
                            <FiChevronDown className="support-chev" />
                          )}
                        </span>
                      </button>

                      <div
                        id={`faq-body-${i}`}
                        className="support-accordion-body"
                        style={{ maxHeight: open ? "420px" : "0px" }}
                        aria-labelledby={`faq-header-${i}`}
                      >
                        <div className="support-accordion-body-inner">
                          <p>{it.a}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </main>

          {/* RIGHT SIDEBAR - assistance cards and icon cards */}
          <aside className="support-side-col" aria-label="Help options">
            <div className="support-side-stack">
              <div className="support-side-card support-side-contact">
                <div className="support-side-left">
                  <div className="support-side-title">Call Support</div>
                  <div className="support-side-sub">
                    Available 24/7 — speak to an agent
                  </div>
                </div>
                <div className="support-side-cta">
                  <button
                    className="support-call-btn"
                    type="button"
                    aria-label="Call support"
                  >
                    <FiPhone className="support-phone-icon" />
                    <span>Call</span>
                  </button>
                </div>
              </div>

              <div
                className="support-icon-cards"
                aria-label="Categories (Order, Payments, Delivery, Returns)"
              >
                <IconBox label="Order" Icon={FaBox} />
                <IconBox label="Payments" Icon={FaMoneyBillWave} />
                <IconBox label="Delivery" Icon={FaTruck} />
                <IconBox label="Returns" Icon={FaUndoAlt} />
              </div>

              <div className="support-side-card support-side-cta-large">
                <div>
                  <h4 className="support-side-cta-title">Still need help?</h4>
                  <p className="support-side-cta-text">
                    Our team is available 24/7. Chat with us or request a callback and we'll assist you quickly.
                  </p>
                </div>
                <div className="support-side-cta-actions">
                  <button className="support-start-chat">Start Chat</button>
                  <button className="support-outline-btn">
                    Request a Callback
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default SupportFaq;
