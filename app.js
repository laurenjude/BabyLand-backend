const express = require("express");

const cors = require("cors");

const morgan = require("morgan");

const ProductRoutes = require("./routes/productRoutes");

const authRoutes = require("./routes/authRoutes");

const newsLetterRoutes = require("./routes/newsLetterRouter");

const app = express();

app.use(morgan("dev"));

app.use(cors());

app.use(express.json());

app.use("/api/products", ProductRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/sub", newsLetterRoutes);

app.use((err, req, res, next) => {
  console.error(err, stack);

  res
    .status(err.status || 500)
    .json({ message: err.message || "internal server error" });
});

module.exports = app;
