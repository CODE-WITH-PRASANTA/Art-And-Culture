// GodCollectionSection.jsx

import React, { useEffect, useState } from "react";
import "./GodCollectionSection.css";

import API, { IMG_URL } from "../../api/axios";

const GodCollectionSection = () => {
  const [collections, setCollections] = useState([]);

  const [loading, setLoading] = useState(true);

  /* =====================================================
      FETCH COLLECTIONS
  ===================================================== */

  const fetchCollections = async () => {
    try {
      const res = await API.get("/freshcollection");

      console.log("FRESH COLLECTION :", res.data);

      setCollections(res.data.data || []);
    } catch (error) {
      console.log("FETCH ERROR :", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCollections();
  }, []);

  /* =====================================================
      HANDLE CLICK
  ===================================================== */

  const handleOpenLink = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  /* =====================================================
      KEYBOARD ACCESS
  ===================================================== */

  const handleKey = (e, link) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();

      handleOpenLink(link);
    }
  };

  return (
    <section className="gc-section">
      {/* ================= HEADER ================= */}

      <header className="gc-header">
        <h2 className="gc-heading">
          Fresh in God Collection
        </h2>

        <p className="gc-lead">
          Handpicked pieces — new arrivals,
          crafted with devotion.
        </p>
      </header>

      {/* ================= LOADING ================= */}

      {loading ? (
        <div className="gc-loading">
          Loading collections...
        </div>
      ) : (
        <div className="gc-grid">
          {collections.length > 0 ? (
            collections.map((item, index) => (
              <article
                key={item._id}
                tabIndex={0}
                role="button"
                aria-pressed="false"
                onKeyDown={(e) =>
                  handleKey(e, item.link)
                }
                onClick={() =>
                  handleOpenLink(item.link)
                }
                className={`gc-card ${
                  index === 4 ? "gc-span-2" : ""
                }`}
                style={{
                  animationDelay: `${
                    index * 100
                  }ms`,
                }}
              >
                <div className="gc-card-inner">
                  {/* ================= IMAGE ================= */}

                  <img
                    src={`${IMG_URL}${item.image}`}
                    alt={item.title}
                    className="gc-image"
                  />

                  {/* ================= OVERLAY ================= */}

                  <div className="gc-overlay">
                    <div className="gc-overlay-content">
                      <h3 className="gc-title">
                        {item.title}
                      </h3>

                      <p className="gc-subtitle">
                        {item.desc}
                      </p>

                      <span className="gc-cta">
                        Explore
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="gc-noData">
              No Fresh Collections Found
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default GodCollectionSection;