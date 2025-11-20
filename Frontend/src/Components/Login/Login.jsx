import React from "react";
import "./Login.css";
import heroImg from "../../assets/img-1.webp"; // <-- REPLACE this with your hero image path
import logoImg from "../../assets/Art and Culture Logo.webp"; 


export default function LoginPage() {
  return (
    <div className="lnux-root">
      <div className="lnux-center">

        {/* LEFT HERO PANEL */}
        <aside
          className="lnux-hero"
          style={{ backgroundImage: `url(${heroImg})` }}
          aria-hidden="true"
        >
          <div className="lnux-hero-tint" />

          <div className="lnux-hero-inner">
            <div className="lnux-logo">
  <img src={logoImg} alt="Brand Logo" className="lnux-logo-img" />
</div>


            <h1 className="lnux-hero-heading">You're new here!</h1>

            <p className="lnux-hero-sub">
              Sign up with your email and personal details to get started!
            </p>

            <button className="lnux-hero-btn" type="button" aria-label="Watch demo">
              <span className="lnux-hero-play">▶</span>
              <span>Watch demo</span>
            </button>
          </div>
        </aside>

        {/* RIGHT FORM PANEL */}
        <main className="lnux-panel" aria-labelledby="lnux-title">
          <h2 id="lnux-title" className="lnux-panel-heading">Sign Up</h2>

          <form className="lnux-form" onSubmit={(e) => e.preventDefault()}>

            <label className="lnux-field">
              <span className="lnux-field-label">Full Name</span>
              <input className="lnux-input" type="text" placeholder="Enter Your Name" required />
            </label>

            <label className="lnux-field">
              <span className="lnux-field-label">Email Address</span>
              <input className="lnux-input" type="email" placeholder="Enter Your Email" required />
            </label>

            <label className="lnux-field">
              <span className="lnux-field-label">Password</span>
              <input className="lnux-input" type="password" placeholder="Enter Password" required />
            </label>

            <div className="lnux-terms-row">
              <label className="lnux-terms">
                <input type="checkbox" className="lnux-terms-checkbox" />
                <span className="lnux-checkbox-visual" aria-hidden="true" />
                <span className="lnux-terms-text">
                  I agree to the&nbsp;
                  <a className="lnux-link" href="/terms" target="_blank" rel="noopener noreferrer">Terms</a>
                  &nbsp;and&nbsp;
                  <a className="lnux-link" href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
                </span>
              </label>
            </div>

            <button className="lnux-submit" type="submit">Sign Up</button>

            <div className="lnux-divider">
              <span className="lnux-divider-line" />
              <span className="lnux-divider-text">Or with Social Profile</span>
              <span className="lnux-divider-line" />
            </div>

            <div className="lnux-socials" role="list">
              <button className="lnux-social lnux-social--fb" aria-label="Continue with Facebook">f</button>
              <button className="lnux-social lnux-social--tw" aria-label="Continue with Twitter">t</button>
              <button className="lnux-social lnux-social--gg" aria-label="Continue with Google">G</button>
              <button className="lnux-social lnux-social--in" aria-label="Continue with LinkedIn">in</button>
            </div>

            <div className="lnux-footer">
              Already have an account? <a className="lnux-link" href="#signin">Sign In</a>
            </div>

          </form>
        </main>
      </div>
    </div>
  );
}
