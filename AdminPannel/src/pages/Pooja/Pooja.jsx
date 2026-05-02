import React, { useState } from "react";
import "./Pooja.css";

const Pooja = () => {
  const defaultForm = {
    name: "",
    slug: "",
    category: "Idol",
    price: "",
    salePrice: "",
    stock: "",
    status: "Active",
    type: "Featured",
    shortDesc: "",
    image: "",
  };

  const [form, setForm] = useState(defaultForm);
  const [products, setProducts] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // INPUT CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // IMAGE UPLOAD
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setForm({ ...form, image: imageURL });
    }
  };

  // DISCOUNT
  const discount =
    form.price && form.salePrice
      ? Math.round(((form.price - form.salePrice) / form.price) * 100)
      : 0;

  // SAVE / UPDATE
  const handleSave = () => {
    if (!form.name || !form.price) {
      alert("Fill required fields");
      return;
    }

    if (editIndex !== null) {
      const updated = [...products];
      updated[editIndex] = form;
      setProducts(updated);
      setEditIndex(null);
    } else {
      setProducts([...products, form]);
    }

    setForm(defaultForm);
  };

  // DELETE
  const handleDelete = (index) => {
    const updated = products.filter((_, i) => i !== index);
    setProducts(updated);
  };

  // EDIT
  const handleEdit = (index) => {
    setForm(products[index]);
    setEditIndex(index);
  };

  // CANCEL EDIT
  const handleCancel = () => {
    setForm(defaultForm);
    setEditIndex(null);
  };

  return (
    <div className="pooja">
      <div className="pooja-top">

        {/* FORM */}
        <div className="pooja-form">
          <h2>{editIndex !== null ? "Edit Product" : "Add New Product"}</h2>

          <div className="pooja-box">
            <h4>Basic Info</h4>
            <input name="name" value={form.name} placeholder="Product Name" onChange={handleChange}/>
            <input name="slug" value={form.slug} placeholder="Slug" onChange={handleChange}/>
          </div>

          <div className="pooja-box">
            <h4>Pricing</h4>
            <input name="price" value={form.price} placeholder="Price" onChange={handleChange}/>
            <input name="salePrice" value={form.salePrice} placeholder="Sale Price" onChange={handleChange}/>
            <p className="discount">Discount: {discount}%</p>
          </div>

          <div className="pooja-box">
            <h4>Inventory</h4>
            <input name="stock" value={form.stock} placeholder="Stock" onChange={handleChange}/>
            <select name="status" value={form.status} onChange={handleChange}>
              <option>Active</option>
              <option>Draft</option>
            </select>
            <select name="type" value={form.type} onChange={handleChange}>
              <option>Featured</option>
              <option>Normal</option>
            </select>
          </div>

          <div className="pooja-box">
            <h4>Description</h4>
            <textarea name="shortDesc" value={form.shortDesc} placeholder="Short Description" onChange={handleChange}/>
          </div>

          {/* IMAGE */}
          <div className="pooja-box">
            <h4>Upload Image</h4>

            <label className="upload-box">
              <input type="file" onChange={handleImageUpload} />
              <span>Click to Upload</span>
            </label>

            {form.image && (
              <img src={form.image} alt="" className="upload-preview"/>
            )}
          </div>

          <button className="pooja-save" onClick={handleSave}>
            {editIndex !== null ? "Update Product" : "Save Product"}
          </button>

          {editIndex !== null && (
            <button className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
          )}
        </div>

        {/* PREVIEW */}
        <div className="pooja-preview">
          <h2>Live Product Preview</h2>

          <div className="preview-card">
            <div className="preview-img">
              {form.image ? (
                <img src={form.image} alt="" />
              ) : (
                <div className="no-img">No Image</div>
              )}
              {discount > 0 && <span className="badge">-{discount}%</span>}
            </div>

            <div className="preview-content">
              <h3>{form.name || "Product Name"}</h3>
              <p className="rating">⭐ 5.0</p>

              <div className="price">
                <span className="sale">₹{form.salePrice || 0}</span>
                <span className="original">₹{form.price || 0}</span>
              </div>

              <p className="desc">
                {form.shortDesc || "Product description preview..."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="pooja-table">
        <h2>All Products</h2>

        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Type</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p, index) => (
              <tr key={index}>
                <td>{p.image && <img src={p.image} alt="" />}</td>
                <td>{p.name}</td>
                <td>₹{p.salePrice || p.price}</td>
                <td>{p.stock}</td>
                <td>{p.status}</td>
                <td>{p.type}</td>
                <td>
                  <button className="edit" onClick={() => handleEdit(index)}>
                    Edit
                  </button>
                  <button className="delete" onClick={() => handleDelete(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pooja;