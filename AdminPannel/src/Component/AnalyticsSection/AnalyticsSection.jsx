import React from "react";
import "./AnalyticsSection.css";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { FaEllipsisV } from "react-icons/fa";

const AnalyticsSection = () => {
  const earningsData = [
    { day: "Mon", blue: 0, red: 0 },
    { day: "Tue", blue: 20, red: 50 },
    { day: "Wed", blue: 60, red: 20 },
    { day: "Thu", blue: 70, red: 15 },
    { day: "Fri", blue: 50, red: 70 },
    { day: "Sat", blue: 90, red: 50 },
    { day: "Sun", blue: 80, red: 75 },
  ];

  const expenseData = [
    { month: "Jan 2019", value: 15000 },
    { month: "Feb 2019", value: 10000 },
    { month: "Mar 2019", value: 8000 },
  ];

  /* Replace Student Data with Project Data */
  const projectData = [
    { name: "Frontend", value: 65, color: "#8B2E14" },
    { name: "Backend", value: 25, color: "#C89B5E" },
    { name: "Database", value: 10, color: "#3b82f6" },
  ];

  return (
    <div className="analytics-wrapper">

      {/* Earnings */}
      <div className="analytics-card earnings-card">
        <div className="card-top">
          <h3>Earnings</h3>
          <FaEllipsisV />
        </div>

        <div className="earnings-head">
          <div>
            <span className="dot blue"></span>
            Total Collections
            <h2>$ 75,000</h2>
          </div>

          <div>
            <span className="dot red"></span>
            Fees Collection
            <h2>$ 15,000</h2>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={280}>
          <AreaChart data={earningsData}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="blue"
              stroke="#3b82f6"
              fill="#3b82f640"
              strokeWidth={3}
              animationDuration={1800}
            />
            <Area
              type="monotone"
              dataKey="red"
              stroke="#ef4444"
              fill="#ef444430"
              strokeWidth={3}
              animationDuration={2200}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Expenses */}
      <div className="analytics-card expense-card">
        <div className="card-top">
          <h3>Expenses</h3>
          <FaEllipsisV />
        </div>

        <div className="expense-values">
          <h2>$ 15,000</h2>
          <h2>$ 10,000</h2>
          <h2>$ 8,000</h2>
        </div>

        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={expenseData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="value"
              fill="#2dd4bf"
              radius={[8, 8, 0, 0]}
              animationDuration={1800}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Project Progress */}
      <div className="analytics-card student-card">
        <h3>Project Progress</h3>

        <ResponsiveContainer width="100%" height={260}>
          <PieChart>
            <Pie
              data={projectData}
              innerRadius={80}
              outerRadius={125}
              paddingAngle={2}
              dataKey="value"
              animationDuration={2200}
            >
              {projectData.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="student-info">
          <span className="dot blue"></span>
          Frontend Completed
          <h2>65%</h2>
        </div>
      </div>

    </div>
  );
};

export default AnalyticsSection;