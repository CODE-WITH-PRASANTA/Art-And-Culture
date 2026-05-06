// FreshCollectionList.jsx

import React, { useEffect, useState } from "react";
import {
  Plus,
  Upload,
  Pencil,
  Trash2,
  Image as ImageIcon,
  Link as LinkIcon,
  FileText,
  LayoutGrid,
} from "lucide-react";

import "./FreshCollectionList.css";

import API, { IMG_URL } from "../../api/axios";

const FreshCollectionList = () => {
  const [collections, setCollections] = useState([]);

  const [loading, setLoading] = useState(false);

  const [editId, setEditId] = useState(null);

  const [previewImage, setPreviewImage] = useState("");

  const [formData, setFormData] = useState({
    image: null,
    title: "",
    desc: "",
    link: "",
  });

  /* =====================================================
      FETCH COLLECTIONS
  ===================================================== */

  const fetchCollections = async () => {
    try {
      const res = await API.get("/freshcollection");

      console.log("FETCH DATA :", res.data);

      setCollections(res.data.data || []);
    } catch (error) {
      console.log("FETCH ERROR :", error);
    }
  };

  useEffect(() => {
    fetchCollections();
  }, []);

  /* =====================================================
      HANDLE INPUT CHANGE
  ===================================================== */

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    /* ================= IMAGE ================= */

    if (name === "image") {
      const file = files[0];

      if (!file) return;

      setFormData((prev) => ({
        ...prev,
        image: file,
      }));

      setPreviewImage(URL.createObjectURL(file));
    }

    /* ================= OTHER FIELDS ================= */

    else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  /* =====================================================
      CREATE / UPDATE
  ===================================================== */

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const sendData = new FormData();

      sendData.append("title", formData.title);
      sendData.append("desc", formData.desc);
      sendData.append("link", formData.link);

      /* ================= IMAGE ================= */

      if (formData.image) {
        sendData.append("image", formData.image);
      }

      console.log("FORM DATA :", formData);

      /* =====================================================
          CREATE
      ===================================================== */

      if (!editId) {
        const res = await API.post(
          "/freshcollection/create",
          sendData
        );

        console.log("CREATE RESPONSE :", res.data);

        alert("Collection Added Successfully");
      }

      /* =====================================================
          UPDATE
      ===================================================== */

      else {
        const res = await API.put(
          `/freshcollection/update/${editId}`,
          sendData
        );

        console.log("UPDATE RESPONSE :", res.data);

        alert("Collection Updated Successfully");
      }

      /* =====================================================
          RESET
      ===================================================== */

      setFormData({
        image: null,
        title: "",
        desc: "",
        link: "",
      });

      setPreviewImage("");

      setEditId(null);

      fetchCollections();
    } catch (error) {
      console.log("SUBMIT ERROR :", error);

      console.log(
        "BACKEND ERROR :",
        error?.response?.data
      );

      alert(
        error?.response?.data?.message ||
          "Server Error"
      );
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
      image: null,
      title: item.title,
      desc: item.desc,
      link: item.link,
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
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this collection?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(
        `/freshcollection/delete/${id}`
      );

      alert("Collection Deleted Successfully");

      fetchCollections();
    } catch (error) {
      console.log("DELETE ERROR :", error);

      alert("Delete Failed");
    }
  };

  return (
    <div className="freshCollectionPage">
      <div className="freshCollectionWrapper">
        {/* =====================================================
            LEFT FORM
        ===================================================== */}

        <div className="freshCollectionFormCard">
          <div className="freshCollectionCardHeader">
            <div>
              <h2>Fresh Collection</h2>

              <p>
                Create and manage your latest collections
              </p>
            </div>

            <div className="freshCollectionHeaderIcon">
              <LayoutGrid size={22} />
            </div>
          </div>

          <form
            className="freshCollectionForm"
            onSubmit={handleSubmit}
          >
            {/* ================= IMAGE ================= */}

            <div className="freshCollectionField">
              <label>Upload Image</label>

              <div className="freshCollectionUploadBox">
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                />

                <div className="freshCollectionUploadContent">
                  <Upload size={28} />

                  <span>
                    Upload Collection Image
                  </span>
                </div>
              </div>

              {previewImage && (
                <img
                  src={previewImage}
                  alt="preview"
                  className="freshCollectionPreview"
                />
              )}
            </div>

            {/* ================= TITLE ================= */}

            <div className="freshCollectionField">
              <label>Collection Title</label>

              <div className="freshCollectionInputWrap">
                <FileText size={18} />

                <input
                  type="text"
                  name="title"
                  placeholder="Enter collection title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* ================= DESC ================= */}

            <div className="freshCollectionField">
              <label>Short Description</label>

              <textarea
                name="desc"
                placeholder="Write short description..."
                value={formData.desc}
                onChange={handleChange}
                required
              />
            </div>

            {/* ================= LINK ================= */}

            <div className="freshCollectionField">
              <label>Product Link</label>

              <div className="freshCollectionInputWrap">
                <LinkIcon size={18} />

                <input
                  type="text"
                  name="link"
                  placeholder="Paste product URL"
                  value={formData.link}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* ================= BUTTON ================= */}

            <button
              type="submit"
              className="freshCollectionSubmitBtn"
              disabled={loading}
            >
              <Plus size={18} />

              {loading
                ? "Please Wait..."
                : editId
                ? "Update Collection"
                : "Post Collection"}
            </button>
          </form>
        </div>

        {/* =====================================================
            RIGHT TABLE
        ===================================================== */}

        <div className="freshCollectionTableCard">
          <div className="freshCollectionCardHeader">
            <div>
              <h2>Collection List</h2>

              <p>
                Manage uploaded collections
              </p>
            </div>

            <div className="freshCollectionHeaderIcon">
              <ImageIcon size={22} />
            </div>
          </div>

          <div className="freshCollectionTableWrapper">
            <table className="freshCollectionTable">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Product Link</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {collections.length > 0 ? (
                  collections.map((item) => (
                    <tr key={item._id}>
                      {/* ================= IMAGE ================= */}

                      <td>
                        <img
                          src={`${IMG_URL}${item.image}`}
                          alt={item.title}
                          className="freshCollectionTableImage"
                        />
                      </td>

                      {/* ================= TITLE ================= */}

                      <td>{item.title}</td>

                      {/* ================= DESC ================= */}

                      <td className="freshCollectionDescCell">
                        {item.desc}
                      </td>

                      {/* ================= LINK ================= */}

                      <td>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="freshCollectionProductLink"
                        >
                          Visit Product
                        </a>
                      </td>

                      {/* ================= ACTION ================= */}

                      <td>
                        <div className="freshCollectionActionBtns">
                          <button
                            type="button"
                            className="freshCollectionEditBtn"
                            onClick={() =>
                              handleEdit(item)
                            }
                          >
                            <Pencil size={16} />
                          </button>

                          <button
                            type="button"
                            className="freshCollectionDeleteBtn"
                            onClick={() =>
                              handleDelete(item._id)
                            }
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="5"
                      style={{
                        textAlign: "center",
                        padding: "30px",
                      }}
                    >
                      No Collections Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreshCollectionList;