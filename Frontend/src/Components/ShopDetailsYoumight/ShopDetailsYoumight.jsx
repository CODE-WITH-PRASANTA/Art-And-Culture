import React, { useState, useEffect } from "react";
import "./ShopDetailsYoumight.css";

import {
  FiFileText,
  FiPackage,
  FiLayers,
  FiHelpCircle,
  FiPlus,
  FiMinus,
} from "react-icons/fi";

const ShopDetailsYoumight = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [openFaq, setOpenFaq] = useState(null);

  const scrollToSection = (id) => {
    setActiveTab(id);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const faqs = [
    {
      q: "How long does the gold/silver plating last?",
      a: "With proper care and maintenance, the plating remains beautiful for years."
    },
    {
      q: "Can these idols be customized?",
      a: "Yes, customization options are available for selected products."
    },
    {
      q: "Is there any plating quality guarantee?",
      a: "Every product undergoes strict quality inspection before dispatch."
    },
    {
      q: "Are these idols suitable for gifting?",
      a: "Absolutely. They are perfect for festivals, weddings and housewarming gifts."
    }
  ];

  return (
    <section className="shopdetailsyoumight">

      {/* Switch Navigation */}

      <div className="shopdetailsyoumight__switchbar">
        <button
          className={`shopdetailsyoumight__tab ${
            activeTab === "about" ? "active" : ""
          }`}
          onClick={() => scrollToSection("about")}
        >
          <FiFileText />
          About Product
        </button>

        <button
          className={`shopdetailsyoumight__tab ${
            activeTab === "size" ? "active" : ""
          }`}
          onClick={() => scrollToSection("size")}
        >
          <FiPackage />
          Size & Weight
        </button>

        <button
          className={`shopdetailsyoumight__tab ${
            activeTab === "material" ? "active" : ""
          }`}
          onClick={() => scrollToSection("material")}
        >
          <FiLayers />
          Material
        </button>

        <button
          className={`shopdetailsyoumight__tab ${
            activeTab === "faq" ? "active" : ""
          }`}
          onClick={() => scrollToSection("faq")}
        >
          <FiHelpCircle />
          FAQs
        </button>
      </div>

      {/* About Product */}

      <div
        id="about"
        className="shopdetailsyoumight__card"
      >
        <h3>
          <FiFileText />
          About the Product
        </h3>

        <p>
          Bring home the sacred presence of Murugan through this
          finely crafted 999 silver-plated idol.
        </p>

        <p>
          The design features divine detailing and premium
          craftsmanship, symbolizing courage, wisdom,
          protection and positivity.
        </p>

        <p>
          Perfect for pooja spaces, office desks,
          study tables and gifting purposes.
        </p>
      </div>

      {/* Size */}

      <div
        id="size"
        className="shopdetailsyoumight__card"
      >
        <h3>
          <FiPackage />
          Size & Weight
        </h3>

        <div className="shopdetailsyoumight__sizegrid">
          <div className="shopdetailsyoumight__sizebox">
            <h4>3.5 Inch</h4>
            <ul>
              <li>4.8 × 8.5 cm</li>
              <li>2 × 3.5 inch</li>
              <li>Weight : 80g</li>
            </ul>
          </div>

          <div className="shopdetailsyoumight__sizebox">
            <h4>5 Inch</h4>
            <ul>
              <li>6.8 × 13 cm</li>
              <li>3 × 5 inch</li>
              <li>Weight : 210g</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Material */}

      <div
        id="material"
        className="shopdetailsyoumight__card"
      >
        <h3>
          <FiLayers />
          Product Material
        </h3>

        <p>
          Crafted using premium quality resin and
          finished with high-quality silver plating
          for an elegant devotional appearance.
        </p>
      </div>

      {/* FAQ */}

      <div
        id="faq"
        className="shopdetailsyoumight__card"
      >
        <h2 className="shopdetailsyoumight__faqtitle">
          Frequently Asked Questions
        </h2>

        {faqs.map((item, index) => (
          <div
            key={index}
            className="shopdetailsyoumight__faqitem"
          >
            <button
              className="shopdetailsyoumight__faqquestion"
              onClick={() =>
                setOpenFaq(
                  openFaq === index ? null : index
                )
              }
            >
              <span>{item.q}</span>

              {openFaq === index ? (
                <FiMinus />
              ) : (
                <FiPlus />
              )}
            </button>

            {openFaq === index && (
              <div className="shopdetailsyoumight__faqanswer">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopDetailsYoumight;