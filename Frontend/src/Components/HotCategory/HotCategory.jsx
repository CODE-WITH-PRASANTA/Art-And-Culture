import React, { useState } from "react";
import "./HotCategory.css";

import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

// ===== Replace these with your own images =====
import img1 from "../../assets/category1.webp";
import img2 from "../../assets/category2.webp";
import img3 from "../../assets/category3.webp";
import img4 from "../../assets/category4.webp";
import img5 from "../../assets/category5.webp";
import img6 from "../../assets/category6.webp";
import img7 from "../../assets/category6.webp";
import img8 from "../../assets/category5.webp";
import img9 from "../../assets/category4.webp";
import img10 from "../../assets/category3.webp";
import img11 from "../../assets/category2.webp";
import img12 from "../../assets/category1.webp";

const gallery = [
  {
    id: 1,
    title: "Drawing",
    image: img1,
  },
  {
    id: 2,
    title: "Abstract",
    image: img2,
  },
  {
    id: 3,
    title: "Modern",
    image: img3,
  },
  {
    id: 4,
    title: "Colorful Walls",
    image: img4,
  },
  {
    id: 5,
    title: "Black & White",
    image: img5,
  },
  {
    id: 6,
    title: "Plants",
    image: img6,
  },
  {
    id: 7,
    title: "Landscape",
    image: img7,
  },
  {
    id: 8,
    title: "Nature",
    image: img8,
  },
  {
    id: 9,
    title: "Animals",
    image: img9,
  },
  {
    id: 10,
    title: "Portrait",
    image: img10,
  },
  {
    id: 11,
    title: "Minimal",
    image: img11,
  },
  {
    id: 12,
    title: "Vintage",
    image: img12,
  },
];

const PER_PAGE = 6;

const HotCategory = () => {
  const [page, setPage] = useState(1);

  const [lightBox, setLightBox] = useState(false);
  const [current, setCurrent] = useState(0);

  const totalPages = Math.ceil(gallery.length / PER_PAGE);

  const start = (page - 1) * PER_PAGE;

  const currentItems = gallery.slice(start, start + PER_PAGE);

  const openImage = (img) => {
    const index = gallery.findIndex((item) => item.id === img.id);

    setCurrent(index);
    setLightBox(true);
  };

  const closeLightBox = () => {
    setLightBox(false);
  };

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <>
      <section className="hot-category">

        <div className="category-container">

          {currentItems.map((item) => (
            <div
              className="category-card"
              key={item.id}
              onClick={() => openImage(item)}
            >
              <img src={item.image} alt={item.title} />

              <div className="overlay"></div>

              <div className="category-title">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}

        </div>

        {/* Pagination */}

        <div className="pagination">

          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={page === i + 1 ? "active" : ""}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
          >
            Next
          </button>

        </div>

      </section>

      {/* ================= LightBox ================= */}

      {lightBox && (
        <div className="lightbox">

          <button className="close-btn" onClick={closeLightBox}>
            <FaTimes />
          </button>

          <button className="prev-btn" onClick={prevImage}>
            <FaChevronLeft />
          </button>

          <img
            src={gallery[current].image}
            alt=""
            className="lightbox-image"
          />

          <div className="lightbox-title">
            {gallery[current].title}
          </div>

          <button className="next-btn" onClick={nextImage}>
            <FaChevronRight />
          </button>

        </div>
      )}
    </>
  );
};

export default HotCategory;