import React, { useEffect, useState } from "react";

import {
  Upload,
  Pencil,
  Trash2,
  Eye,
  IndianRupee,
  Package,
  Star,
} from "lucide-react";

import "./Pooja.css";

import API, { IMG_URL } from "../../api/axios";

const Pooja = () => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);

  const [editId, setEditId] = useState(null);

  const [previewImage, setPreviewImage] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
    oldPrice: "",
    stock: "",
    rating: "",
    description: "",
    image: null,
  });

  /* =====================================================
      FETCH PRODUCTS
  ===================================================== */

  const fetchProducts = async () => {
    try {
      const res = await API.get("/pooja");

      setProducts(res.data.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  /* =====================================================
      HANDLE CHANGE
  ===================================================== */

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    /* IMAGE */

    if (name === "image") {
      const file = files[0];

      if (file) {
        setFormData((prev) => ({
          ...prev,
          image: file,
        }));

        setPreviewImage(URL.createObjectURL(file));
      }

      return;
    }

    /* PREVENT NEGATIVE */

    if (["price", "oldPrice", "stock", "rating"].includes(name)) {
      if (Number(value) < 0) return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* =====================================================
      SUBMIT
  ===================================================== */

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const sendData = new FormData();

      sendData.append("title", formData.title);

      sendData.append("category", formData.category);

      sendData.append("price", formData.price);

      sendData.append("oldPrice", formData.oldPrice);

      sendData.append("stock", formData.stock);

      sendData.append("rating", formData.rating);

      sendData.append("description", formData.description);

      /* IMAGE */

      if (formData.image) {
        sendData.append("image", formData.image);
      }

      /* ================= CREATE ================= */

      if (!editId) {
        await API.post("/pooja/create", sendData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        alert("Product Added Successfully");
      } else {

      /* ================= UPDATE ================= */
        await API.put(`/pooja/update/${editId}`, sendData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        alert("Product Updated Successfully");
      }

      /* RESET */

      setFormData({
        title: "",
        category: "",
        price: "",
        oldPrice: "",
        stock: "",
        rating: "",
        description: "",
        image: null,
      });

      setPreviewImage("");

      setEditId(null);

      fetchProducts();
    } catch (error) {
      console.log(error);

      alert(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  /* =====================================================
      EDIT
  ===================================================== */

  const handleEdit = (item) => {
    setEditId(item._id);

    setFormData({
      title: item.title,
      category: item.category,
      price: item.price,
      oldPrice: item.oldPrice,
      stock: item.stock,
      rating: item.rating,
      description: item.description,
      image: null,
    });

    setPreviewImage(`${IMG_URL}${item.image}`);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =====================================================
      DELETE
  ===================================================== */

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete this product?");

    if (!confirmDelete) return;

    try {
      await API.delete(`/pooja/delete/${id}`);

      alert("Product Deleted Successfully");

      fetchProducts();
    } catch (error) {
      console.log(error);

      alert("Delete Failed");
    }
  };

  return (
    <div className="Pooja-page">
      <div className="Pooja-wrapper">
        {/* =====================================================
            FORM SECTION
        ===================================================== */}

        <div className="Pooja-formSection">
          <div className="Pooja-cardHeader">
            <div>
              <h2>Pooja Product Manager</h2>

              <p>Create premium spiritual product listings</p>
            </div>

            <div className="Pooja-headerIcon">
              <Package size={28} />
            </div>
          </div>

          <form className="Pooja-form" onSubmit={handleSubmit}>
            {/* IMAGE */}

            <div className="Pooja-field">
              <label>Upload Product Image</label>

              <div className="Pooja-uploadBox">
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                />

                <div className="Pooja-uploadContent">
                  <Upload size={28} />

                  <span>Upload Image</span>
                </div>
              </div>
            </div>

            {/* TITLE */}

            <div className="Pooja-grid2">
              <div className="Pooja-field">
                <label>Product Title</label>

                <input
                  type="text"
                  name="title"
                  placeholder="Enter title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="Pooja-field">
                <label>Category</label>

                <input
                  type="text"
                  name="category"
                  placeholder="Enter category"
                  value={formData.category}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* PRICE */}

            <div className="Pooja-grid3">
              <div className="Pooja-field">
                <label>Price</label>

                <input
                  type="number"
                  min="0"
                  name="price"
                  placeholder="₹ 1999"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>

              <div className="Pooja-field">
                <label>Old Price</label>

                <input
                  type="number"
                  min="0"
                  name="oldPrice"
                  placeholder="₹ 2499"
                  value={formData.oldPrice}
                  onChange={handleChange}
                />
              </div>

              <div className="Pooja-field">
                <label>Stock</label>

                <input
                  type="number"
                  min="0"
                  name="stock"
                  placeholder="10"
                  value={formData.stock}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* RATING */}

            <div className="Pooja-field">
              <label>Rating</label>

              <input
                type="number"
                min="0"
                max="5"
                step="0.1"
                name="rating"
                placeholder="4.5"
                value={formData.rating}
                onChange={handleChange}
              />
            </div>

            {/* DESCRIPTION */}

            <div className="Pooja-field">
              <label>Description</label>

              <textarea
                name="description"
                rows="5"
                placeholder="Write description..."
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            {/* BUTTON */}

            <button
              type="submit"
              className="Pooja-submitBtn"
              disabled={loading}
            >
              {loading
                ? "Please Wait..."
                : editId
                  ? "Update Product"
                  : "Add Product"}
            </button>
          </form>
        </div>

        {/* =====================================================
            LIVE PREVIEW
        ===================================================== */}

        <div className="Pooja-previewSection">
          <div className="Pooja-previewHeader">
            <Eye size={22} />

            <h3>Live Preview</h3>
          </div>

          <div className="Pooja-previewCard">
            <div className="Pooja-previewImageWrap">
              {previewImage ? (
                <img
                  src={previewImage}
                  alt="preview"
                  className="Pooja-previewImage"
                />
              ) : (
                <div className="Pooja-noPreview">Upload Product Image</div>
              )}

              <div className="Pooja-previewBadge">Premium</div>
            </div>

            <div className="Pooja-previewContent">
              <h2>{formData.title || "Product Title Preview"}</h2>

              <div className="Pooja-previewRating">
                <Star size={16} />

                <span>{formData.rating || "0.0"}</span>
              </div>

              <p>
                {formData.description ||
                  "Product description preview appears here..."}
              </p>

              <div className="Pooja-previewPrices">
                <h3>
                  <IndianRupee size={18} />

                  {formData.price || "0"}
                </h3>

                <span>₹{formData.oldPrice || "0"}</span>
              </div>

              <button className="Pooja-previewBtn">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          TABLE SECTION
      ===================================================== */}

      <div className="Pooja-tableSection">
        <div className="Pooja-cardHeader">
          <div>
            <h2>All Products</h2>

            <p>Manage your uploaded pooja products</p>
          </div>
        </div>

        <div className="Pooja-tableWrapper">
          <table className="Pooja-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Rating</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {products.length > 0 ? (
                products.map((item) => (
                  <tr key={item._id}>
                    <td>
                      <img
                        src={`${IMG_URL}${item.image}`}
                        alt={item.title}
                        className="Pooja-tableImage"
                      />
                    </td>

                    <td>{item.title}</td>

                    <td>{item.category}</td>

                    <td>₹{item.price}</td>

                    <td>{item.stock}</td>

                    <td>{item.rating}</td>

                    <td>
                      <div className="Pooja-actionBtns">
                        <button
                          type="button"
                          className="Pooja-editBtn"
                          onClick={() => handleEdit(item)}
                        >
                          <Pencil size={16} />
                        </button>

                        <button
                          type="button"
                          className="Pooja-deleteBtn"
                          onClick={() => handleDelete(item._id)}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">No Products Added</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Pooja;
