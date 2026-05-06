import React, { useEffect, useState } from "react";
import "./ContactTable.css";
import API from "../../api/axios";

const ContactTable = () => {

  /* =========================
      STATES
  ========================= */
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  /* VIEW MODAL */
  const [selectedContact, setSelectedContact] =
    useState(null);

  const rowsPerPage = 9;

  const [currentPage, setCurrentPage] = useState(1);

  /* =========================
      GET CONTACTS
  ========================= */
  const fetchContacts = async () => {

    try {

      setLoading(true);

      const response = await API.get("/contact");

      console.log("API DATA 👉", response.data);

      let contactData = [];

      if (Array.isArray(response.data)) {

        contactData = response.data;

      }

      else if (response.data.contacts) {

        contactData = response.data.contacts;

      }

      else if (response.data.data) {

        contactData = response.data.data;

      }

      setContacts(contactData);

    } catch (error) {

      console.log("Fetch Error ❌", error);

      alert("Failed to load contacts ❌");

    } finally {

      setLoading(false);
    }
  };

  /* =========================
      DELETE CONTACT
  ========================= */
  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this contact?"
    );

    if (!confirmDelete) return;

    try {

      await API.delete(`/contact/${id}`);

      alert("Contact deleted successfully ✅");

      setContacts((prev) =>
        prev.filter((item) => item._id !== id)
      );

    } catch (error) {

      console.log("Delete Error ❌", error);

      alert("Delete failed ❌");
    }
  };

  /* =========================
      VIEW CONTACT
  ========================= */
  const handleView = (item) => {
    setSelectedContact(item);
  };

  /* =========================
      CLOSE MODAL
  ========================= */
  const closeModal = () => {
    setSelectedContact(null);
  };

  /* =========================
      USE EFFECT
  ========================= */
  useEffect(() => {
    fetchContacts();
  }, []);

  /* =========================
      PAGINATION
  ========================= */
  const totalPages = Math.ceil(
    contacts.length / rowsPerPage
  );

  const startIndex =
    (currentPage - 1) * rowsPerPage;

  const currentData = contacts.slice(
    startIndex,
    startIndex + rowsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (

    <div className="contactTable-container">

      {/* HEADER */}
      <div className="contactTable-header">

        <div className="contactTable-headingWrap">

          <p className="contactTable-subtitle">
            ADMIN DASHBOARD
          </p>

          <h2 className="contactTable-title">
            Contact Enquiries
          </h2>

        </div>

        <div className="contactTable-total">
          Total : {contacts.length}
        </div>

      </div>

      {/* TABLE */}
      <div className="contactTable-wrapper">

        <table className="contactTable-table">

          <thead>

            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            {loading ? (

              <tr>
                <td
                  colSpan="6"
                  className="contactTable-loading"
                >
                  Loading contacts...
                </td>
              </tr>

            ) : currentData.length > 0 ? (

              currentData.map((item, index) => (

                <tr key={item._id || index}>

                  <td>
                    {startIndex + index + 1}
                  </td>

                  <td className="contactTable-name">

                    {item.firstName || "N/A"}{" "}
                    {item.lastName || ""}

                  </td>

                  <td>
                    {item.email || "N/A"}
                  </td>

                  <td>
                    {item.phone || "N/A"}
                  </td>

                  <td className="contactTable-message">

                    {item.message || "No message"}

                  </td>

                  <td>

                    <div className="contactTable-actions">

                      <button
                        className="contactTable-view"
                        onClick={() =>
                          handleView(item)
                        }
                      >
                        View
                      </button>

                      <button
                        className="contactTable-delete"
                        onClick={() =>
                          handleDelete(item._id)
                        }
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))

            ) : (

              <tr>
                <td
                  colSpan="6"
                  className="contactTable-empty"
                >
                  No Contact Found
                </td>
              </tr>

            )}

          </tbody>

        </table>

      </div>

      {/* PAGINATION */}
      {contacts.length > rowsPerPage && (

        <div className="contactTable-pagination">

          <button
            onClick={() =>
              handlePageChange(currentPage - 1)
            }
            disabled={currentPage === 1}
          >
            {"<"}
          </button>

          {[...Array(totalPages)].map((_, index) => {

            const page = index + 1;

            return (

              <button
                key={page}
                className={
                  currentPage === page
                    ? "active"
                    : ""
                }
                onClick={() =>
                  handlePageChange(page)
                }
              >
                {page}
              </button>

            );
          })}

          <button
            onClick={() =>
              handlePageChange(currentPage + 1)
            }
            disabled={currentPage === totalPages}
          >
            {">"}
          </button>

        </div>

      )}

      {/* VIEW MODAL */}
      {selectedContact && (

        <div
          className="contactModal-overlay"
          onClick={closeModal}
        >

          <div
            className="contactModal-box"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE BUTTON */}
            <button
              className="contactModal-close"
              onClick={closeModal}
            >
              ×
            </button>

            {/* CONTENT */}
            <div className="contactModal-content">

              <h2 className="contactModal-title">
                Contact Details
              </h2>

              <div className="contactModal-grid">

                {/* NAME */}
                <div className="contactModal-card">

                  <span>Name</span>

                  <p>
                    {selectedContact.firstName}{" "}
                    {selectedContact.lastName}
                  </p>

                </div>

                {/* EMAIL */}
                <div className="contactModal-card">

                  <span>Email</span>

                  <p>
                    {selectedContact.email || "N/A"}
                  </p>

                </div>

                {/* PHONE */}
                <div className="contactModal-card">

                  <span>Phone</span>

                  <p>
                    {selectedContact.phone || "N/A"}
                  </p>

                </div>

              </div>

              {/* MESSAGE */}
              <div className="contactModal-messageSection">

                <h3 className="contactModal-messageTitle">
                  Message
                </h3>

                <div className="contactModal-messageBox">

                  <p>
                    {selectedContact.message ||
                      "No message available"}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default ContactTable;