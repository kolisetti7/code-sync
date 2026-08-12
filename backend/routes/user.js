const express = require("express");
const router = express.Router();
const { login, signup, logout } = require("../Controller/Auth");
const { auth } = require("../middleware/auth");

router.post("/login", login);
router.post("/signup", signup);

// Test Protected Route
router.get("/test", auth, (req, res) => {
    res.json({
        success: true,
        message: "Token verified. Protected route access successful.",
        user: req.user
    });
});

router.get("/logout", logout);


module.exports = router;
