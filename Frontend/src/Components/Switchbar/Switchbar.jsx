// Switchbar.jsx

import React, { useEffect, useState } from "react";

import "./Switchbar.css";

import {
  FaRegFileAlt,
  FaCube,
  FaLayerGroup,
  FaQuestionCircle,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

import { useParams } from "react-router-dom";

import API from "../../api/axios";

const Switchbar = () => {
  const { id } = useParams();

  const [activeTab, setActiveTab] = useState("about");

  const [openFaq, setOpenFaq] = useState(0);

  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(true);

  /* =====================================================
     FETCH PRODUCT
  ===================================================== */

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const res = await API.get(`/pooja/${id}`);

      if (res.data.success) {
        setProduct(res.data.data);
      }
    } catch (error) {
      console.log("FETCH PRODUCT ERROR :", error);
    } finally {
      setLoading(false);
    }
  };

  /* =====================================================
     LOADING
  ===================================================== */

  if (loading) {
    return <div className="switchbar__loading">Loading...</div>;
  }

  if (!product) {
    return <div className="switchbar__loading">Product Not Found</div>;
  }

  /* =====================================================
     FAQS
  ===================================================== */

  const faqData = product.faqs || [];

  return (
    <section className="switchbar">
      {/* =====================================================
          TOP NAVIGATION
      ===================================================== */}

      <div className="switchbar__tabs">
        <button
          className={`switchbar__tab ${
            activeTab === "about" ? "switchbar__tabActive" : ""
          }`}
          onClick={() => setActiveTab("about")}
        >
          <FaRegFileAlt />
          About the Product
        </button>

        <button
          className={`switchbar__tab ${
            activeTab === "size" ? "switchbar__tabActive" : ""
          }`}
          onClick={() => setActiveTab("size")}
        >
          <FaCube />
          Size & Weight
        </button>

        <button
          className={`switchbar__tab ${
            activeTab === "material" ? "switchbar__tabActive" : ""
          }`}
          onClick={() => setActiveTab("material")}
        >
          <FaLayerGroup />
          Product Material
        </button>

        <button
          className={`switchbar__tab ${
            activeTab === "faq" ? "switchbar__tabActive" : ""
          }`}
          onClick={() => setActiveTab("faq")}
        >
          <FaQuestionCircle />
          FAQs
        </button>
      </div>

      {/* =====================================================
          ABOUT
      ===================================================== */}

      {activeTab === "about" && (
        <div className="switchbar__content">
          <div className="switchbar__heading">
            <FaRegFileAlt />

            <h2>About the Product</h2>
          </div>

          <div className="switchbar__body">
            <div
              dangerouslySetInnerHTML={{
                __html: product.description,
              }}
            />
          </div>
        </div>
      )}

      {/* =====================================================
          SIZE
      ===================================================== */}

      {activeTab === "size" && (
        <div className="switchbar__content">
          <div className="switchbar__heading">
            <FaCube />

            <h2>Size & Weight</h2>
          </div>

          <div className="switchbar__body">
            <h3>Size</h3>

            <ul>
              <li>{product.size || "N/A"}</li>
            </ul>

            <h3>Weight</h3>

            <ul>
              <li>{product.weight || "N/A"}</li>
            </ul>
          </div>
        </div>
      )}

      {/* =====================================================
          MATERIAL
      ===================================================== */}

      {activeTab === "material" && (
        <div className="switchbar__content">
          <div className="switchbar__heading">
            <FaLayerGroup />

            <h2>Product Material</h2>
          </div>

          <div className="switchbar__body">
            <p>{product.material || "No material information available"}</p>
          </div>
        </div>
      )}

      {/* =====================================================
          FAQ
      ===================================================== */}

      {activeTab === "faq" && (
        <div className="switchbar__content">
          <div className="switchbar__faqTitle">Frequently Asked Questions</div>

          <div className="switchbar__faqWrapper">
            {faqData.length > 0 ? (
              faqData.map((item, index) => (
                <div className="switchbar__faqItem" key={index}>
                  <div
                    className="switchbar__faqQuestion"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <div className="switchbar__faqLeft">
                      <FaQuestionCircle />

                      <span>{item.question}</span>
                    </div>

                    {openFaq === index ? <FaMinus /> : <FaPlus />}
                  </div>

                  {openFaq === index && (
                    <div className="switchbar__faqAnswer">{item.answer}</div>
                  )}
                </div>
              ))
            ) : (
              <div className="switchbar__noFaq">No FAQs Available</div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Switchbar;
