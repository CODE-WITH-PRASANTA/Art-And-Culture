import React, { useState } from "react";
import "./CustomerInsights.css";
import {
  FaStar,
  FaEllipsisV,
  FaChevronDown,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const CustomerInsights = () => {
  const [topTab, setTopTab] = useState("Weekly");
  const [chartTab, setChartTab] = useState("Weekly");
  const [menuOpen, setMenuOpen] = useState(false);

  /* ==========================
     TOP CUSTOMER DATA
  ========================== */
  const customerData = {
    Weekly: [
      ["Sarah Johnson", "5 property purchases", "$2.8M"],
      ["Michael Brown", "3 rental agreements", "$1.5M"],
      ["Amit Sharma", "7 property inquiries", "$1.1M"],
      ["Emily Davis", "2 premium listings", "$940K"],
      ["Robert Wilson", "1 villa purchase", "$810K"],
    ],
    Monthly: [
      ["Sarah Johnson", "18 property purchases", "$8.8M"],
      ["Michael Brown", "11 rental agreements", "$4.5M"],
      ["Amit Sharma", "14 inquiries", "$3.1M"],
      ["Emily Davis", "8 premium listings", "$2.4M"],
      ["Robert Wilson", "4 villa purchase", "$1.8M"],
    ],
    Yearly: [
      ["Sarah Johnson", "56 purchases", "$22M"],
      ["Michael Brown", "39 rentals", "$12M"],
      ["Amit Sharma", "48 inquiries", "$10M"],
      ["Emily Davis", "27 listings", "$8M"],
      ["Robert Wilson", "15 villas", "$6M"],
    ],
  };

  /* ==========================
     LINE CHART DATA
  ========================== */
  const chartData = {
    Weekly: [
      { day: "Sun", value: 35 },
      { day: "Mon", value: 20 },
      { day: "Tue", value: 48 },
      { day: "Wed", value: 32 },
      { day: "Thu", value: 40 },
      { day: "Fri", value: 36 },
      { day: "Sat", value: 44 },
    ],
    Monthly: [
      { day: "Sun", value: 20 },
      { day: "Mon", value: 42 },
      { day: "Tue", value: 30 },
      { day: "Wed", value: 55 },
      { day: "Thu", value: 48 },
      { day: "Fri", value: 60 },
      { day: "Sat", value: 52 },
    ],
    Yearly: [
      { day: "Sun", value: 15 },
      { day: "Mon", value: 25 },
      { day: "Tue", value: 35 },
      { day: "Wed", value: 50 },
      { day: "Thu", value: 60 },
      { day: "Fri", value: 65 },
      { day: "Sat", value: 72 },
    ],
  };

  const pieData = [
    { name: "Blue", value: 25 },
    { name: "Red", value: 25 },
    { name: "Yellow", value: 25 },
    { name: "Green", value: 25 },
  ];

  const COLORS = ["#3b82f6", "#ef4444", "#f59e0b", "#10b981"];

  const avatars = [
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/22.jpg",
    "https://randomuser.me/api/portraits/men/36.jpg",
    "https://randomuser.me/api/portraits/women/55.jpg",
    "https://randomuser.me/api/portraits/men/60.jpg",
  ];

  return (
    <div className="insight-wrapper">

      {/* LEFT SIDE */}
      <div className="insight-card top-customer-card">
        <div className="card-head">
          <h3>Top Customers</h3>

          <button
            className="tab-btn"
            onClick={() =>
              setTopTab(
                topTab === "Weekly"
                  ? "Monthly"
                  : topTab === "Monthly"
                  ? "Yearly"
                  : "Weekly"
              )
            }
          >
            {topTab} <FaChevronDown />
          </button>
        </div>

        <div className="customer-scroll">
          {customerData[topTab].map((item, index) => (
            <div className="customer-row" key={index}>
              <div className="left-info">
                <img src={avatars[index]} alt="user" />

                <div>
                  <h4>{item[0]}</h4>
                  <p>{item[1]}</p>
                </div>
              </div>

              <h5>{item[2]}</h5>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right-section">

        {/* FEEDBACK */}
        <div className="insight-card feedback-card">
          <h3>Feedback Summary</h3>

          <div className="feedback-content">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="user"
              className="feed-user"
            />

            <div className="feed-text">
              <h4>Amit Sharma</h4>

              <span>
                <FaStar /> (4.6)
              </span>

              <p>
                "I was very impressed with the professionalism and
                professionalism."
              </p>
            </div>

            <img
              src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
              alt="illustration"
              className="feed-illus"
            />
          </div>
        </div>

        {/* BOTTOM TWO */}
        <div className="bottom-grid">

          {/* LINE GRAPH */}
          <div className="insight-card line-card">
            <div className="line-top">
              <div>
                <h2>1,481</h2>
                <p>New Customers</p>
              </div>

              <div className="menu-wrap">
                <FaEllipsisV
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="menu-icon"
                />

                {menuOpen && (
                  <div className="drop-menu">
                    {["Weekly", "Monthly", "Yearly"].map((tab) => (
                      <p
                        key={tab}
                        onClick={() => {
                          setChartTab(tab);
                          setMenuOpen(false);
                        }}
                      >
                        {tab}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={chartData[chartTab]}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ r: 5 }}
                  animationDuration={1500}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* PIE GRAPH */}
          <div className="insight-card pie-card">
            <h2>Total Active Customers</h2>
            <p>2.87% This month</p>

            <ResponsiveContainer width="100%" height={240}>
              <PieChart>
                <Pie
                  data={pieData}
                  innerRadius={55}
                  outerRadius={90}
                  dataKey="value"
                  animationDuration={1800}
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CustomerInsights;