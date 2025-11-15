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
    img: "data:image/jpeg;base64,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", // Raw stone/marble
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
    img: "https://images.unsplash.com/photo-1598966737175-2b39d76b3f6f?w=300&h=300&fit=crop&auto=format", // Partially carved idol
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
    img: "https://images.unsplash.com/photo-1584981295792-a36b0fa2c017?w=300&h=300&fit=crop&auto=format", // Finished polished idol
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