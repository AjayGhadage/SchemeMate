const mongoose = require("mongoose");
const Scheme = require("../models/Scheme.js");
const { data } = require("./data.js"); // your 51 medical schemes

const MONGO_URL = "mongodb://127.0.0.1:27017/MedicalSchemes";

async function seedDB() {
    await mongoose.connect(MONGO_URL);
    console.log("✅ Connected to MongoDB");

    // Optional: clear existing collection
    await Scheme.deleteMany({});
    console.log("🗑️ Cleared existing schemes");

    // Insert medical schemes
    await Scheme.insertMany(data);
    console.log(`✅ Inserted ${data.length} medical schemes`);

    mongoose.connection.close();
    console.log("🔒 MongoDB connection closed");
}

seedDB().catch(err => console.log("❌ Error:", err));
