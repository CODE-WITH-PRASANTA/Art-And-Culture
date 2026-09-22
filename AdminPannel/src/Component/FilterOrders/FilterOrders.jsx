import React, { useState } from 'react';
import { 
  FiSearch, 
  FiRotateCcw, 
  FiFilter, 
  FiDownload, 
  FiEye, 
  FiMoreVertical, 
  FiChevronLeft, 
  FiChevronRight,
  FiX,
  FiCheckCircle,
  FiClock,
  FiRefreshCw
} from 'react-icons/fi';
import './FilterOrders.css';

// Initial Mock Orders Dataset
const INITIAL_PAGINATED_ORDERS = {
  1: [
    { id: '#AC1256', name: 'Priyanka Sahoo', email: 'priyanka@gmail.com', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=60', products: ['https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=80&q=60', 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=80&q=60'], extraProducts: 2, amount: '₹2,450.00', orderStatus: 'Delivered', paymentStatus: 'Paid', date: '2025-05-20', time: '10:30 AM' },
    { id: '#AC1255', name: 'Rohit Verma', email: 'rohit.verma@email.com', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=60', products: ['https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=80&q=60', 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=80&q=60'], extraProducts: 1, amount: '₹1,780.00', orderStatus: 'Shipped', paymentStatus: 'Paid', date: '2025-05-20', time: '09:15 AM' },
    { id: '#AC1254', name: 'Anita Das', email: 'anita.das@email.com', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=60', products: ['https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=80&q=60', 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=80&q=60', 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=80&q=60'], extraProducts: 3, amount: '₹3,650.00', orderStatus: 'Processing', paymentStatus: 'Paid', date: '2025-05-19', time: '04:45 PM' },
    { id: '#AC1253', name: 'Sandeep Patnaik', email: 'sandeep.p@email.com', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=60', products: ['https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=80&q=60', 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=80&q=60'], extraProducts: 1, amount: '₹950.00', orderStatus: 'Pending', paymentStatus: 'Pending', date: '2025-05-19', time: '11:20 AM' },
    { id: '#AC1252', name: 'Meera Acharya', email: 'meera.a@email.com', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&auto=format&fit=crop&q=60', products: ['https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=80&q=60', 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=80&q=60', 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=80&q=60'], extraProducts: 2, amount: '₹2,190.00', orderStatus: 'Delivered', paymentStatus: 'Paid', date: '2025-05-18', time: '07:40 PM' },
    { id: '#AC1251', name: 'Vikash Singh', email: 'vikash.s@email.com', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&auto=format&fit=crop&q=60', products: ['https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=80&q=60', 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=80&q=60'], extraProducts: 4, amount: '₹4,850.00', orderStatus: 'Shipped', paymentStatus: 'Paid', date: '2025-05-18', time: '06:30 PM' },
    { id: '#AC1250', name: 'Neha Reddy', email: 'neha.reddy@email.com', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&auto=format&fit=crop&q=60', products: ['https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=80&q=60', 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=80&q=60'], extraProducts: 1, amount: '₹1,250.00', orderStatus: 'Cancelled', paymentStatus: 'Refunded', date: '2025-05-17', time: '05:10 PM' },
    { id: '#AC1249', name: 'Arjun Nayak', email: 'arjun.nayak@email.com', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&auto=format&fit=crop&q=60', products: ['https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=80&q=60', 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=80&q=60'], extraProducts: 2, amount: '₹2,850.00', orderStatus: 'Processing', paymentStatus: 'Paid', date: '2025-05-17', time: '02:00 PM' },
  ],
  2: [
    { id: '#AC1248', name: 'Kabir Joshi', email: 'kabir.j@email.com', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&auto=format&fit=crop&q=60', products: ['https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=80&q=60'], extraProducts: 5, amount: '₹5,100.00', orderStatus: 'Delivered', paymentStatus: 'Paid', date: '2025-05-16', time: '11:10 AM' },
    { id: '#AC1247', name: 'Sanya Mirza', email: 'sanya.m@email.com', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&auto=format&fit=crop&q=60', products: ['https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=80&q=60'], extraProducts: 2, amount: '₹1,400.00', orderStatus: 'Pending', paymentStatus: 'Pending', date: '2025-05-16', time: '08:45 AM' },
  ],
  3: [
    { id: '#AC1246', name: 'Rohan Sharma', email: 'rohan.s@email.com', avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=80&auto=format&fit=crop&q=60', products: ['https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=80&q=60'], extraProducts: 1, amount: '₹890.00', orderStatus: 'Cancelled', paymentStatus: 'Refunded', date: '2025-05-15', time: '03:30 PM' },
  ]
};

const FilterOrders = () => {
  const [ordersData, setOrdersData] = useState(INITIAL_PAGINATED_ORDERS);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeMenuId, setActiveMenuId] = useState(null);

  // Selected Order for Eye Icon Pop-Up Modal
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Filter Form State
  const [search, setSearch] = useState('');
  const [orderStatusFilter, setOrderStatusFilter] = useState('');
  const [paymentStatusFilter, setPaymentStatusFilter] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [customerFilter, setCustomerFilter] = useState('');

  // Applied Filter Rules State
  const [appliedFilters, setAppliedFilters] = useState({
    search: '',
    orderStatus: '',
    paymentStatus: '',
    startDate: '',
    endDate: '',
    customer: ''
  });

  // Apply Filter Handler
  const handleApplyFilters = () => {
    setAppliedFilters({
      search,
      orderStatus: orderStatusFilter,
      paymentStatus: paymentStatusFilter,
      startDate,
      endDate,
      customer: customerFilter
    });
  };

  // Reset Filters Handler
  const handleClearAll = () => {
    setSearch('');
    setOrderStatusFilter('');
    setPaymentStatusFilter('');
    setStartDate('');
    setEndDate('');
    setCustomerFilter('');
    setAppliedFilters({
      search: '',
      orderStatus: '',
      paymentStatus: '',
      startDate: '',
      endDate: '',
      customer: ''
    });
  };

  // Export CSV Handler
  const handleExportCSV = () => {
    const rows = [
      ['Order ID', 'Customer', 'Email', 'Amount', 'Order Status', 'Payment Status', 'Date', 'Time']
    ];

    const currentOrders = ordersData[currentPage] || [];
    currentOrders.forEach((item) => {
      rows.push([
        item.id,
        item.name,
        item.email,
        item.amount,
        item.orderStatus,
        item.paymentStatus,
        item.date,
        item.time
      ]);
    });

    const csvContent = 'data:text/csv;charset=utf-8,' + rows.map((e) => e.join(',')).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Orders_Page_${currentPage}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Change Payment Status via 3 Dots Dropdown
  const handlePaymentStatusChange = (orderId, newStatus) => {
    setOrdersData((prev) => {
      const updatedPage = prev[currentPage].map((item) =>
        item.id === orderId ? { ...item, paymentStatus: newStatus } : item
      );
      return { ...prev, [currentPage]: updatedPage };
    });
    setActiveMenuId(null);
  };

  // Filter current page orders dynamically
  const pageOrders = ordersData[currentPage] || [];
  const filteredOrders = pageOrders.filter((order) => {
    const matchesSearch =
      !appliedFilters.search ||
      order.id.toLowerCase().includes(appliedFilters.search.toLowerCase()) ||
      order.name.toLowerCase().includes(appliedFilters.search.toLowerCase()) ||
      order.email.toLowerCase().includes(appliedFilters.search.toLowerCase());

    const matchesOrderStatus =
      !appliedFilters.orderStatus || order.orderStatus === appliedFilters.orderStatus;

    const matchesPaymentStatus =
      !appliedFilters.paymentStatus || order.paymentStatus === appliedFilters.paymentStatus;

    const matchesCustomer =
      !appliedFilters.customer || order.name.toLowerCase().includes(appliedFilters.customer.toLowerCase());

    const orderDate = new Date(order.date);
    const start = appliedFilters.startDate ? new Date(appliedFilters.startDate) : null;
    const end = appliedFilters.endDate ? new Date(appliedFilters.endDate) : null;

    const matchesDate =
      (!start || orderDate >= start) && (!end || orderDate <= end);

    return matchesSearch && matchesOrderStatus && matchesPaymentStatus && matchesCustomer && matchesDate;
  });

  const totalEntries = 256;

  return (
    <div className="FilterOrders">
      {/* LEFT SIDEBAR */}
      <aside className="FilterOrders__sidebar">
        <div className="FilterOrders__card">
          <div className="FilterOrders__sidebarHeader">
            <h3 className="FilterOrders__sidebarTitle">Filter Orders</h3>
            <button className="FilterOrders__clearBtn" onClick={handleClearAll}>
              Clear All
            </button>
          </div>

          {/* Search Box */}
          <div className="FilterOrders__field">
            <label className="FilterOrders__label">Search</label>
            <div className="FilterOrders__inputWrapper">
              <input
                type="text"
                className="FilterOrders__input"
                placeholder="Search by Order ID..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <FiSearch className="FilterOrders__inputIcon" />
            </div>
          </div>

          {/* Order Status Select */}
          <div className="FilterOrders__field">
            <label className="FilterOrders__label">Order Status</label>
            <select
              className="FilterOrders__select"
              value={orderStatusFilter}
              onChange={(e) => setOrderStatusFilter(e.target.value)}
            >
              <option value="">Select Status</option>
              <option value="Delivered">Delivered</option>
              <option value="Shipped">Shipped</option>
              <option value="Processing">Processing</option>
              <option value="Pending">Pending</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

          {/* Payment Status Select */}
          <div className="FilterOrders__field">
            <label className="FilterOrders__label">Payment Status</label>
            <select
              className="FilterOrders__select"
              value={paymentStatusFilter}
              onChange={(e) => setPaymentStatusFilter(e.target.value)}
            >
              <option value="">Select Payment Status</option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
              <option value="Refunded">Refunded</option>
            </select>
          </div>

          {/* Styled Clean Calendar Field */}
          <div className="FilterOrders__field">
            <label className="FilterOrders__label">Date Range</label>
            <div className="FilterOrders__dateGroup">
              <div className="FilterOrders__inputWrapper">
                <input
                  type="date"
                  className="FilterOrders__input FilterOrders__dateInput"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div className="FilterOrders__inputWrapper">
                <input
                  type="date"
                  className="FilterOrders__input FilterOrders__dateInput"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Customer Dropdown */}
          <div className="FilterOrders__field">
            <label className="FilterOrders__label">Customer</label>
            <select
              className="FilterOrders__select"
              value={customerFilter}
              onChange={(e) => setCustomerFilter(e.target.value)}
            >
              <option value="">Select Customer</option>
              <option value="Priyanka">Priyanka Sahoo</option>
              <option value="Rohit">Rohit Verma</option>
              <option value="Anita">Anita Das</option>
            </select>
          </div>

          {/* Filter & Reset Buttons */}
          <div className="FilterOrders__buttonGroup">
            <button className="FilterOrders__btnReset" onClick={handleClearAll}>
              <FiRotateCcw /> Reset
            </button>
            <button className="FilterOrders__btnApply" onClick={handleApplyFilters}>
              <FiFilter /> Apply Filters
            </button>
          </div>
        </div>

        {/* ORDER OVERVIEW CHART */}
        <div className="FilterOrders__card FilterOrders__overviewCard">
          <h3 className="FilterOrders__sidebarTitle">Order Overview</h3>
          <div className="FilterOrders__overviewContent">
            <div className="FilterOrders__chartContainer">
              <svg viewBox="0 0 36 36" className="FilterOrders__donut">
                <path className="FilterOrders__donutCircle" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e2e8f0" strokeWidth="3.8" />
                <path className="FilterOrders__donutSegment FilterOrders__donutSegment--pending" strokeDasharray="12.5, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="4.5" />
                <path className="FilterOrders__donutSegment FilterOrders__donutSegment--processing" strokeDasharray="28.6, 100" strokeDashoffset="-12.5" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="4.5" />
                <path className="FilterOrders__donutSegment FilterOrders__donutSegment--shipped" strokeDasharray="43.8, 100" strokeDashoffset="-41.1" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="4.5" />
                <path className="FilterOrders__donutSegment FilterOrders__donutSegment--delivered" strokeDasharray="15.6, 100" strokeDashoffset="-84.9" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="4.5" />
              </svg>
            </div>

            <div className="FilterOrders__legend">
              <div className="FilterOrders__legendItem">
                <span className="FilterOrders__dot FilterOrders__dot--pending"></span>
                <span>Pending</span>
                <strong>32 (12.5%)</strong>
              </div>
              <div className="FilterOrders__legendItem">
                <span className="FilterOrders__dot FilterOrders__dot--processing"></span>
                <span>Processing</span>
                <strong>68 (26.6%)</strong>
              </div>
              <div className="FilterOrders__legendItem">
                <span className="FilterOrders__dot FilterOrders__dot--shipped"></span>
                <span>Shipped</span>
                <strong>112 (43.8%)</strong>
              </div>
              <div className="FilterOrders__legendItem">
                <span className="FilterOrders__dot FilterOrders__dot--delivered"></span>
                <span>Delivered</span>
                <strong>40 (15.6%)</strong>
              </div>
              <div className="FilterOrders__legendItem">
                <span className="FilterOrders__dot FilterOrders__dot--cancelled"></span>
                <span>Cancelled</span>
                <strong>4 (1.5%)</strong>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN RIGHT SECTION */}
      <main className="FilterOrders__main">
        {/* Header Actions */}
        <div className="FilterOrders__topBar">
          <div>
            <h2 className="FilterOrders__title">All Orders</h2>
            <p className="FilterOrders__subtitle">{totalEntries} Orders Found</p>
          </div>

          <div className="FilterOrders__topActions">
            {/* Export CSV */}
            <button className="FilterOrders__actionBtn" onClick={handleExportCSV}>
              <FiDownload /> Export
            </button>

            {/* Functional Filter Trigger */}
            <button className="FilterOrders__actionBtn" onClick={handleApplyFilters}>
              <FiFilter /> Filter
            </button>

            <select className="FilterOrders__sortSelect">
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>

        {/* FITTED TABLE CONTAINER */}
        <div className="FilterOrders__tableWrapper">
          <table className="FilterOrders__table">
            <thead>
              <tr>
                <th style={{ width: '10%' }}>ORDER ID</th>
                <th style={{ width: '22%' }}>CUSTOMER</th>
                <th style={{ width: '18%' }}>PRODUCTS</th>
                <th style={{ width: '11%' }}>AMOUNT</th>
                <th style={{ width: '11%' }}>STATUS</th>
                <th style={{ width: '10%' }}>PAYMENT</th>
                <th style={{ width: '11%' }}>DATE</th>
                <th style={{ width: '7%' }} className="FilterOrders__alignCenter">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <tr key={order.id}>
                    <td className="FilterOrders__orderId">{order.id}</td>
                    <td>
                      <div className="FilterOrders__customer">
                        <img src={order.avatar} alt={order.name} className="FilterOrders__avatar" />
                        <div className="FilterOrders__customerDetails">
                          <div className="FilterOrders__customerName">{order.name}</div>
                          <div className="FilterOrders__customerEmail">{order.email}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="FilterOrders__products">
                        {order.products.slice(0, 2).map((imgUrl, i) => (
                          <img key={i} src={imgUrl} alt="Product" className="FilterOrders__prodImg" />
                        ))}
                        {order.extraProducts > 0 && (
                          <span className="FilterOrders__extraBadge">+{order.extraProducts}</span>
                        )}
                      </div>
                    </td>
                    <td className="FilterOrders__amount">{order.amount}</td>
                    <td>
                      <span className={`FilterOrders__statusTag FilterOrders__statusTag--${order.orderStatus.toLowerCase()}`}>
                        {order.orderStatus}
                      </span>
                    </td>
                    <td>
                      <span className={`FilterOrders__payTag FilterOrders__payTag--${order.paymentStatus.toLowerCase()}`}>
                        {order.paymentStatus}
                      </span>
                    </td>
                    <td>
                      <div className="FilterOrders__dateText">{order.date}</div>
                      <div className="FilterOrders__timeText">{order.time}</div>
                    </td>
                    <td className="FilterOrders__alignCenter">
                      <div className="FilterOrders__actionGroup">
                        {/* Eye Icon Button triggers Pop-up */}
                        <button 
                          className="FilterOrders__iconBtn" 
                          title="View Details"
                          onClick={() => setSelectedOrder(order)}
                        >
                          <FiEye />
                        </button>

                        <div className="FilterOrders__menuWrapper">
                          <button 
                            className="FilterOrders__iconBtn"
                            onClick={() => setActiveMenuId(activeMenuId === order.id ? null : order.id)}
                          >
                            <FiMoreVertical />
                          </button>

                          {activeMenuId === order.id && (
                            <div className="FilterOrders__dropdownMenu">
                              <div className="FilterOrders__dropdownHeader">Update Status:</div>
                              <button 
                                className="FilterOrders__dropdownItem"
                                onClick={() => handlePaymentStatusChange(order.id, 'Paid')}
                              >
                                <span className="FilterOrders__menuDot FilterOrders__menuDot--paid"></span> Paid
                              </button>
                              <button 
                                className="FilterOrders__dropdownItem"
                                onClick={() => handlePaymentStatusChange(order.id, 'Pending')}
                              >
                                <span className="FilterOrders__menuDot FilterOrders__menuDot--pending"></span> Pending
                              </button>
                              <button 
                                className="FilterOrders__dropdownItem"
                                onClick={() => handlePaymentStatusChange(order.id, 'Refunded')}
                              >
                                <span className="FilterOrders__menuDot FilterOrders__menuDot--refunded"></span> Refunded
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="FilterOrders__emptyText">
                    No orders found matching the filter criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* PAGINATION FOOTER */}
        <div className="FilterOrders__pagination">
          <div className="FilterOrders__paginationInfo">
            Showing {(currentPage - 1) * 8 + 1} to {Math.min(currentPage * 8, totalEntries)} of {totalEntries} entries
          </div>

          <div className="FilterOrders__paginationNav">
            <button 
              className="FilterOrders__pageArrow"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              <FiChevronLeft />
            </button>

            <button 
              className={`FilterOrders__pageBtn ${currentPage === 1 ? 'FilterOrders__pageBtn--active' : ''}`}
              onClick={() => setCurrentPage(1)}
            >
              1
            </button>
            <button 
              className={`FilterOrders__pageBtn ${currentPage === 2 ? 'FilterOrders__pageBtn--active' : ''}`}
              onClick={() => setCurrentPage(2)}
            >
              2
            </button>
            <button 
              className={`FilterOrders__pageBtn ${currentPage === 3 ? 'FilterOrders__pageBtn--active' : ''}`}
              onClick={() => setCurrentPage(3)}
            >
              3
            </button>
            <span className="FilterOrders__pageEllipsis">...</span>
            <button className="FilterOrders__pageBtn" onClick={() => setCurrentPage(32)}>
              32
            </button>

            <button 
              className="FilterOrders__pageArrow"
              disabled={currentPage === 3}
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, 3))}
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      </main>

      {/* EYE ICON ORDER DETAILS CENTERED POPUP MODAL */}
      {selectedOrder && (
        <div className="FilterOrders__modalOverlay" onClick={() => setSelectedOrder(null)}>
          <div className="FilterOrders__modalContent" onClick={(e) => e.stopPropagation()}>
            <div className="FilterOrders__modalHeader">
              <div>
                <h3 className="FilterOrders__modalTitle">Order Details</h3>
                <span className="FilterOrders__modalSubTitle">{selectedOrder.id}</span>
              </div>
              <button className="FilterOrders__closeBtn" onClick={() => setSelectedOrder(null)}>
                <FiX />
              </button>
            </div>

            <div className="FilterOrders__modalBody">
              {/* Customer Profile Banner */}
              <div className="FilterOrders__modalCustomerCard">
                <img src={selectedOrder.avatar} alt={selectedOrder.name} className="FilterOrders__modalAvatar" />
                <div>
                  <h4 className="FilterOrders__modalCustomerName">{selectedOrder.name}</h4>
                  <p className="FilterOrders__modalCustomerEmail">{selectedOrder.email}</p>
                </div>
              </div>

              {/* Key Metrics Grid */}
              <div className="FilterOrders__modalInfoGrid">
                <div className="FilterOrders__modalInfoItem">
                  <span className="FilterOrders__modalLabel">Total Amount</span>
                  <strong className="FilterOrders__modalValue">{selectedOrder.amount}</strong>
                </div>
                <div className="FilterOrders__modalInfoItem">
                  <span className="FilterOrders__modalLabel">Order Status</span>
                  <span className={`FilterOrders__statusTag FilterOrders__statusTag--${selectedOrder.orderStatus.toLowerCase()}`}>
                    {selectedOrder.orderStatus}
                  </span>
                </div>
                <div className="FilterOrders__modalInfoItem">
                  <span className="FilterOrders__modalLabel">Payment Status</span>
                  <span className={`FilterOrders__payTag FilterOrders__payTag--${selectedOrder.paymentStatus.toLowerCase()}`}>
                    {selectedOrder.paymentStatus}
                  </span>
                </div>
                <div className="FilterOrders__modalInfoItem">
                  <span className="FilterOrders__modalLabel">Order Date & Time</span>
                  <strong className="FilterOrders__modalValue">{selectedOrder.date} | {selectedOrder.time}</strong>
                </div>
              </div>

              {/* Product Gallery Section */}
              <div className="FilterOrders__modalProductsSection">
                <h4 className="FilterOrders__modalSectionTitle">Ordered Products</h4>
                <div className="FilterOrders__modalProductGallery">
                  {selectedOrder.products.map((imgUrl, idx) => (
                    <div key={idx} className="FilterOrders__modalProductCard">
                      <img src={imgUrl} alt={`Product ${idx + 1}`} className="FilterOrders__modalProdImg" />
                      <span className="FilterOrders__modalProdTag">Item #{idx + 1}</span>
                    </div>
                  ))}
                  {selectedOrder.extraProducts > 0 && (
                    <div className="FilterOrders__modalMoreProducts">
                      +{selectedOrder.extraProducts} More
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="FilterOrders__modalFooter">
              <button className="FilterOrders__btnReset" onClick={() => setSelectedOrder(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterOrders;