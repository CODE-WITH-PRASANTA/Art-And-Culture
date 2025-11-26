import React, { useEffect, useState } from "react";
import { FiHome, FiChevronRight } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import "./OrderBreadcrumb.css";

/* Crumb item */
const Crumb = ({ label, href, active, icon }) => (
  <li
    className={`ob-crumb ${active ? "active" : ""}`}
    role="listitem"
    aria-current={active ? "page" : undefined}
  >
    {href && !active ? (
      <a className="ob-crumb-link" href={href}>
        {icon && <span className="ob-crumb-icon">{icon}</span>}
        <span className="ob-crumb-label">{label}</span>
      </a>
    ) : (
      <span className="ob-crumb-link">
        {icon && <span className="ob-crumb-icon">{icon}</span>}
        <span className="ob-crumb-label">{label}</span>
      </span>
    )}
  </li>
);

/* Main breadcrumb */
const OrderBreadcrumb = ({ currentStep = 2 }) => {
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
    <nav className={`ob-root ${loaded ? "loaded" : ""}`} aria-label="Order breadcrumb">
      <div className="ob-inner">
        <ol className="ob-list" role="list">
          {steps.map((step, idx) => {
            const isActive = idx + 1 === currentStep;
            const isLast = idx === steps.length - 1;
            return (
              <React.Fragment key={`${step.label}-${idx}`}>
                <Crumb
                  label={step.label}
                  icon={step.icon}
                  active={isActive}
                  href={step.href}
                />
                {!isLast && (
                  <li className="ob-sep" aria-hidden>
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

export default OrderBreadcrumb;
