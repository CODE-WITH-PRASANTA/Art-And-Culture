import React, { useState } from 'react';
import './Cupons.css';

// प्रारंभिक मॉक डेटा (Initial Coupon Data)
const initialCoupons = [
  {
    id: 1,
    code: 'LOVECHOC20',
    discountType: 'Percentage',
    discountValue: '20',
    discountText: '20% OFF',
    subDiscount: 'Up to ₹1000',
    minOrder: 500,
    maxDiscount: 1000,
    validFrom: '2026-07-19',
    validTo: '2026-08-19',
    validityDisplay: '19 Jul 2026 - 19 Aug 2026',
    usageUsed: 45,
    usageLimit: 100,
    couponType: 'Public',
    description: 'Flat 20% off on all chocolates. Limited time offer!',
    status: 'Active',
    applicableOn: 'All Products'
  },
  {
    id: 2,
    code: 'SWEET10',
    discountType: 'Percentage',
    discountValue: '10',
    discountText: '10% OFF',
    subDiscount: 'Up to ₹500',
    minOrder: 300,
    maxDiscount: 500,
    validFrom: '2026-07-10',
    validTo: '2026-08-10',
    validityDisplay: '10 Jul 2026 - 10 Aug 2026',
    usageUsed: 230,
    usageLimit: 500,
    couponType: 'Public',
    description: '10% discount for registered users.',
    status: 'Active',
    applicableOn: 'All Products'
  },
  {
    id: 3,
    code: 'FREESHIP',
    discountType: 'Free Shipping',
    discountValue: '0',
    discountText: 'Free Shipping',
    subDiscount: 'On All Orders',
    minOrder: 0,
    maxDiscount: 0,
    validFrom: '2026-07-01',
    validTo: '2026-07-31',
    validityDisplay: '01 Jul 2026 - 31 Jul 2026',
    usageUsed: 354,
    usageLimit: '∞',
    couponType: 'Public',
    description: 'Free shipping on all items without minimum order value.',
    status: 'Active',
    applicableOn: 'All Products'
  },
  {
    id: 4,
    code: 'WELCOME15',
    discountType: 'Percentage',
    discountValue: '15',
    discountText: '15% OFF',
    subDiscount: 'Up to ₹750',
    minOrder: 400,
    maxDiscount: 750,
    validFrom: '2026-06-01',
    validTo: '2026-06-30',
    validityDisplay: '01 Jun 2026 - 30 Jun 2026',
    usageUsed: 120,
    usageLimit: 120,
    couponType: 'Public',
    description: 'Welcome offer for new users.',
    status: 'Expired',
    applicableOn: 'All Products'
  }
];

const emptyFormState = {
  id: null,
  code: '',
  discountType: 'Percentage',
  discountValue: '',
  minOrder: '',
  maxDiscount: '',
  usageLimit: '',
  validFrom: '2026-07-19',
  validTo: '2026-08-19',
  applicableOn: 'All Products',
  couponType: 'Public',
  description: ''
};

const Cupons = () => {
  const [coupons, setCoupons] = useState(initialCoupons);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [formData, setFormData] = useState(emptyFormState);
  const [toastMessage, setToastMessage] = useState('');

  // Toast notification
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  // Search and Filter logic
  const filteredCoupons = coupons.filter((item) => {
    const matchesSearch =
      item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === 'All Status' ||
      item.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  // Action: Copy Coupon Code
  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    showToast(`Coupon code "${code}" copied to clipboard!`);
  };

  // Action: Delete Coupon
  const handleDeleteCoupon = (id) => {
    if (window.confirm('Are you sure you want to delete this coupon?')) {
      setCoupons(coupons.filter((c) => c.id !== id));
      showToast('Coupon deleted successfully.');
    }
  };

  // Action: Edit Coupon (populate form)
  const handleEditCoupon = (coupon) => {
    setFormData({
      id: coupon.id,
      code: coupon.code,
      discountType: coupon.discountType,
      discountValue: coupon.discountValue,
      minOrder: coupon.minOrder,
      maxDiscount: coupon.maxDiscount,
      usageLimit: coupon.usageLimit === '∞' ? '' : coupon.usageLimit,
      validFrom: coupon.validFrom,
      validTo: coupon.validTo,
      applicableOn: coupon.applicableOn || 'All Products',
      couponType: coupon.couponType || 'Public',
      description: coupon.description
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Save/Create Coupon
  const handleSaveCoupon = (e) => {
    e.preventDefault();
    if (!formData.code.trim()) {
      alert('Please enter a coupon code.');
      return;
    }

    const formatDateStr = (dateStr) => {
      if (!dateStr) return '';
      const date = new Date(dateStr);
      return date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      });
    };

    const validityDisplayStr = `${formatDateStr(formData.validFrom)} - ${formatDateStr(formData.validTo)}`;

    if (formData.id) {
      // Update Existing
      setCoupons(
        coupons.map((c) =>
          c.id === formData.id
            ? {
                ...c,
                code: formData.code.toUpperCase(),
                discountType: formData.discountType,
                discountValue: formData.discountValue,
                discountText:
                  formData.discountType === 'Percentage'
                    ? `${formData.discountValue}% OFF`
                    : formData.discountType === 'Fixed'
                    ? `₹${formData.discountValue} OFF`
                    : 'Free Shipping',
                subDiscount:
                  formData.discountType === 'Free Shipping'
                    ? 'On All Orders'
                    : `Up to ₹${formData.maxDiscount || '0'}`,
                minOrder: formData.minOrder || 0,
                maxDiscount: formData.maxDiscount || 0,
                validFrom: formData.validFrom,
                validTo: formData.validTo,
                validityDisplay: validityDisplayStr,
                usageLimit: formData.usageLimit || '∞',
                applicableOn: formData.applicableOn,
                couponType: formData.couponType,
                description: formData.description
              }
            : c
        )
      );
      showToast('Coupon updated successfully!');
    } else {
      // Create New
      const newCoupon = {
        id: Date.now(),
        code: formData.code.toUpperCase(),
        discountType: formData.discountType,
        discountValue: formData.discountValue,
        discountText:
          formData.discountType === 'Percentage'
            ? `${formData.discountValue}% OFF`
            : formData.discountType === 'Fixed'
            ? `₹${formData.discountValue} OFF`
            : 'Free Shipping',
        subDiscount:
          formData.discountType === 'Free Shipping'
            ? 'On All Orders'
            : `Up to ₹${formData.maxDiscount || '0'}`,
        minOrder: formData.minOrder || 0,
        maxDiscount: formData.maxDiscount || 0,
        validFrom: formData.validFrom,
        validTo: formData.validTo,
        validityDisplay: validityDisplayStr,
        usageUsed: 0,
        usageLimit: formData.usageLimit || '∞',
        couponType: formData.couponType,
        description: formData.description,
        status: 'Active',
        applicableOn: formData.applicableOn
      };
      setCoupons([newCoupon, ...coupons]);
      showToast('New coupon created successfully!');
    }

    setFormData(emptyFormState);
  };

  return (
    <div className="coupons-container">
      {toastMessage && <div className="toast-notification">{toastMessage}</div>}

      {/* Header */}
      <header className="coupons-header">
        <div>
          <h2>Coupons &amp; Offers</h2>
          <p className="subtitle">Create, manage and track performance of coupons and offers</p>
        </div>
        <button
          className="btn-create-top"
          onClick={() => {
            setFormData(emptyFormState);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          + Create New Coupon
        </button>
      </header>

      {/* Stats Summary Bar */}
      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-icon icon-red">🏷️</div>
          <div>
            <p className="stat-title">Total Coupons</p>
            <h3 className="stat-value">{coupons.length}</h3>
            <span className="stat-sub">All time coupons</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon icon-green">🎟️</div>
          <div>
            <p className="stat-title">Active Coupons</p>
            <h3 className="stat-value">
              {coupons.filter((c) => c.status === 'Active').length}
            </h3>
            <span className="stat-sub text-green">Currently active</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon icon-purple">🎁</div>
          <div>
            <p className="stat-title">Total Redemptions</p>
            <h3 className="stat-value">1,248</h3>
            <span className="stat-sub">All time usage</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon icon-orange">💎</div>
          <div>
            <p className="stat-title">Total Discount Given</p>
            <h3 className="stat-value">₹38,450</h3>
            <span className="stat-sub">Discounts availed</span>
          </div>
        </div>
      </div>

      {/* Create / Edit Coupon Form Card */}
      <div className="form-card">
        <div className="form-card-title">
          <span>🏷️</span>
          <h3>{formData.id ? 'Edit Coupon' : 'Create New Coupon'}</h3>
        </div>

        <form onSubmit={handleSaveCoupon}>
          <div className="form-grid">
            {/* Coupon Code */}
            <div className="form-group">
              <label>Coupon Code *</label>
              <input
                type="text"
                placeholder="e.g. LOVECHOC20"
                value={formData.code}
                onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                required
              />
            </div>

            {/* Discount Type */}
            <div className="form-group">
              <label>Discount Type *</label>
              <select
                value={formData.discountType}
                onChange={(e) => setFormData({ ...formData, discountType: e.target.value })}
              >
                <option value="Percentage">Percentage</option>
                <option value="Fixed Amount">Fixed Amount</option>
                <option value="Free Shipping">Free Shipping</option>
              </select>
            </div>

            {/* Discount Value */}
            <div className="form-group">
              <label>Discount Value *</label>
              <div className="input-with-addon">
                <input
                  type="number"
                  placeholder="20"
                  value={formData.discountValue}
                  onChange={(e) => setFormData({ ...formData, discountValue: e.target.value })}
                />
                <span className="addon-text">%</span>
              </div>
            </div>

            {/* Minimum Order Value */}
            <div className="form-group">
              <label>Minimum Order Value</label>
              <div className="input-with-addon">
                <input
                  type="number"
                  placeholder="500"
                  value={formData.minOrder}
                  onChange={(e) => setFormData({ ...formData, minOrder: e.target.value })}
                />
                <span className="addon-text">₹</span>
              </div>
            </div>

            {/* Maximum Discount */}
            <div className="form-group">
              <label>Maximum Discount</label>
              <div className="input-with-addon">
                <input
                  type="number"
                  placeholder="1000"
                  value={formData.maxDiscount}
                  onChange={(e) => setFormData({ ...formData, maxDiscount: e.target.value })}
                />
                <span className="addon-text">₹</span>
              </div>
            </div>

            {/* Usage Limit */}
            <div className="form-group">
              <label>Usage Limit</label>
              <input
                type="number"
                placeholder="100"
                value={formData.usageLimit}
                onChange={(e) => setFormData({ ...formData, usageLimit: e.target.value })}
              />
              <span className="input-hint">Leave empty for unlimited</span>
            </div>

            {/* Valid From */}
            <div className="form-group">
              <label>Valid From *</label>
              <input
                type="date"
                value={formData.validFrom}
                onChange={(e) => setFormData({ ...formData, validFrom: e.target.value })}
                required
              />
            </div>

            {/* Valid To */}
            <div className="form-group">
              <label>Valid To *</label>
              <input
                type="date"
                value={formData.validTo}
                onChange={(e) => setFormData({ ...formData, validTo: e.target.value })}
                required
              />
            </div>

            {/* Applicable On */}
            <div className="form-group">
              <label>Applicable On</label>
              <select
                value={formData.applicableOn}
                onChange={(e) => setFormData({ ...formData, applicableOn: e.target.value })}
              >
                <option value="All Products">All Products</option>
                <option value="Selected Categories">Selected Categories</option>
                <option value="Specific Items">Specific Items</option>
              </select>
            </div>

            {/* Coupon Type */}
            <div className="form-group">
              <label>Coupon Type</label>
              <select
                value={formData.couponType}
                onChange={(e) => setFormData({ ...formData, couponType: e.target.value })}
              >
                <option value="Public">Public</option>
                <option value="Private">Private</option>
                <option value="User Specific">User Specific</option>
              </select>
              <span className="input-hint">Public: All users can use</span>
            </div>

            {/* Description */}
            <div className="form-group span-2">
              <label>Description</label>
              <input
                type="text"
                placeholder="Flat 20% off on all chocolates. Limited time offer!"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>
          </div>

          <div className="form-actions">
            <button
              type="button"
              className="btn-cancel"
              onClick={() => setFormData(emptyFormState)}
            >
              Cancel
            </button>
            <button type="submit" className="btn-submit">
              {formData.id ? 'Update Coupon' : 'Create Coupon'}
            </button>
          </div>
        </form>
      </div>

      {/* Coupons List Section */}
      <div className="list-card">
        <div className="list-header">
          <div className="list-title">
            <span>🎟️</span>
            <h3>All Coupons</h3>
          </div>

          <div className="list-filters">
            <select
              className="status-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All Status">All Status</option>
              <option value="Active">Active</option>
              <option value="Expired">Expired</option>
            </select>

            <div className="search-box">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search coupons..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Coupons Table */}
        <div className="table-responsive">
          <table className="coupons-table">
            <thead>
              <tr>
                <th>COUPON CODE</th>
                <th>DISCOUNT</th>
                <th>MIN. ORDER</th>
                <th>VALIDITY</th>
                <th>USAGE</th>
                <th>STATUS</th>
                <th className="text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredCoupons.length > 0 ? (
                filteredCoupons.map((item) => {
                  const percentage =
                    item.usageLimit !== '∞' && item.usageLimit
                      ? Math.min(
                          Math.round((item.usageUsed / item.usageLimit) * 100),
                          100
                        )
                      : 0;

                  return (
                    <tr key={item.id}>
                      <td>
                        <span className="coupon-code-badge">{item.code}</span>
                      </td>
                      <td>
                        <div className="discount-main">{item.discountText}</div>
                        <div className="discount-sub">{item.subDiscount}</div>
                      </td>
                      <td className="font-weight-600">₹{item.minOrder}</td>
                      <td>
                        <div className="validity-text">{item.validityDisplay}</div>
                      </td>
                      <td>
                        <div className="usage-info">
                          <span>
                            {item.usageUsed} / {item.usageLimit}
                          </span>
                          {item.usageLimit !== '∞' && (
                            <span className="usage-percent">{percentage}%</span>
                          )}
                        </div>
                        <div className="progress-bar">
                          <div
                            className={`progress-fill ${
                              item.status === 'Expired' ? 'fill-red' : ''
                            }`}
                            style={{
                              width:
                                item.usageLimit === '∞'
                                  ? '100%'
                                  : `${percentage}%`
                            }}
                          ></div>
                        </div>
                      </td>
                      <td>
                        <span
                          className={`status-pill ${
                            item.status === 'Active'
                              ? 'status-active'
                              : 'status-expired'
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="text-right">
                        <div className="action-buttons">
                          <button
                            className="btn-action"
                            title="Edit"
                            onClick={() => handleEditCoupon(item)}
                          >
                            ✏️
                          </button>
                          <button
                            className="btn-action"
                            title="Copy Code"
                            onClick={() => handleCopyCode(item.code)}
                          >
                            📋
                          </button>
                          <button
                            className="btn-action btn-delete"
                            title="Delete"
                            onClick={() => handleDeleteCoupon(item.id)}
                          >
                            🗑️
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="7" className="no-data">
                    No coupons found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <footer className="coupons-footer">
        <p>© 2026 Choco Delights. All rights reserved.</p>
        <p>Made with 🍫 for chocolate lovers</p>
      </footer>
    </div>
  );
};

export default Cupons;