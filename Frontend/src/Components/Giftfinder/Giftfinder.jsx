import React, { useState } from 'react'
import './Giftfinder.css'

export default function CompactGiftFinder() {
  const [occasion, setOccasion] = useState('Festivals, Weddings etc.')
  const [giftType, setGiftType] = useState('Home Decor, Spiritual etc.')

  const occasions = [
    'Festivals, Weddings etc.',
    'Birthday',
    'Anniversary',
    'Corporate',
    'Get Well'
  ]

  const giftTypes = [
    'Home Decor, Spiritual etc.',
    'Personalised',
    'Gadgets',
    'Flowers & Cakes',
    'Gift Cards'
  ]

  const findGifts = (e) => {
    e.preventDefault()
    alert(`Searching gifts for: ${occasion} — ${giftType}`)
  }

  return (
    <div className="cgf-container">
      <form onSubmit={findGifts} className="cgf-card">
        {/* Left Section with Icon and Occasion */}
        <div className="cgf-section">
          <div className="cgf-section-header">
            <div className="cgf-icon" aria-hidden>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="cgf-svg">
                <path d="M20 12v10H4V12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 7H2v5h20V7z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22V7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 7H7.5a2.5 2.5 0 110-5C11 2 12 7 12 7z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 7h4.5a2.5 2.5 0 100-5C13 2 12 7 12 7z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <label className="cgf-section-label">
              <span className="cgf-label-text">Occasion</span>
              <span className="cgf-label-required">*</span>
            </label>
          </div>
          
          <div className="cgf-select-wrapper">
            <select
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              className="cgf-select"
            >
              {occasions.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
            <div className="cgf-select-underline"></div>
            <div className="cgf-select-focus-border"></div>
          </div>
          
        </div>

        {/* Vertical Divider */}
        <div className="cgf-divider-wrapper">
          <div className="cgf-divider">
            <div className="cgf-divider-handle">
              <div className="cgf-divider-dot"></div>
            </div>
          </div>
        </div>

        {/* Middle Section - Gift Type */}
        <div className="cgf-section">
          <div className="cgf-section-header">
            <div className="cgf-section-label">
              <span className="cgf-label-text">Gift Type</span>
              <span className="cgf-label-required">*</span>
            </div>
          </div>
          
          <div className="cgf-select-wrapper">
            <select
              value={giftType}
              onChange={(e) => setGiftType(e.target.value)}
              className="cgf-select"
            >
              {giftTypes.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
            <div className="cgf-select-underline"></div>
            <div className="cgf-select-focus-border"></div>
          </div>
          
        </div>

        {/* Right Section - Button */}
        <div className="cgf-action-section">
          <button type="submit" className="cgf-button">
            <span className="cgf-button-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <span className="cgf-button-text">FIND GIFTS</span>
            <div className="cgf-button-ripple"></div>
          </button>
          
        </div>
      </form>
    </div>
  )
}