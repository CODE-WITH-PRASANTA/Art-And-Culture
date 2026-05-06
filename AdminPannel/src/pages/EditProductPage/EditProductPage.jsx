import React, { useEffect, useState } from "react";
import "./EditProductPage.css";
import { useParams, useNavigate } from "react-router-dom";

const EditProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    use: "",
    rating: "",
    stock: "",
    shipping: "",
    categoryType: "",
    helpline: "",
    price: "",
    discount: "",
    sizes: { height: "", width: "", weight: "" },
    details: "",
    faqs: [{ question: "", answer: "" }],
  });

  const [images, setImages] = useState([]);
  const [preview, setPreview] = useState([]);

  /* ================= FETCH PRODUCT ================= */
  useEffect(() => {
    fetch(`http://localhost:5000/api/products`)
      .then((res) => res.json())
      .then((data) => {
        const product = data.data.find((p) => p._id === id);

        if (product) {
          setForm({
            ...product,
            sizes: product.sizes || {},
            faqs:
              product.faqs?.length > 0
                ? product.faqs
                : [{ question: "", answer: "" }],
          });

          setPreview(product.images || []);
        }
      });
  }, [id]);

  /* ================= INPUT HANDLER ================= */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSizeChange = (e) => {
    setForm({
      ...form,
      sizes: { ...form.sizes, [e.target.name]: e.target.value },
    });
  };

  /* ================= FAQ ================= */
  const addFAQ = () => {
    setForm({
      ...form,
      faqs: [...form.faqs, { question: "", answer: "" }],
    });
  };

  const removeFAQ = (index) => {
    const updated = form.faqs.filter((_, i) => i !== index);
    setForm({ ...form, faqs: updated });
  };

  const handleFAQChange = (index, field, value) => {
    const updated = [...form.faqs];
    updated[index][field] = value;
    setForm({ ...form, faqs: updated });
  };

  /* ================= IMAGE ================= */
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);

    const previewUrls = files.map((file) =>
      URL.createObjectURL(file)
    );
    setPreview(previewUrls);
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      Object.keys(form).forEach((key) => {
        if (key === "sizes" || key === "faqs") {
          formData.append(key, JSON.stringify(form[key]));
        } else {
          formData.append(key, form[key]);
        }
      });

      images.forEach((img) => {
        formData.append("images", img);
      });

      const res = await fetch(
        `http://localhost:5000/api/products/${id}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      const data = await res.json();

      if (data.success) {
        alert("Product updated successfully ✅");
        navigate("/sub/list");
      } else {
        alert("Update failed ❌");
      }
    } catch (err) {
      console.error(err);
      alert("Error updating product");
    }
  };

  return (
    <div className="editProduct-container">
      <h2>Edit Product</h2>

      <form onSubmit={handleSubmit} className="editProduct-form">

        {/* ===== BASIC INFO ===== */}
        <div className="form-group">
          <label>Product Title</label>
          <input name="title" value={form.title} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Product Use</label>
          <input name="use" value={form.use} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Rating</label>
          <input name="rating" value={form.rating} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Stock</label>
          <input name="stock" value={form.stock} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Price (₹)</label>
          <input name="price" value={form.price} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Discount (%)</label>
          <input name="discount" value={form.discount} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Shipping Type</label>
          <input name="shipping" value={form.shipping} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Category</label>
          <input name="categoryType" value={form.categoryType} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Helpline Number</label>
          <input name="helpline" value={form.helpline} onChange={handleChange} />
        </div>

        {/* ===== SIZES ===== */}
        <h4>Sizes</h4>

        <div className="form-group">
          <label>Height</label>
          <input name="height" value={form.sizes.height || ""} onChange={handleSizeChange} />
        </div>

        <div className="form-group">
          <label>Width</label>
          <input name="width" value={form.sizes.width || ""} onChange={handleSizeChange} />
        </div>

        <div className="form-group">
          <label>Weight (kg)</label>
          <input name="weight" value={form.sizes.weight || ""} onChange={handleSizeChange} />
        </div>

        {/* ===== DETAILS ===== */}
        <div className="form-group full">
          <label>Product Details</label>
          <textarea name="details" value={form.details} onChange={handleChange} />
        </div>

        {/* ===== FAQ ===== */}
        <h4>FAQs</h4>

        {form.faqs.map((faq, index) => (
          <div key={index} className="faq-box">
            <label>Question</label>
            <input
              value={faq.question}
              onChange={(e) =>
                handleFAQChange(index, "question", e.target.value)
              }
            />

            <label>Answer</label>
            <textarea
              value={faq.answer}
              onChange={(e) =>
                handleFAQChange(index, "answer", e.target.value)
              }
            />

            <button type="button" onClick={() => removeFAQ(index)}>
              Remove
            </button>
          </div>
        ))}

        <button type="button" onClick={addFAQ}>
          + Add FAQ
        </button>

        {/* ===== IMAGE ===== */}
        <h4>Images</h4>

        <div className="form-group full">
          <label>Upload Images</label>
          <input type="file" multiple onChange={handleImageChange} />
        </div>

        <div className="preview">
          {preview.map((img, i) => (
            <div key={i} className="img-box">
              <img
                src={
                  img.startsWith("blob")
                    ? img
                    : `http://localhost:5000${img}`
                }
                alt=""
              />
            </div>
          ))}
        </div>

        {/* ===== SUBMIT ===== */}
        <button type="submit" className="submit-btn">
          Update Product
        </button>

      </form>
    </div>
  );
};

export default EditProductPage;