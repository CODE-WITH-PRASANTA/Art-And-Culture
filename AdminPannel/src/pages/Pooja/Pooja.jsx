import React, { useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import API, { IMG_URL } from "../../api/axios";
import "./Pooja.css";

const Pooja = () => {
  const defaultForm = {
    name: "",
    slug: "",
    category: "",
    price: "",
    salePrice: "",
    stock: "",
    status: "Active",
    type: "Featured",
    shortDesc: "",
    image: "",
    rating: 5,
  };

  const [form, setForm] = useState(defaultForm);
  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  /* ================= FETCH ================= */
  const fetchProducts = async () => {
    try {
      const res = await API.get("/pooja/all");
      setProducts(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  /* ================= INPUT ================= */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* ================= IMAGE ================= */
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImageFile(file);

    if (file) {
      const preview = URL.createObjectURL(file);
      setForm({ ...form, image: preview });
    }
  };

  /* ================= SAVE ================= */
  const handleSave = async () => {
    if (!form.name || !form.price) {
      alert("Fill required fields");
      return;
    }

    try {
      const formData = new FormData();

      Object.keys(form).forEach((key) => {
        if (key !== "image") {
          formData.append(key, form[key]);
        }
      });

      if (imageFile) {
        formData.append("image", imageFile);
      }

      if (editId) {
        await API.put(`/pooja/update/${editId}`, formData);
      } else {
        await API.post("/pooja/create", formData);
      }

      fetchProducts();
      setForm(defaultForm);
      setEditId(null);
      setImageFile(null);
    } catch (err) {
      console.log(err);
    }
  };

  /* ================= DELETE ================= */
  const handleDelete = async (id) => {
    try {
      await API.delete(`/pooja/delete/${id}`);
      fetchProducts();
    } catch (err) {
      console.log(err);
    }
  };

  /* ================= EDIT ================= */
  const handleEdit = (product) => {
    setEditId(product._id);

    setForm({
      ...product,
      image: product.image
        ? `${IMG_URL}/uploads/${product.image}`
        : "",
    });
  };

  const handleCancel = () => {
    setForm(defaultForm);
    setEditId(null);
    setImageFile(null);
  };

  /* ================= DISCOUNT ================= */
  const discount =
    form.price && form.salePrice
      ? Math.round(((form.price - form.salePrice) / form.price) * 100)
      : 0;

  return (
    <div className="pooja-wrapper">
      <div className="pooja-grid">

        {/* ================= FORM ================= */}
        <div className="pooja-card">
          <h2 className="pooja-title">
            {editId ? "Edit Product" : "Add Product"}
          </h2>

          <div className="pooja-section">
            <label>Product Name</label>
            <input name="name" value={form.name} onChange={handleChange} />
          </div>

          <div className="pooja-section">
            <label>Slug</label>
            <input name="slug" value={form.slug} onChange={handleChange} />
          </div>

          <div className="pooja-row">
            <div>
              <label>Price</label>
              <input name="price" value={form.price} onChange={handleChange} />
            </div>
            <div>
              <label>Sale Price</label>
              <input
                name="salePrice"
                value={form.salePrice}
                onChange={handleChange}
              />
            </div>
          </div>

          <p className="pooja-discount">Discount: {discount}%</p>

          <div className="pooja-section">
            <label>Rating (1 - 5)</label>
            <input
              type="number"
              name="rating"
              min="1"
              max="5"
              step="0.1"
              value={form.rating}
              onChange={handleChange}
            />
          </div>

          <div className="pooja-row">
            <div>
              <label>Stock</label>
              <input name="stock" value={form.stock} onChange={handleChange} />
            </div>

            <div>
              <label>Status</label>
              <select name="status" value={form.status} onChange={handleChange}>
                <option>Active</option>
                <option>Draft</option>
              </select>
            </div>

            <div>
              <label>Type</label>
              <select name="type" value={form.type} onChange={handleChange}>
                <option>Featured</option>
                <option>Normal</option>
              </select>
            </div>
          </div>

          {/* TinyMCE */}
          <div className="pooja-section">
            <label>Description</label>

            <div className="pooja-editor">
              <Editor
                apiKey="jeq7g2k84sqpi9364o8x9ptqf09aoesaq8jxmp49dl4sh57z"
                value={form.shortDesc}
                onEditorChange={(content) =>
                  setForm({ ...form, shortDesc: content })
                }
                init={{
                  height: 220,
                  menubar: false,
                  plugins: ["lists", "link", "image", "code"],
                  toolbar:
                    "undo redo | bold italic underline | bullist numlist | link image | code",
                }}
              />
            </div>
          </div>

          {/* IMAGE */}
          <div className="pooja-upload">
            <input type="file" onChange={handleImageUpload} />
            <span>Upload Image</span>
          </div>

          {form.image && (
            <img src={form.image} className="pooja-preview-img" alt="" />
          )}

          <button className="pooja-btn-primary" onClick={handleSave}>
            {editId ? "Update Product" : "Save Product"}
          </button>

          {editId && (
            <button className="pooja-btn-secondary" onClick={handleCancel}>
              Cancel
            </button>
          )}
        </div>

        {/* ================= PREVIEW ================= */}
        <div className="pooja-card">
          <h2 className="pooja-title">Live Preview</h2>

          <div className="pooja-preview-card">
            <div className="pooja-preview-left">
              {form.image ? (
                <img src={form.image} alt="" />
              ) : (
                <div className="pooja-no-img">No Image</div>
              )}

              {discount > 0 && (
                <span className="pooja-badge">-{discount}%</span>
              )}
            </div>

            <div className="pooja-preview-right">
              <h3>{form.name || "Product Name"}</h3>
              <p className="pooja-rating">⭐ {form.rating || 0}</p>

              <div className="pooja-price">
                <span className="sale">₹{form.salePrice || 0}</span>
                <span className="original">₹{form.price || 0}</span>
              </div>

              <div
                className="desc"
                dangerouslySetInnerHTML={{
                  __html: form.shortDesc || "Product description preview...",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= TABLE ================= */}
      <div className="pooja-card pooja-table">
        <h2 className="pooja-title">All Products</h2>

        <div className="pooja-table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Stock</th>
                <th>Status</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.map((p) => (
                <tr key={p._id}>
                  <td>
                    {p.image && (
                      <img
                        src={`${IMG_URL}/uploads/${p.image}`}
                        alt=""
                      />
                    )}
                  </td>
                  <td>{p.name}</td>
                  <td>₹{p.salePrice || p.price}</td>
                  <td>⭐ {p.rating}</td>
                  <td>{p.stock}</td>
                  <td>{p.status}</td>
                  <td>{p.type}</td>
                  <td>
                    <button onClick={() => handleEdit(p)}>Edit</button>
                    <button onClick={() => handleDelete(p._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Pooja;