// ShopDetailsSwitchbar.jsx

import React, { useState } from "react";
import "./ShopDetailsSwitchbar.css";

import {
  FaRegFileAlt,
  FaCube,
  FaLayerGroup,
  FaQuestionCircle,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

const ShopDetailsSwitchbar = () => {

  const [activeTab, setActiveTab] =
    useState("about");

  const [openFaq, setOpenFaq] =
    useState(2);

  const faqData = [
    {
      question:
        "How long does it take to receive my order?",
      answer:
        "Orders are usually delivered within 3-7 business days depending on your location.",
    },

    {
      question:
        "How do I track my order status?",
      answer:
        "After dispatch, you will receive a tracking link via SMS and email.",
    },

    {
      question:
        "What is your return policy?",
      answer:
        "We offer easy 7-day returns for damaged or defective products.",
    },

    {
      question:
        "Can I change my shipping address after placing an order?",
      answer:
        "Yes, address changes are possible before your order is shipped.",
    },

    {
      question:
        "Is my payment information stored securely?",
      answer:
        "Yes, all payment transactions are encrypted and 100% secure.",
    },

    {
      question:
        "Are the products handmade or machine-made?",
      answer:
        "Most of our brass pooja products are handcrafted by skilled artisans.",
    },

    {
      question:
        "What payment methods do you accept?",
      answer:
        "We accept UPI, Cards, Net Banking, Wallets, and Cash on Delivery.",
    },

    {
      question:
        "I want to order in bulk; can I get a discount?",
      answer:
        "Yes, bulk order discounts are available for large quantity purchases.",
    },
  ];

  return (
    <section className="shopdetailsswitchbar">

      {/* TOP NAVIGATION */}

      <div className="shopdetailsswitchbar__tabs">

        <button
          className={`shopdetailsswitchbar__tab ${
            activeTab === "about"
              ? "shopdetailsswitchbar__tabActive"
              : ""
          }`}
          onClick={() =>
            setActiveTab("about")
          }
        >
          <FaRegFileAlt />
          About the Product
        </button>

        <button
          className={`shopdetailsswitchbar__tab ${
            activeTab === "size"
              ? "shopdetailsswitchbar__tabActive"
              : ""
          }`}
          onClick={() =>
            setActiveTab("size")
          }
        >
          <FaCube />
          Size & Weight
        </button>

        <button
          className={`shopdetailsswitchbar__tab ${
            activeTab === "material"
              ? "shopdetailsswitchbar__tabActive"
              : ""
          }`}
          onClick={() =>
            setActiveTab("material")
          }
        >
          <FaLayerGroup />
          Product Material
        </button>

        <button
          className={`shopdetailsswitchbar__tab ${
            activeTab === "faq"
              ? "shopdetailsswitchbar__tabActive"
              : ""
          }`}
          onClick={() =>
            setActiveTab("faq")
          }
        >
          <FaQuestionCircle />
          FAQs
        </button>

      </div>

      {/* ABOUT */}

      {activeTab === "about" && (
        <div className="shopdetailsswitchbar__content">

          <div className="shopdetailsswitchbar__heading">
            <FaRegFileAlt />
            <h2>
              About the Product
            </h2>
          </div>

          <div className="shopdetailsswitchbar__body">

            <p>
              Immerse yourself in the rich
              traditions of Indian rituals
              with our Floral Intricate
              <strong>
                {" "}
                Meenakari Work Brass
                Pooja Thali Set.
              </strong>
            </p>

            <p>
              <strong>
                Brass Floral Intricate
                Thali:
              </strong>{" "}
              The stunning centerpiece of
              this set is adorned with
              intricate floral patterns
              symbolizing purity and divine
              blessings.
            </p>

            <p>
              <strong>
                Brass Diya:
              </strong>{" "}
              Illuminate your sacred space
              with the mesmerizing glow of
              the brass diya.
            </p>

            <p>
              <strong>
                Brass Agarbatti Holder:
              </strong>{" "}
              Designed to hold incense and
              add tranquility to your
              rituals.
            </p>

            <p>
              <strong>
                Brass Pooja Ghanti:
              </strong>{" "}
              Gentle chimes create positive
              vibrations in your sacred
              space.
            </p>

            <p>
              Experience the divine beauty
              and heritage of Indian
              spirituality with our luxury
              pooja thali collection.
            </p>

          </div>
        </div>
      )}

      {/* SIZE */}

      {activeTab === "size" && (
        <div className="shopdetailsswitchbar__content">

          <div className="shopdetailsswitchbar__heading">
            <FaCube />
            <h2>
              Size & Weight
            </h2>
          </div>

          <div className="shopdetailsswitchbar__body">

            <h3>
              (Diameter)
            </h3>

            <ul>
              <li>
                25.5 cms
              </li>

              <li>
                10 inches
              </li>
            </ul>

            <h3>
              Weight
            </h3>

            <ul>
              <li>
                Thali : 790 Grams
              </li>

              <li>
                Diya : 90 Grams
              </li>

              <li>
                Incense Holder : 74 Grams
              </li>

              <li>
                Bell : 124 Grams
              </li>

              <li>
                Small Bowl : 52 Grams
              </li>

              <li>
                Kalash : 169 Grams
              </li>
            </ul>

          </div>
        </div>
      )}

      {/* MATERIAL */}

      {activeTab === "material" && (
        <div className="shopdetailsswitchbar__content">

          <div className="shopdetailsswitchbar__heading">
            <FaLayerGroup />
            <h2>
              Product Material
            </h2>
          </div>

          <div className="shopdetailsswitchbar__body">

            <p>
              This intricate thali set is
              crafted from premium quality
              brass with luxurious
              meenakari finishing.
            </p>

          </div>
        </div>
      )}

      {/* FAQ */}

      {activeTab === "faq" && (
        <div className="shopdetailsswitchbar__content">

          <div className="shopdetailsswitchbar__faqTitle">
            Frequently Asked Questions
          </div>

          <div className="shopdetailsswitchbar__faqWrapper">

            {faqData.map((item, index) => (

              <div
                className="shopdetailsswitchbar__faqItem"
                key={index}
              >

                <div
                  className="shopdetailsswitchbar__faqQuestion"
                  onClick={() =>
                    setOpenFaq(
                      openFaq === index
                        ? null
                        : index
                    )
                  }
                >

                  <div className="shopdetailsswitchbar__faqLeft">

                    <FaQuestionCircle />

                    <span>
                      {item.question}
                    </span>

                  </div>

                  {openFaq === index ? (
                    <FaMinus />
                  ) : (
                    <FaPlus />
                  )}
                </div>

                {openFaq === index && (
                  <div className="shopdetailsswitchbar__faqAnswer">
                    {item.answer}
                  </div>
                )}

              </div>
            ))}

          </div>
        </div>
      )}
    </section>
  );
};

export default ShopDetailsSwitchbar;