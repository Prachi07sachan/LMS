const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Import Routes
const userRoutes = require("./routes/userRoutes");
const courseRoutes = require("./routes/courseRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const couponRoutes = require("./routes/couponRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/coupons", couponRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Learning Management System Backend Running...");
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});