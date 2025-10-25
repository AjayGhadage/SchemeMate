// models/User.js

const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose"); // <--- Must be required!
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // 'username' and 'hash' (password) are handled automatically

    role: { 
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
});

// IMPORTANT: Apply the plugin to attach methods like 'authenticate'
userSchema.plugin(passportLocalMongoose); // <--- Must be applied!

module.exports = mongoose.model("User", userSchema);