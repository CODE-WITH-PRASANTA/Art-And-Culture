import React, { useEffect, useState } from "react";
import { FiHome, FiChevronRight } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import "./TrackOrderBreadcrumb.css";

/* Step item */
const Step = ({ label, icon, active, href }) => (
  <li
    className={`tob-step ${active ? "active" : ""}`}
    role="listitem"
    aria-current={active ? "step" : undefined}
  >
    {href && !active ? (
      <a className="tob-step-link" href={href}>
        {icon && <span className="tob-step-icon">{icon}</span>}
        <span className="tob-step-label">{label}</span>
      </a>
    ) : (
      <span className="tob-step-link">
        {icon && <span className="tob-step-icon">{icon}</span>}
        <span className="tob-step-label">{label}</span>
      </span>
    )}
  </li>
);

/* Main Track Order Breadcrumb */
const TrackOrderBreadcrumb = ({ currentStep = 2 }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const steps = [
    { label: "Home", icon: <FiHome />, href: "/" },
    { label: "Track Order", icon: <TbTruckDelivery /> },
  ];

  return (
    <nav
      className={`tob-root ${loaded ? "loaded" : ""}`}
      aria-label="Track Order breadcrumb"
    >
      <div className="tob-inner">
        <ol className="tob-list" role="list">
          {steps.map((step, idx) => {
            const isActive = idx + 1 === currentStep;
            const isLast = idx === steps.length - 1;
            return (
              <React.Fragment key={`${step.label}-${idx}`}>
                <Step
                  label={step.label}
                  icon={step.icon}
                  active={isActive}
                  href={step.href}
                />
                {!isLast && (
                  <li className="tob-sep" aria-hidden>
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

export default TrackOrderBreadcrumb;
