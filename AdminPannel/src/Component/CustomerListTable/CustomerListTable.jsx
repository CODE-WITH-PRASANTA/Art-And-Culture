import React, { useState } from "react";
import "./CustomerListTable.css";
import {
  FaTrash,
  FaEdit,
} from "react-icons/fa";

const CustomerListTable = () => {
  const [page, setPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);

  const customers = [
    {
      id: "CUS-2009",
      name: "Christopher Moore",
      avatar: "",
      short: "CM",
      property: "House",
      email: "chris.moore@example.com",
      phone: "+91 22 2345 6789",
      status: "Lost",
      budget: "$390,000",
      date: "Aug 8, 2024",
    },
    {
      id: "CUS-2016",
      name: "Nancy Harris",
      avatar:
        "https://randomuser.me/api/portraits/women/65.jpg",
      property: "Office Space",
      email: "nancy.harris@example.com",
      phone: "+86 10 2345 6789",
      status: "Negotiation",
      budget: "$740,000",
      date: "Sep 16, 2024",
    },
    {
      id: "CUS-2008",
      name: "Lisa Taylor",
      avatar:
        "https://randomuser.me/api/portraits/women/22.jpg",
      property: "Villa",
      email: "lisa.taylor@example.com",
      phone: "+81 3 2345 6789",
      status: "Closed",
      budget: "$720,000",
      date: "Jun 14, 2024",
    },
    {
      id: "CUS-2011",
      name: "Daniel Rodriguez",
      avatar:
        "https://randomuser.me/api/portraits/men/35.jpg",
      property: "Commercial",
      email: "daniel.rodriguez@example.com",
      phone: "+7 495 234-56-78",
      status: "Site Visit",
      budget: "$950,000",
      date: "Sep 3, 2024",
    },
    {
      id: "CUS-2013",
      name: "Thomas White",
      avatar: "",
      short: "TW",
      property: "Land",
      email: "thomas.white@example.com",
      phone: "+65 6 2345 678",
      status: "Inquiry",
      budget: "$220,000",
      date: "Sep 28, 2024",
    },
    {
      id: "CUS-2014",
      name: "Lisa Taylor",
      avatar:
        "https://randomuser.me/api/portraits/women/44.jpg",
      property: "Villa",
      email: "lisa.taylor@example.com",
      phone: "+81 3 2345 6789",
      status: "Closed",
      budget: "$720,000",
      date: "Jun 14, 2024",
    },
  ];

  /* PAGE DATA */
  const perPage = 5;
  const totalPages = Math.ceil(customers.length / perPage);

  const pageData = customers.slice(
    (page - 1) * perPage,
    page * perPage
  );

  /* CHECKBOX */
  const toggleRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(
        selectedRows.filter((item) => item !== id)
      );
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const toggleAll = () => {
    const ids = pageData.map((item) => item.id);

    const allSelected = ids.every((id) =>
      selectedRows.includes(id)
    );

    if (allSelected) {
      setSelectedRows(
        selectedRows.filter((id) => !ids.includes(id))
      );
    } else {
      setSelectedRows([
        ...new Set([...selectedRows, ...ids]),
      ]);
    }
  };

  const statusClass = (status) => {
    if (status === "Lost") return "lost";
    if (status === "Negotiation") return "negotiation";
    if (status === "Closed") return "closed";
    if (status === "Site Visit") return "visit";
    return "inquiry";
  };

  return (
    <div className="customer-table-card">
      {/* Header */}
      <div className="table-top">
        <h2>Customers List</h2>
        <span>View All</span>
      </div>

      {/* Table Scroll */}
      <div className="table-scroll">
        <table className="customer-table">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  onChange={toggleAll}
                  checked={pageData.every((item) =>
                    selectedRows.includes(item.id)
                  )}
                />
              </th>

              <th>ID</th>
              <th>Customer</th>
              <th>Property Type</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Budget</th>
              <th>Registration Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {pageData.map((item, index) => (
              <tr key={index}>
                {/* checkbox not inside ID */}
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(
                      item.id
                    )}
                    onChange={() =>
                      toggleRow(item.id)
                    }
                  />
                </td>

                <td>{item.id}</td>

                <td>
                  <div className="customer-info">
                    {item.avatar ? (
                      <img
                        src={item.avatar}
                        alt=""
                      />
                    ) : (
                      <div className="avatar-text">
                        {item.short}
                      </div>
                    )}

                    <span>{item.name}</span>
                  </div>
                </td>

                <td>{item.property}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>

                <td>
                  <span
                    className={`status-badge ${statusClass(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </td>

                <td>{item.budget}</td>
                <td>{item.date}</td>

                <td>
                  <div className="action-btns">
                    <button className="edit-btn">
                      <FaEdit />
                    </button>

                    <button className="delete-btn">
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination-box">
        <button
          disabled={page === 1}
          onClick={() =>
            setPage((prev) => prev - 1)
          }
        >
          {"< Previous"}
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={
              page === i + 1 ? "active-page" : ""
            }
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={page === totalPages}
          onClick={() =>
            setPage((prev) => prev + 1)
          }
        >
          {"Next >"}
        </button>
      </div>
    </div>
  );
};

export default CustomerListTable;