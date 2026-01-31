const express = require("express");
const protect = require("../middleware/authMiddleware");
const {
  addComment,
  getCommentsByBlog
} = require("../controllers/commentController");

const router = express.Router();

router.post("/:blogId", protect, addComment);
router.get("/:blogId", getCommentsByBlog);

module.exports = router;
