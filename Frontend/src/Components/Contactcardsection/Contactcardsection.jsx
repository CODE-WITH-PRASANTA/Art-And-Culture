import React from "react";
import "./Contactcardsection.css";

/**
 * ContactCards
 * - 3 cards: Phone No, Monday to Friday, Email Address
 * - Hover/focus: outline + icon circle become #7a2e1b
 *
 * Usage:
 *  import ContactCards from "./ContactCards";
 *  <ContactCards />
 */

export default function ContactCards() {
  const cards = [
    {
      key: "phone",
      title: "Phone No",
      line: "+44 (0) 207 689 7888",
      icon: "phone",
    },
    {
      key: "hours",
      title: "Monday to Friday",
      line: "8.30am — 02.00pm",
      icon: "clock",
    },
    {
      key: "email",
      title: "Email Address",
      line: "user@domainname.com",
      icon: "mail",
    },
  ];

  return (
    <section className="contactux-root" aria-labelledby="contactux-heading">
      <div className="contactux-inner">
        <div className="contactux-grid" role="list">
          {cards.map((c) => (
            <article
              key={c.key}
              className="contactux-card"
              role="listitem"
              tabIndex={0}
              aria-label={`${c.title}: ${c.line}`}
            >
              <div className="contactux-icon-wrap" aria-hidden="true">
                <span className="contactux-icon-circle">
                  {c.icon === "phone" && (
                    <svg className="contactux-icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12 1.05.38 2.06.76 3.02a2 2 0 0 1-.45 2.11L9.91 11.91a16 16 0 0 0 6.18 6.18l1.06-1.06a2 2 0 0 1 2.11-.45c.96.38 1.97.64 3.02.76A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {c.icon === "clock" && (
                    <svg className="contactux-icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                      <path d="M12 7v6l4 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {c.icon === "mail" && (
                    <svg className="contactux-icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
                      <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
              </div>

              <div className="contactux-card-body">
                <div className="contactux-title">{c.title}</div>
                <div className="contactux-line">{c.line}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
