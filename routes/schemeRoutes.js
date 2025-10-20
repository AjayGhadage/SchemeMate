const express = require("express");
const router = express.Router();
const Scheme = require("../models/Scheme");

// 🟢 1. Get all schemes
router.get("/", async (req, res) => {
  const listings = await Scheme.find();
  res.render("schemes", { listings });
});

// 🟢 2. Show Add Scheme Form
router.get("/add", (req, res) => {
  res.render("add_scheme");
});

// 🟢 3. Add New Scheme
router.post("/add", async (req, res) => {
  const newScheme = new Scheme(req.body);
  await newScheme.save();
  res.redirect("/schemes");
});

// 🟡 4. Show Edit Form
router.get("/edit/:id", async (req, res) => {
  const scheme = await Scheme.findById(req.params.id);
  res.render("edit_scheme", { scheme });
});

// 🟡 5. Update Existing Scheme
router.post("/edit/:id", async (req, res) => {
  await Scheme.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/schemes");
});

// 🔴 6. Delete Scheme
router.post("/delete/:id", async (req, res) => {
  await Scheme.findByIdAndDelete(req.params.id);
  res.redirect("/schemes");
});

module.exports = router;
