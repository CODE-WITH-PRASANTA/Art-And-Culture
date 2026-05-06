import React, { useState, useEffect } from "react";
import "./Order.css";
import API, { IMG_URL } from "../../api/axios";

const Order = () => {
  const defaultForm = {
    name: "",
    category: "Temple Idol",
    slug: "",
    price: "",
    salePrice: "",
    stock: "",
    status: "Active",
    type: "Featured",
    material: "Brass",
    tags: "",
    weight: "",
    dimensions: "",
    shortDesc: "",
    fullDesc: "",
    wishlist: false,
    compare: false,
    saleBadge: false,
    image: "",
  };

  const [form, setForm] = useState(defaultForm);
  const [products, setProducts] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [editId, setEditId] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [viewProduct, setViewProduct] = useState(null);

  /* ================= FETCH ================= */
  const fetchProducts = async () => {
    try {
      const res = await API.get("/orders");
      setProducts(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  /* ================= CHANGE ================= */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  /* ================= IMAGE ================= */
  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImageFile(file);

      // preview
      setForm({
        ...form,
        image: URL.createObjectURL(file),
      });
    }
  };

  /* ================= SAVE ================= */
  const handleSave = async () => {
    if (!form.name) return alert("Product name required");

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
        await API.put(`/orders/update/${editId}`, formData);
        alert("Updated successfully");
      } else {
        await API.post("/orders/create", formData);
        alert("Created successfully");
      }

      setForm(defaultForm);
      setEditId(null);
      setImageFile(null);
      fetchProducts();
    } catch (err) {
      console.error(err);
      alert("Error saving product");
    }
  };

  /* ================= DELETE ================= */
  const handleDelete = async (id) => {
    try {
      await API.delete(`/orders/delete/${id}`);
      setActiveDropdown(null);
      fetchProducts();
    } catch (err) {
      console.error(err);
    }
  };

  /* ================= EDIT ================= */
  const handleEdit = (product) => {
    setEditId(product._id);

    setForm({
      ...product,
      tags: product.tags?.join(",") || "",
      image: product.image ? `${IMG_URL}/uploads/${product.image}` : "",
    });

    setActiveDropdown(null);
  };

  return (
    <div className="luxadmin">
      {viewProduct && (
        <div className="luxadmin-modal">
          <div className="luxadmin-modal-content">
            <button
              className="luxadmin-close"
              onClick={() => setViewProduct(null)}
            >
              ✕
            </button>

            <div className="luxadmin-card">
              {viewProduct.saleBadge && <span className="badge">SALE</span>}

              <img
                src={
                  viewProduct.image
                    ? `${IMG_URL}/uploads/${viewProduct.image}`
                    : "https://images.unsplash.com/photo-1611078489935-0cb964de46d6"
                }
                alt=""
              />

              <h3>{viewProduct.name}</h3>
              <p>{viewProduct.shortDesc}</p>

              <div className="price">
                <span className="old">₹{viewProduct.price}</span>
                <span className="new">₹{viewProduct.salePrice}</span>
              </div>

              <button className="cart">Add To Cart</button>

              <div className="small-btns">
                {viewProduct.wishlist && <button>Wishlist</button>}
                {viewProduct.compare && <button>Compare</button>}
              </div>

              <div className="extra">
                <span>{viewProduct.stock} in stock</span>
                <span>{viewProduct.category}</span>
                <span>{viewProduct.type}</span>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="luxadmin-top">
        {/* ================= FORM ================= */}
        <div className="luxadmin-form">
          <h2>{editId ? "Edit Product" : "Add Product"}</h2>

          <div className="luxadmin-grid">
            <input
              name="name"
              value={form.name}
              placeholder="Product Name"
              onChange={handleChange}
            />

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
            >
              <option>Temple Idol</option>
              <option>Decor</option>
              <option>Spiritual</option>
            </select>

            <input
              name="slug"
              value={form.slug}
              placeholder="Slug"
              onChange={handleChange}
            />

            <input
              name="price"
              value={form.price}
              type="number"
              placeholder="Price"
              onChange={handleChange}
            />

            <input
              name="salePrice"
              value={form.salePrice}
              type="number"
              placeholder="Sale Price"
              onChange={handleChange}
            />

            <input
              name="stock"
              value={form.stock}
              type="number"
              placeholder="Stock"
              onChange={handleChange}
            />

            <select name="status" value={form.status} onChange={handleChange}>
              <option>Active</option>
              <option>Draft</option>
              <option>Out of Stock</option>
            </select>

            <select name="type" value={form.type} onChange={handleChange}>
              <option>Featured</option>
              <option>Trending</option>
              <option>Sale</option>
            </select>

            {/* IMAGE */}
            <input type="file" onChange={handleImage} />

            <textarea
              name="shortDesc"
              value={form.shortDesc}
              placeholder="Short Description"
              onChange={handleChange}
            ></textarea>

            <textarea
              name="fullDesc"
              value={form.fullDesc}
              placeholder="Full Description"
              onChange={handleChange}
            ></textarea>

            <input
              name="tags"
              value={form.tags}
              placeholder="Tags"
              onChange={handleChange}
            />

            <div className="luxadmin-checks">
              <label>
                <input
                  type="checkbox"
                  name="wishlist"
                  checked={form.wishlist}
                  onChange={handleChange}
                />{" "}
                Wishlist
              </label>
              <label>
                <input
                  type="checkbox"
                  name="compare"
                  checked={form.compare}
                  onChange={handleChange}
                />{" "}
                Compare
              </label>
              <label>
                <input
                  type="checkbox"
                  name="saleBadge"
                  checked={form.saleBadge}
                  onChange={handleChange}
                />{" "}
                Sale
              </label>
            </div>

            <button className="luxadmin-save" onClick={handleSave}>
              {editId ? "Update Product" : "Save Product"}
            </button>
          </div>
        </div>

        {/* ================= PREVIEW ================= */}
        <div className="luxadmin-preview">
          <h2>Live Preview</h2>

          <div className="luxadmin-card">
            {form.saleBadge && <span className="badge">SALE</span>}

            <img
              src={
                form.image
                  ? form.image.startsWith("blob")
                    ? form.image
                    : `${IMG_URL}/uploads/${form.image.split("/").pop()}`
                  : "https://images.unsplash.com/photo-1611078489935-0cb964de46d6"
              }
              alt=""
            />

            <h3>{form.name || "Product Name"}</h3>
            <p>{form.shortDesc || "Short description..."}</p>

            <div className="price">
              <span className="old">₹{form.price || 0}</span>
              <span className="new">₹{form.salePrice || 0}</span>
            </div>

            <button className="cart">Add To Cart</button>

            <div className="small-btns">
              {form.wishlist && <button>Wishlist</button>}
              {form.compare && <button>Compare</button>}
            </div>

            <div className="extra">
              <span>{form.stock || 0} in stock</span>
              <span>{form.category}</span>
              <span>{form.type}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= TABLE ================= */}
      <div className="luxadmin-table">
        <h2>All Products</h2>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>ID</th>
                <th>Category</th>
                <th>Price</th>
                <th>Sale</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {products.map((p, i) => (
                <tr key={p._id}>
                  <td>
                    {p.image && (
                      <img
                        src={`${IMG_URL}/uploads/${p.image}`}
                        className="table-img"
                        alt=""
                      />
                    )}
                  </td>

                  <td>{p.name}</td>
                  <td>{p._id}</td>
                  <td>{p.category}</td>
                  <td>₹{p.price}</td>
                  <td>₹{p.salePrice}</td>
                  <td>{p.status}</td>

                  <td>
                    <div className="action">
                      <button
                        onClick={() =>
                          setActiveDropdown(activeDropdown === i ? null : i)
                        }
                      >
                        ⋮
                      </button>

                      {activeDropdown === i && (
                        <div className="dropdown">
                          <button onClick={() => setViewProduct(p)}>
                            View
                          </button>
                          <button onClick={() => handleEdit(p)}>Edit</button>
                          <button onClick={() => handleDelete(p._id)}>
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
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

export default Order;
