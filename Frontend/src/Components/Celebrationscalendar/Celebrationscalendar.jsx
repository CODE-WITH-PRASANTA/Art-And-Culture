import React, { useState, useEffect } from 'react'
import './Celebrationscalendar.css'

const Celebrationscalendar = () => {
  const [flipped, setFlipped] = useState(null)
  const [touch, setTouch] = useState(false)

  const occasions = [
    {
      label: 'DHANTERAS Gifts',
      img: 'https://svastika.in/cdn/shop/files/Diwali.jpg?v=1753943998',
      description: 'Beautiful gifts for the perfect wedding celebration'
    },
    {
      label: 'DIWALI GIFTS',
      img: 'https://svastika.in/cdn/shop/files/Diwali.jpg?v=1753943998',
      description: 'Warm wishes for new beginnings and homes'
    },
    {
      label: 'BHAI DHOOJ GIFTS',
      img: 'https://svastika.in/cdn/shop/files/Diwali.jpg?v=1753943998',
      description: 'Traditional gifts for baby naming ceremonies'
    },
    {
      label: 'NAVARATRI GIFTS',
      img: 'https://svastika.in/cdn/shop/files/Diwali.jpg?v=1753943998',
      description: 'Adorable gifts for the little one on the way'
    },
    {
      label: 'DURGA PUJA GIFTS',
      img: 'https://svastika.in/cdn/shop/files/Diwali.jpg?v=1753943998',
      description: 'Celebrate love and milestones with special gifts'
    },
    {
      label: 'DUSSEHRA GIFTS',
      img: 'https://svastika.in/cdn/shop/files/Diwali.jpg?v=1753943998',
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
    <section className="celebrations-calendar-showcase" aria-labelledby="celebrations-calendar-heading">
      <div className="celebrations-calendar-inner">
        {/* Left Column - Heading */}
        <div className="celebrations-calendar-heading-wrap">
          <h2 id="celebrations-calendar-heading" className="celebrations-calendar-heading">
            Celebrations
            <br />
            Calendar
          </h2>
          <p className="celebrations-calendar-sub">Curated selections — perfect for every celebration.</p>
        </div>

        {/* Right Column - Cards Grid */}
        <div className="celebrations-calendar-cards-container">
          <div className="celebrations-calendar-cards" role="list" aria-label="Celebrations calendar">
            {occasions.map(({ img, label, description }, i) => {
              const isFlipped = flipped === i
              return (
                <div
                  key={label}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isFlipped}
                  aria-label={`Open ${label} collection`}
                  className={`celebrations-calendar-card ${isFlipped ? "is-flipped" : ""}`}
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
                  <div className="celebrations-calendar-card-face celebrations-calendar-card-front">
                    {/* Image Section */}
                    <div className="celebrations-calendar-img-wrap">
                      <img src={img} alt={label} className="celebrations-calendar-image" />
                      {/* <div className="celebrations-calendar-badge">Popular</div> */}
                      {/* <div className="celebrations-calendar-hover-icon" aria-hidden>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <path d="M8 9l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div> */}
                    </div>

                    {/* Text Section Below Image */}
                    <div className="celebrations-calendar-front-meta">
                      <div className="celebrations-calendar-title">{label}</div>
                    </div>
                  </div>

                  <div className="celebrations-calendar-card-face celebrations-calendar-card-back" aria-hidden={!isFlipped}>
                    <div className="celebrations-calendar-back-inner">
                      <h3 className="celebrations-calendar-back-title">{label}</h3>
                      <p className="celebrations-calendar-back-desc">{description}</p>
                      <div className="celebrations-calendar-back-actions">
                        <button
                          className="celebrations-calendar-btn"
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

export default Celebrationscalendar