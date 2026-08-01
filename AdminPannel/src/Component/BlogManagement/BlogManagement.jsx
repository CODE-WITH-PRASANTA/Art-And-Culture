import React, { useState } from 'react';
import './BlogManagement.css';

const initialBlogs = [
  {
    id: 1,
    title: 'Luxury Table Decor Ideas for Modern Indian Homes',
    category: 'Home Decor',
    author: 'Admin User',
    status: 'Published',
    views: '1,245',
    date: 'Nov 7, 2025',
    time: '10:30 AM',
    fullDate: '2025-11-07T10:30',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=150&q=80',
    slug: 'luxury-table-decor-ideas',
    excerpt: 'Explore modern table decor ideas for Indian homes.',
    content: 'Decorating table is an art that blends tradition with modernity...',
    metaTitle: 'Luxury Table Decor Ideas',
    metaDesc: 'Explore modern table decor ideas.',
    metaKeywords: 'decor, table, home'
  },
  {
    id: 2,
    title: 'Chhath Puja 2025 Significance, Rituals and Vrat Vidhi',
    category: 'Festivals',
    author: 'Admin User',
    status: 'Published',
    views: '945',
    date: 'Oct 28, 2025',
    time: '09:15 AM',
    fullDate: '2025-10-28T09:15',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=150&q=80',
    slug: 'chhath-puja-2025-significance',
    excerpt: 'Detailed guide on Chhath Puja rituals and timing.',
    content: 'Chhath Puja is one of the most auspicious festivals...',
    metaTitle: 'Chhath Puja Guide',
    metaDesc: 'Chhath Puja Vidhi',
    metaKeywords: 'chhath, puja, festival'
  }
];

const emptyFormState = {
  id: null,
  title: '',
  slug: '',
  category: '',
  excerpt: '',
  content: '',
  metaTitle: '',
  metaDesc: '',
  metaKeywords: '',
  status: 'Published',
  publishDate: '',
  image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=150&q=80'
};

const BlogManagement = () => {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All Blogs');
  const [filterDate, setFilterDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  // Form State & Import URL State
  const [formData, setFormData] = useState(emptyFormState);
  const [importImageUrl, setImportImageUrl] = useState('');

  // Auto Generate Slug
  const handleTitleChange = (e) => {
    const val = e.target.value;
    const generatedSlug = val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    setFormData((prev) => ({
      ...prev,
      title: val,
      slug: generatedSlug
    }));
  };

  // Local File Upload Handler
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, image: imageUrl }));
    }
  };

  // Import Image from URL Handler
  const handleImportImageFromUrl = (e) => {
    e.preventDefault();
    if (!importImageUrl.trim()) {
      alert('Please enter a valid image URL!');
      return;
    }
    setFormData((prev) => ({ ...prev, image: importImageUrl.trim() }));
    setImportImageUrl('');
  };

  // Rich Text Editor Simulation
  const formatText = (command) => {
    const textarea = document.getElementById('blog-content-area');
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = formData.content.substring(start, end);

    let formatted = selectedText;
    if (command === 'bold') formatted = `**${selectedText}**`;
    if (command === 'italic') formatted = `_${selectedText}_`;
    if (command === 'underline') formatted = `<u>${selectedText}</u>`;

    const newContent =
      formData.content.substring(0, start) + formatted + formData.content.substring(end);
    setFormData((prev) => ({ ...prev, content: newContent }));
  };

  // Edit Action
  const handleEdit = (blog) => {
    setFormData({
      id: blog.id,
      title: blog.title,
      slug: blog.slug || '',
      category: blog.category || '',
      excerpt: blog.excerpt || '',
      content: blog.content || '',
      metaTitle: blog.metaTitle || '',
      metaDesc: blog.metaDesc || '',
      metaKeywords: blog.metaKeywords || '',
      status: blog.status,
      publishDate: blog.fullDate || '',
      image: blog.image
    });
  };

  // Delete Action
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      setBlogs((prev) => prev.filter((item) => item.id !== id));
      if (formData.id === id) {
        setFormData(emptyFormState);
      }
    }
  };

  // Save Blog Action
  const handleSaveBlog = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      alert('Please enter a blog title!');
      return;
    }

    const formattedDate = formData.publishDate
      ? new Date(formData.publishDate).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        })
      : 'Nov 20, 2025';

    const formattedTime = formData.publishDate
      ? new Date(formData.publishDate).toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit'
        })
      : '10:00 AM';

    if (formData.id) {
      setBlogs((prev) =>
        prev.map((b) =>
          b.id === formData.id
            ? {
                ...b,
                title: formData.title,
                slug: formData.slug,
                category: formData.category || 'General',
                excerpt: formData.excerpt,
                content: formData.content,
                metaTitle: formData.metaTitle,
                metaDesc: formData.metaDesc,
                metaKeywords: formData.metaKeywords,
                status: formData.status,
                date: formattedDate,
                time: formattedTime,
                fullDate: formData.publishDate,
                image: formData.image
              }
            : b
        )
      );
      alert('Blog updated successfully!');
    } else {
      const newBlog = {
        id: Date.now(),
        title: formData.title,
        category: formData.category || 'General',
        author: 'Admin User',
        status: formData.status,
        views: '0',
        date: formattedDate,
        time: formattedTime,
        fullDate: formData.publishDate,
        image: formData.image,
        slug: formData.slug,
        excerpt: formData.excerpt,
        content: formData.content,
        metaTitle: formData.metaTitle,
        metaDesc: formData.metaDesc,
        metaKeywords: formData.metaKeywords
      };
      setBlogs([newBlog, ...blogs]);
      alert('New blog created successfully!');
    }

    setFormData(emptyFormState);
  };

  // Filter Logic
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchQuery.toLowerCase());

    const tabName = activeTab.split(' ')[0];
    const matchesTab =
      activeTab.startsWith('All Blogs') ||
      blog.status.toLowerCase() === tabName.toLowerCase();

    const matchesDate = !filterDate || (blog.fullDate && blog.fullDate.startsWith(filterDate));

    return matchesSearch && matchesTab && matchesDate;
  });

  const handleRefresh = () => {
    setSearchQuery('');
    setActiveTab('All Blogs');
    setFilterDate('');
    setFormData(emptyFormState);
    setCurrentPage(1);
  };

  // Pagination Logic
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage) || 1;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredBlogs.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="blog-app">
      {/* Header */}
      <header className="blog-header">
        <div>
          <h2>Blog Management</h2>
          <p className="sub-heading">Create, manage and organize your blogs & stories</p>
        </div>
        <div className="header-actions">
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="btn-add-new" onClick={() => setFormData(emptyFormState)}>
            + Add New Blog
          </button>
        </div>
      </header>

      {/* Summary Cards */}
      <div className="summary-stats-grid">
        <div className="stat-card">
          <div className="icon-box bg-light-orange">🏛️</div>
          <div>
            <span className="stat-label">Total Blogs</span>
            <h3 className="stat-value">{blogs.length}</h3>
            <span className="stat-sub font-muted">All time blogs</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="icon-box bg-light-green">🍃</div>
          <div>
            <span className="stat-label">Published</span>
            <h3 className="stat-value">{blogs.filter((b) => b.status === 'Published').length}</h3>
            <span className="stat-sub font-muted">Visible on website</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="icon-box bg-light-yellow">📝</div>
          <div>
            <span className="stat-label">Drafts</span>
            <h3 className="stat-value">{blogs.filter((b) => b.status === 'Draft').length}</h3>
            <span className="stat-sub font-muted">Work in progress</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="icon-box bg-light-pink">📅</div>
          <div>
            <span className="stat-label">Scheduled</span>
            <h3 className="stat-value">{blogs.filter((b) => b.status === 'Scheduled').length}</h3>
            <span className="stat-sub font-muted">Scheduled to publish</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="icon-box bg-light-purple">👁️</div>
          <div>
            <span className="stat-label">Total Views</span>
            <h3 className="stat-value">12,458</h3>
            <span className="stat-sub font-muted">Across all blogs</span>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="blog-workspace-grid">
        {/* Table Panel */}
        <div className="left-content-panel">
          <div className="table-filter-bar">
            <div className="tab-group">
              {[`All Blogs (${blogs.length})`, 'Published', 'Drafts', 'Scheduled', 'Trash'].map((tab) => (
                <button
                  key={tab}
                  className={`tab-btn ${activeTab.startsWith(tab.split(' ')[0]) ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab(tab);
                    setCurrentPage(1);
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="filter-controls-right">
              <button className="btn-icon-text">⚙️ Filter</button>
              <div className="date-filter-box">
                <input
                  type="date"
                  value={filterDate}
                  onChange={(e) => setFilterDate(e.target.value)}
                />
              </div>
              <button className="btn-refresh" title="Refresh" onClick={handleRefresh}>
                🔄
              </button>
            </div>
          </div>

          <div className="table-responsive-wrapper">
            <table className="blogs-table">
              <thead>
                <tr>
                  <th>Blog</th>
                  <th>Category</th>
                  <th>Author</th>
                  <th>Status</th>
                  <th>Views</th>
                  <th>Date</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.length > 0 ? (
                  currentItems.map((blog) => (
                    <tr key={blog.id}>
                      <td>
                        <div className="blog-title-cell">
                          <img src={blog.image} alt={blog.title} className="blog-thumbnail" />
                          <span className="blog-title-text">{blog.title}</span>
                        </div>
                      </td>
                      <td>
                        <span className="category-pill">{blog.category}</span>
                      </td>
                      <td>
                        <div className="author-cell">
                          <span className="author-avatar">👤</span>
                          <span className="author-name">{blog.author}</span>
                        </div>
                      </td>
                      <td>
                        <span className={`status-pill status-${blog.status.toLowerCase()}`}>
                          {blog.status}
                        </span>
                      </td>
                      <td className="views-count">{blog.views}</td>
                      <td>
                        <div className="date-main">{blog.date}</div>
                        <div className="time-sub">{blog.time}</div>
                      </td>
                      <td>
                        <div className="action-buttons-group">
                          <button className="btn-action edit" title="Edit" onClick={() => handleEdit(blog)}>
                            ✏️
                          </button>
                          <button className="btn-action delete" title="Delete" onClick={() => handleDelete(blog.id)}>
                            🗑️
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="no-data-cell">No blogs found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <footer className="pagination-bar">
            <span className="pagination-info">
              Showing {filteredBlogs.length > 0 ? indexOfFirstItem + 1 : 0} to{' '}
              {Math.min(indexOfLastItem, filteredBlogs.length)} of {filteredBlogs.length} blogs
            </span>

            <div className="pagination-controls">
              <button
                className="page-nav-btn"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
              >
                &lt;
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
                className="page-nav-btn"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
              >
                &gt;
              </button>
            </div>
          </footer>
        </div>

        {/* Form Panel */}
        <aside className="right-form-panel">
          <div className="form-card-header">
            <div>
              <h3>Add / Edit Blog</h3>
              <p className="form-subtext">Create a new blog or update an existing one.</p>
            </div>
            <button className="toggle-collapse-btn">▲</button>
          </div>

          <form onSubmit={handleSaveBlog} className="blog-form">
            {/* Featured Image Section with Import URL */}
            <div className="form-group">
              <label className="form-label">Featured Image *</label>
              
              {/* Dropzone & Preview */}
              <div className="upload-dropzone-wrapper">
                <div className="dropzone-box">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="file-input-hidden"
                    id="image-upload-input"
                  />
                  <label htmlFor="image-upload-input" className="dropzone-label">
                    <span className="upload-icon">📤</span>
                    <p className="upload-text">Click to upload image <br />or drag and drop</p>
                    <span className="upload-hint">Recommended: 1200x675px (Max 2MB)</span>
                  </label>
                </div>
                <div className="image-preview-box">
                  <img src={formData.image} alt="Featured Preview" />
                </div>
              </div>

              {/* Import Image URL Option */}
              <div className="import-url-box" style={{ marginTop: '8px' }}>
                <span className="form-label-sub">OR Import Image URL:</span>
                <div style={{ display: 'flex', gap: '6px', marginTop: '4px' }}>
                  <input
                    type="text"
                    placeholder="https://example.com/image.jpg"
                    value={importImageUrl}
                    onChange={(e) => setImportImageUrl(e.target.value)}
                  />
                  <button
                    type="button"
                    className="btn-import-url"
                    onClick={handleImportImageFromUrl}
                  >
                    Import
                  </button>
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="form-group">
              <label className="form-label">Blog Title *</label>
              <div className="input-with-counter">
                <input
                  type="text"
                  placeholder="Enter blog title"
                  value={formData.title}
                  onChange={handleTitleChange}
                  maxLength={100}
                />
                <span className="char-counter">{formData.title.length}/100</span>
              </div>
            </div>

            {/* Slug */}
            <div className="form-group">
              <label className="form-label">Slug (URL) *</label>
              <input
                type="text"
                placeholder="enter-blog-slug"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              />
              <span className="url-preview-text">
                URL will be: yoursite.com/blog/{formData.slug || 'enter-blog-slug'}
              </span>
            </div>

            {/* Category */}
            <div className="form-group">
              <label className="form-label">Category *</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              >
                <option value="">Select category</option>
                <option value="Home Decor">Home Decor</option>
                <option value="Festivals">Festivals</option>
                <option value="Art & Culture">Art & Culture</option>
                <option value="Lifestyle">Lifestyle</option>
              </select>
            </div>

            {/* Excerpt */}
            <div className="form-group">
              <label className="form-label">Excerpt (Short Description) *</label>
              <div className="input-with-counter">
                <textarea
                  rows="2"
                  placeholder="Write a short summary..."
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  maxLength={160}
                />
                <span className="char-counter">{formData.excerpt.length}/160</span>
              </div>
            </div>

            {/* Content Editor */}
            <div className="form-group">
              <label className="form-label">Content *</label>
              <div className="rich-editor-wrapper">
                <div className="editor-toolbar">
                  <select defaultValue="Paragraph" className="toolbar-select">
                    <option value="Paragraph">Paragraph</option>
                    <option value="Heading 1">Heading 1</option>
                    <option value="Heading 2">Heading 2</option>
                  </select>
                  <button type="button" onClick={() => formatText('bold')}><b>B</b></button>
                  <button type="button" onClick={() => formatText('italic')}><i>I</i></button>
                  <button type="button" onClick={() => formatText('underline')}><u>U</u></button>
                  <span className="toolbar-divider"></span>
                  <button type="button">≣</button>
                  <button type="button">≡</button>
                  <button type="button">➱</button>
                  <button type="button">🔗</button>
                  <button type="button">🖼️</button>
                </div>
                <textarea
                  id="blog-content-area"
                  rows="5"
                  placeholder="Write your blog content here..."
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  maxLength={10000}
                />
                <div className="editor-footer">
                  <span className="char-counter">{formData.content.length}/10000</span>
                </div>
              </div>
            </div>

            {/* SEO Settings */}
            <div className="seo-section">
              <h4 className="seo-heading">SEO Settings</h4>
              <div className="form-group">
                <label className="form-label-sub">Meta Title</label>
                <input
                  type="text"
                  placeholder="Enter meta title"
                  value={formData.metaTitle}
                  onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="form-label-sub">Meta Description</label>
                <input
                  type="text"
                  placeholder="Enter meta description"
                  value={formData.metaDesc}
                  onChange={(e) => setFormData({ ...formData, metaDesc: e.target.value })}
                />
              </div>
            </div>

            {/* Status & Date */}
            <div className="status-publish-row">
              <div className="status-radio-group">
                <label className="form-label">Status</label>
                <div className="radio-options">
                  <label className="radio-item">
                    <input
                      type="radio"
                      name="status"
                      value="Published"
                      checked={formData.status === 'Published'}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    />
                    <span>Published</span>
                  </label>
                  <label className="radio-item">
                    <input
                      type="radio"
                      name="status"
                      value="Draft"
                      checked={formData.status === 'Draft'}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    />
                    <span>Draft</span>
                  </label>
                </div>
              </div>

              <div className="publish-date-picker-box">
                <label className="form-label">Publish Date</label>
                <input
                  type="datetime-local"
                  value={formData.publishDate}
                  onChange={(e) => setFormData({ ...formData, publishDate: e.target.value })}
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="form-action-buttons">
              <button type="button" className="btn-reset-form" onClick={() => setFormData(emptyFormState)}>
                Reset
              </button>
              <button type="submit" className="btn-save-blog">
                ✈️ Save Blog
              </button>
            </div>
          </form>
        </aside>
      </div>
    </div>
  );
};

export default BlogManagement;