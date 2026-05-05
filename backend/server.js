const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");

/* Load env first */
dotenv.config();

/* Import DB */
const connectDB = require("./config/db");

/* Import Routes */
const teamRoutes = require("./routes/teamMember.routes");
const productRoutes = require("./routes/product.routes");
// const { upload, convertToWebp } = require("./middlewares/upload.js");
const contactRoutes = require("./routes/contact.routes");
const categoryRoutes = require("./routes/category.routes");
const blogRoutes = require("./routes/blog.routes");
const orderRoutes = require("./routes/order.routes");

const app = express();

/* Connect Database */
connectDB();

/* Middleware */
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Static folder for images */
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

/* ================= ROUTES ================= */

app.use("/api/contact", contactRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/team", teamRoutes); // ✅ ADD
app.use("/api/products", productRoutes); // ✅ ADD
/* ================= TEST ROUTE ================= */
app.use("/api/blog", blogRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
  res.send("Server Running 🚀");
});

/* ================= ERROR HANDLER ================= */

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong",
  });
});

/* ================= PORT ================= */

const PORT = process.env.PORT || 5000;

/* Start Server */
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});