import React, { useMemo, useState, useEffect } from "react";
import {
  FiSearch,
  FiClock,
  FiMessageSquare,
  FiCornerUpRight,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaBehance,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import "./BlogDetailsSection.css";

// hero image
import heroImg from "../../assets/02.webp";
// trending thumbnails
import blog1 from "../../assets/01.webp";
import blog2 from "../../assets/02.webp";
import blog3 from "../../assets/03.webp";
import blog4 from "../../assets/04.webp";
import blog5 from "../../assets/05.webp";
// author image
import authorImg from "../../assets/team-1.webp";
// avatars for comments
import avatar1 from "../../assets/team-3.webp";
import avatar2 from "../../assets/team-2.webp";
import avatar3 from "../../assets/team-1.webp";
import avatar4 from "../../assets/team-5.webp";

const categories = [
  { title: "Lifestyle", count: 9 },
  { title: "Travel", count: 12 },
  { title: "Fashion", count: 19 },
  { title: "Branding", count: 17 },
  { title: "Music", count: 10 },
];

const trending = [
  { img: blog1, title: "Alonso Kelina Falao Asiano Pero", time: "10 Min ago" },
  { img: blog2, title: "It is a long established fact that a reader", time: "2 Hours ago" },
  { img: blog3, title: "Many desktop publish packages and web", time: "4 Hours ago" },
  { img: blog4, title: "Various versions have evolved over the years", time: "7 Hours ago" },
  { img: blog5, title: "Photo booth anim 8-bit PBR 3 wolf moon.", time: "3 Days ago" },
];

const tags = [
  "Lifestyle",
  "Travel",
  "Fashion",
  "Branding",
  "Music",
  "Design",
  "Inspiration",
  "Business",
];

const commentsSample = [
  {
    avatar: avatar1 || blog1,
    name: "Rosalina Kelian",
    date: "19th May 2018",
    text:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborumab. perspiciatis unde omnis iste natus error.",
  },
  {
    avatar: avatar2 || blog2,
    name: "Rosalina Kelian",
    date: "19th May 2018",
    text:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborumab. perspiciatis unde omnis iste natus error.",
  },
  {
    avatar: avatar3 || blog3,
    name: "Rosalina Kelian",
    date: "19th May 2018",
    text:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborumab. perspiciatis unde omnis iste natus error.",
  },
  {
    avatar: avatar4 || blog4,
    name: "Rosalina Kelian",
    date: "19th May 2018",
    text:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborumab. perspiciatis unde omnis iste natus error.",
  },
];

const BlogDetailsSection = () => {
  // memoize arrays for stable rendering
  const trendingPosts = useMemo(() => trending, []);
  const tagList = useMemo(() => tags, []);
  const comments = useMemo(() => commentsSample, []);

  // mount toggle for entrance animations
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReduced) {
      const t = setTimeout(() => setMounted(true), 40);
      return () => clearTimeout(t);
    } else {
      setMounted(true);
    }
  }, []);

  return (
    <div className={`blogdetailssection-container ${mounted ? "is-mounted" : ""}`}>
      <main className="blogdetailssection-main">
        <article className="blogdetailssection-article-card">
          <figure className="blogdetailssection-hero-media" aria-hidden>
            <img src={heroImg} alt="Article preview" />
          </figure>

          {/* ARTICLE CONTENT */}
          <div className="blogdetailssection-article-body">
            {/* AUTHOR + COMMENTS meta */}
            <div className="blogdetailssection-article-meta2">
              <span>👤 By Rosalina Doe</span>
              <span className="sep-dot">•</span>
              <FiMessageSquare className="meta-icon" />
              <span>45 Comments</span>
            </div>

            {/* TITLE */}
            <h1 className="blogdetailssection-article-title2">
              Lorem ipsum dolor sit amet, cons pisicing elit, sed do.
            </h1>

            {/* PARAGRAPH BLOCK */}
            <div className="blogdetailssection-article-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
                ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>

              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
              </p>

              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis
                unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>

              {/* QUOTE BOX */}
              <div className="blogdetailssection-quote-box">
                <div className="quote-icon">❝</div>
                <p className="quote-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tem ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ut aliquip ex ea commodo onsequat.
                </p>
                <div className="quote-author"> – Rosalina Pong </div>
              </div>

              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                qui ratione voluptatem sequi nesciunt.
              </p>

              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            {/* AUTHOR BIO CARD */}
            <div className="blogdetailssection-author-card">
              <div className="blogdetailssection-author-inner">
                <div className="blogdetailssection-author-avatar">
                  <img src={authorImg} alt="Rosalina William" />
                </div>
                <h3 className="blogdetailssection-author-name">Rosalina William</h3>
                <div className="blogdetailssection-author-socials" aria-hidden>
                  <a href="#" onClick={(e) => e.preventDefault()} aria-label="Facebook"><FaFacebookF /></a>
                  <a href="#" onClick={(e) => e.preventDefault()} aria-label="Twitter"><FaTwitter /></a>
                  <a href="#" onClick={(e) => e.preventDefault()} aria-label="Behance"><FaBehance /></a>
                  <a href="#" onClick={(e) => e.preventDefault()} aria-label="YouTube"><FaYoutube /></a>
                  <a href="#" onClick={(e) => e.preventDefault()} aria-label="LinkedIn"><FaLinkedin /></a>
                </div>
                <p className="blogdetailssection-author-bio">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                </p>
              </div>
            </div>

            {/* ====== COMMENTS SECTION (NEW) ====== */}
            <section className="blogdetailssection-comments" aria-labelledby="comments-heading">
              <h3 id="comments-heading" className="comments-heading">05 Comments</h3>

              <ul className="comments-list" role="list">
                {comments.map((c, idx) => (
                  <li
                    className="comment-item"
                    key={idx}
                    aria-live="polite"
                    // CSS custom property available for animation/stagger if desired
                    style={{ ["--i"]: idx }}
                  >
                    {/* avatar */}
                    <div className="comment-avatar-wrap">
                      <img
                        className="comment-avatar"
                        src={c.avatar}
                        alt={`${c.name} avatar`}
                        loading="lazy"
                      />
                    </div>

                    {/* main content */}
                    <div className="comment-content">
                      <div className="comment-top">
                        <div className="comment-author-wrap">
                          <div className="comment-author">{c.name}</div>
                          {/* small bookmark marker like in screenshot */}
                          <span className="comment-bookmark" aria-hidden title="Saved">▯</span>
                        </div>

                        <div className="comment-date">{String(c.date).toUpperCase()}</div>
                      </div>

                      <p className="comment-text">{c.text}</p>
                    </div>

                    {/* reply action aligned to the right */}
                    <button
                      className="comment-reply"
                      type="button"
                      aria-label={`Reply to ${c.name}`}
                      onClick={(e) => e.preventDefault()}
                    >
                      <FiCornerUpRight className="reply-icon" />
                      <span className="reply-label">Reply</span>
                    </button>
                  </li>
                ))}
              </ul>

              {/* POST COMMENT FORM */}
              <div className="blogdetailssection-postcomment">
                <h3 className="postcomment-heading">Post Comment</h3>

                <form className="postcomment-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="postcomment-row">
                    <input type="text" name="name" placeholder="Your Name" className="postcomment-input" required />
                    <input type="email" name="email" placeholder="Your Email" className="postcomment-input" required />
                  </div>

                  <textarea
                    name="comment"
                    placeholder="Type your comments...."
                    className="postcomment-textarea"
                    rows="7"
                    required
                  />

                  <button type="submit" className="postcomment-submit">Submit Now</button>
                </form>
              </div>
            </section>
            {/* ====== end comments ====== */}
          </div>
        </article>
      </main>

      {/* Sidebar */}
      <aside className="blogdetailssection-sidebar" aria-label="Sidebar">
        {/* SEARCH */}
        <div className="blogdetailssection-widget blogdetailssection-widget--card">
          <h3 className="blogdetailssection-widget-title">Search</h3>
          <form className="blogdetailssection-widget-search" onSubmit={(e) => e.preventDefault()}>
            <input type="search" className="blogdetailssection-widget-search-input" placeholder="Search.." />
            <button type="submit" className="blogdetailssection-widget-search-btn" aria-label="Search"><FiSearch /></button>
          </form>
        </div>

        {/* CATEGORIES */}
        <div className="blogdetailssection-widget blogdetailssection-widget--card">
          <h3 className="blogdetailssection-widget-title">Categories</h3>
          <ul className="blogdetailssection-widget-categories">
            {categories.map((c, idx) => (
              <li className="blogdetailssection-widget-categories-item" key={idx}>
                <a href="#" onClick={(e) => e.preventDefault()} className="blogdetailssection-cat-link">{c.title}</a>
                <span className="blogdetailssection-cat-count">{String(c.count).padStart(2, "0")}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* TRENDING POSTS */}
        <div className="blogdetailssection-widget blogdetailssection-widget--card">
          <h3 className="blogdetailssection-widget-title">Trending Posts</h3>
          <ul className="blogdetailssection-trending-list" role="list">
            {trendingPosts.map((p, idx) => (
              <li className="blogdetailssection-trending-item" key={idx}>
                <a className="blogdetailssection-trending-link" href="#" onClick={(e) => e.preventDefault()} aria-label={p.title}>
                  <div className="trending-thumb-wrap">
                    <img className="blogdetailssection-trending-thumb" src={p.img} alt={p.title} loading="lazy" />
                  </div>
                  <div className="blogdetailssection-trending-meta">
                    <div className="blogdetailssection-trending-title">{p.title}</div>
                    <div className="blogdetailssection-trending-time">
                      <FiClock className="blogdetailssection-time-icon" />
                      <small>{p.time}</small>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* TAGS CLOUD */}
        <div className="blogdetailssection-widget blogdetailssection-widget--card">
          <h3 className="blogdetailssection-widget-title">Tags Cloud</h3>
          <div className="blogdetailssection-tags">
            {tagList.map((t, i) => (
              <button key={i} className="blogdetailssection-tag-btn" onClick={(e) => e.preventDefault()} type="button" aria-pressed="false">
                {t}
              </button>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default BlogDetailsSection;
