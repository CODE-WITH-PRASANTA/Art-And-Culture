import React from "react";
import "./PrivacyPolicy.css";
import { FaBolt } from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <div className="policy-page">

      {/* HEADER */}
      <div className="policy-header">
        <h1>Privacy Policy</h1>
        <p>This Privacy policy was published on November 24<sup>th</sup>, 2025.</p>
      </div>

      {/* CONTENT BOX */}
      <div className="policy-box">

        <h2 className="section-title">Introduction</h2>

        <div className="policy-item">
          <FaBolt className="icon" />
          <p>
            Generally, we may collect and use personal information for many purposes,
            including but not limited to: billing, product and service fulfillment,
            understanding customer needs, providing a better website, improving
            products and services, and communicating with customers and potential
            customers regarding our products and services with third-party products
            and services.
          </p>
        </div>

        <div className="policy-item">
          <FaBolt className="icon" />
          <p>
            Clients on Demand, LLC is committed to protecting both the personal as
            well as business information you share and/or store with us.
          </p>
        </div>

        <div className="policy-item">
          <FaBolt className="icon" />
          <p>
            This Privacy Policy applies to transactions and activities and data gathered
            through the Clients on Demand Website and interaction you may have with its
            related Social Media accounts. Please review this Privacy Policy periodically
            as we may revise it without notice.
          </p>
        </div>

        <h2 className="section-title">Shipping Agreement</h2>

        <div className="policy-item">
          <FaBolt className="icon" />
          <p>
            We may share information about our audience in aggregate or de-identified
            form. Nothing in this Privacy Policy is intended to indicate a restriction
            of our use or sharing of aggregated or de-identified information in any way.
            </p>
        </div>
<h2 className="section-title">Refund Policy</h2>

<div className="policy-item">
  <FaBolt className="icon" />
  <p>
    The information we collect is used for a variety of purposes, such as:
  </p>
</div>

<ul className="sub-list">
  <li>
    to enable your use of our services and fulfill your requests for certain features,
    such as enabling you to participate in and renew paid services, polls, and message boards
  </li>

  <li>
    by performing statistical, demographic and marketing analyses of users of our services
    to improve our relationship with our customers
  </li>

  <li>
    for product development purposes and to generally inform advertisers about the nature
    of our subscriber base to improve our relationship with our customers
  </li>

  <li>
    to customize your experience by allowing advertising to be targeted to the users
    for whom such advertising is most pertinent
  </li>
</ul>

<h2 className="section-title">Use Of Cookies</h2>

<div className="policy-item">
  <FaBolt className="icon" />
  <p>
    We use “cookies,” Web beacons, HTML5 local storage, and other similar technologies.
    These technologies allow us to manage access to and use of the Services, recognize
    you and provide personalizaion , and help us understand how people understand our services. You may not be able to access 
    certain areas of our websites , including ClintsonDemand.com , if your computer doesnot accepts cookies from us.
  </p>
  </div>
  <div className="policy-item">
  <FaBolt className="icon" />
  <p>
    We do not respond to browser-based “do not track” signals.
  </p>
</div>

<div className="policy-item">
  <FaBolt className="icon" />
  <p>
    We may transmit non-personally identifiable website usage information to third parties
    in order to show you advertising for Clients on Demand when you visit other sites.
  </p>
</div>
<h2 className="section-title">Disclaimer</h2>

<div className="policy-item">
  <FaBolt className="icon" />
  <p>
    This Privacy Policy may be amended by us at any time and without notice,
    but only by amending this Policy as posted on this Website. Any amendments
    will become effective 30 days after being posted on the website unless
    circumstances require that a change is immediately implemented.
  </p>
</div>

<div className="warning-box">
  No use of Company Name's logo or other artwork will be allowed for linking
  absent a trademark license agreement.
</div>

<div className="button-row">
  <button className="decline-btn">✖&nbsp; Decline</button>
  <button className="accept-btn">Accept Now</button>
</div>
  

      </div>
    </div>
  );
};

export default PrivacyPolicy;
