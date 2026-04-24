import React, { useState } from "react";
import "./PropertyDeviceSection.css";
import {
  FaMapMarkerAlt,
  FaChevronDown,
} from "react-icons/fa";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const PropertyDeviceSection = () => {
  const [activeTab, setActiveTab] = useState("Weekly");
  const [menuOpen, setMenuOpen] = useState(false);

  /* ==========================
     LEFT PROPERTY DATA
  ========================== */
  const properties = [
    {
      title: "Sunset View Towers",
      owner: "Laura Mitchell",
      price: "$450,000",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=300",
    },
    {
      title: "Harbor Heights",
      owner: "Olivia Brown",
      price: "$395,000",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?w=300",
    },
    {
      title: "Riverside Mansion",
      owner: "James Parker",
      price: "$510,000",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=300",
    },
    {
      title: "Central City Lofts",
      owner: "Emma Davis",
      price: "$360,000",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=300",
    },
    {
      title: "Lakeview Residences",
      owner: "Daniel Lee",
      price: "$420,000",
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=300",
    },
    {
      title: "Royal Palm Villa",
      owner: "Sophia Miller",
      price: "$580,000",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=300",
    },
  ];

  /* ==========================
     PIE DATA
  ========================== */
  const usageData = {
    Weekly: [
      { name: "Mobile", value: 45, color: "#ef4444" },
      { name: "Desktop", value: 35, color: "#10b981" },
      { name: "Tablet", value: 20, color: "#3b82f6" },
    ],
    Monthly: [
      { name: "Mobile", value: 40, color: "#ef4444" },
      { name: "Desktop", value: 38, color: "#10b981" },
      { name: "Tablet", value: 22, color: "#3b82f6" },
    ],
    Yearly: [
      { name: "Mobile", value: 48, color: "#ef4444" },
      { name: "Desktop", value: 30, color: "#10b981" },
      { name: "Tablet", value: 22, color: "#3b82f6" },
    ],
    Recent: [
      { name: "Mobile", value: 50, color: "#ef4444" },
      { name: "Desktop", value: 28, color: "#10b981" },
      { name: "Tablet", value: 22, color: "#3b82f6" },
    ],
  };

  const currentData = usageData[activeTab];
  const total = currentData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="property-device-wrapper">

      {/* LEFT SIDE */}
      <div className="section-card property-card">
        <div className="card-head">
          <h3>Property Value Purchased</h3>
          <span>View All</span>
        </div>

        <div className="property-scroll">
          {properties.map((item, index) => (
            <div className="property-row" key={index}>
              <div className="property-left">
                <img src={item.image} alt="property" />

                <div>
                  <h4>{item.title}</h4>

                  <p>
                    <FaMapMarkerAlt /> by {item.owner}
                  </p>
                </div>
              </div>

              <h5>{item.price}</h5>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="section-card device-card">
        <div className="card-head">
          <h3>Device Usage</h3>

          <div className="dropdown-wrap">
            <button
              className="tab-btn"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {activeTab} <FaChevronDown />
            </button>

            {menuOpen && (
              <div className="dropdown-menu">
                {["Recent", "Weekly", "Monthly", "Yearly"].map(
                  (item) => (
                    <p
                      key={item}
                      onClick={() => {
                        setActiveTab(item);
                        setMenuOpen(false);
                      }}
                    >
                      {item}
                    </p>
                  )
                )}
              </div>
            )}
          </div>
        </div>

        {/* PIE GRAPH */}
        <div className="chart-box">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={currentData}
                innerRadius={85}
                outerRadius={125}
                dataKey="value"
                startAngle={0}
                endAngle={360}
                animationDuration={1800}
              >
                {currentData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={entry.color}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div className="center-text">
            <span>Total</span>
            <h2>{total}</h2>
          </div>
        </div>

        {/* BOTTOM BOXES */}
        <div className="device-stats">
          {currentData.map((item, index) => (
            <div className="stat-box" key={index}>
              <span
                className="dot"
                style={{ background: item.color }}
              ></span>

              <p>{item.name}</p>
              <h4>{item.value}%</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyDeviceSection;