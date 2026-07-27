import React, { useEffect, useRef, useState } from "react";
import "./ShopDetailsSwitchbar.css";
import API, { BASE_URL } from "../../api/axios";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const SUBTITLE_LIMIT = 220; // characters shown before truncating (top subtitle)

const ShopDetailsSwitchbar = () => {
  const sliderRef = useRef(null);
  const [shopData, setShopData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [subtitleExpanded, setSubtitleExpanded] = useState(false);

  // Helper function to safely strip HTML tags AND decode entities (&nbsp;, &amp;, etc.)
  const stripHtml = (htmlString) => {
    if (!htmlString) return "";
    // Remove tags first
    const withoutTags = htmlString.replace(/<\/?[^>]+(>|$)/g, "");
    // Decode common HTML entities so text doesn't show "&nbsp;" literally
    const withoutEntities = withoutTags
      .replace(/&nbsp;/gi, " ")
      .replace(/&amp;/gi, "&")
      .replace(/&quot;/gi, '"')
      .replace(/&#39;/gi, "'")
      .replace(/&lt;/gi, "<")
      .replace(/&gt;/gi, ">");
    // Collapse extra whitespace left behind
    return withoutEntities.replace(/\s+/g, " ").trim();
  };

  // Truncate long text and add ellipsis when not expanded
  const getTruncatedText = (text, limit, isExpanded) => {
    if (!text) return "";
    if (isExpanded || text.length <= limit) {
      return text;
    }
    return text.slice(0, limit).trim() + "...";
  };

  // Reset the subtitle's expanded state whenever the active slide changes,
  // so a new product's description always opens collapsed.
  useEffect(() => {
    setSubtitleExpanded(false);
  }, [activeIndex]);

  // ============================
  // FETCH SHOP VIEW DATA
  // ============================
  const fetchShopDetails = async () => {
    try {
      const response = await API.get("/shopview/all");
      console.log("Shop Details Data from DB:", response.data);

      // Handle both structured { success, data } responses or raw arrays safely
      const items = response.data.success ? response.data.data : response.data;
      setShopData(Array.isArray(items) ? items : []);
    } catch (error) {
      console.error("Shop Details Error:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    fetchShopDetails();
  }, []);

  // ============================
  // SLIDER ACTIVE INDEX
  // ============================
  const handleScroll = () => {
    if (!sliderRef.current) return;

    const width = sliderRef.current.children[0]?.offsetWidth;
    if (!width) return;

    const index = Math.round(sliderRef.current.scrollLeft / width);
    setActiveIndex(index);
  };

  // ============================
  // MOVE SLIDER
  // ============================
  const scrollToIndex = (index) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const card = slider.children[index];
    if (card) {
      slider.scrollTo({
        left: card.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  const nextSlide = () => {
    if (activeIndex < shopData.length - 1) {
      scrollToIndex(activeIndex + 1);
    }
  };

  const prevSlide = () => {
    if (activeIndex > 0) {
      scrollToIndex(activeIndex - 1);
    }
  };

  // Fallback for broken/missing image URLs so a failed <img> load can never
  // leave layout in a broken state (which is what caused images to render
  // "under" the text).
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.style.display = "none";
    const fallback = e.target.parentElement?.querySelector(".sds-placeholder-img");
    if (fallback) fallback.style.display = "block";
  };

  // Safe fallback to get the dynamic header information from the active item if available
  const currentItem = shopData[activeIndex];
  const cleanSubtitle = currentItem?.aboutProduct
    ? stripHtml(currentItem.aboutProduct)
    : "Experience the pinnacle of sacred craftsmanship with high premium finishing and authentic detailing.";
  const isSubtitleLong = cleanSubtitle.length > SUBTITLE_LIMIT;
  const displaySubtitle = getTruncatedText(cleanSubtitle, SUBTITLE_LIMIT, subtitleExpanded);

  return (
    <section className="sds-switchbar">
      {/* TOP STAR */}
      <div className="sds-heading-top">
        <span className="sds-star">
          <FaStar />
        </span>
      </div>

      <h2 className="sds-main-title">
        {currentItem?.productTitle ? stripHtml(currentItem.productTitle) : "Product Highlights"}
      </h2>

      <div className="sds-badge">
        {currentItem?.location ? "ALL Odisha" : "PREMIUM CRAFTSMANSHIP"}
      </div>

      <p className="sds-subtitle">
        {displaySubtitle}
        {isSubtitleLong && (
          <button
            type="button"
            className="sds-readmore-btn sds-readmore-btn--subtitle"
            onClick={() => setSubtitleExpanded((prev) => !prev)}
          >
            {subtitleExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </p>

      <div className="sds-slider-container">
        <div className="sds-slider-wrapper">
          <button
            className="sds-nav sds-prev"
            onClick={prevSlide}
            disabled={activeIndex === 0 || shopData.length === 0}
          >
            <FaChevronLeft />
          </button>

          <div className="sds-slider" ref={sliderRef} onScroll={handleScroll}>
            {shopData.length > 0 ? (
              shopData.map((item, index) => {
                // Determine clean text strings from MongoDB dataset
                const cardId = item._id || index;
                const cleanTitle = item.productTitle ? stripHtml(item.productTitle) : "";
                const cleanMaterial = item.mainMaterial ? stripHtml(item.mainMaterial) : "Premium";

                // Setup image source dynamically targeting your uploads route or images array
                const imageSrc = item.images?.[0]?.startsWith("http")
                  ? item.images[0]
                  : `${BASE_URL}/uploads/shopview/${item.images?.[0] || ""}`;

                return (
                  <div className="sds-card" key={cardId}>
                    <div className="sds-image-wrap">
                      {item.images?.[0] ? (
                        <>
                          <img
                            src={imageSrc}
                            alt={cleanTitle}
                            onError={handleImageError}
                          />
                          <div className="sds-placeholder-img" style={{ display: "none" }} />
                        </>
                      ) : (
                        <div className="sds-placeholder-img" />
                      )}
                      <span className="sds-card-star">
                        <FaStar />
                      </span>
                    </div>

                    <div className="sds-card-body">
                      <span className="sds-step">Step {index + 1}</span>
                      <h3>{cleanTitle}</h3>

                      <div className="sds-difference">
                        <strong>Product Material:</strong> {cleanMaterial}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="no-shop-data">No Data Found</div>
            )}
          </div>

          <button
            className="sds-nav sds-next"
            onClick={nextSlide}
            disabled={activeIndex === shopData.length - 1 || shopData.length === 0}
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="sds-pagination">
          {shopData.map((item, index) => (
            <button
              key={item._id || index}
              className={`sds-dot ${activeIndex === index ? "active" : ""}`}
              onClick={() => scrollToIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopDetailsSwitchbar;