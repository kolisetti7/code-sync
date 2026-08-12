const mongoose = require('mongoose');
require("dotenv").config();

exports.connect = () => {
    if (!process.env.DATABASE_URL) {
        console.error("❌ CRITICAL ERROR: DATABASE_URL environment variable is missing!");
        console.error("Please add DATABASE_URL in your Render Dashboard -> Environment section.");
        process.exit(1);
    }

    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Database Connection established successfully");
    })
    .catch((err) => {
        console.error("Database connection error:", err);
        console.log("Connection Issues with Database");
        process.exit(1);
    });
};