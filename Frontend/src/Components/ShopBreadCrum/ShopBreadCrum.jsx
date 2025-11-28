import React from 'react'
import './ShopBreadCrum.css'
import aboutImg from "../../assets/shop banner.webp";


const ShopBreadCrum = () => {
  return (
    <div>
      <div className="Shop-wrapper">
      
            {/* HERO SECTION */}
            <section
              className="Shop-hero-section"
              style={{ backgroundImage: `url(${aboutImg})` }}
            >
             <div className="Shop-left">
                <h1>
                  Shop <br />
                  <span>Authentic Indian Art & Handicrafts</span>
                </h1>
                <p className="Shop-subtitle">
                 Discover authentic Indian handicrafts, temple art, divine statues, Lipan art, and essential pooja items crafted by skilled Indian artists. Each piece reflects India’s cultural heritage and devotion, offering meaningful idols and traditional art for your home or gifting.
                </p>
              </div>
      
            </section>
      
            {/* BREADCRUMB */}
            <div className="breadcrumb-wrapper">
              <div className="breadcrumb-box">
                <span>Home</span>
                <span className="dash">-</span>
                <span className="active">Shop</span>
              </div>
            </div>
      
          </div>
    </div>
  )
}

export default ShopBreadCrum
