const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const Scheme = require("./models/Scheme.js");

const app = express();

// ✅ MongoDB Connection
const MONGO_URL = "mongodb://127.0.0.1:27017/MedicalSchemes";
mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.log("❌ MongoDB error:", err));

// ✅ Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ✅ Home Route
app.get("/", (req, res) => {
  res.render("schemes/home");
});

// ✅ About Page
app.get("/schemes/about", (req, res) => {
  res.render("schemes/about");
});

// ✅ Contact Page
app.get("/schemes/contact", (req, res) => {
  res.render("schemes/contact");
});

// ✅ Show all schemes
app.get("/schemes", async (req, res) => {
  try {
    const allSchemes = await Scheme.find({});
    res.render("schemes/index", { listings: allSchemes });
  } catch (err) {
    console.error("Error fetching schemes:", err);
    res.status(500).send("Error fetching schemes");
  }
});

// ✅ Show details of a specific scheme
app.get("/schemes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const scheme = await Scheme.findById(id);
    if (!scheme) {
      return res.status(404).send("Scheme not found");
    }
    res.render("schemes/show", { scheme });
  } catch (err) {
    console.error("Error fetching scheme details:", err);
    res.status(500).send("Error fetching scheme details");
  }
});

// ✅ Optional test route
app.get("/test", (req, res) => {
  res.render("schemes/index", { listings: [] });
});

// ✅ Server Listen
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
