const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");

/* Load env first */
dotenv.config();

/* Import DB */
const connectDB = require("./config/db");
// const { upload, convertToWebp } = require("./middlewares/upload.js");
const contactRoutes = require("./routes/contact.routes");
const categoryRoutes = require("./routes/category.routes");
const blogRoutes = require("./routes/blog.routes");
const orderRoutes = require("./routes/order.routes");
const poojaRoutes = require("./routes/pooja.routes");

const app = express();

/* Connect Database */
connectDB();

/* Middleware */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Static folder for images */
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

/* Routes */

app.use("/api/contact", contactRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/pooja", poojaRoutes);


/* Test Route */
app.get("/", (req, res) => {
  res.send("Server Running 🚀");
});


/* PORT */
const PORT = process.env.PORT || 5000;

/* Start Server */
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});