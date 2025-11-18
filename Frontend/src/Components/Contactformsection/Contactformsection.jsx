import React from "react";
import "./ContactFormsection.css";
import kidImg from "../../assets/k-5.webp"; // replace with your image path

export default function ContactFormSection() {
  return (
    <section className="contactformux-root">
      <div className="contactformux-inner">

        {/* LEFT FORM */}
        <div className="contactformux-left">
          <p className="contactformux-topline">
            HAVE ANY QUESTIONS? SO PLEASE
          </p>

          <h2 className="contactformux-title">
            Feel Free To Contact!
          </h2>

          <form className="contactformux-form" onSubmit={(e)=> e.preventDefault()}>
            <div className="contactformux-row">
              <label className="contactformux-label">
                First Name <span className="contactformux-required">(Required)</span>
                <input type="text" className="contactformux-input" />
              </label>

              <label className="contactformux-label">
                Last Name <span className="contactformux-required">(Required)</span>
                <input type="text" className="contactformux-input" />
              </label>
            </div>

            <div className="contactformux-row">
              <label className="contactformux-label">
                Email Address <span className="contactformux-required">(Required)</span>
                <input type="email" className="contactformux-input" />
              </label>

              <label className="contactformux-label">
                Phone Number <span className="contactformux-required">(Required)</span>
                <input type="text" className="contactformux-input" />
              </label>
            </div>

            <label className="contactformux-label">
              Message <span className="contactformux-required">(Required)</span>
              <textarea className="contactformux-textarea" placeholder="Type your message"></textarea>
            </label>

            <button type="submit" className="contactformux-btn">
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT IMAGE COLUMN */}
        <div className="contactformux-right">
          
          <div className="contactformux-yellowblob" aria-hidden="true" />

          <div className="contactformux-kid-wrap">
            <div className="contactformux-kid-frame">
              <img src={kidImg} alt="Kid painting" className="contactformux-kidimg" />
            </div>
          </div>

          {/* inline rainbow SVG decoration */}
          <svg className="contactformux-rainbow" viewBox="0 0 160 70" aria-hidden="true" focusable="false">
            <g fill="none" stroke-linecap="round" stroke-linejoin="round" transform="translate(0,0)">
              <path d="M12 60 C40 20, 120 20, 148 60" stroke="#ff8db2" stroke-width="9"/>
              <path d="M22 60 C40 30, 120 30, 138 60" stroke="#6fb8ff" stroke-width="9"/>
              <path d="M32 60 C40 38, 120 38, 128 60" stroke="#ffb84d" stroke-width="9"/>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
