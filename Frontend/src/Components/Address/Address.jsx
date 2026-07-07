import React, { useState } from "react";
import "./Address.css";

import {
  FiPlus,
  FiMapPin,
  FiX,
} from "react-icons/fi";

const Address = () => {
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    apartment: "",
    city: "",
    country: "India",
    postalCode: "",
    phone: "",
    defaultAddress: false,
  });

  const [addresses, setAddresses] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } =
      e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      company: "",
      address: "",
      apartment: "",
      city: "",
      country: "India",
      postalCode: "",
      phone: "",
      defaultAddress: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAddress = {
      id: Date.now(),
      ...formData,
    };

    setAddresses([...addresses, newAddress]);

    resetForm();

    setShowForm(false);
  };

  const handleToggle = () => {
    setShowForm(!showForm);
  };

  const handleCancel = () => {
    resetForm();
    setShowForm(false);
  };

  return (
    <div className="address">

      {/* ================= HEADER ================= */}

      <div className="addressHeader">

        <h2>
          Your Addresses (
          {addresses.length})
        </h2>

        <button
          className="addressAddBtn"
          onClick={handleToggle}
        >
          {showForm ? (
            <>
              <FiX />
              Close
            </>
          ) : (
            <>
              <FiPlus />
              Add a New Address
            </>
          )}
        </button>

      </div>

      {/* ================= FORM ================= */}

      {showForm && (

        <div className="addressFormCard">

          <div className="addressFormTitle">

            <FiPlus />

            <h3>Add New Address</h3>

          </div>

          <form
            className="addressForm"
            onSubmit={handleSubmit}
          >

            <div className="addressGrid">

              {/* First Name */}

              <div className="addressFormGroup">

                <label>
                  First Name
                </label>

                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* Last Name */}

              <div className="addressFormGroup">

                <label>
                  Last Name
                </label>

                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* Company */}

              <div className="addressFormGroup">

                <label>
                  Company
                </label>

                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                />

              </div>

              {/* Address */}

              <div className="addressFormGroup">

                <label>
                  Address
                </label>

                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* Apartment */}

              <div className="addressFormGroup">

                <label>
                  Apartment, suite, etc.
                </label>

                <input
                  type="text"
                  name="apartment"
                  placeholder="Apartment, suite, etc."
                  value={formData.apartment}
                  onChange={handleChange}
                />

              </div>

              {/* City */}

              <div className="addressFormGroup">

                <label>
                  City
                </label>

                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* Country */}

              <div className="addressFormGroup">

                <label>
                  Country
                </label>

                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option>
                    India
                  </option>

                  <option>
                    United States
                  </option>

                  <option>
                    United Kingdom
                  </option>

                  <option>
                    Australia
                  </option>

                  <option>
                    Canada
                  </option>

                </select>

              </div>

              {/* Postal */}

              <div className="addressFormGroup">

                <label>
                  Postal/Zip Code
                </label>

                <input
                  type="text"
                  name="postalCode"
                  placeholder="Postal/Zip Code"
                  value={formData.postalCode}
                  onChange={handleChange}
                />

              </div>

              {/* Phone */}

              <div className="addressFormGroup">

                <label>
                  Phone
                </label>

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />

              </div>

            </div>

            {/* Checkbox */}

            <div className="addressCheckbox">

              <input
                type="checkbox"
                id="defaultAddress"
                name="defaultAddress"
                checked={
                  formData.defaultAddress
                }
                onChange={handleChange}
              />

              <label htmlFor="defaultAddress">
                Set as default address
              </label>

            </div>

            {/* Buttons */}

            <div className="addressButtons">

              <button
                type="submit"
                className="addressSaveBtn"
              >
              Save Your Address
              </button>

              <button
                type="button"
                className="addressCancelBtn"
                onClick={handleCancel}
              >
                Cancel
              </button>

            </div>

          </form>

        </div>

      )}

      {/* ================= EMPTY / LIST ================= */}

      <div className="addressContent">

        {addresses.length === 0 ? (

          <div className="addressEmpty">

            <FiMapPin className="addressEmptyIcon" />

            <h3>
              No addresses yet
            </h3>

            <p>
              Add your first delivery
              address to get started.
            </p>

            <button
              className="addressPrimaryBtn"
              onClick={() =>
                setShowForm(true)
              }
            >
              Add Your  Address
            </button>

          </div>

        ) : (

          <div className="addressList">

            {addresses.map((item) => (

              <div
                className="addressCard"
                key={item.id}
              >

                <h4>
                  {item.firstName}{" "}
                  {item.lastName}
                </h4>

                {item.company && (
                  <p>{item.company}</p>
                )}

                <p>{item.address}</p>

                {item.apartment && (
                  <p>
                    {item.apartment}
                  </p>
                )}

                <p>
                  {item.city},{" "}
                  {item.country}
                </p>

                <p>
                  {item.postalCode}
                </p>

                <p>
                  {item.phone}
                </p>

                {item.defaultAddress && (
                  <span className="addressDefaultBadge">
                    Default Address
                  </span>
                )}

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
};

export default Address;