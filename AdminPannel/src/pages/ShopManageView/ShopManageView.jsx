import React, { useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "./ShopManageView.css";

import API from "../../api/axios";
import { useParams, useNavigate } from "react-router-dom";

const ShopManageView = () => {

  /* ================= EDIT MODE ================= */
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);

  const [product, setProduct] = useState({
    title: "",
    use: "",
    rating: "",
    stock: "",
    shipping: "",
    categoryType: "Normal",
    helpline: "",
    price: "",
    discount: "",
    sizes: { height: "", width: "", weight: "" },
    details: "",
    faqs: [{ question: "", answer: "" }],
    images: [],
  });

  /* ================= FETCH SINGLE PRODUCT ================= */
  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        if (!id) return;

        const res = await API.get(`/products/${id}`);

        const data = res.data.data;

        if (!data) {
          alert("Product not found");
          return;
        }

        setProduct({
          title: data.title || "",
          use: data.use || "",
          rating: data.rating || "",
          stock: data.stock || "",
          shipping: data.shipping || "",
          categoryType: data.categoryType || "Normal",
          helpline: data.helpline || "",
          price: data.price || "",
          discount: data.discount || "",
          sizes: data.sizes || {
            height: "",
            width: "",
            weight: "",
          },
          details: data.details || "",
          faqs:
            data.faqs?.length > 0
              ? data.faqs
              : [{ question: "", answer: "" }],
          images: [],
        });
      } catch (error) {
        console.error(error);
        alert("Failed to fetch product");
      }
    };

    fetchSingleProduct();
  }, [id]);

  /* ================= INPUT ================= */
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSizeChange = (field, value) => {
    setProduct({
      ...product,
      sizes: { ...product.sizes, [field]: value },
    });
  };

  /* ================= IMAGE ================= */
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file || product.images.length >= 5) return;

    setProduct((prev) => ({
      ...prev,
      images: [...prev.images, file],
    }));
  };

  const removeImage = (index) => {
    const updated = product.images.filter((_, i) => i !== index);
    setProduct({ ...product, images: updated });
  };

  /* ================= FAQ ================= */
  const addFAQ = () => {
    setProduct({
      ...product,
      faqs: [...product.faqs, { question: "", answer: "" }],
    });
  };

  const handleFAQChange = (i, field, value) => {
    const updated = [...product.faqs];
    updated[i][field] = value;
    setProduct({ ...product, faqs: updated });
  };

  const removeFAQ = (index) => {
    const updated = product.faqs.filter((_, i) => i !== index);
    setProduct({ ...product, faqs: updated });
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      Object.keys(product).forEach((key) => {
        if (key !== "images" && key !== "faqs" && key !== "sizes") {
          formData.append(key, product[key]);
        }
      });

      formData.append("sizes", JSON.stringify(product.sizes));
      formData.append("faqs", JSON.stringify(product.faqs));

      product.images.forEach((img) => {
        formData.append("images", img);
      });

      let res;

      /* ================= UPDATE ================= */
      if (isEditMode) {
        res = await API.put(`/products/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        alert("✅ Product Updated Successfully");
      }

      /* ================= CREATE ================= */
      else {
        res = await API.post("/products", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        alert("✅ Product Added Successfully");
      }

      console.log(res.data);

      navigate("/shop-list");

    } catch (err) {
      console.error(err);
      alert("❌ Error saving product");
    }
  };

  /* ================= CLEANUP ================= */
  useEffect(() => {
    return () => {
      product.images.forEach((file) => URL.revokeObjectURL(file));
    };
  }, [product.images]);

  const finalPrice =
    product.price && product.discount
      ? product.price - (product.price * product.discount) / 100
      : product.price;

  return (
    <div className="shopManagement-container">

      {/* ================= FORM ================= */}
      <form className="shopManagement-card" onSubmit={handleSubmit}>
        <h2 className="shopManagement-title">
          {isEditMode ? "Update Product" : "Post Product"}
        </h2>

        <div className="shopManagement-grid">

          <div className="shopManagement-field full">
            <label>Product Title</label>
            <input
              name="title"
              value={product.title}
              onChange={handleChange}
            />
          </div>

          <div className="shopManagement-field">
            <label>Use</label>
            <input
              name="use"
              value={product.use}
              onChange={handleChange}
            />
          </div>

          <div className="shopManagement-field">
            <label>Category</label>

            <select
              name="categoryType"
              value={product.categoryType}
              onChange={handleChange}
            >
              <option>Normal</option>
              <option>Best Seller</option>
            </select>
          </div>

          <div className="shopManagement-field">
            <label>Rating</label>
            <input
              name="rating"
              value={product.rating}
              onChange={handleChange}
            />
          </div>

          <div className="shopManagement-field">
            <label>Stock</label>
            <input
              name="stock"
              value={product.stock}
              onChange={handleChange}
            />
          </div>

          <div className="shopManagement-field">
            <label>Shipping</label>
            <input
              name="shipping"
              value={product.shipping}
              onChange={handleChange}
            />
          </div>

          <div className="shopManagement-field">
            <label>Helpline</label>
            <input
              name="helpline"
              value={product.helpline}
              onChange={handleChange}
            />
          </div>

          <div className="shopManagement-field">
            <label>Price</label>
            <input
              name="price"
              value={product.price}
              onChange={handleChange}
            />
          </div>

          <div className="shopManagement-field">
            <label>Discount</label>
            <input
              name="discount"
              value={product.discount}
              onChange={handleChange}
            />
          </div>

          {/* SIZE */}
          <div className="shopManagement-field full">
            <label>Size</label>

            <div className="shopManagement-sizeGrid">
              <input
                placeholder="Height"
                value={product.sizes.height}
                onChange={(e) =>
                  handleSizeChange("height", e.target.value)
                }
              />

              <input
                placeholder="Width"
                value={product.sizes.width}
                onChange={(e) =>
                  handleSizeChange("width", e.target.value)
                }
              />

              <input
                placeholder="Weight"
                value={product.sizes.weight}
                onChange={(e) =>
                  handleSizeChange("weight", e.target.value)
                }
              />
            </div>
          </div>

          {/* EDITOR */}
          <div className="shopManagement-field full">
            <label>Details</label>

            <Editor
              apiKey={"jeq7g2k84sqpi9364o8x9ptqf09aoesaq8jxmp49dl4sh57z"}
              value={product.details}
              init={{ height: 250 }}
              onEditorChange={(content) =>
                setProduct({
                  ...product,
                  details: content.replace(/<\/?p>/g, ""),
                })
              }
            />
          </div>

          {/* IMAGE */}
          <div className="shopManagement-field full">
            <label>Upload Images</label>

            <div className="shopManagement-uploadGrid">

              {product.images.map((file, i) => (
                <div key={i} className="shopManagement-uploadItem">
                  <img
                    src={URL.createObjectURL(file)}
                    alt=""
                  />

                  <button
                    type="button"
                    onClick={() => removeImage(i)}
                  >
                    ✕
                  </button>
                </div>
              ))}

              {product.images.length < 5 && (
                <label className="shopManagement-uploadBox">
                  +

                  <input
                    type="file"
                    onChange={handleImageUpload}
                  />
                </label>
              )}
            </div>
          </div>

        </div>

        {/* ================= FAQ ================= */}
        <div className="shopManagement-faqBlock">

          <h3>FAQ</h3>

          {product.faqs.map((faq, i) => (
            <div key={i} className="shopManagement-faqRow">

              <input
                placeholder="Question"
                value={faq.question}
                onChange={(e) =>
                  handleFAQChange(i, "question", e.target.value)
                }
              />

              <textarea
                placeholder="Answer"
                value={faq.answer}
                onChange={(e) =>
                  handleFAQChange(i, "answer", e.target.value)
                }
              />

              <button
                type="button"
                onClick={() => removeFAQ(i)}
              >
                Remove
              </button>

            </div>
          ))}

          <button
            type="button"
            className="shopManagement-addBtn"
            onClick={addFAQ}
          >
            + Add FAQ
          </button>

        </div>

        <button className="shopManagement-submitBtn">
          {isEditMode ? "Update Product" : "Submit Product"}
        </button>

      </form>

      {/* ================= PREVIEW ================= */}
      <div className="shopManagement-card shopManagement-previewCard">

        <h2 className="shopManagement-title">
          Live Preview
        </h2>

        <h2>{product.title || "Product Title"}</h2>

        <div className="shopManagement-previewMeta">
          ⭐ {product.rating || 0}
          {" | "}
          Stock: {product.stock || 0}
          {" | "}
          {product.categoryType}
        </div>

        <div className="shopManagement-previewImages">
          {product.images.map((file, i) => (
            <img
              key={i}
              src={URL.createObjectURL(file)}
              alt=""
            />
          ))}
        </div>

        <div className="shopManagement-previewSection">
          <strong>Size:</strong>

          <p>
            H: {product.sizes.height}
            {" | "}
            W: {product.sizes.width}
            {" | "}
            Weight: {product.sizes.weight}
          </p>
        </div>

        <div className="shopManagement-previewSection">
          <strong>Price:</strong>
          {" "}₹{product.price || 0}

          {product.discount && (
            <p>
              Discount: {product.discount}% <br />
              Final Price: ₹{finalPrice || 0}
            </p>
          )}
        </div>

        <div
          className="shopManagement-previewSection"
          dangerouslySetInnerHTML={{
            __html: product.details,
          }}
        />

        <div className="shopManagement-previewSection">
          <strong>FAQ:</strong>

          {product.faqs.map((f, i) => (
            <div key={i}>
              <b>{f.question}</b>
              <p>{f.answer}</p>
            </div>
          ))}
        </div>

        <p>
          <strong>Helpline:</strong>
          {" "}
          {product.helpline}
        </p>

      </div>
    </div>
  );
};

export default ShopManageView;