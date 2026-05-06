const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");

/* Load env */
dotenv.config();

/* DB */
const connectDB = require("./config/db");

/* Routes */
const teamRoutes = require("./routes/teamMember.routes");
const productRoutes = require("./routes/product.routes");
const contactRoutes = require("./routes/contact.routes");
const categoryRoutes = require("./routes/category.routes");
const blogRoutes = require("./routes/blog.routes");
const orderRoutes = require("./routes/order.routes");
const testimonialRoutes=require("./routes/testimonial.routes");
const poojaRoutes = require("./routes/pooja.routes");

const app = express();

/* DB Connect */
connectDB();

/* CORS */
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

/* Body parser */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Static Images */
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

/* Routes */
app.use("/api/contact", contactRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/products", productRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/testimonial", testimonialRoutes);
app.use("/api/pooja", poojaRoutes);

/* Test */
app.get("/", (req, res) => {
  res.send("Server Running 🚀");
});

/* Error Handler */
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: err.message || "Something went wrong",
  });
});

/* Start */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});