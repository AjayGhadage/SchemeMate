const mongoose = require("mongoose");

const schemeSchema = new mongoose.Schema({
  title: String,
  description: String,
  benefitAmount: String,
  eligibility: String,
  location: String,
  country: String,
  category: String,
  infoLink: String,
});

module.exports = mongoose.model("Scheme", schemeSchema);
