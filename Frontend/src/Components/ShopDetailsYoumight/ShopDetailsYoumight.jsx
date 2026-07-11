import React, { useEffect, useState } from "react";
import "./ShopDetailsYoumight.css";
import API from "../../api/axios";

import {
  FiFileText,
  FiPackage,
  FiLayers,
  FiHelpCircle,
  FiPlus,
  FiMinus,
  FiTruck,
  FiShield,
  FiMapPin
} from "react-icons/fi";

const ShopDetailsYoumight = ({ productId }) => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false); // 1. Default to false so it doesn't flash infinitely if ID is missing
  const [activeTab, setActiveTab] = useState("about");
  const [openFaq, setOpenFaq] = useState(null);
  const [errorMessage, setErrorMessage] = useState(""); // Track explicit errors

  const cleanText = (value) => {
    if (!value) return "";
    return value.replace(/<[^>]*>/g, "").trim();
  };

  const splitData = (value) => {
    if (!value) return [];
    return cleanText(value)
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  };

  useEffect(() => {
    // Check if productId is missing or invalid
    if (!productId) {
      console.warn("ShopDetailsYoumight: Missing or invalid productId prop:", productId);
      setDetails(null);
      setLoading(false);
      return; 
    }

    setLoading(true);
    setDetails(null);
    setErrorMessage("");
    setActiveTab("about");
    setOpenFaq(null);

    let isMounted = true;

    const fetchProductDetails = async () => {
      try {
        console.log(`Fetching from: ${API.defaults.baseURL || ""}/shopview/${productId}`);
        const response = await API.get(`/shopview/${productId}`);
        
        console.log("SHOPVIEW DATA RECEIVED:", response.data);

        if (isMounted) {
          if (response.data && response.data.data) {
            setDetails(response.data.data);
          } else {
            // Data key missing in API structure
            setErrorMessage("Invalid data format returned by server.");
          }
        }
      } catch (error) {
        console.error("FETCH DETAILS CRITICAL ERROR:", error);
        if (isMounted) {
          const apiMsg = error.response?.data?.message || error.response?.data;
          setErrorMessage(apiMsg || error.message || "Network Error");
        }
      } finally {
        if (isMounted) {
          setLoading(false); // Guaranteed fallback closure
        }
      }
    };

    fetchProductDetails();

    return () => {
      isMounted = false;
    };
  }, [productId]);

  const scrollSection = (id) => {
    setActiveTab(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  // UI Handlers based on state
  if (loading) {
    return <div className="shopdetails-loading">Loading Product Details (ID: {productId || "None"})...</div>;
  }

  if (errorMessage) {
    return <div className="shopdetails-loading" style={{ color: "red" }}>Error: {errorMessage}</div>;
  }

  if (!details) {
    return <div className="shopdetails-loading">No product profile loaded. Check backend connectivity.</div>;
  }

  const sizes = splitData(details.sizeManagement);

  return (
    <section className="shopdetailsyoumight">
      {/* ================= TAB BUTTON ================= */}
      <div className="shopdetailsyoumight__switchbar">
        <button
          className={`shopdetailsyoumight__tab ${activeTab === "about" ? "active" : ""}`}
          onClick={() => scrollSection("about")}
        >
          <FiFileText /> About Product
        </button>

        <button
          className={`shopdetailsyoumight__tab ${activeTab === "size" ? "active" : ""}`}
          onClick={() => scrollSection("size")}
        >
          <FiPackage /> Size
        </button>

        <button
          className={`shopdetailsyoumight__tab ${activeTab === "material" ? "active" : ""}`}
          onClick={() => scrollSection("material")}
        >
          <FiLayers /> Material
        </button>

        <button
          className={`shopdetailsyoumight__tab ${activeTab === "faq" ? "active" : ""}`}
          onClick={() => scrollSection("faq")}
        >
          <FiHelpCircle /> FAQs
        </button>
      </div>

      {/* ================= PRODUCT INFORMATION ================= */}
      <div className="shopdetailsyoumight__card">
        <h3>Product Information</h3>
        <p><b>Product Name:</b> {details.productTitle}</p>
        <p><b>Quantity:</b> {details.quantity}</p>
        <p><b>New Price:</b> ₹{details.newPrice}</p>
        <p><b>Old Price:</b> ₹{details.oldPrice}</p>
        <p><b>Discount:</b> {details.discount}%</p>
      </div>

      {/* ================= ABOUT PRODUCT ================= */}
      <div id="about" className="shopdetailsyoumight__card">
        <h3><FiFileText /> About Product</h3>
        <p>{details.aboutProduct ? cleanText(details.aboutProduct) : cleanText(details.productDetails)}</p>
      </div>

      {/* ================= SIZE MANAGEMENT ================= */}
      <div id="size" className="shopdetailsyoumight__card">
        <h3><FiPackage /> Size Options</h3>
        {sizes.length > 0 ? (
          <div className="shopdetailsyoumight__sizegrid">
            {sizes.map((size, index) => (
              <div className="shopdetailsyoumight__sizebox" key={index}>
                <h4>{size}</h4>
                <ul>
                  {details.imageRatio && <li>Image Ratio: {details.imageRatio}</li>}
                  {details.deliveryTime && <li>Delivery: {details.deliveryTime}</li>}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <p>No size information available</p>
        )}
      </div>

      {/* ================= MATERIAL ================= */}
      <div id="material" className="shopdetailsyoumight__card">
        <h3><FiLayers /> Material Details</h3>
        <p>{details.mainMaterial ? cleanText(details.mainMaterial) : "No material information available"}</p>
      </div>

      {/* ================= DELIVERY & WARRANTY ================= */}
      <div className="shopdetailsyoumight__card">
        <h3><FiTruck /> Delivery & Protection</h3>
        <p><FiMapPin />&nbsp;<b>Location:</b> {details.location || "Not available"}</p>
        <p><b>Delivery Time:</b> {details.deliveryTime || "Not available"}</p>
        <p><FiShield />&nbsp;<b>Guarantee:</b> {details.guarantee || "Not available"}</p>
        <p><b>Warranty:</b> {details.warranty || "Not available"}</p>
      </div>

      {/* ================= FAQ SECTION ================= */}
      <div id="faq" className="shopdetailsyoumight__card">
        <h2 className="shopdetailsyoumight__faqtitle">Frequently Asked Questions</h2>
        {details.faqs && details.faqs.length > 0 ? (
          details.faqs.map((item, index) => (
            <div className="shopdetailsyoumight__faqitem" key={index}>
              <button
                className="shopdetailsyoumight__faqquestion"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span>{item.question}</span>
                {openFaq === index ? <FiMinus /> : <FiPlus />}
              </button>
              {openFaq === index && (
                <div className="shopdetailsyoumight__faqanswer">{item.answer}</div>
              )}
            </div>
          ))
        ) : (
          <p>No FAQ available for this product.</p>
        )}
      </div>
    </section>
  );
};

export default ShopDetailsYoumight;