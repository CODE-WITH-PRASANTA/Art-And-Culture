import React, { useState } from "react";
import "./ContactTable.css";

const ContactTable = () => {
  const data = [
    { id: 1, firstName: "Rahul", lastName: "Sharma", email: "rahul@gmail.com", phone: "9876543210", message: "Need help with product" },
    { id: 2, firstName: "Priya", lastName: "Das", email: "priya@gmail.com", phone: "9123456780", message: "Query about pricing" },
    { id: 3, firstName: "Amit", lastName: "Kumar", email: "amit@gmail.com", phone: "9000000001", message: "Delivery issue" },
    { id: 4, firstName: "Neha", lastName: "Singh", email: "neha@gmail.com", phone: "9000000002", message: "Refund request" },
    { id: 5, firstName: "Ravi", lastName: "Patel", email: "ravi@gmail.com", phone: "9000000003", message: "Order details" },
    { id: 6, firstName: "Anjali", lastName: "Roy", email: "anjali@gmail.com", phone: "9000000004", message: "Support needed" },
    { id: 7, firstName: "Karan", lastName: "Mehta", email: "karan@gmail.com", phone: "9000000005", message: "Payment failed" },
    { id: 8, firstName: "Pooja", lastName: "Jain", email: "pooja@gmail.com", phone: "9000000006", message: "Account issue" },
    { id: 9, firstName: "Suresh", lastName: "Yadav", email: "suresh@gmail.com", phone: "9000000007", message: "Shipping delay" },
    { id: 10, firstName: "Ritu", lastName: "Verma", email: "ritu@gmail.com", phone: "9000000008", message: "Product query" },
    { id: 11, firstName: "Manish", lastName: "Gupta", email: "manish@gmail.com", phone: "9000000009", message: "Cancel order" },
  ];

  const rowsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = data.slice(startIndex, startIndex + rowsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="contactTable-container">
      <h2 className="contactTable-title">Contact Enquiries</h2>

      <div className="contactTable-wrapper">
        <table className="contactTable-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {currentData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.firstName} {item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td className="contactTable-message">{item.message}</td>
                <td>
                  <div className="contactTable-actions">
                    <button className="contactTable-edit">Edit</button>
                    <button className="contactTable-delete">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="contactTable-pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>

        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <button
              key={page}
              className={currentPage === page ? "active" : ""}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          );
        })}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default ContactTable;