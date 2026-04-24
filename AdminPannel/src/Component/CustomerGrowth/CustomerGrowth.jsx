import React, { useState } from "react";
import "./CustomerGrowth.css";
import { FaMapMarkerAlt, FaEllipsisV } from "react-icons/fa";

const CustomerGrowth = () => {
  const [activeTab, setActiveTab] = useState("Weekly");
  const [menuOpen, setMenuOpen] = useState(false);

  /* =========================
     DATA FOR BUTTONS
  ========================= */
  const chartData = {
    All: [45, 30, 55, 48, 60, 52, 35, 58, 28, 40, 55, 72],
    Weekly: [40, 30, 55, 45, 60, 50, 30, 55, 25, 35, 50, 70],
    Monthly: [25, 35, 45, 55, 60, 65, 50, 58, 62, 70, 75, 80],
    Yearly: [15, 22, 28, 35, 40, 48, 52, 60, 66, 72, 78, 85],
  };

  const labels = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const customers = [
    {
      name: "Sarah Johnson",
      city: "New York, USA",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      color: "#3b82f6",
    },
    {
      name: "James Carter",
      city: "Los Angeles, USA",
      img: "https://randomuser.me/api/portraits/men/22.jpg",
      color: "#ec4899",
    },
    {
      name: "Olivia Brown",
      city: "Chicago, USA",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      color: "#f59e0b",
    },
    {
      name: "Michael Lee",
      city: "Houston, USA",
      img: "https://randomuser.me/api/portraits/men/40.jpg",
      color: "#10b981",
    },
  ];

  return (
    <div className="growth-wrapper">

      {/* LEFT SIDE */}
      <div className="growth-card customer-list-card">
        <div className="top-head">
          <h3>Active Customers</h3>
          <span>View All</span>
        </div>

        <div className="customer-scroll">
          {customers.map((item, index) => (
            <div className="customer-box" key={index}>
              <img src={item.img} alt="user" />

              <div className="customer-info">
                <h4>{item.name}</h4>
                <p>
                  <FaMapMarkerAlt /> {item.city}
                </p>
              </div>

              <div
                className="status-ring"
                style={{ borderColor: item.color }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="growth-card chart-card">
        <div className="top-head chart-head">
          <h3>Customer Growth</h3>

          <div className="chart-actions">
            {["All", "Weekly", "Monthly", "Yearly"].map((tab) => (
              <button
                key={tab}
                className={activeTab === tab ? "active" : ""}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}

            <div className="menu-box">
              <FaEllipsisV onClick={() => setMenuOpen(!menuOpen)} />

              {menuOpen && (
                <div className="dropdown-menu">
                  <p>View</p>
                  <p>Edit</p>
                  <p>Delete</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* GRAPH */}
        <div className="bar-chart">
          {chartData[activeTab].map((value, index) => (
            <div className="bar-col" key={index}>
              <span>{labels[index]}</span>

              <div className="bar-bg">
                <div
                  className="bar-fill"
                  style={{
                    height: `${value}%`,
                    animationDelay: `${index * 0.08}s`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="chart-footer">
          <div>
            <p>This Month</p>
            <h2>2,248</h2>
          </div>

          <div>
            <p>Last Month</p>
            <h2>1,526</h2>
          </div>

          <div className="satisfaction">
            <h2>92%</h2>
            <p>Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerGrowth;