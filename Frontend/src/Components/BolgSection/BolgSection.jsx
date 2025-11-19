// BolgSection.jsx
import React, { useState } from "react";
import {
  FiBookmark,
  FiShare2,
  FiClock,
  FiMessageCircle,
  FiLoader,
} from "react-icons/fi";
import { AiOutlineLike } from "react-icons/ai";
import "./BolgSection.css";
// image imports (you provided these paths)
import blog1 from "../../assets/01.webp";
import blog2 from "../../assets/02.webp";
import blog3 from "../../assets/03.webp";
import blog4 from "../../assets/04.webp";
import blog5 from "../../assets/05.webp";
import blog6 from "../../assets/06.webp";

const BolgSection = () => {
  // Use the imported images
  const images = [blog1, blog2, blog3, blog4, blog5, blog6];

  const dates = [
    "26 Jan 2021",
    "17 July 2021",
    "10 Aug 2021",
    "02 Sep 2021",
    "18 Sep 2021",
    "03 Oct 2021",
  ];

  const title = "Let’s start bring sale on this saummer vacation.";
  const excerpt =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () =>
    setVisibleCount((prev) => Math.min(images.length, prev + 3));

  return (
    <section className="blogsection-root" aria-labelledby="blogsection-heading">
      <nav className="blogsection-breadcrumb" aria-label="Breadcrumb">
        <span>Home</span>
        <span className="sep">/</span>
        <span>Pages</span>
        <span className="sep">/</span>
        <span>Blog Page</span>
      </nav>

      <header className="blogsection-hero">
        <h2 className="blogsection-bg-large" aria-hidden>
          Latest News
        </h2>

        <div className="blogsection-hero-row">
          <div className="blogsection-hero-title">New Updates</div>
    
        </div>
      </header>

      <div className="blogsection-grid">
        {images.slice(0, visibleCount).map((src, i) => (
          <article
            key={i}
            className="blogsection-card"
            style={{ ["--i"]: i }}
            aria-labelledby={`blog-title-${i}`}
          >
            <div className="blogsection-card-inner">
              <figure className="blogsection-media">
                <img src={src} alt={`Blog ${i + 1}`} loading="lazy" />
                <div className="blogsection-media-actions">
                  <button className="blogsection-icon-btn" aria-label="Bookmark">
                    <FiBookmark />
                  </button>
                  <button className="blogsection-icon-btn" aria-label="Share">
                    <FiShare2 />
                  </button>
                </div>
                <div className="blogsection-media-gradient" />
              </figure>

              <div className="blogsection-body">
                <div className="blogsection-date">{dates[i]}</div>

                <h3 className="blogsection-title" id={`blog-title-${i}`}>
                  {title}
                </h3>

                <p className="blogsection-excerpt">{excerpt}</p>

                <div className="blogsection-card-footer">
                  <a className="blogsection-cta" href="#" onClick={(e) => e.preventDefault()}>
                    Continue Reading..
                  </a>

                  <div className="blogsection-mini-stats">
                    <span className="stat">
                      <AiOutlineLike />
                      <small>1.2k</small>
                    </span>
                    <span className="stat">
                      <FiMessageCircle />
                      <small>24</small>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="blogsection-loadmore-container">
        {visibleCount < images.length ? (
          <button
            className="blogsection-loadmore-btn"
            onClick={handleLoadMore}
            aria-label="Load more blog posts"
          >
            <FiLoader className="btn-icon" />
            <span>Load More Blogs</span>
          </button>
        ) : (
          <div className="blogsection-end-note">All posts loaded — thanks for reading ✨</div>
        )}
      </div>
    </section>
  );
};

export default BolgSection;
