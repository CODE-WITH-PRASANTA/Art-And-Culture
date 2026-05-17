import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Plus, X } from "lucide-react";

import { Pencil, Trash2, Eye, IndianRupee, Package, Star } from "lucide-react";

import "./Pooja.css";

import API, { IMG_URL } from "../../api/axios";

const Pooja = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editId, setEditId] = useState(null);
  const [showFullTitle, setShowFullTitle] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const [categories, setCategories] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
    oldPrice: "",
    stock: "",
    rating: "",
    size: "",
    weight: "",
    material: "",
    description: "",
    faqs: [
      {
        question: "",
        answer: "",
      },
    ],
    images: [],
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

  /* =====================================================
      FETCH CATEGORIES
  ===================================================== */

  const fetchCategories = async () => {
    try {
      const res = await API.get("/category");

      setCategories(Array.isArray(res.data) ? res.data : res.data.data || []);
    } catch (error) {
      console.log(error);

      setCategories([]);
    }
  };
  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  /* =====================================================
      HANDLE CHANGE
  ===================================================== */

  const handleChange = (e) => {
    const { name, value } = e.target;

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
      HANDLE MULTIPLE IMAGES
  ===================================================== */

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];

    if (!file) return;

    const updatedImages = [...(formData.images || [])];

    updatedImages[index] = file;

    setFormData((prev) => ({
      ...prev,
      images: updatedImages,
    }));
  };

  /* =====================================================
    FAQ HANDLERS
===================================================== */

  const handleFaqChange = (index, field, value) => {
    const updatedFaqs = [...formData.faqs];

    updatedFaqs[index][field] = value;

    setFormData((prev) => ({
      ...prev,
      faqs: updatedFaqs,
    }));
  };

  const addFaq = () => {
    setFormData((prev) => ({
      ...prev,
      faqs: [
        ...prev.faqs,
        {
          question: "",
          answer: "",
        },
      ],
    }));
  };

  const removeFaq = (index) => {
    const updatedFaqs = formData.faqs.filter((_, i) => i !== index);

    setFormData((prev) => ({
      ...prev,
      faqs: updatedFaqs,
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

      const plainDescription = formData.description
        .replace(/<[^>]+>/g, " ")
        .replace(/&nbsp;/g, " ")
        .trim();

      sendData.append("description", plainDescription);
      sendData.append("size", formData.size);
      sendData.append("weight", formData.weight);
      sendData.append("material", formData.material);

      sendData.append("faqs", JSON.stringify(formData.faqs));

      /* MULTIPLE IMAGES */

      formData.images.forEach((img) => {
        if (img) {
          sendData.append("images", img);
        }
      });

      /* CREATE */

      if (!editId) {
        await API.post("/pooja/create", sendData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        alert("Product Added Successfully");
      } else {
        /* UPDATE */
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
        size: "",
        weight: "",
        material: "",
        description: "",
        faqs: [
          {
            question: "",
            answer: "",
          },
        ],
        images: [],
      });

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
      size: item.size || "",
      weight: item.weight || "",
      material: item.material || "",
      description: item.description,
      faqs: item.faqs || [
        {
          question: "",
          answer: "",
        },
      ],
      images: [],
    });

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

  /* =====================================================
      TITLE PREVIEW
  ===================================================== */

  const shortTitle =
    formData.title.length > 65 && !showFullTitle
      ? formData.title.slice(0, 65) + "..."
      : formData.title;

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
            {/* =====================================================
                MULTIPLE IMAGE
            ===================================================== */}

            <div className="Pooja-field">
              <label>Upload Product Images</label>

              <div className="Pooja-multiUpload">
                {[...Array(5)].map((_, index) => (
                  <label key={index} className="Pooja-uploadCard">
                    <input
                      type="file"
                      accept="image/*"
                      hidden
                      onChange={(e) => handleImageChange(e, index)}
                    />

                    {formData.images?.[index] ? (
                      <img
                        src={URL.createObjectURL(formData.images?.[index])}
                        alt="preview"
                        className="Pooja-uploadPreview"
                      />
                    ) : (
                      <div className="Pooja-uploadPlaceholder">
                        <span>+</span>
                      </div>
                    )}
                  </label>
                ))}
              </div>
            </div>

            {/* =====================================================
                TITLE
            ===================================================== */}

            {/* PRODUCT TITLE */}

            <div className="Pooja-field">
              <label>Product Title</label>

              <input
                type="text"
                name="title"
                placeholder="Enter product title"
                value={formData.title}
                onChange={handleChange}
                maxLength={500}
                spellCheck={false}
                autoComplete="off"
                required
              />
            </div>

            {/* =====================================================
                CATEGORY + RATING
            ===================================================== */}

            <div className="Pooja-grid2">
              <div className="Pooja-field">
                <label>Category</label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="">Select Category</option>

                  {Array.isArray(categories) &&
                    categories.map((cat) => (
                      <option key={cat._id} value={cat.name}>
                        {cat.name.length > 18
                          ? cat.name.slice(0, 18) + "..."
                          : cat.name}
                      </option>
                    ))}
                </select>
              </div>

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
            </div>

            {/* =====================================================
                PRICE
            ===================================================== */}

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

            {/* =====================================================
    SIZE / WEIGHT / MATERIAL
===================================================== */}

            <div className="Pooja-grid3">
              <div className="Pooja-field">
                <label>Size</label>

                <input
                  type="text"
                  name="size"
                  placeholder="10 inch"
                  value={formData.size}
                  onChange={handleChange}
                />
              </div>

              <div className="Pooja-field">
                <label>Weight</label>

                <input
                  type="text"
                  name="weight"
                  placeholder="1.5 KG"
                  value={formData.weight}
                  onChange={handleChange}
                />
              </div>

              <div className="Pooja-field">
                <label>Product Material</label>

                <input
                  type="text"
                  name="material"
                  placeholder="Brass / Wood"
                  value={formData.material}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* =====================================================
    DESCRIPTION
===================================================== */}

            <div className="Pooja-field">
              <label>Description</label>

              <Editor
                apiKey="jeq7g2k84sqpi9364o8x9ptqf09aoesaq8jxmp49dl4sh57z"
                value={formData.description}
                onEditorChange={(content) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: content,
                  }))
                }
                init={{
                  height: 350,
                  menubar: false,

                  plugins: [
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "help",
                    "wordcount",
                  ],

                  toolbar:
                    "undo redo | blocks | " +
                    "bold italic forecolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat | help",

                  content_style:
                    "body { font-family:Inter,sans-serif; font-size:14px }",
                }}
              />
            </div>

            {/* =====================================================
    FAQ SECTION
===================================================== */}

            <div className="Pooja-faqSection">
              <div className="Pooja-faqTop">
                <h3>Product FAQs</h3>

                <button
                  type="button"
                  className="Pooja-addFaqBtn"
                  onClick={addFaq}
                >
                  <Plus size={16} />
                  Add FAQ
                </button>
              </div>

              {formData.faqs.map((faq, index) => (
                <div key={index} className="Pooja-faqCard">
                  <div className="Pooja-field">
                    <label>Question</label>

                    <input
                      type="text"
                      placeholder="Enter FAQ question"
                      value={faq.question}
                      onChange={(e) =>
                        handleFaqChange(index, "question", e.target.value)
                      }
                    />
                  </div>

                  <div className="Pooja-field">
                    <label>Answer</label>

                    <textarea
                      rows="4"
                      placeholder="Enter FAQ answer"
                      value={faq.answer}
                      onChange={(e) =>
                        handleFaqChange(index, "answer", e.target.value)
                      }
                    />
                  </div>

                  {formData.faqs.length > 1 && (
                    <button
                      type="button"
                      className="Pooja-removeFaqBtn"
                      onClick={() => removeFaq(index)}
                    >
                      <X size={16} />
                      Remove FAQ
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* =====================================================
                BUTTON
            ===================================================== */}

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
              {formData.images?.length > 0 ? (
                <>
                  {/* ACTIVE IMAGE */}

                  <img
                    src={URL.createObjectURL(formData.images[currentImage])}
                    alt="preview"
                    className="Pooja-previewImage"
                  />

                  {/* DOT PAGINATION */}

                  <div className="Pooja-imageDots">
                    {formData.images.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        className={`Pooja-imageDot ${
                          currentImage === index ? "active" : ""
                        }`}
                        onClick={() => setCurrentImage(index)}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <div className="Pooja-noPreview">Upload Product Image</div>
              )}

              <div className="Pooja-previewBadge">Premium</div>
            </div>

            <div className="Pooja-previewContent">
              <div className="Pooja-previewTitleWrap">
                <h2 className="Pooja-previewTitle">
                  {shortTitle || "Product Title Preview"}
                </h2>

                {formData.title.length > 65 && (
                  <button
                    type="button"
                    className="Pooja-readMoreBtn"
                    onClick={() => setShowFullTitle(!showFullTitle)}
                  >
                    {showFullTitle ? "Read Less" : "Read More"}
                  </button>
                )}
              </div>

              <div className="Pooja-previewRating">
                <Star size={16} />

                <span>{formData.rating || "0.0"}</span>
              </div>

              {/* DESCRIPTION */}

              <div
                className="Pooja-previewDescription"
                dangerouslySetInnerHTML={{
                  __html:
                    formData.description ||
                    "<p>Product description preview appears here...</p>",
                }}
              />

              {/* PRODUCT DETAILS */}

              <div className="Pooja-previewMeta">
                {formData.size && (
                  <div className="Pooja-previewMetaItem">
                    <strong>Size:</strong> {formData.size}
                  </div>
                )}

                {formData.weight && (
                  <div className="Pooja-previewMetaItem">
                    <strong>Weight:</strong> {formData.weight}
                  </div>
                )}

                {formData.material && (
                  <div className="Pooja-previewMetaItem">
                    <strong>Material:</strong> {formData.material}
                  </div>
                )}
              </div>

              {/* FAQ PREVIEW */}

              {formData.faqs?.length > 0 &&
                formData.faqs.some((faq) => faq.question || faq.answer) && (
                  <div className="Pooja-previewFaqs">
                    <h4>FAQs</h4>

                    {formData.faqs.map((faq, index) => (
                      <div key={index} className="Pooja-previewFaqItem">
                        {faq.question && <h5>{faq.question}</h5>}

                        {faq.answer && <p>{faq.answer}</p>}
                      </div>
                    ))}
                  </div>
                )}

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
          TABLE
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
                        src={
                          item.images?.[0]
                            ? `${IMG_URL}${item.images[0]}`
                            : "/no-image.png"
                        }
                        alt={item.title}
                        className="Pooja-tableImage"
                      />
                    </td>

                    <td>
                      <div className="Pooja-tableTitle">{item.title}</div>
                    </td>

                    <td className="Pooja-tableCategory">{item.category}</td>

                    <td className="Pooja-tablePrice">₹{item.price}</td>

                    <td className="Pooja-tableStock">{item.stock}</td>

                    <td className="Pooja-tableRating">⭐ {item.rating}</td>

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
