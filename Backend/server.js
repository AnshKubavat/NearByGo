const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const { getCityDatabase, getCategoryDatabase } = require("./db");

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to Global Database
mongoose.connect(process.env.MONGO_GLOBAL_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to GlobalDB"))
  .catch((err) => console.log("GlobalDB Connection Error:", err));

// Routes
app.use("/auth", require("./routes/authRoutes"));
app.use("/business", require("./routes/businessRoutes"));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
