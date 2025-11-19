import React from 'react'
import { FaGift, FaBoxOpen, FaHeadset, FaShippingFast } from 'react-icons/fa'
import './Artpromise.css'

export default function Artpromise() {
  const items = [
    {
      Icon: FaGift,
      title: 'Gift‑Ready Elegance',
      desc: 'Our premium packaging adds a touch of grace, perfect for gifting your loved ones.'
    },
    {
      Icon: FaBoxOpen,
      title: 'Hassle‑Free Returns',
      desc: 'Enjoy the ease of 7‑day returns, ensuring your complete satisfaction.'
    },
    {
      Icon: FaHeadset,
      title: 'Support That Cares',
      desc: 'Reach out to us anytime, 24/6, for dedicated assistance.'
    },
    {
      Icon: FaShippingFast,
      title: 'Fast, Pan‑India Delivery',
      desc: 'Lightning‑fast delivery across India in just 1–3 days.'
    }
  ]

  return (
    <section className="ap-section" aria-label="Svastika's Promise">
      <div className="ap-inner">
        <h2 className="ap-heading">Art and Culture's Promise</h2>
        <div className="ap-grid">
          {items.map(({ Icon, title, desc }, i) => (
            <div className="ap-card" key={i}>
              <div className="ap-icon-wrap" aria-hidden>
                <Icon className="ap-icon" />
              </div>
              <h3 className="ap-title">{title}</h3>
              <p className="ap-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

