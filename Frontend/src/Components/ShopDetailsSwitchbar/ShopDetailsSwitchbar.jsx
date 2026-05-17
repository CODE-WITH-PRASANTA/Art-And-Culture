// ShopDetailsSwitchbar.jsx

import React, {
  useEffect,
  useState,
} from "react";

import "./ShopDetailsSwitchbar.css";

import {
  FaRegFileAlt,
  FaCube,
  FaLayerGroup,
  FaQuestionCircle,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

import API from "../../api/axios";

import { useParams } from "react-router-dom";

const ShopDetailsSwitchbar = () => {

  /* ================= PRODUCT ID ================= */

  const { id } = useParams();

  /* ================= STATES ================= */

  const [activeTab, setActiveTab] =
    useState("about");

  const [openFaq, setOpenFaq] =
    useState(0);

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

  /* ================= LOADING ================= */

  if (loading) {

    return (
      <div className="shopdetailsswitchbar__loading">

        Loading...

      </div>
    );

  }

  /* ================= NO PRODUCT ================= */

  if (!product) {

    return (
      <div className="shopdetailsswitchbar__loading">

        Product Not Found

      </div>
    );

  }

  return (
    <section className="shopdetailsswitchbar">

      {/* ================= TOP NAVIGATION ================= */}

      <div className="shopdetailsswitchbar__tabs">

        {/* ABOUT */}

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

        {/* SIZE */}

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

        {/* MATERIAL */}

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

        {/* FAQ */}

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

      {/* ================= ABOUT ================= */}

      {activeTab === "about" && (

        <div className="shopdetailsswitchbar__content">

          <div className="shopdetailsswitchbar__heading">

            <FaRegFileAlt />

            <h2>
              About the Product
            </h2>

          </div>

          <div
            className="shopdetailsswitchbar__body"
            dangerouslySetInnerHTML={{
           __html:
            product.aboutProduct ||
              "No product details available",
          }}
          />

        </div>
      )}

      {/* ================= SIZE ================= */}

      {activeTab === "size" && (

        <div className="shopdetailsswitchbar__content">

          <div className="shopdetailsswitchbar__heading">

            <FaCube />

            <h2>
              Size & Weight
            </h2>

          </div>

          <div className="shopdetailsswitchbar__body">

            {/* SIZE */}

            <h3>
              Size Details
            </h3>

            <ul>

              {product.sizes?.height && (

                <li>
                  Height :
                  {" "}
                  {product.sizes.height}
                </li>
              )}

              {product.sizes?.width && (

                <li>
                  Width :
                  {" "}
                  {product.sizes.width}
                </li>
              )}

              {product.sizes?.weight && (

                <li>
                  Weight :
                  {" "}
                  {product.sizes.weight}
                </li>
              )}

              {product.sizes?.diameter && (

                <li>
                  Diameter :
                  {" "}
                  {product.sizes.diameter}
                </li>
              )}

              {product.sizes?.inches && (

                <li>
                  Inches :
                  {" "}
                  {product.sizes.inches}
                </li>
              )}

            </ul>

            {/* WEIGHT DETAILS */}

            <h3>
              Weight Details
            </h3>

            <ul>

              {product.weightDetails
                ?.thali && (

                <li>
                  Thali :
                  {" "}
                  {
                    product
                      .weightDetails
                      .thali
                  }
                </li>
              )}

              {product.weightDetails
                ?.diya && (

                <li>
                  Diya :
                  {" "}
                  {
                    product
                      .weightDetails
                      .diya
                  }
                </li>
              )}

              {product.weightDetails
                ?.incenseHolder && (

                <li>
                  Incense Holder :
                  {" "}
                  {
                    product
                      .weightDetails
                      .incenseHolder
                  }
                </li>
              )}

              {product.weightDetails
                ?.bell && (

                <li>
                  Bell :
                  {" "}
                  {
                    product
                      .weightDetails
                      .bell
                  }
                </li>
              )}

              {product.weightDetails
                ?.bowl && (

                <li>
                  Bowl :
                  {" "}
                  {
                    product
                      .weightDetails
                      .bowl
                  }
                </li>
              )}

              {product.weightDetails
                ?.kalash && (

                <li>
                  Kalash :
                  {" "}
                  {
                    product
                      .weightDetails
                      .kalash
                  }
                </li>
              )}

            </ul>

          </div>

        </div>
      )}

      {/* ================= MATERIAL ================= */}

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

              {product.productMaterial ||
                "No material details available"}

            </p>

          </div>

        </div>
      )}

      {/* ================= FAQ ================= */}

      {activeTab === "faq" && (

        <div className="shopdetailsswitchbar__content">

          <div className="shopdetailsswitchbar__faqTitle">

            Frequently Asked Questions

          </div>

          <div className="shopdetailsswitchbar__faqWrapper">

            {product.faqs &&
            product.faqs.length > 0 ? (

              product.faqs.map(
                (item, index) => (

                  <div
                    className="shopdetailsswitchbar__faqItem"
                    key={index}
                  >

                    {/* QUESTION */}

                    <div
                      className="shopdetailsswitchbar__faqQuestion"
                      onClick={() =>
                        setOpenFaq(
                          openFaq ===
                            index
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

                      {openFaq ===
                      index ? (

                        <FaMinus />

                      ) : (

                        <FaPlus />

                      )}

                    </div>

                    {/* ANSWER */}

                    {openFaq ===
                      index && (

                      <div className="shopdetailsswitchbar__faqAnswer">

                        {item.answer}

                      </div>
                    )}

                  </div>
                )
              )

            ) : (

              <p>
                No FAQs available
              </p>

            )}

          </div>

        </div>
      )}

    </section>
  );
};

export default ShopDetailsSwitchbar;