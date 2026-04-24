import React from "react";
import "./StatsCards.css";
import {
  FaUsers,
  FaHome,
  FaComments,
  FaHandshake,
  FaClock,
  FaQuestionCircle,
} from "react-icons/fa";

const StatsCards = () => {
  const stats = [
    {
      title: "Total Customers",
      value: "8,725",
      icon: <FaUsers />,
      bg: "#22c55e",
    },
    {
      title: "Listed Properties",
      value: "1,240",
      icon: <FaHome />,
      bg: "#a855f7",
    },
    {
      title: "Active Inquiries",
      value: "589",
      icon: <FaComments />,
      bg: "#facc15",
    },
    {
      title: "Closed Deals",
      value: "312",
      icon: <FaHandshake />,
      bg: "#3b82f6",
    },
    {
      title: "Pending Deals",
      value: "78",
      icon: <FaClock />,
      bg: "#ef4444",
    },
    {
      title: "Customer Visits",
      value: "456",
      icon: <FaQuestionCircle />,
      bg: "#475569",
    },
  ];

  return (
    <div className="stats-wrapper">
      {stats.map((item, index) => (
        <div className="stats-card" key={index}>
          <div className="stats-content">
            <h4>{item.title}</h4>
            <h2>{item.value}</h2>
          </div>

          <div
            className="stats-icon"
            style={{ backgroundColor: item.bg }}
          >
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;