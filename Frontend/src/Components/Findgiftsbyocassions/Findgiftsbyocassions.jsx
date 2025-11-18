import React, { useState, useEffect } from 'react'
import './Findgiftsbyocassions.css'

const GiftOccasionsShowcase = () => {
  const [flipped, setFlipped] = useState(null)
  const [touch, setTouch] = useState(false)

  const occasions = [
    {
      label: 'WEDDING GIFTS',
      img: 'https://img.freepik.com/free-photo/watercolor-hindu-deity-representation_23-2151723984.jpg?uid=R174859434&ga=GA1.1.877871662.1738317431&semt=ais_hybrid&w=740&q=80',
      description: 'Beautiful gifts for the perfect wedding celebration'
    },
    {
      label: 'HOUSEWARMING GIFTS',
      img: 'https://img.freepik.com/free-photo/watercolor-hindu-deity-representation_23-2151723984.jpg?uid=R174859434&ga=GA1.1.877871662.1738317431&semt=ais_hybrid&w=740&q=80',
      description: 'Warm wishes for new beginnings and homes'
    },
    {
      label: 'NAMKARAN GIFTS',
      img: 'https://img.freepik.com/free-photo/watercolor-hindu-deity-representation_23-2151723984.jpg?uid=R174859434&ga=GA1.1.877871662.1738317431&semt=ais_hybrid&w=740&q=80',
      description: 'Traditional gifts for baby naming ceremonies'
    },
    {
      label: 'BABY SHOWER GIFTS',
      img: 'https://img.freepik.com/free-photo/watercolor-hindu-deity-representation_23-2151723984.jpg?uid=R174859434&ga=GA1.1.877871662.1738317431&semt=ais_hybrid&w=740&q=80',
      description: 'Adorable gifts for the little one on the way'
    },
    {
      label: 'ANNIVERSARY GIFTS',
      img: 'https://img.freepik.com/free-photo/watercolor-hindu-deity-representation_23-2151723984.jpg?uid=R174859434&ga=GA1.1.877871662.1738317431&semt=ais_hybrid&w=740&q=80',
      description: 'Celebrate love and milestones with special gifts'
    },
    {
      label: 'CORPORATE GIFTS',
      img: 'https://img.freepik.com/free-photo/watercolor-hindu-deity-representation_23-2151723984.jpg?uid=R174859434&ga=GA1.1.877871662.1738317431&semt=ais_hybrid&w=740&q=80',
      description: 'Professional gifts for business partners and clients'
    }
  ]

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    setTouch(isTouchDevice)
  }, [])

  const toggleFlip = (index) => {
    setFlipped(flipped === index ? null : index)
  }

  const onKey = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggleFlip(index)
    }
  }

  const handleExplore = (e, label) => {
    e.stopPropagation()
    console.log('Explore clicked:', label)
    // Add your explore logic here
  }

  return (
    <section className="gift-occasions-showcase" aria-labelledby="gift-occasions-heading">
      <div className="gift-occasions-inner">
        {/* Left Column - Heading */}
        <div className="gift-occasions-heading-wrap">
          <h2 id="gift-occasions-heading" className="gift-occasions-heading">
            Find Gifts by
            <br />
            Occasions
          </h2>
          <p className="gift-occasions-sub">Curated selections — perfect for every celebration.</p>
        </div>

        {/* Right Column - Cards Grid */}
        <div className="gift-occasions-cards-container">
          <div className="gift-occasions-cards" role="list" aria-label="Gift occasions">
            {occasions.map(({ img, label, description }, i) => {
              const isFlipped = flipped === i
              return (
                <div
                  key={label}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isFlipped}
                  aria-label={`Open ${label} collection`}
                  className={`gift-occasions-card ${isFlipped ? "is-flipped" : ""}`}
                  onClick={() => {
                    if (touch) {
                      toggleFlip(i)
                    } else {
                      console.log("Open collection:", label)
                    }
                  }}
                  onKeyDown={(e) => onKey(e, i)}
                  style={{ ["--card-delay"]: `${i * 80}ms` }}
                >
                  <div className="gift-occasions-card-face gift-occasions-card-front">
                    {/* Image Section */}
                    <div className="gift-occasions-img-wrap">
                      <img src={img} alt={label} className="gift-occasions-image" />
                      {/* <div className="gift-occasions-badge">Popular</div> */}
                      {/* <div className="gift-occasions-hover-icon" aria-hidden>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <path d="M8 9l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div> */}
                    </div>

                    {/* Text Section Below Image */}
                    <div className="gift-occasions-front-meta">
                      <div className="gift-occasions-title">{label}</div>
                    </div>
                  </div>

                  <div className="gift-occasions-card-face gift-occasions-card-back" aria-hidden={!isFlipped}>
                    <div className="gift-occasions-back-inner">
                      <h3 className="gift-occasions-back-title">{label}</h3>
                      <p className="gift-occasions-back-desc">{description}</p>
                      <div className="gift-occasions-back-actions">
                        <button
                          className="gift-occasions-btn"
                          onClick={(e) => handleExplore(e, label)}
                        >
                          Explore Collection
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GiftOccasionsShowcase