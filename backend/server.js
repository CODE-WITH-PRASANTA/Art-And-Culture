const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");

/* Load env first */
dotenv.config();

/* Import DB */
const connectDB = require("./config/db");

/* Import Routes */
const contactRoutes = require("./routes/contact.routes");
const categoryRoutes = require("./routes/category.routes");
const teamRoutes = require("./routes/teamMember.routes");

const app = express();

/* Connect Database */
connectDB();

/* Middleware */
app.use(cors({
  origin: "http://localhost:5174", // frontend URL (Vite)
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Static folder for images */
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

/* ================= ROUTES ================= */

app.use("/api/contact", contactRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/team", teamRoutes); // ✅ ADD

/* ================= TEST ROUTE ================= */

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