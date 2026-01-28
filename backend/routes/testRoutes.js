const express = require("express");
const protect = require("../middlewares/authMiddleware");

const router = express.Router();

// Protected route
router.get("/me", protect, (req, res) => {
  res.json({
    message: "You accessed a protected route!",
    user: req.user,
  });
});

module.exports = router;
