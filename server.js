const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const pairRoutes = require("./routes/pairRoutes");

const app = express();
const PORT = process.env.PORT || 5500;

app.use(cors());
app.use(bodyParser.json());

// API yo‘llarini ishlatish
app.use("/api/pairs", pairRoutes);

// Serverni ishga tushirish
app.listen(PORT, () => {
  console.log(`🚀 Server http://localhost:${PORT} da ishlamoqda`);
});
