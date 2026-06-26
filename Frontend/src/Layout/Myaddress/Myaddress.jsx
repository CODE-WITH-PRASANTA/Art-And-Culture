import React, { useState } from "react";
import { FiMapPin, FiPlus } from "react-icons/fi";
import "./MyAddress.css";

const MyAddress = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    apartment: "",
    city: "",
    country: "India",
    zipCode: "",
    phone: "",
    isDefault: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saved Address Data:", formData);
    // You can handle adding the address to a list or sending it to an API here
    setShowForm(false); 
  };

  return (
    <div className="AddressContainer">
      {/* Header Section */}
      <div className="AddressHeader">
        <h2 className="AddressTitle">Your Addresses (0)</h2>
        {!showForm && (
          <button className="AddAddressBtn" onClick={() => setShowForm(true)}>
            <FiPlus /> Add a New Address
          </button>
        )}
      </div>

      {/* Address Form (Third Screenshot Reference) */}
      {showForm && (
        <form className="AddressFormCard" onSubmit={handleSubmit}>
          <h3 className="FormTitle"><FiPlus /> Add New Address</h3>
          
          <div className="FormRow">
            <div className="FormGroup">
              <label>First Name</label>
              <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleInputChange} required />
            </div>
            <div className="FormGroup">
              <label>Last Name</label>
              <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} required />
            </div>
            <div className="FormGroup">
              <label>Company</label>
              <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleInputChange} />
            </div>
          </div>

          <div className="FormRow">
            <div className="FormGroup flex-2">
              <label>Address</label>
              <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleInputChange} required />
            </div>
            <div className="FormGroup flex-2">
              <label>Apartment, suite, etc.</label>
              <input type="text" name="apartment" placeholder="Apartment, suite, etc." value={formData.apartment} onChange={handleInputChange} />
            </div>
            <div className="FormGroup flex-1">
              <label>City</label>
              <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleInputChange} required />
            </div>
          </div>

          <div className="FormRow">
            <div className="FormGroup">
              <label>Country</label>
              <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleInputChange} required />
            </div>
            <div className="FormGroup">
              <label>Postal/Zip Code</label>
              <input type="text" name="zipCode" placeholder="Postal/Zip Code" value={formData.zipCode} onChange={handleInputChange} required />
            </div>
            <div className="FormGroup">
              <label>Phone</label>
              <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange} required />
            </div>
          </div>

          <div className="FormCheckboxGroup">
            <input type="checkbox" id="setAsDefault" name="isDefault" checked={formData.isDefault} onChange={handleInputChange} />
            <label htmlFor="setAsDefault">Set as default address</label>
          </div>

          <div className="FormActions">
            <button type="submit" className="SubmitAddressBtn">Add a New Address</button>
            <button type="button" className="CancelAddressBtn" onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </form>
      )}

      {/* Empty State Section (Second Screenshot Reference) */}
      <div className="EmptyAddressState">
        <div className="LocationIconCircle">
          <FiMapPin />
        </div>
        <h3>No addresses yet</h3>
        <p>Add your first delivery address to get started.</p>
        {!showForm && (
          <button className="FirstAddressBtn" onClick={() => setShowForm(true)}>
            Add Your First Address
          </button>
        )}
      </div>
    </div>
  );
};

export default MyAddress;