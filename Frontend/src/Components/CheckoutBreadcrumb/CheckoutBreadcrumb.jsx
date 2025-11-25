import React, { useEffect, useState } from "react";
import { FiHome, FiShoppingCart, FiChevronRight } from "react-icons/fi";
import "./CheckoutBreadcrumb.css";

/* Step item */
const CheckoutStep = ({ label, icon, active, href }) => (
  <li
    className={`cb-step ${active ? "active" : ""}`}
    role="listitem"
    aria-current={active ? "step" : undefined}
  >
    {href && !active ? (
      <a className="cb-step-link" href={href}>
        <span className="cb-step-icon">{icon}</span>
        <span className="cb-step-label">{label}</span>
      </a>
    ) : (
      <span className="cb-step-link">
        <span className="cb-step-icon">{icon}</span>
        <span className="cb-step-label">{label}</span>
      </span>
    )}
  </li>
);

/* Main Checkout Breadcrumb */
const CheckoutBreadcrumb = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const steps = [
    { label: "Home", icon: <FiHome />, href: "/" }, // clickable home
    { label: "Checkout", icon: <FiShoppingCart /> },
  ];

  return (
    <nav
      className={`cb-root ${loaded ? "loaded" : ""}`}
      aria-label="Checkout breadcrumb"
    >
      <div className="cb-inner">
        <ol className="cb-list" role="list">
          {steps.map((step, idx) => {
            const isActive = idx === 1; // Checkout is active
            const isLast = idx === steps.length - 1;
            return (
              <React.Fragment key={`${step.label}-${idx}`}>
                <CheckoutStep
                  label={step.label}
                  icon={step.icon}
                  active={isActive}
                  href={step.href}
                />
                {!isLast && (
                  <li className="cb-sep" aria-hidden>
                    <FiChevronRight />
                  </li>
                )}
              </React.Fragment>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default CheckoutBreadcrumb;
