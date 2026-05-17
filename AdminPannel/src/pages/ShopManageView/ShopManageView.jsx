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

    sku: "",

    expressDelivery: "",
    indiaDelivery: "",

    aboutProduct: "",
    productMaterial: "",

    quantityDiscounts: [
      {
        quantity: "",
        discount: "",
      },
    ],

    sizes: {
      height: "",
      width: "",
      weight: "",
      diameter: "",
      inches: "",
    },

    weightDetails: {
      thali: "",
      diya: "",
      incenseHolder: "",
      bell: "",
      bowl: "",
      kalash: "",
    },

    faqs: [{ question: "", answer: "" }],

    images: [],
  });

  /* ================= FETCH PRODUCT ================= */

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

          sku: data.sku || "",

          expressDelivery:
            data.expressDelivery || "",

          indiaDelivery:
            data.indiaDelivery || "",

          aboutProduct:
            data.aboutProduct || "",

          productMaterial:
            data.productMaterial || "",

          quantityDiscounts:
            data.quantityDiscounts?.length > 0
              ? data.quantityDiscounts
              : [
                  {
                    quantity: "",
                    discount: "",
                  },
                ],

          sizes: data.sizes || {
            height: "",
            width: "",
            weight: "",
            diameter: "",
            inches: "",
          },

          weightDetails:
            data.weightDetails || {
              thali: "",
              diya: "",
              incenseHolder: "",
              bell: "",
              bowl: "",
              kalash: "",
            },

          faqs:
            data.faqs?.length > 0
              ? data.faqs
              : [{ question: "", answer: "" }],

          images: data.images || [],
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

    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });

  };

  /* ================= SIZE ================= */

  const handleSizeChange = (
    field,
    value
  ) => {

    setProduct({
      ...product,

      sizes: {
        ...product.sizes,
        [field]: value,
      },
    });

  };

  /* ================= WEIGHT DETAILS ================= */

  const handleWeightChange = (
    field,
    value
  ) => {

    setProduct({
      ...product,

      weightDetails: {
        ...product.weightDetails,
        [field]: value,
      },
    });

  };

  /* ================= BULK DISCOUNT ================= */

  const addBulkDiscount = () => {

    setProduct({
      ...product,

      quantityDiscounts: [
        ...product.quantityDiscounts,

        {
          quantity: "",
          discount: "",
        },
      ],
    });

  };

  const handleBulkDiscountChange = (
    i,
    field,
    value
  ) => {

    const updated = [
      ...product.quantityDiscounts,
    ];

    updated[i][field] = value;

    setProduct({
      ...product,
      quantityDiscounts: updated,
    });

  };

  const removeBulkDiscount = (index) => {

    const updated =
      product.quantityDiscounts.filter(
        (_, i) => i !== index
      );

    setProduct({
      ...product,
      quantityDiscounts: updated,
    });

  };

  /* ================= IMAGE ================= */

  const handleImageUpload = (e) => {

    const file = e.target.files[0];

    if (!file || product.images.length >= 5)
      return;

    setProduct((prev) => ({
      ...prev,
      images: [...prev.images, file],
    }));

  };

  const removeImage = (index) => {

    const updated = product.images.filter(
      (_, i) => i !== index
    );

    setProduct({
      ...product,
      images: updated,
    });

  };

  /* ================= FAQ ================= */

  const addFAQ = () => {

    setProduct({
      ...product,

      faqs: [
        ...product.faqs,
        {
          question: "",
          answer: "",
        },
      ],
    });

  };

  const handleFAQChange = (
    i,
    field,
    value
  ) => {

    const updated = [...product.faqs];

    updated[i][field] = value;

    setProduct({
      ...product,
      faqs: updated,
    });

  };

  const removeFAQ = (index) => {

    const updated = product.faqs.filter(
      (_, i) => i !== index
    );

    setProduct({
      ...product,
      faqs: updated,
    });

  };

  /* ================= SUBMIT ================= */

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const formData = new FormData();

      Object.keys(product).forEach((key) => {

        if (
          key !== "images" &&
          key !== "faqs" &&
          key !== "sizes" &&
          key !== "weightDetails" &&
          key !== "quantityDiscounts"
        ) {

          formData.append(
            key,
            product[key]
          );
        }
      });

      formData.append(
        "sizes",
        JSON.stringify(product.sizes)
      );

      formData.append(
        "weightDetails",
        JSON.stringify(product.weightDetails)
      );

      formData.append(
        "quantityDiscounts",
        JSON.stringify(
          product.quantityDiscounts
        )
      );

      formData.append(
        "faqs",
        JSON.stringify(product.faqs)
      );

      product.images.forEach((img) => {
        formData.append("images", img);
      });

      let res;

      /* ================= UPDATE ================= */

      if (isEditMode) {

        res = await API.put(
          `/products/${id}`,
          formData,
          {
            headers: {
              "Content-Type":
                "multipart/form-data",
            },
          }
        );

        alert(
          "✅ Product Updated Successfully"
        );

      }

      /* ================= CREATE ================= */

      else {

        res = await API.post(
          "/products",
          formData,
          {
            headers: {
              "Content-Type":
                "multipart/form-data",
            },
          }
        );

        alert(
          "✅ Product Added Successfully"
        );

      }

      console.log(res.data);

      navigate("/sub/list");

    } catch (err) {

      console.error(err);
      alert("Error saving product ❌");

    }
  };

  return (
    <div className="shopManagement-container">

      <form
        className="shopManagement-card"
        onSubmit={handleSubmit}
      >

        <h2 className="shopManagement-title">
          {isEditMode
            ? "Update Product"
            : "Post Product"}
        </h2>

        <div className="shopManagement-grid">

          {/* TITLE */}

          <div className="shopManagement-field full">

            <label>
              Product Title
            </label>

            <input
              name="title"
              value={product.title}
              onChange={handleChange}
            />

          </div>

          {/* USE */}

          <div className="shopManagement-field">

            <label>
              Product Use
            </label>

            <input
              name="use"
              value={product.use}
              onChange={handleChange}
            />

          </div>

          {/* CATEGORY */}

          <div className="shopManagement-field">

            <label>
              Category
            </label>

            <select
              name="categoryType"
              value={product.categoryType}
              onChange={handleChange}
            >
              <option>
                Normal
              </option>

              <option>
                Best Seller
              </option>

            </select>

          </div>

          {/* RATING */}

          <div className="shopManagement-field">

            <label>
              Rating
            </label>

            <input
              name="rating"
              value={product.rating}
              onChange={handleChange}
            />

          </div>

          {/* STOCK */}

          <div className="shopManagement-field">

            <label>
              Stock
            </label>

            <input
              name="stock"
              value={product.stock}
              onChange={handleChange}
            />

          </div>

          {/* SHIPPING */}

          <div className="shopManagement-field">

            <label>
              Shipping
            </label>

            <input
              name="shipping"
              value={product.shipping}
              onChange={handleChange}
            />

          </div>

          {/* HELPLINE */}

          <div className="shopManagement-field">

            <label>
              Helpline
            </label>

            <input
              name="helpline"
              value={product.helpline}
              onChange={handleChange}
            />

          </div>

          {/* PRICE */}

          <div className="shopManagement-field">

            <label>
              Price
            </label>

            <input
              name="price"
              value={product.price}
              onChange={handleChange}
            />

          </div>

          {/* DISCOUNT */}

          <div className="shopManagement-field">

            <label>
              Discount %
            </label>

            <input
              name="discount"
              value={product.discount}
              onChange={handleChange}
            />

          </div>

          {/* SKU */}

          <div className="shopManagement-field">

            <label>
              SKU
            </label>

            <input
              name="sku"
              value={product.sku}
              onChange={handleChange}
            />

          </div>

          {/* EXPRESS DELIVERY */}

          <div className="shopManagement-field">

            <label>
              Express Delivery
            </label>

            <input
              name="expressDelivery"
              value={product.expressDelivery}
              onChange={handleChange}
              placeholder="May 13 - May 14"
            />

          </div>

          {/* INDIA DELIVERY */}

          <div className="shopManagement-field">

            <label>
              India Delivery
            </label>

            <input
              name="indiaDelivery"
              value={product.indiaDelivery}
              onChange={handleChange}
              placeholder="May 15 - May 18"
            />

          </div>

          {/* SIZE */}

          <div className="shopManagement-field full">

            <label>
              Product Size Details
            </label>

            <div className="shopManagement-sizeGrid">

              <input
                placeholder="Height"
                value={product.sizes.height}
                onChange={(e) =>
                  handleSizeChange(
                    "height",
                    e.target.value
                  )
                }
              />

              <input
                placeholder="Width"
                value={product.sizes.width}
                onChange={(e) =>
                  handleSizeChange(
                    "width",
                    e.target.value
                  )
                }
              />

              <input
                placeholder="Weight"
                value={product.sizes.weight}
                onChange={(e) =>
                  handleSizeChange(
                    "weight",
                    e.target.value
                  )
                }
              />

              <input
                placeholder="Diameter"
                value={
                  product.sizes.diameter
                }
                onChange={(e) =>
                  handleSizeChange(
                    "diameter",
                    e.target.value
                  )
                }
              />

              <input
                placeholder="Inches"
                value={product.sizes.inches}
                onChange={(e) =>
                  handleSizeChange(
                    "inches",
                    e.target.value
                  )
                }
              />

            </div>

          </div>

          {/* WEIGHT DETAILS */}

          <div className="shopManagement-field full">

            <label>
              Weight Details
            </label>

            <div className="shopManagement-sizeGrid">

              <input
                placeholder="Thali Weight"
                value={
                  product.weightDetails.thali
                }
                onChange={(e) =>
                  handleWeightChange(
                    "thali",
                    e.target.value
                  )
                }
              />

              <input
                placeholder="Diya Weight"
                value={
                  product.weightDetails.diya
                }
                onChange={(e) =>
                  handleWeightChange(
                    "diya",
                    e.target.value
                  )
                }
              />

              <input
                placeholder="Incense Holder"
                value={
                  product.weightDetails
                    .incenseHolder
                }
                onChange={(e) =>
                  handleWeightChange(
                    "incenseHolder",
                    e.target.value
                  )
                }
              />

              <input
                placeholder="Bell Weight"
                value={
                  product.weightDetails.bell
                }
                onChange={(e) =>
                  handleWeightChange(
                    "bell",
                    e.target.value
                  )
                }
              />

              <input
                placeholder="Bowl Weight"
                value={
                  product.weightDetails.bowl
                }
                onChange={(e) =>
                  handleWeightChange(
                    "bowl",
                    e.target.value
                  )
                }
              />

              <input
                placeholder="Kalash Weight"
                value={
                  product.weightDetails.kalash
                }
                onChange={(e) =>
                  handleWeightChange(
                    "kalash",
                    e.target.value
                  )
                }
              />

            </div>

          </div>

          {/* ABOUT PRODUCT */}

          <div className="shopManagement-field full">

            <label>
              About Product
            </label>

            <Editor
              apiKey="jeq7g2k84sqpi9364o8x9ptqf09aoesaq8jxmp49dl4sh57z"
              value={
                product.aboutProduct
              }
              init={{ height: 250 }}
              onEditorChange={(content) =>
                setProduct({
                  ...product,
                  aboutProduct: content,
                })
              }
            />

          </div>

          {/* MATERIAL */}

          <div className="shopManagement-field full">

            <label>
              Product Material
            </label>

            <textarea
              rows="5"
              name="productMaterial"
              value={
                product.productMaterial
              }
              onChange={handleChange}
            />

          </div>

          {/* IMAGES */}

          <div className="shopManagement-field full">

            <label>
              Upload Images
            </label>

            <div className="shopManagement-uploadGrid">

              {product.images.map(
                (file, i) => (

                  <div
                    key={i}
                    className="shopManagement-uploadItem"
                  >

                    <img
                      src={
                        typeof file ===
                        "string"
                          ? `http://localhost:5000${file}`
                          : URL.createObjectURL(
                              file
                            )
                      }
                      alt=""
                    />

                    <button
                      type="button"
                      onClick={() =>
                        removeImage(i)
                      }
                    >
                      ✕
                    </button>

                  </div>
                )
              )}

              {product.images.length <
                5 && (

                <label className="shopManagement-uploadBox">

                  +

                  <input
                    type="file"
                    onChange={
                      handleImageUpload
                    }
                  />

                </label>
              )}

            </div>

          </div>

        </div>

        {/* BULK DISCOUNT */}

        <div className="shopManagement-faqBlock">

          <h3>
            Bulk Discounts
          </h3>

          {product.quantityDiscounts.map(
            (item, i) => (

              <div
                key={i}
                className="shopManagement-faqRow"
              >

                <input
                  placeholder="Minimum Quantity"
                  value={item.quantity}
                  onChange={(e) =>
                    handleBulkDiscountChange(
                      i,
                      "quantity",
                      e.target.value
                    )
                  }
                />

                <input
                  placeholder="Discount %"
                  value={item.discount}
                  onChange={(e) =>
                    handleBulkDiscountChange(
                      i,
                      "discount",
                      e.target.value
                    )
                  }
                />

                <button
                  type="button"
                  onClick={() =>
                    removeBulkDiscount(i)
                  }
                >
                  Remove
                </button>

              </div>
            )
          )}

          <button
            type="button"
            className="shopManagement-addBtn"
            onClick={addBulkDiscount}
          >
            Add Discount
          </button>

        </div>

        {/* FAQ */}

        <div className="shopManagement-faqBlock">

          <h3>
            FAQ
          </h3>

          {product.faqs.map(
            (faq, i) => (

              <div
                key={i}
                className="shopManagement-faqRow"
              >

                <input
                  placeholder="Question"
                  value={faq.question}
                  onChange={(e) =>
                    handleFAQChange(
                      i,
                      "question",
                      e.target.value
                    )
                  }
                />

                <textarea
                  placeholder="Answer"
                  value={faq.answer}
                  onChange={(e) =>
                    handleFAQChange(
                      i,
                      "answer",
                      e.target.value
                    )
                  }
                />

                <button
                  type="button"
                  onClick={() =>
                    removeFAQ(i)
                  }
                >
                  Remove
                </button>

              </div>
            )
          )}

          <button
            type="button"
            className="shopManagement-addBtn"
            onClick={addFAQ}
          >
            Add FAQ
          </button>

        </div>

        {/* SUBMIT */}

        <button className="shopManagement-submitBtn">

          {isEditMode
            ? "Update Product"
            : "Submit Product"}

        </button>

      </form>

      {/* PREVIEW */}

      <div className="shopManagement-card shopManagement-previewCard">

        <h2 className="shopManagement-title">
          Live Preview
        </h2>

        <h2>
          {product.title ||
            "Product Title"}
        </h2>

        <div className="shopManagement-previewMeta">

          ⭐ {product.rating || 0}

          {" | "}

          Stock: {product.stock || 0}

          {" | "}

          {product.categoryType}

        </div>

        <h3 className="shopManagement-previewPrice">

          ₹ {product.price || 0}

        </h3>

        <div className="shopManagement-previewImages">

          {product.images.map(
            (file, i) => (

              <img
                key={i}
                src={
                  typeof file ===
                  "string"
                    ? `http://localhost:5000${file}`
                    : URL.createObjectURL(
                        file
                      )
                }
                alt=""
              />
            )
          )}

        </div>

      </div>

    </div>
  );
};

export default ShopManageView;