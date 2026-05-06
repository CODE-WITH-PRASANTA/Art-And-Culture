import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/axios";

import {
  FiSearch,
  FiClock,
  FiMessageSquare,
  FiCornerUpRight,
  FiUser,
  FiTag,
  FiCalendar,
  FiLayers,
} from "react-icons/fi";

import {
  FaFacebookF,
  FaTwitter,
  FaBehance,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

import "./BlogDetailsSection.css";

const BlogDetailsSection = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);
  const [mounted, setMounted] = useState(false);

  const comments = useMemo(
    () => [
      {
        avatar:
          "https://randomuser.me/api/portraits/women/44.jpg",
        name: "Rosalina Kelian",
        date: "19th May 2026",
        text:
          "Beautiful article and very inspiring content. I really enjoyed reading this blog and learning something new from it.",
      },
      {
        avatar:
          "https://randomuser.me/api/portraits/men/32.jpg",
        name: "David Warner",
        date: "21st May 2026",
        text:
          "The article design and typography look amazing. The content flow is very smooth and modern.",
      },
    ],
    []
  );

  useEffect(() => {
    fetchBlog();

    const timer = setTimeout(() => {
      setMounted(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [id]);

  const fetchBlog = async () => {
    try {
      const response = await API.get(`/blog/${id}`);

      console.log("BLOG RESPONSE 👉", response.data);

      setBlog(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!blog) {
    return (
      <div className="blogdetails-loading">
        Loading...
      </div>
    );
  }

  return (
    <div
      className={`blogdetailssection-container ${
        mounted ? "is-mounted" : ""
      }`}
    >
      {/* MAIN CONTENT */}
      <main className="blogdetailssection-main">

        <article className="blogdetailssection-article-card">

          {/* HERO IMAGE */}
          <figure
            className="blogdetailssection-hero-media"
            aria-hidden
          >
            <img
              src={`http://localhost:5000${blog.image}`}
              alt={blog.title}
            />
          </figure>

          {/* ARTICLE BODY */}
          <div className="blogdetailssection-article-body">

            {/* META */}
            <div className="blogdetailssection-article-meta2">

              <span>
                <FiUser />
              </span>

              <span>
                By {blog.author}
              </span>

              <span className="sep-dot">•</span>

              <FiCalendar className="meta-icon" />

              <span>
                {new Date(
                  blog.createdAt
                ).toDateString()}
              </span>

              <span className="sep-dot">•</span>

              <FiLayers className="meta-icon" />

              <span>
                {blog.blogType}
              </span>

            </div>

            {/* CATEGORY */}
            <div className="blogdetailssection-tags">
              <button
                className="blogdetailssection-tag-btn"
                type="button"
              >
                <FiTag />
                {blog.category}
              </button>
            </div>

            {/* TITLE */}
            <h1 className="blogdetailssection-article-title2">
              {blog.title}
            </h1>

            {/* AUTHOR CARD */}
            <div className="blogdetailssection-author-card">

              <div className="blogdetailssection-author-inner">

                <div className="blogdetailssection-author-avatar">
                  <img
                    src="https://randomuser.me/api/portraits/women/68.jpg"
                    alt={blog.author}
                  />
                </div>

                <h3 className="blogdetailssection-author-name">
                  {blog.author}
                </h3>

                <p className="blogdetailssection-author-bio">
                  {blog.designation}
                </p>

                <div
                  className="blogdetailssection-author-socials"
                  aria-hidden
                >
                  <a href="#">
                    <FaFacebookF />
                  </a>

                  <a href="#">
                    <FaTwitter />
                  </a>

                  <a href="#">
                    <FaBehance />
                  </a>

                  <a href="#">
                    <FaYoutube />
                  </a>

                  <a href="#">
                    <FaLinkedin />
                  </a>
                </div>

              </div>

            </div>

            {/* DESCRIPTION */}
            <div
              className="blogdetailssection-article-content"
              dangerouslySetInnerHTML={{
                __html: blog.details,
              }}
            />

            {/* QUOTE */}
            {blog.quote && (
              <div className="blogdetailssection-quote-box">

                <div className="quote-icon">
                  ❝
                </div>

                <p className="quote-text">
                  {blog.quote}
                </p>

                <div className="quote-author">
                  — {blog.author}
                </div>

              </div>
            )}

            {/* ABOUT AUTHOR */}
            <div className="blogdetailssection-author-card">

              <div className="blogdetailssection-author-inner">

                <h3 className="blogdetailssection-author-name">
                  About Author
                </h3>

                <p className="blogdetailssection-author-bio">
                  {blog.aboutAuthor}
                </p>

              </div>

            </div>

            {/* COMMENTS */}
            <section
              className="blogdetailssection-comments"
              aria-labelledby="comments-heading"
            >
              <h3
                id="comments-heading"
                className="comments-heading"
              >
                Comments
              </h3>

              <ul
                className="comments-list"
                role="list"
              >
                {comments.map((c, idx) => (
                  <li
                    className="comment-item"
                    key={idx}
                  >

                    <div className="comment-avatar-wrap">
                      <img
                        className="comment-avatar"
                        src={c.avatar}
                        alt={c.name}
                      />
                    </div>

                    <div className="comment-content">

                      <div className="comment-top">

                        <div className="comment-author-wrap">

                          <div className="comment-author">
                            {c.name}
                          </div>

                          <span className="comment-bookmark">
                            ▯
                          </span>

                        </div>

                        <div className="comment-date">
                          {c.date}
                        </div>

                      </div>

                      <p className="comment-text">
                        {c.text}
                      </p>

                    </div>

                    <button
                      className="comment-reply"
                      type="button"
                    >
                      <FiCornerUpRight className="reply-icon" />

                      <span className="reply-label">
                        Reply
                      </span>
                    </button>

                  </li>
                ))}
              </ul>

              {/* COMMENT FORM */}
              <div className="blogdetailssection-postcomment">

                <h3 className="postcomment-heading">
                  Leave a Comment
                </h3>

                <form
                  className="postcomment-form"
                  onSubmit={(e) =>
                    e.preventDefault()
                  }
                >

                  <div className="postcomment-row">

                    <input
                      type="text"
                      placeholder="Your Name"
                      className="postcomment-input"
                    />

                    <input
                      type="email"
                      placeholder="Your Email"
                      className="postcomment-input"
                    />

                  </div>

                  <textarea
                    placeholder="Write your comment..."
                    className="postcomment-textarea"
                  />

                  <button
                    type="submit"
                    className="postcomment-submit"
                  >
                    Submit Comment
                  </button>

                </form>

              </div>

            </section>

          </div>

        </article>

      </main>

      {/* SIDEBAR */}
      <aside
        className="blogdetailssection-sidebar"
        aria-label="Sidebar"
      >

        {/* SEARCH */}
        <div className="blogdetailssection-widget blogdetailssection-widget--card">

          <h3 className="blogdetailssection-widget-title">
            Search
          </h3>

          <form className="blogdetailssection-widget-search">

            <input
              type="search"
              className="blogdetailssection-widget-search-input"
              placeholder="Search articles..."
            />

            <button
              type="submit"
              className="blogdetailssection-widget-search-btn"
            >
              <FiSearch />
            </button>

          </form>

        </div>

        {/* ARTICLE INFO */}
        <div className="blogdetailssection-widget blogdetailssection-widget--card">

          <h3 className="blogdetailssection-widget-title">
            Article Information
          </h3>

          <ul className="blogdetailssection-widget-categories">

            <li className="blogdetailssection-widget-categories-item">
              <span className="blogdetailssection-cat-link">
                Category
              </span>

              <span className="blogdetailssection-cat-count">
                {blog.category}
              </span>
            </li>

            <li className="blogdetailssection-widget-categories-item">
              <span className="blogdetailssection-cat-link">
                Blog Type
              </span>

              <span className="blogdetailssection-cat-count">
                {blog.blogType}
              </span>
            </li>

            <li className="blogdetailssection-widget-categories-item">
              <span className="blogdetailssection-cat-link">
                Published
              </span>

              <span className="blogdetailssection-cat-count">
                {new Date(
                  blog.createdAt
                ).getFullYear()}
              </span>
            </li>

          </ul>

        </div>

        {/* TRENDING */}
        <div className="blogdetailssection-widget blogdetailssection-widget--card">

          <h3 className="blogdetailssection-widget-title">
            Trending Topics
          </h3>

          <ul
            className="blogdetailssection-trending-list"
            role="list"
          >

            {[1, 2, 3].map((item) => (
              <li
                className="blogdetailssection-trending-item"
                key={item}
              >

                <a
                  className="blogdetailssection-trending-link"
                  href="#"
                >

                  <div className="trending-thumb-wrap">

                    <img
                      className="blogdetailssection-trending-thumb"
                      src={`http://localhost:5000${blog.image}`}
                      alt={blog.title}
                    />

                  </div>

                  <div className="blogdetailssection-trending-meta">

                    <div className="blogdetailssection-trending-title">
                      {blog.title}
                    </div>

                    <div className="blogdetailssection-trending-time">

                      <FiClock className="blogdetailssection-time-icon" />

                      <small>
                        5 Min Read
                      </small>

                    </div>

                  </div>

                </a>

              </li>
            ))}

          </ul>

        </div>

      </aside>

    </div>
  );
};
export default BlogDetailsSection;