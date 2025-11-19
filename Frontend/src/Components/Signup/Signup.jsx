import React from "react";
import "./Signup.css";
import heroImg from "../../assets/img-1.webp"; // <-- replace with your hero image path
import logoImg from "../../assets/Art and Culture Logo.webp"; 


export default function SignInPage() {
  return (
    <div className="lnux-root">
      <div className="lnux-center">

        {/* LEFT HERO */}
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


            <h1 className="lnux-hero-heading">Welcome back!</h1>

            <p className="lnux-hero-sub">
              Get access to your Orders, Wishlist and Recommendations.
            </p>

            <button className="lnux-hero-btn" type="button" aria-label="Watch demo">
              <span className="lnux-hero-play">▶</span>
              <span>Watch demo</span>
            </button>
          </div>
        </aside>

        {/* RIGHT SIGN-IN PANEL */}
        <main className="lnux-panel" aria-labelledby="lnux-title">
          <h2 id="lnux-title" className="lnux-panel-heading">Sign In</h2>

          <form className="lnux-form" onSubmit={(e) => e.preventDefault()}>

            <label className="lnux-field">
              <span className="lnux-field-label">Email Address</span>
              <input className="lnux-input" type="email" placeholder="Enter Email" required />
            </label>

            <label className="lnux-field">
              <span className="lnux-field-label">Password</span>
              <input className="lnux-input" type="password" placeholder="Enter Password" required />
            </label>

            <div className="lnux-helpers-row">
              <label className="lnux-remember">
                <input type="checkbox" className="lnux-remember-input" />
                <span className="lnux-remember-box" aria-hidden="true" />
                <span className="lnux-remember-text">Remember Me</span>
              </label>

              <a className="lnux-forgot" href="/forgot" target="_blank" rel="noopener noreferrer">
                Forgot Password ?
              </a>
            </div>

            <button className="lnux-submit" type="submit">Sign In</button>

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
              Don't have an account? <a className="lnux-link" href="/signup">Sign Up</a>
            </div>

          </form>
        </main>
      </div>
    </div>
  );
}
