import React, { useState, useRef } from 'react';
import './OrdersDashboard.css';

// React Icons Imports
import { FiMenu, FiSearch, FiBell, FiCalendar, FiShoppingBag } from 'react-icons/fi';
import { FaHourglassHalf, FaBox, FaTruck, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const initialOrdersData = [
  { id: 1, title: 'Total Orders', count: 256, subtitle: 'All Orders', icon: <FiShoppingBag />, colorClass: 'orange' },
  { id: 2, title: 'Pending', count: 32, subtitle: 'Awaiting Payment', icon: <FaHourglassHalf />, colorClass: 'amber' },
  { id: 3, title: 'Processing', count: 68, subtitle: 'Being Packed', icon: <FaBox />, colorClass: 'blue' },
  { id: 4, title: 'Shipped', count: 112, subtitle: 'On The Way', icon: <FaTruck />, colorClass: 'light-green' },
  { id: 5, title: 'Delivered', count: 40, subtitle: 'Completed', icon: <FaCheckCircle />, colorClass: 'green' },
  { id: 6, title: 'Cancelled', count: 4, subtitle: 'Cancelled Orders', icon: <FaTimesCircle />, colorClass: 'red' },
];

const OrdersDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState('2025-05-01');
  const [cards, setCards] = useState(initialOrdersData);
  const [activeFilter, setActiveFilter] = useState('All');

  // Ref to directly trigger date picker functionality
  const dateInputRef = useRef(null);

  // Search filter handler
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    if (value.trim() === '') {
      setCards(initialOrdersData);
    } else {
      const filtered = initialOrdersData.filter(card =>
        card.title.toLowerCase().includes(value.toLowerCase()) ||
        card.subtitle.toLowerCase().includes(value.toLowerCase()) ||
        card.count.toString().includes(value)
      );
      setCards(filtered);
    }
  };

  // Date filter change handler
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  // Trigger calendar popover smoothly on click
  const openDatePicker = () => {
    if (dateInputRef.current) {
      if (typeof dateInputRef.current.showPicker === 'function') {
        dateInputRef.current.showPicker();
      } else {
        dateInputRef.current.focus();
      }
    }
  };

  // Format date helper for clean display
  const formatDateDisplay = (dateString) => {
    if (!dateString) return 'Select Date';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
  };

  return (
    <div className="OrdersDashboard">
      {/* Top Header Section */}
      <header className="OrdersDashboard-header">
        <div className="OrdersDashboard-left">
          
          <div className="OrdersDashboard-title-wrapper">
            <h1 className="OrdersDashboard-title">Orders</h1>
            <nav className="OrdersDashboard-breadcrumb">
              <span>Dashboard</span> &gt; <span className="active">Orders</span>
            </nav>
          </div>
        </div>

        <div className="OrdersDashboard-right">
          {/* Functional Search Bar */}
          <div className="OrdersDashboard-search-box">
            <FiSearch className="OrdersDashboard-search-icon" />
            <input
              type="text"
              placeholder="Search order ID, customer, product..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="OrdersDashboard-search-input"
            />
            <span className="OrdersDashboard-shortcut">Ctrl /</span>
          </div>

          {/* Notification Button */}
          <div className="OrdersDashboard-notification-wrapper">
            <button className="OrdersDashboard-icon-btn">
              <FiBell />
              <span className="OrdersDashboard-badge">5</span>
            </button>
          </div>

          {/* Functional Calendar Date Container */}
          <div className="OrdersDashboard-date-picker" onClick={openDatePicker}>
            <input 
              ref={dateInputRef}
              type="date" 
              value={selectedDate} 
              onChange={handleDateChange}
              className="OrdersDashboard-date-input" 
            />
            <span className="OrdersDashboard-date-display">
              {formatDateDisplay(selectedDate)}
            </span>
            <FiCalendar className="OrdersDashboard-calendar-icon" />
          </div>
        </div>
      </header>

      {/* 3 Columns x 2 Rows Grid Section */}
      <main className="OrdersDashboard-grid">
        {cards.map((card) => (
          <div 
            key={card.id} 
            className={`OrdersDashboard-card ${activeFilter === card.title ? 'active' : ''}`}
            onClick={() => setActiveFilter(card.title)}
          >
            <div className={`OrdersDashboard-card-icon ${card.colorClass}`}>
              {card.icon}
            </div>
            <div className="OrdersDashboard-card-info">
              <span className="OrdersDashboard-card-title">{card.title}</span>
              <h2 className="OrdersDashboard-card-count">{card.count}</h2>
              <span className="OrdersDashboard-card-subtitle">{card.subtitle}</span>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default OrdersDashboard;