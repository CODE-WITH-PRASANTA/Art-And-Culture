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

      /* FORMAT 1 */
      if (Array.isArray(response.data)) {

        contactData = response.data;

      }

      /* FORMAT 2 */
      else if (response.data.contacts) {

        contactData = response.data.contacts;

      }

      /* FORMAT 3 */
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

      /* UPDATE UI */
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

      {/* =========================
            HEADER
      ========================= */}
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

      {/* =========================
            TABLE
      ========================= */}
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

            {/* LOADING */}
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

                  {/* ID */}
                  <td>
                    {startIndex + index + 1}
                  </td>

                  {/* NAME */}
                  <td className="contactTable-name">

                    {item.firstName || "N/A"}{" "}
                    {item.lastName || ""}

                  </td>

                  {/* EMAIL */}
                  <td>
                    {item.email || "N/A"}
                  </td>

                  {/* PHONE */}
                  <td>
                    {item.phone || "N/A"}
                  </td>

                  {/* MESSAGE */}
                  <td className="contactTable-message">

                    {item.message || "No message"}

                  </td>

                  {/* ACTION */}
                  <td>

                    <div className="contactTable-actions">

                      {/* VIEW */}
                      <button
                        className="contactTable-view"
                        onClick={() =>
                          handleView(item)
                        }
                      >
                        View
                      </button>

                      {/* DELETE */}
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

      {/* =========================
            PAGINATION
      ========================= */}
      {contacts.length > rowsPerPage && (

        <div className="contactTable-pagination">

          {/* PREV */}
          <button
            onClick={() =>
              handlePageChange(currentPage - 1)
            }
            disabled={currentPage === 1}
          >
            {"<"}
          </button>

          {/* PAGE */}
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

          {/* NEXT */}
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

      {/* =========================
            VIEW MODAL
      ========================= */}
      {selectedContact && (

        <div className="contactModal-overlay">

          <div className="contactModal-box">

            <div className="contactModal-header">

              <h3>Contact Details</h3>

              <button
                className="contactModal-close"
                onClick={closeModal}
              >
                ×
              </button>

            </div>

            <div className="contactModal-body">

              <div className="contactModal-item">
                <span>First Name :</span>
                <p>
                  {selectedContact.firstName}
                </p>
              </div>

              <div className="contactModal-item">
                <span>Last Name :</span>
                <p>
                  {selectedContact.lastName}
                </p>
              </div>

              <div className="contactModal-item">
                <span>Email :</span>
                <p>
                  {selectedContact.email}
                </p>
              </div>

              <div className="contactModal-item">
                <span>Phone :</span>
                <p>
                  {selectedContact.phone}
                </p>
              </div>

              <div className="contactModal-item">
                <span>Message :</span>
                <p>
                  {selectedContact.message}
                </p>
              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default ContactTable;