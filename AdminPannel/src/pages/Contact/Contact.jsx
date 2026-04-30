import React, { useEffect, useState } from "react";
import "./Contact.css";
import API from "../../api/axios";

export default function ContactPage() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  /* FETCH CONTACTS */
  const fetchContacts = async () => {
    try {
      setLoading(true);

      const res = await API.get(
        `/contact?page=${page}&search=${search}`
      );

      setData(res.data.contacts || []);
      setPages(res.data.pages || 1);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, [page, search]);

  /* DELETE */
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this contact?")) return;

    try {
      await API.delete(`/contact/${id}`);
      fetchContacts();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="contact-container">
      {/* HEADER */}
      <div className="contact-header">
        <h2 className="contact-title">📩 Contact Dashboard</h2>

        <input
          className="contact-search"
          placeholder="Search name or email..."
          value={search}
          onChange={(e) => {
            setPage(1);
            setSearch(e.target.value);
          }}
        />
      </div>

      {/* LOADING */}
      {loading && <div className="contact-loading">Loading...</div>}

      {/* EMPTY STATE */}
      {!loading && data.length === 0 && (
        <div className="contact-empty">
          No contact messages found 🚫
        </div>
      )}

      {/* GRID */}
      <div className="contact-grid">
        {data.map((c) => (
          <div className="contact-card" key={c._id}>
            <h3 className="contact-name">
              {c.firstName} {c.lastName}
            </h3>

            <p className="contact-info">📧 {c.email}</p>
            <p className="contact-info">📞 {c.phone}</p>

            <p className="contact-message">{c.message}</p>

            <div className="contact-footer">
              <small className="contact-date">
                {new Date(c.createdAt).toLocaleString()}
              </small>

              <button
                className="contact-btn contact-delete"
                onClick={() => handleDelete(c._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      {pages > 1 && (
        <div className="contact-pagination">
          {Array.from({ length: pages }, (_, i) => (
            <button
              key={i}
              className={`contact-page-btn ${
                page === i + 1 ? "active" : ""
              }`}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}