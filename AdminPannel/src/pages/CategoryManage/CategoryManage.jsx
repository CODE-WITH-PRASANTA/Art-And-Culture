import React, { useEffect, useState } from "react";
import "./CategoryManage.css";
import API from "../../api/axios";

const CategoryManage = () => {

  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [editId, setEditId] = useState(null);

  const fetchCategories = async () => {
    try {
      const res = await API.get("/category");
      setCategories(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!category.trim()) return;

    try {
      if (editId) {
        await API.put(`/category/${editId}`, { name: category });
      } else {
        await API.post("/category", { name: category });
      }

      setCategory("");
      setEditId(null);
      fetchCategories();
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (cat) => {
    setCategory(cat.name);
    setEditId(cat._id);
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/category/${id}`);
      fetchCategories();
    } catch (err) {
      console.log(err);
    }
  };

  return (

    <div className="CategoryManage CategoryManage__wrapper">

      <div className="CategoryManage__container">

        {/* LEFT FORM */}
        <div className="CategoryManage__formCard">

          <h2 className="CategoryManage__title">
            Manage Category
          </h2>

          <form onSubmit={handleSubmit} className="CategoryManage__form">

            <div className="CategoryManage__formGroup">

              <label>Category Name</label>

              <input
                type="text"
                placeholder="Enter category name"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />

            </div>

            <button type="submit" className="CategoryManage__btn">

              {editId ? "Update Category" : "Add Category"}

            </button>

          </form>

        </div>

        {/* RIGHT TABLE */}
        <div className="CategoryManage__tableCard">

          <div className="CategoryManage__tableTop">

            <h2 className="CategoryManage__title">
              Category List
            </h2>

          </div>

          <div className="CategoryManage__tableWrapper">

            <table className="CategoryManage__table">

              <thead>
                <tr>
                  <th>SL No</th>
                  <th>Category Name</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {categories.length === 0 ? (

                  <tr>
                    <td colSpan="3" className="CategoryManage__empty">
                      🚫 No categories added
                    </td>
                  </tr>

                ) : (

                  categories.map((cat, index) => (

                    <tr key={cat._id}>

                      <td>{index + 1}</td>

                      <td className="CategoryManage__nameCell">
                        {cat.name}
                      </td>

                      <td>

                        <div className="CategoryManage__action">

                          <button
                            className="CategoryManage__editBtn"
                            onClick={() => handleEdit(cat)}
                          >
                            Edit
                          </button>

                          <button
                            className="CategoryManage__deleteBtn"
                            onClick={() => handleDelete(cat._id)}
                          >
                            Delete
                          </button>

                        </div>

                      </td>

                    </tr>

                  ))

                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>

  );

};

export default CategoryManage;