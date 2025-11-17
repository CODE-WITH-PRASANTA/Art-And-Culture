import React from "react";
import "./Typesofidols.css";

const cards = [
  {
    id: 1,
    title: "RAW",
    subtitle: "Unprocessed & Natural",
    label: "For Craftsmen",
    tag: "Basic",
    status: "Starting At $49",
    img:"https://cdn.pixabay.com/photo/2024/03/27/07/14/ai-generated-8658377_640.jpg",
    type: "raw",
    features: ["Natural Material", "Customizable", "DIY Projects", "Budget Friendly"],
    stats: { quality: 3, difficulty: 4, value: 5 }
  },
  {
    id: 2,
    title: "Semi-Finished",
    subtitle: "Partially Processed",
    label: "For Artisans",
    tag: "Advanced",
    status: "Starting At $129",
    img: "https://cdn.pixabay.com/photo/2024/03/27/07/14/ai-generated-8658378_640.jpg", // Partially carved idol
    type: "semi",
    features: ["Partially Carved", "Smooth Edges", "Ready for Finishing", "Time Saving"],
    stats: { quality: 4, difficulty: 3, value: 4 }
  },
  {
    id: 3,
    title: "Finished",
    subtitle: "Ready to Use",
    label: "For Collectors",
    tag: "Premium",
    status: "Starting At $299",
    img: "https://cdn.pixabay.com/photo/2023/09/09/16/03/ai-generated-8243405_640.jpg", // Finished polished idol
    type: "finished",
    features: ["Fully Polished", "High Quality", "Ready to Display", "Premium Finish"],
    stats: { quality: 5, difficulty: 1, value: 3 }
  },
];

const Typesofidols = () => {
  return (
    <section className="idol-section">
      <div className="section-header">
        <h2 className="section-title">Premium Idol Collection</h2>
        <p className="section-subtitle">Discover our carefully crafted idols in three distinct stages of completion</p>
      </div>
      
      <div className="idol-container">
        {cards.map((card) => (
          <article key={card.id} className={`idol-card card-${card.type}`}>
            {/* Card Header */}
            <div className="card-header">
              <div className="card-tag-wrapper">
                <span className={`card-tag tag-${card.type}`}>
                  {card.tag}
                </span>
                <span className="card-label">{card.label}</span>
              </div>
              <div className="card-price">{card.status}</div>
            </div>

            {/* Main Content */}
            <div className="card-main">
              <div className="card-content">
                <div className="card-text">
                  <h2 className="card-title">{card.title}</h2>
                  <p className="card-subtitle">{card.subtitle}</p>
                  
                  {/* Features */}
                  <ul className="card-features">
                    {card.features.map((feature, index) => (
                      <li key={index} className="feature-item">
                        <span className="feature-dot"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Stats */}
                  <div className="card-stats">
                    <div className="stat-item">
                      <span className="stat-label">Quality</span>
                      <div className="stat-bar">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`stat-segment ${i < card.stats.quality ? 'active' : ''}`}
                          ></div>
                        ))}
                      </div>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Difficulty</span>
                      <div className="stat-bar">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`stat-segment ${i < card.stats.difficulty ? 'active' : ''}`}
                          ></div>
                        ))}
                      </div>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Value</span>
                      <div className="stat-bar">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`stat-segment ${i < card.stats.value ? 'active' : ''}`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image Section */}
                <div className="card-image-section">
                  <div className="image-wrapper">
                    <img 
                      src={card.img} 
                      alt={card.title}
                      className="card-img"
                      loading="lazy"
                    />
                    <div className="image-overlay"></div>
                    <div className="image-badge">{card.type.toUpperCase()}</div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="card-actions">
                <button className={`card-btn btn-${card.type}`}>
                  <span className="btn-text">Explore Collection</span>
                  <span className="btn-arrow">→</span>
                </button>
                <div className="action-meta">
                  <span className="meta-text">Free Shipping</span>
                  <span className="meta-text">•</span>
                  <span className="meta-text">24/7 Support</span>
                </div>
              </div>
            </div>

            {/* Card Corner Accent */}
            <div className={`card-corner corner-${card.type}`}></div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Typesofidols;