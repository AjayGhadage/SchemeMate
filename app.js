// // const express = require("express");
// // const mongoose = require("mongoose");
// // const bodyParser = require("body-parser");
// // const path = require("path");
// // const Scheme = require("./models/Scheme.js");

// // const app = express();

// // // ✅ MongoDB Connection
// // const MONGO_URL = "mongodb://127.0.0.1:27017/MedicalSchemes";
// // mongoose
// //   .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
// //   .then(() => console.log("✅ Connected to MongoDB"))
// //   .catch((err) => console.log("❌ MongoDB error:", err));

// // // ✅ Middleware
// // app.use(bodyParser.urlencoded({ extended: true }));
// // app.use(express.static(path.join(__dirname, "public")));
// // app.set("view engine", "ejs");
// // app.set("views", path.join(__dirname, "views"));

// // // ✅ Home Route
// // app.get("/", (req, res) => {
// //   res.render("schemes/home");
// // });

// // // ✅ About Page
// // app.get("/schemes/about", (req, res) => {
// //   res.render("schemes/about");
// // });

// // // ✅ Contact Page
// // app.get("/schemes/contact", (req, res) => {
// //   res.render("schemes/contact");
// // });

// // // ✅ Show all schemes
// // app.get("/schemes", async (req, res) => {
// //   try {
// //     const allSchemes = await Scheme.find({});
// //     res.render("schemes/index", { listings: allSchemes });
// //   } catch (err) {
// //     console.error("Error fetching schemes:", err);
// //     res.status(500).send("Error fetching schemes");
// //   }
// // });

// // // ✅ Show details of a specific scheme
// // app.get("/schemes/:id", async (req, res) => {
// //   try {
// //     const { id } = req.params;
// //     const scheme = await Scheme.findById(id);
// //     if (!scheme) {
// //       return res.status(404).send("Scheme not found");
// //     }
// //     res.render("schemes/show", { scheme });
// //   } catch (err) {
// //     console.error("Error fetching scheme details:", err);
// //     res.status(500).send("Error fetching scheme details");
// //   }
// // });

// // // ✅ Optional test route
// // app.get("/test", (req, res) => {
// //   res.render("schemes/index", { listings: [] });
// // });

// // // ✅ Server Listen
// // const PORT = 8080;
// // app.listen(PORT, () => {
// //   console.log(`🚀 Server running on http://localhost:${PORT}`);
// // });
// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const path = require("path");
// const Scheme = require("./models/Scheme.js");

// const app = express();

// // ✅ MongoDB Connection
// const MONGO_URL = "mongodb://127.0.0.1:27017/MedicalSchemes";
// mongoose
//   .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("✅ Connected to MongoDB"))
//   .catch((err) => console.log("❌ MongoDB error:", err));

// // ✅ Middleware
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public")));
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// // ✅ Home Route
// app.get("/", (req, res) => {
//   res.render("schemes/home");
// });

// // ✅ About Page
// app.get("/schemes/about", (req, res) => {
//   res.render("schemes/about");
// });

// // ✅ Contact Page
// app.get("/schemes/contact", (req, res) => {
//   res.render("schemes/contact");
// });

// // ✅ Show all schemes
// // ✅ Show all schemes with search and category filtering
// app.get("/schemes", async (req, res) => {
//     try {
//         // 1. Get query parameters
//         const { q, category } = req.query;

//         // 2. Build the MongoDB query object
//         const query = {};

//         // a) Handle Category Filter
//         // Note: The category value must match the exact string in your DB (e.g., "General Health Insurance")
//         if (category && category !== "" && category !== "All") {
//             // For general filtering, use exact match
//             query.category = category; 
//         }

//         // b) Handle Keyword Search (q)
//         if (q) {
//             const searchRegex = new RegExp(q, 'i');
//             query.$or = [
//                 { title: { $regex: searchRegex } },
//                 { description: { $regex: searchRegex } },
//                 { eligibility: { $regex: searchRegex } }
//             ];
//         }

//         // 3. Execute the Mongoose find query
//         const filteredSchemes = await Scheme.find(query);

//         // 4. Render the EJS view
//         res.render("schemes/index", { 
//             listings: filteredSchemes,
//             currentCategory: category || "", 
//             currentQuery: q || "" 
//         });

//     } catch (err) {
//         console.error("Error fetching and filtering schemes:", err);
//         res.status(500).send("Error fetching and filtering schemes");
//     }
// });

// // ✅ Show details of a specific scheme or handle "new"
// app.get("/schemes/:id", async (req, res) => {
//     const { id } = req.params;

//     if (id === "new") {
//         return res.render("schemes/new"); 
//     }

//     // Basic check for valid MongoDB ObjectId structure
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//         return res.status(404).send("Scheme not found or Invalid ID");
//     }

//     try {
//         const scheme = await Scheme.findById(id);
//         if (!scheme) {
//             return res.status(404).send("Scheme not found");
//         }
//         res.render("schemes/show", { scheme });
//     } catch (err) {
//         console.error("Error fetching scheme details:", err);
//         res.status(500).send("Error fetching scheme details");
//     }
// });
// // ✅ Optional test route
// app.get("/test", (req, res) => {
//   res.render("schemes/index", { listings: [] });
// });

// // ✅ Server Listen
// const PORT = 8080;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });
// app.js - Corrected and Unified Code

// 1. Load environment variables first (only once)
require('dotenv').config(); 

// ----------------------------------------------------
// 2. REQUIRES
// ----------------------------------------------------
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session"); 
const flash = require("connect-flash");
const methodOverride = require("method-override");
const Scheme = require("./models/Scheme.js"); 
const User = require("./models/User.js"); // Assuming this model is defined
const passport = require("passport"); 
const LocalStrategy = require("passport-local"); // Local login strategy
const { GoogleGenAI } = require("@google/genai");

// ----------------------------------------------------
// 3. GEMINI AI CLIENT INITIALIZATION
// ----------------------------------------------------
console.log("Gemini Key Status:",process.env.GEMINI_API_KEY ? "Loaded" : "FAILED to load");
console.log("Key Prefix Check:", process.env.GEMINI_API_KEY?.substring(0, 10));

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

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
app.use(methodOverride("_method"));
app.use(express.json());

// ----------------------------------------------------
// SESSION & FLASH SETUP
// ----------------------------------------------------
const sessionOptions = {
    secret: "mysupersecretcode", // Use a strong secret in production
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
};
app.use(session(sessionOptions));
app.use(flash());

// ----------------------------------------------------
// 🔑 PASSPORT CONFIGURATION
// ----------------------------------------------------
app.use(passport.initialize());
app.use(passport.session()); // Use session to keep users logged in

// IMPORTANT: Configure Passport to use the LocalStrategy on the User model
// This assumes 'passport-local-mongoose' is implemented in your User.js
passport.use(new LocalStrategy(User.authenticate())); 

// Methods to store/retrieve user info in the session
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// Flash and User Middleware (Makes flash messages and *current user* available to all templates)
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currentUser = req.user; // The user object set by Passport
    next();
});


// ====================================================================
// 🔒 AUTHENTICATION & AUTHORIZATION MIDDLEWARE
// ====================================================================

// 1. Authentication Middleware: Checks if a user is logged in
const isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        // Store the original URL they requested for redirecting after login
        req.session.returnTo = req.originalUrl; 
        req.flash("error", "You must be signed in first.");
        return res.redirect("/login"); 
    }
    next();
};

// 2. Authorization Middleware: Checks if the logged-in user is an Admin
const isAdmin = (req, res, next) => {
    // Check if the user exists AND if their role is 'admin'
    if (req.user && req.user.role === 'admin') {
        next(); // User is an admin, proceed to the route handler
    } else {
        req.flash("error", "❌ Authorization failed. Only **Admins** can perform this action.");
        res.redirect("/schemes"); 
    }
};


// ====================================================================
// 👤 USER AUTHENTICATION ROUTES (REQUIRED)
// ====================================================================

// Registration Form
app.get("/signup", (req, res) => {
    res.render("users/signup"); 
});

// Register User
app.post("/signup", async (req, res) => {
    try {
        const { username, password } = req.body;
        // The first user created should be manually set as admin for testing
        const role = await User.countDocuments() === 0 ? 'admin' : 'user';

        const newUser = new User({ username, role }); // Only pass username and role

        // Register the new user with password hashing (provided by passport-local-mongoose)
        const registeredUser = await User.register(newUser, password);

        // Auto-login the user after successful registration
        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash("success", `Welcome to SchemeMate, ${username}!`);
            res.redirect("/schemes");
        });
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
});

// Login Form
app.get("/login", (req, res) => {
    res.render("users/login");
});

// Login User
app.post("/login", passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: true,
    // Store returnTo value and clear it from session after redirect
    successRedirect: '/schemes' // Default redirect
}), (req, res) => {
    // This callback runs only on successful login
    const redirectUrl = req.session.returnTo || '/schemes';
    delete req.session.returnTo; // Clean up session
    req.flash("success", `Welcome back, ${req.user.username}!`);
    res.redirect(redirectUrl);
});

// Logout User
app.get('/logout', (req, res, next) => {
    // Passport logout method
    req.logout((err) => {
        if (err) { return next(err); }
        req.flash('success', 'Goodbye! You have been logged out.');
        res.redirect('/schemes');
    });
});


// ====================================================================
// 🤖 CHATBOT API ROUTE (NO CHANGE)
// ====================================================================
// ... (your existing app.post("/api/gemini-chat", ...) route) ...
app.post("/api/gemini-chat", async (req, res) => {
    const userMessage = req.body.message;
    
    if (!userMessage) {
        return res.status(400).json({ error: "No message provided." });
    }

    try {
        const systemInstruction = `You are SchemeBot, an AI assistant for SchemeMate, a website dedicated to finding verified government schemes for health, education, and farmers. Your primary goal is to provide concise, helpful, and accurate information related to these scheme categories. If asked a question unrelated to schemes, politely redirect the user to the website's main functions. Do not give medical or legal advice.`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash", 
            contents: userMessage,
            config: {
                systemInstruction: systemInstruction,
            }
        });

        res.json({ reply: response.text });
        
    } catch (error) {
        console.error("Gemini API Error:", error);
        res.status(500).json({ 
            reply: "I'm sorry, I'm having trouble connecting to my brain (the AI service) right now. Please try again later or use the main search bar for schemes.",
            error: "Internal Server Error"
        });
    }
});


// ====================================================================
// ✅ ROUTE DEFINITIONS (SECURED CRUD + Pages)
// ====================================================================

// Home Route
app.get("/", (req, res) => {
    res.render("schemes/home"); 
});

// About Page
app.get("/schemes/about", (req, res) => {
    res.render("schemes/about");
});

// Contact Page
app.get("/schemes/contact", (req, res) => {
    res.render("schemes/contact");
});

// --- CREATE ROUTES (New Scheme) ---

// 1. New Scheme Form (Renders the form)
// 🔒 Secured with isLoggedIn and isAdmin
app.get("/schemes/new", isLoggedIn, isAdmin, (req, res) => {
    res.render("schemes/new"); 
});

// 2. Create Scheme (Receives POST request from form)
// 🔒 Secured with isLoggedIn and isAdmin
app.post("/schemes", isLoggedIn, isAdmin, async (req, res) => {
    try {
        const newScheme = new Scheme(req.body); 
        await newScheme.save();
        req.flash("success", "✅ New scheme created successfully!"); 
        res.redirect("/schemes"); 
    } catch (err) {
        const validationError = err.errors ? Object.values(err.errors).map(e => e.message).join(", ") : "Unknown error";
        req.flash("error", `❌ Failed to create scheme: ${validationError}`);
        res.redirect("/schemes/new"); 
    }
});


// --- READ ROUTES (Index and Show) (UNSECURED) ---
// Index/Filter Schemes
app.get("/schemes", async (req, res) => {
    // ... (existing index logic) ...
    try {
        const { q, category } = req.query;
        const query = {};

        if (category && category !== "" && category !== "All") {
            query.category = category; 
        }

        if (q) {
            const searchRegex = new RegExp(q, 'i');
            query.$or = [
                { title: { $regex: searchRegex } },
                { description: { $regex: searchRegex } },
                { eligibility: { $regex: searchRegex } }
            ];
        }

        const filteredSchemes = await Scheme.find(query);
        res.render("schemes/index", { 
            listings: filteredSchemes,
            currentCategory: category || "", 
            currentQuery: q || "" 
        });

    } catch (err) {
        console.error("Error fetching and filtering schemes:", err);
        req.flash("error", "❌ Could not fetch schemes.");
        res.redirect("/");
    }
});

// Show Details of Specific Scheme
app.get("/schemes/:id", async (req, res) => {
    // ... (existing show logic) ...
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        req.flash("error", "❌ Invalid Scheme ID or scheme not found.");
        return res.redirect("/schemes");
    }

    try {
        const scheme = await Scheme.findById(id);
        if (!scheme) {
            req.flash("error", "❌ Requested scheme not found.");
            return res.redirect("/schemes");
        }
        res.render("schemes/show", { scheme });
    } catch (err) {
        console.error("Error fetching scheme details:", err);
        req.flash("error", "❌ Error fetching scheme details.");
        res.redirect("/schemes");
    }
});

// --- UPDATE ROUTES (Edit Scheme) ---

// 1. Edit Scheme Form (Renders the form pre-filled)
// 🔒 Secured with isLoggedIn and isAdmin
app.get("/schemes/:id/edit", isLoggedIn, isAdmin, async (req, res) => {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        req.flash("error", "❌ Invalid Scheme ID.");
        return res.redirect("/schemes");
    }
    
    try {
        const scheme = await Scheme.findById(id); 
        
        if (!scheme) {
            req.flash("error", "❌ Scheme to edit not found.");
            return res.redirect("/schemes");
        }
        
        res.render("schemes/edit", { scheme });
        
    } catch (err) {
        console.error("Error retrieving scheme for edit:", err);
        req.flash("error", "❌ Error loading edit form.");
        res.redirect("/schemes");
    }
})

// 2. Update Scheme (Receives PUT/PATCH request)
// 🔒 Secured with isLoggedIn and isAdmin
app.put("/schemes/:id", isLoggedIn, isAdmin, async (req, res) => {
    const { id } = req.params;
    try {
        await Scheme.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
        req.flash("success", "✏️ Scheme updated successfully!");
        res.redirect(`/schemes/${id}`);
    } catch (err) {
        const validationError = err.errors ? Object.values(err.errors).map(e => e.message).join(", ") : "Unknown error";
        req.flash("error", `❌ Failed to update scheme: ${validationError}`);
        res.redirect(`/schemes/${id}/edit`); 
    }
});


// --- DELETE ROUTE ---

// Delete Scheme (Receives DELETE request)
// 🔒 Secured with isLoggedIn and isAdmin
app.delete("/schemes/delete/:id", isLoggedIn, isAdmin, async (req, res) => {
    const { id } = req.params;
    try {
        await Scheme.findByIdAndDelete(id);
        req.flash("success", "🗑️ Scheme deleted successfully.");
        res.redirect("/schemes");
    } catch (err) {
        console.error("Error deleting scheme:", err);
        req.flash("error", "❌ Could not delete scheme.");
        res.redirect("/schemes");
    }
});

// ✅ Server Listen
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});