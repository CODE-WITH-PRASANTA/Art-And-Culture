import React, { useState, useEffect } from "react";
import "./HotCategory.css";

import {
  FiImage,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiArrowUpRight,
} from "react-icons/fi";

// =================== IMPORT IMAGES ===================
import drawing from "../../assets/category1.webp";
import abstract from "../../assets/category2.webp";
import modern from "../../assets/category3.webp";
import colorful from "../../assets/category4.webp";
import blackwhite from "../../assets/category5.webp";
import plants from "../../assets/category6.webp";

// =================== DATA ===================
// Fixed Featured Item
const featuredCategory = {
  title: "Drawing",
  subtitle: "Classic Sketches & Line Art",
  image: drawing,
};

// Paginated Categories
const paginatedCategoriesData = [
  {
    title: "Abstract",
    subtitle: "Modern Expressions",
    image: abstract,
  },
  {
    title: "Modern",
    subtitle: "Minimalist Aesthetic",
    image: modern,
  },
  {
    title: "Colorful Walls",
    subtitle: "Vibrant & Bold Concepts",
    image: colorful,
  },
  {
    title: "Black & White",
    subtitle: "Timeless Monochrome",
    image: blackwhite,
  },
  {
    title: "Plants",
    subtitle: "Botanical Inspirations",
    image: plants,
  },
];

const ITEMS_PER_PAGE = 4; // Adjust items displayed per page next to the fixed featured item

const HotCategory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentImage, setCurrentImage] = useState(null);

  // Combine fixed + paginated data forLightbox sequence
  const allCategoryData = [featuredCategory, ...paginatedCategoriesData];

  // Pagination Calculations
  const totalPages = Math.ceil(paginatedCategoriesData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visiblePaginatedCards = paginatedCategoriesData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Pagination Handlers
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  // Lightbox Handlers
  const openImage = (index) => {
    setCurrentImage(index);
  };

  const closeImage = () => {
    setCurrentImage(null);
  };

  const nextImage = (e) => {
    e?.stopPropagation();
    setCurrentImage((prev) =>
      prev === allCategoryData.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setCurrentImage((prev) =>
      prev === 0 ? allCategoryData.length - 1 : prev - 1
    );
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (currentImage === null) return;
      if (e.key === "Escape") closeImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentImage]);

  return (
    <>
      <section className="HotCategory">
        {/* Section Header */}
        <div className="HotCategory-header">
          <span className="HotCategory-tagline">Curated Galleries</span>
          <h2 className="HotCategory-mainTitle">Explore Hot Categories</h2>
          <div className="HotCategory-divider" />
        </div>

        {/* Categories Grid Container */}
        <div className="HotCategory-container">
          
          {/* FIXED FEATURED ITEM (Drawing) */}
          <div
            className="HotCategory-card featured"
            onClick={() => openImage(0)}
          >
            <img
              src={featuredCategory.image}
              alt={featuredCategory.title}
              className="HotCategory-image"
            />

            <div className="HotCategory-overlay">
              <div className="HotCategory-badge">
                <FiImage className="HotCategory-badgeIcon" />
                <span>Featured</span>
              </div>

              <div className="HotCategory-details">
                <h3>{featuredCategory.title}</h3>
                <p>{featuredCategory.subtitle}</p>
              </div>

              <div className="HotCategory-actionBtn">
                <FiArrowUpRight />
              </div>
            </div>
          </div>

          {/* PAGINATED ITEMS */}
          {visiblePaginatedCards.map((item, idx) => {
            // Index in the combined `allCategoryData` array for Lightbox
            const globalIndex = startIndex + idx + 1;

            return (
              <div
                className="HotCategory-card"
                key={globalIndex}
                onClick={() => openImage(globalIndex)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="HotCategory-image"
                />

                <div className="HotCategory-overlay">
                  <div className="HotCategory-badge">
                    <FiImage className="HotCategory-badgeIcon" />
                    <span>Category</span>
                  </div>

                  <div className="HotCategory-details">
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>

                  <div className="HotCategory-actionBtn">
                    <FiArrowUpRight />
                  </div>
                </div>
              </div>
            );
          })}

        </div>

        {/* PAGINATION CONTROLS */}
        {totalPages > 1 && (
          <div className="HotCategory-pagination">
            <button
              className="HotCategory-pageBtn nav"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              aria-label="Previous Page"
            >
              <FiChevronLeft />
            </button>

            {Array.from({ length: totalPages }, (_, index) => {
              const pageNum = index + 1;
              return (
                <button
                  key={pageNum}
                  className={`HotCategory-pageBtn ${
                    currentPage === pageNum ? "active" : ""
                  }`}
                  onClick={() => handlePageChange(pageNum)}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              className="HotCategory-pageBtn nav"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              aria-label="Next Page"
            >
              <FiChevronRight />
            </button>
          </div>
        )}
      </section>

      {/* ================= LIGHTBOX ================= */}

      {currentImage !== null && (
        <div className="HotCategory-lightbox" onClick={closeImage}>
          <div
            className="HotCategory-lightboxContent"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Header / Info */}
            <div className="HotCategory-lightboxHeader">
              <div className="HotCategory-lightboxTitleGroup">
                <h4>{allCategoryData[currentImage].title}</h4>
                <span>{allCategoryData[currentImage].subtitle}</span>
              </div>

              <div className="HotCategory-lightboxRight">
                <span className="HotCategory-counter">
                  {currentImage + 1} / {allCategoryData.length}
                </span>

                <button
                  className="HotCategory-close"
                  onClick={closeImage}
                  aria-label="Close modal"
                >
                  <FiX />
                </button>
              </div>
            </div>

            {/* Lightbox Main Display Container */}
            <div className="HotCategory-lightboxBody">
              <button
                className="HotCategory-navBtn prev"
                onClick={prevImage}
                aria-label="Previous Image"
              >
                <FiChevronLeft />
              </button>

              <div className="HotCategory-imageWrapper">
                <img
                  src={allCategoryData[currentImage].image}
                  alt={allCategoryData[currentImage].title}
                  className="HotCategory-lightboxImage"
                />
              </div>

              <button
                className="HotCategory-navBtn next"
                onClick={nextImage}
                aria-label="Next Image"
              >
                <FiChevronRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HotCategory;