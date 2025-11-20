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
      {/* TOP BLUE TITLE SECTION */}
      <section className="support-top-hero" aria-hidden={false}>
        <h1 className="support-top-title">Frequently Asked Questions</h1>
        <div className="support-breadcrumbs" aria-label="Breadcrumb">
          <span className="crumb">Shop</span>
          <FiChevronRight className="crumb-icon" aria-hidden />
          <span className="crumb active">Faq's</span>
        </div>
      </section>

      <div className="support-faq-inner">
        {/* Header / CTAs */}
        <header className="support-faq-header">
          <h2 className="support-faq-title">Have any Questions ?</h2>
          <p className="support-faq-sub">
            You can ask anything you want to know about Feedback.
          </p>

          <div
            className="support-faq-ctas"
            role="toolbar"
            aria-label="Contact CTAs"
          >
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
              <span>Send Us Tweet</span>
            </button>
          </div>
        </header>

        {/* Icon cards */}
        <section
          className="support-icon-cards"
          aria-label="Categories (Order, Payments, Delivery, Returns)"
        >
          <IconBox label="Order" Icon={FaBox} />
          <IconBox label="Payments" Icon={FaMoneyBillWave} />
          <IconBox label="Delivery" Icon={FaTruck} />
          <IconBox label="Returns" Icon={FaUndoAlt} />
        </section>

        {/* FAQ accordion */}
        <section className="support-faq-accordion" aria-label="General Questions">
          <h3 className="support-accordion-title">General Questions</h3>

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
                    <span>{it.q}</span>
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
                    style={{ maxHeight: open ? "240px" : "0px" }}
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

        {/* Hero (gradient background and CTA) */}
        <section
          className="support-hero-cta"
          role="region"
          aria-label="Contact call to action"
        >
          <div className="support-hero-overlay" />

          <div className="support-hero-inner">
            <h2 className="support-hero-title">
              Let Us Know How We Can Help You
            </h2>

            <div className="support-hero-contact">
              <button
                className="support-contact-pill"
                aria-label="Contact us"
                type="button"
              >
                <FiPhone className="support-phone-icon" aria-hidden />
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SupportFaq;
