require("dotenv").config();
require("reflect-metadata");

const express = require("express");
const AppDataSource = require("./config/dbconnect");
const authRoutes = require("./routes/auth");
const rbacRoutes = require("./routes/rbac");

const app = express();
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/verify", rbacRoutes);

// DB + Server start
const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log(" Database connected");

    app.listen(PORT, () => {
      console.log(` Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB connection error:", err);
  });
