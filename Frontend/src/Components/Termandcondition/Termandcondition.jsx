import React from "react";
import "./Termandcondition.css";
import { FaBolt } from "react-icons/fa";

const Terms = () => {
  return (
    <div className="terms-page">
      <div className="terms-header">
        <h1>Terms of Conditions</h1>
        <p>Last Updated 24 Nov, 2025</p>
      </div>

      <div className="terms-box">
        <h2 className="section-title">Introduction</h2>

        <div className="terms-item">
          <FaBolt className="icon" />
          <p>
            These Website Standard Terms and Conditions written on this webpage
            shall manage your use of our website, Website Name accessible at
            Website.com. By accessing this website we assume you accept these
            terms and conditions. Do not continue to use Website Name if you do
            not agree to take all of the terms and conditions stated on this page.
          </p>
        </div>

        <div className="terms-item">
          <FaBolt className="icon" />
          <p>
            These Terms will be applied fully and affect you to your use of this
            Website. By using this Website, you agreed to accept all terms and
            conditions written in here. You must not use this Website if you disagree with any of these website standard Terms and Conditions.
          </p>
        </div>  
         <div className="terms-item">
          <FaBolt className="icon" />
          <p>
            Minors or people below 18 years old are not allowed to use this
            Website.
          </p>
        </div>

        <h2 className="section-title">Rights & Restrictions</h2>

<div className="terms-item">
  <FaBolt className="icon" />
  <p>
    Other than the content you own, under these Terms, Company Name
    and/or its licensors own all the intellectual property rights and
    materials contained in this Website.
  </p>
</div>

<div className="terms-item">
  <FaBolt className="icon" />
  <p>
    You are granted limited license only for purposes of viewing the material
    contained on this Website.
  </p>
</div>

<div className="terms-item">
  <FaBolt className="icon" />
  <p>You are specifically restricted from all of the following:</p>
</div>

<ul className="sub-list">
  <li>Publishing any Website material in any other media;</li>
  <li>Selling, sublicensing and/or otherwise commercializing any Website material;</li>
  <li>Reproduce, duplicate or copy material from Website Name</li>
  <li>Redistribute content from Website Name</li>
  <li>Using this Website in any way that is or may be damaging to this Website;</li>
  <li>Using this Website to engage in any advertising or marketing.</li>
</ul>

<div className="terms-item">
  <FaBolt className="icon" />
  <p>
    Certain areas of this Website are restricted from being accessed by you
    and Company Name may further restrict access by you to any areas of this
    Website, at any time, in absolute discretion. Any user ID and password
    you may have for this Website are confidential and you must maintain
    confidentiality as well.
  </p>
</div>

<h2 className="section-title">No warranties</h2>

<div className="terms-item">
  <FaBolt className="icon" />
  <p>
    This Website is provided “as is,” with all faults, and Company Name
    expresses no representations or warranties, of any kind related to this
    Website or the materials contained on this Website. Also, nothing
    contained on this Website shall be interpreted as advising you.
  </p>
</div>
<h2 className="section-title">License</h2>

<div className="terms-item">
  <FaBolt className="icon" />
  <p>
    Company Name reserves the right to monitor all Comments and to remove any Comments
    which can be considered inappropriate, offensive or causes breach of these Terms
    and Conditions.
  </p>
</div>

<div className="terms-item">
  <FaBolt className="icon" />
  <p>You warrant and represent that:</p>
</div>

<ul className="sub-list">
  <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
  <li>The Comments do not invade any intellectual property right, including copyright, patent or trademark of any third party;</li>
  <li>The Comments do not contain any defamatory, libelous, offensive, indecent or unlawful material;</li>
  <li>The Comments will not be used to solicit or promote business or custom or unlawful activity.</li>
</ul>

<div className="terms-item">
  <FaBolt className="icon" />
  <p>
    Unless otherwise stated, Company Name and/or its licensors own the intellectual
    property rights for all material on Website Name. All intellectual property rights
    are reserved. You may access this from Website Name for your own personal use
    subjected to restrictions set in these terms and conditions.
  </p>
</div>

<div className="terms-item">
  <FaBolt className="icon" />
  <p>
    You hereby grant Company Name a non-exclusive license to use, reproduce, edit and
    authorize others to use, reproduce and edit any of your Comments in any and all
    forms, formats or media.
  </p>
</div>

<div className="warning-box">
  No use of Company Name's logo or other artwork will be allowed for linking absent a
  trademark license agreement.
</div>

<div className="button-row">
  <button className="decline-btn">✖ Decline</button>
  <button className="accept-btn">Accept Now</button>
</div>

      </div>
    </div>
  );
};

export default Terms;
