import React, { useState } from 'react';
import './Customer.css';

const initialCustomers = [
  {
    id: 1,
    name: 'Priyanka Sahoo',
    group: 'VIP Customer',
    isVip: true,
    phone: '+91 98765 43210',
    email: 'priyanka@gmail.com',
    orders: 12,
    totalSpent: '₹18,560',
    avgOrder: '₹1,546',
    status: 'Active',
    joinedOn: '20 May, 2025',
    dob: '12 Aug, 1995',
    gender: 'Female',
    location: 'Bhubaneswar, Odisha, India',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    address: 'B-12, Saheed Nagar, Bhubaneswar, Odisha - 751007, India (Landmark: Near Utkal University)',
    recentOrders: [
      { id: '#ORD-1256', date: '20 May, 2025', amount: '₹2,450', status: 'Completed' },
      { id: '#ORD-1203', date: '15 May, 2025', amount: '₹1,780', status: 'Completed' },
      { id: '#ORD-1155', date: '10 May, 2025', amount: '₹3,250', status: 'Completed' }
    ]
  },
  {
    id: 2,
    name: 'Rohit Verma',
    group: 'Regular',
    isVip: false,
    phone: '+91 91234 56789',
    email: 'rohit.verma@gmail.com',
    orders: 8,
    totalSpent: '₹9,875',
    avgOrder: '₹1,234',
    status: 'Active',
    joinedOn: '18 May, 2025',
    dob: '05 Jan, 1992',
    gender: 'Male',
    location: 'Cuttack, Odisha, India',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    address: 'Plot 45, Link Road, Cuttack, Odisha - 753012, India',
    recentOrders: [
      { id: '#ORD-1190', date: '18 May, 2025', amount: '₹1,200', status: 'Completed' },
      { id: '#ORD-1120', date: '02 May, 2025', amount: '₹2,100', status: 'Completed' }
    ]
  },
  {
    id: 3,
    name: 'Anita Das',
    group: 'VIP Customer',
    isVip: false,
    phone: '+91 87654 32109',
    email: 'anita.das@gmail.com',
    orders: 15,
    totalSpent: '₹22,450',
    avgOrder: '₹1,496',
    status: 'Active',
    joinedOn: '14 May, 2025',
    dob: '22 Nov, 1994',
    gender: 'Female',
    location: 'Kolkata, WB, India',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    address: '12/A Park Street, Kolkata, West Bengal - 700016',
    recentOrders: [
      { id: '#ORD-1210', date: '14 May, 2025', amount: '₹4,500', status: 'Completed' }
    ]
  },
  {
    id: 4,
    name: 'Sandeep Patnaik',
    group: 'Regular',
    isVip: false,
    phone: '+91 99887 66554',
    email: 'sandeep.patnaik@gmail.com',
    orders: 6,
    totalSpent: '₹6,320',
    avgOrder: '₹1,053',
    status: 'Active',
    joinedOn: '13 May, 2025',
    dob: '10 Mar, 1990',
    gender: 'Male',
    location: 'Puri, Odisha, India',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    address: 'Grand Road, Near Temple, Puri, Odisha - 752001',
    recentOrders: [
      { id: '#ORD-1100', date: '13 May, 2025', amount: '₹1,050', status: 'Completed' }
    ]
  },
  {
    id: 5,
    name: 'Meera Acharya',
    group: 'Regular',
    isVip: false,
    phone: '+91 78965 12345',
    email: 'meera.acharya@gmail.com',
    orders: 10,
    totalSpent: '₹12,760',
    avgOrder: '₹1,276',
    status: 'Active',
    joinedOn: '11 May, 2025',
    dob: '18 Jul, 1996',
    gender: 'Female',
    location: 'Rourkela, Odisha, India',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    address: 'Sector 5, Rourkela, Odisha - 769002',
    recentOrders: [
      { id: '#ORD-1080', date: '11 May, 2025', amount: '₹2,300', status: 'Completed' }
    ]
  },
  {
    id: 6,
    name: 'Vikash Singh',
    group: 'New',
    isVip: false,
    phone: '+91 96541 26587',
    email: 'vikash.singh@gmail.com',
    orders: 3,
    totalSpent: '₹3,150',
    avgOrder: '₹1,050',
    status: 'Inactive',
    joinedOn: '08 May, 2025',
    dob: '02 Feb, 1998',
    gender: 'Male',
    location: 'Patna, Bihar, India',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80',
    address: 'Boring Road, Patna, Bihar - 800001',
    recentOrders: [
      { id: '#ORD-1050', date: '08 May, 2025', amount: '₹1,050', status: 'Completed' }
    ]
  },
  {
    id: 7,
    name: 'Kavya Nair',
    group: 'VIP Customer',
    isVip: false,
    phone: '+91 92345 67890',
    email: 'kavya.nair@gmail.com',
    orders: 9,
    totalSpent: '₹11,980',
    avgOrder: '₹1,331',
    status: 'Active',
    joinedOn: '05 May, 2025',
    dob: '30 Sep, 1993',
    gender: 'Female',
    location: 'Kochi, Kerala, India',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    address: 'MG Road, Kochi, Kerala - 682016',
    recentOrders: [
      { id: '#ORD-1020', date: '05 May, 2025', amount: '₹1,980', status: 'Completed' }
    ]
  },
  {
    id: 8,
    name: 'Arjun Mohanty',
    group: 'New',
    isVip: false,
    phone: '+91 87688 99077',
    email: 'arjun.mohanty@gmail.com',
    orders: 4,
    totalSpent: '₹4,450',
    avgOrder: '₹1,112',
    status: 'Inactive',
    joinedOn: '01 May, 2025',
    dob: '14 Dec, 1997',
    gender: 'Male',
    location: 'Cuttack, Odisha, India',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80',
    address: 'Chouddwar, Cuttack, Odisha - 754025',
    recentOrders: [
      { id: '#ORD-1001', date: '01 May, 2025', amount: '₹1,450', status: 'Completed' }
    ]
  }
];

const Customer = () => {
  const [customers, setCustomers] = useState(initialCustomers);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [groupFilter, setGroupFilter] = useState('All Groups');
  
  // Active Selected Profile Side-Panel State
  const [selectedCustomer, setSelectedCustomer] = useState(initialCustomers[0]);
  const [isDetailsOpen, setIsDetailsOpen] = useState(true);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Search and Filter Logic
  const filteredCustomers = customers.filter((cust) => {
    const matchesSearch =
      cust.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cust.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cust.phone.includes(searchQuery);

    const matchesStatus =
      statusFilter === 'All Status' || cust.status.toLowerCase() === statusFilter.toLowerCase();

    const matchesGroup =
      groupFilter === 'All Groups' || cust.group.toLowerCase().includes(groupFilter.toLowerCase());

    return matchesSearch && matchesStatus && matchesGroup;
  });

  // Action Handlers
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      const updated = customers.filter((item) => item.id !== id);
      setCustomers(updated);
      if (selectedCustomer?.id === id && updated.length > 0) {
        setSelectedCustomer(updated[0]);
      }
    }
  };

  const handleEdit = (cust) => {
    const newName = prompt('Edit Customer Name:', cust.name);
    if (newName) {
      setCustomers((prev) =>
        prev.map((c) => (c.id === cust.id ? { ...c, name: newName } : c))
      );
      if (selectedCustomer?.id === cust.id) {
        setSelectedCustomer((prev) => ({ ...prev, name: newName }));
      }
    }
  };

  const handleSelectCustomer = (cust) => {
    setSelectedCustomer(cust);
    setIsDetailsOpen(true);
  };

  const handleRefresh = () => {
    setSearchQuery('');
    setStatusFilter('All Status');
    setGroupFilter('All Groups');
    setCurrentPage(1);
  };

  const handleExportCSV = () => {
    const headers = ['ID,Name,Email,Phone,Orders,Total Spent,Status,Joined On'];
    const rows = filteredCustomers.map(
      (c) => `"${c.id}","${c.name}","${c.email}","${c.phone}","${c.orders}","${c.totalSpent}","${c.status}","${c.joinedOn}"`
    );
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'customers_list.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Pagination Calculations
  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage) || 1;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCustomers.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="customer-page-app">
      {/* Top Navigation / Breadcrumb Header */}
      <header className="page-header">
        <div>
          <h2>Customers</h2>
          <p className="breadcrumb-sub">Dashboard &gt; Customers</p>
        </div>
        <div className="header-top-right">
          <div className="global-search-bar">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search customers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="notification-btn">🔔<span className="badge-dot">3</span></button>
          <div className="admin-profile-pill">
            <div className="admin-avatar">👤</div>
            <div>
              <p className="admin-name">Admin User</p>
              <span className="admin-role">Super Admin</span>
            </div>
          </div>
          <button className="btn-add-customer">+ Add New Customer</button>
        </div>
      </header>

      {/* Top Stat Cards */}
      <div className="stats-row-grid">
        <div className="stat-card">
          <div className="stat-icon-box bg-orange">👥</div>
          <div>
            <span className="stat-title">Total Customers</span>
            <h3 className="stat-value">1,248</h3>
            <span className="stat-sub text-muted">All time customers</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon-box bg-green">👤</div>
          <div>
            <span className="stat-title">Active Customers</span>
            <h3 className="stat-value">1,105</h3>
            <span className="stat-sub text-muted">Purchased in last 6 months</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon-box bg-purple">➕</div>
          <div>
            <span className="stat-title">New Customers</span>
            <h3 className="stat-value">86</h3>
            <span className="stat-sub text-muted">Joined this month</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon-box bg-yellow">🔄</div>
          <div>
            <span className="stat-title">Repeat Customers</span>
            <h3 className="stat-value">684</h3>
            <span className="stat-sub text-muted">Purchased more than once</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon-box bg-blue">🔒</div>
          <div>
            <span className="stat-title">Total Spent</span>
            <h3 className="stat-value">₹32,45,680</h3>
            <span className="stat-sub text-muted">Across all customers</span>
          </div>
        </div>
      </div>

      {/* Main Workspace Layout */}
      <div className={`workspace-layout ${isDetailsOpen ? 'with-sidebar' : ''}`}>
        {/* Left Side: Table Area */}
        <div className="main-table-card">
          <div className="table-top-header">
            <div>
              <h3>All Customers</h3>
              <p className="sub-info">Manage and view all your customers</p>
            </div>
            <div className="filter-controls-group">
              <select
                className="select-dropdown"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All Status">All Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>

              <select
                className="select-dropdown"
                value={groupFilter}
                onChange={(e) => setGroupFilter(e.target.value)}
              >
                <option value="All Groups">All Groups</option>
                <option value="VIP">VIP Customer</option>
                <option value="Regular">Regular</option>
                <option value="New">New</option>
              </select>

              <button className="btn-filter-icon">⚙️ Filter</button>
              <button className="btn-export-icon" onClick={handleExportCSV}>📥 Export</button>
              <button className="btn-refresh-icon" onClick={handleRefresh}>🔄</button>
            </div>
          </div>

          <div className="table-responsive-scroll">
            <table className="customers-data-table">
              <thead>
                <tr>
                  <th width="30"><input type="checkbox" /></th>
                  <th>Customer</th>
                  <th>Email / Phone</th>
                  <th>Orders</th>
                  <th>Total Spent</th>
                  <th>Status</th>
                  <th>Joined On</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.length > 0 ? (
                  currentItems.map((cust) => (
                    <tr
                      key={cust.id}
                      className={selectedCustomer?.id === cust.id ? 'active-row' : ''}
                      onClick={() => handleSelectCustomer(cust)}
                    >
                      <td onClick={(e) => e.stopPropagation()}>
                        <input type="checkbox" />
                      </td>
                      <td>
                        <div className="customer-info-cell">
                          <img src={cust.avatar} alt={cust.name} className="cust-avatar-img" />
                          <div>
                            <div className="cust-name-text">
                              {cust.name} {cust.isVip && <span className="vip-badge-inline">VIP</span>}
                            </div>
                            <div className="cust-phone-sub">{cust.phone}</div>
                          </div>
                        </div>
                      </td>
                      <td className="email-cell-text">{cust.email}</td>
                      <td className="orders-count">{cust.orders}</td>
                      <td className="spent-amount">{cust.totalSpent}</td>
                      <td>
                        <span className={`status-pill status-${cust.status.toLowerCase()}`}>
                          {cust.status}
                        </span>
                      </td>
                      <td className="joined-date">{cust.joinedOn}</td>
                      <td onClick={(e) => e.stopPropagation()}>
                        <div className="row-action-btns">
                          <button
                            className="btn-act view"
                            title="View Profile"
                            onClick={() => handleSelectCustomer(cust)}
                          >
                            👁️
                          </button>
                          <button
                            className="btn-act edit"
                            title="Edit Customer"
                            onClick={() => handleEdit(cust)}
                          >
                            ✏️
                          </button>
                          <button
                            className="btn-act delete"
                            title="Remove Customer"
                            onClick={() => handleDelete(cust.id)}
                          >
                            🗑️
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="no-data-text">
                      No customers found matching filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <footer className="pagination-footer-bar">
            <div className="pagination-summary">
              Showing {filteredCustomers.length > 0 ? indexOfFirstItem + 1 : 0} to{' '}
              {Math.min(indexOfLastItem, filteredCustomers.length)} of {filteredCustomers.length} entries
            </div>
            <div className="pagination-btn-group">
              <button
                className="page-nav-arrow"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              >
                &lt;&lt;
              </button>
              {Array.from({ length: totalPages }, (_, idx) => (
                <button
                  key={idx + 1}
                  className={`page-num-btn ${currentPage === idx + 1 ? 'active' : ''}`}
                  onClick={() => setCurrentPage(idx + 1)}
                >
                  {idx + 1}
                </button>
              ))}
              <button
                className="page-nav-arrow"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              >
                &gt;&gt;
              </button>
            </div>
          </footer>
        </div>

        {/* Right Side: Interactive Customer Profile Details Panel */}
        {isDetailsOpen && selectedCustomer && (
          <aside className="customer-details-sidebar">
            <div className="sidebar-header-title">
              <h3>Customer Details</h3>
              <button className="close-panel-btn" onClick={() => setIsDetailsOpen(false)}>✕</button>
            </div>

            <div className="sidebar-body-content">
              {/* Profile Card Header */}
              <div className="profile-hero-card">
                <img src={selectedCustomer.avatar} alt={selectedCustomer.name} className="profile-large-avatar" />
                <h3 className="profile-hero-name">
                  {selectedCustomer.name}{' '}
                  {selectedCustomer.isVip && <span className="vip-tag-gold">VIP Customer</span>}
                </h3>
                <p className="profile-hero-email">{selectedCustomer.email}</p>
                <p className="profile-hero-phone">{selectedCustomer.phone}</p>
                <p className="profile-hero-location">{selectedCustomer.location}</p>
                <span className="joined-subtext">Joined on {selectedCustomer.joinedOn}</span>
              </div>

              {/* Stats Bar */}
              <div className="hero-stats-row">
                <div className="h-stat">
                  <h4>{selectedCustomer.orders}</h4>
                  <p>Total Orders</p>
                </div>
                <div className="h-stat">
                  <h4>{selectedCustomer.totalSpent}</h4>
                  <p>Total Spent</p>
                </div>
                <div className="h-stat">
                  <h4>{selectedCustomer.avgOrder}</h4>
                  <p>Average Order</p>
                </div>
              </div>

              {/* Customer Information List */}
              <div className="info-section-block">
                <div className="section-head">
                  <h4>Customer Information</h4>
                  <button className="link-edit" onClick={() => handleEdit(selectedCustomer)}>Edit</button>
                </div>
                <div className="info-key-val-list">
                  <div className="key-val-row">
                    <span className="k-label">Full Name</span>
                    <strong className="v-val">{selectedCustomer.name}</strong>
                  </div>
                  <div className="key-val-row">
                    <span className="k-label">Email</span>
                    <span className="v-val">{selectedCustomer.email}</span>
                  </div>
                  <div className="key-val-row">
                    <span className="k-label">Phone</span>
                    <span className="v-val">{selectedCustomer.phone}</span>
                  </div>
                  <div className="key-val-row">
                    <span className="k-label">Date of Birth</span>
                    <span className="v-val">{selectedCustomer.dob}</span>
                  </div>
                  <div className="key-val-row">
                    <span className="k-label">Gender</span>
                    <span className="v-val">{selectedCustomer.gender}</span>
                  </div>
                  <div className="key-val-row">
                    <span className="k-label">Group</span>
                    <span className="v-val">{selectedCustomer.group}</span>
                  </div>
                  <div className="key-val-row">
                    <span className="k-label">Status</span>
                    <span className={`status-pill status-${selectedCustomer.status.toLowerCase()}`}>
                      {selectedCustomer.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Default Address Section */}
              <div className="info-section-block">
                <div className="section-head">
                  <h4>Default Address</h4>
                  <button className="link-view-all">View All</button>
                </div>
                <div className="address-box-card">
                  <p className="address-text">{selectedCustomer.address}</p>
                </div>
              </div>

              {/* Recent Orders Section */}
              <div className="info-section-block">
                <div className="section-head">
                  <h4>Recent Orders</h4>
                  <button className="link-view-all">View All</button>
                </div>
                <div className="orders-mini-list">
                  {selectedCustomer.recentOrders && selectedCustomer.recentOrders.length > 0 ? (
                    selectedCustomer.recentOrders.map((ord, i) => (
                      <div key={i} className="mini-order-item">
                        <div>
                          <p className="ord-id-title">{ord.id}</p>
                          <span className="ord-date-sub">{ord.date}</span>
                        </div>
                        <div className="text-right">
                          <p className="ord-price">{ord.amount}</p>
                          <span className="ord-status-badge">{ord.status}</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="no-orders">No recent orders found.</p>
                  )}
                </div>
              </div>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
};

export default Customer;