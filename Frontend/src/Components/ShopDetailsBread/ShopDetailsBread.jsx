import React from "react";
import "./ShopDetailsBread.css";

const galleryImages = [
  {
    id: 1,
    className: "img1",
    src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200&auto=format&fit=crop",
    alt: "Artwork 1",
  },
  {
    id: 2,
    className: "img2",
    src: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=1200&auto=format&fit=crop",
    alt: "Artwork 2",
  },
  {
    id: 3,
    className: "img3",
    // Fixed: Updated with a valid, beautiful Indian handicraft painting URL
    src: "https://images.unsplash.com/photo-1582201942988-13e60e4556ee?w=1200&auto=format&fit=crop",
    alt: "Indian Handicraft Art",
  },
  {
    id: 4,
    className: "img4",
    src: "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?w=1200&auto=format&fit=crop",
    alt: "Artwork 4",
  },
  {
    id: 5,
    className: "img5",
    src: "https://images.unsplash.com/photo-1579965342575-16428a7c8881?w=1200&auto=format&fit=crop",
    alt: "Artwork 5",
  },
  {
    id: 6,
    className: "img6",
    src: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=1200&auto=format&fit=crop",
    alt: "Artwork 6",
  },
];

const ShopDetailsBread = () => {
  return (
    <section className="shopDetailsBread">
      <div className="shopDetailsBread__container">

        {/* Left Content */}
        <div className="shopDetailsBread__content">
          <div className="shopDetailsBread__line"></div>

          <div className="shopDetailsBread__text">
            <span className="shopDetailsBread__breadcrumb">
              Home / Shop / Product Details
            </span>

            <h1 className="shopDetailsBread__title">
              Shop Details
            </h1>

            <p className="shopDetailsBread__description">
              Discover authentic Indian handicrafts, temple art, divine
              statues, Lipan art, and essential pooja items crafted by skilled
              Indian artisans. Every piece celebrates India's rich cultural
              heritage and timeless craftsmanship, bringing spirituality,
              tradition, and elegance into your home.
            </p>
          </div>
        </div>

        {/* Right Gallery */}
        <div className="shopDetailsBread__gallery">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={`shopDetailsBread__img ${image.className}`}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ShopDetailsBread;