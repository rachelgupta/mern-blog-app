const express = require('express');
const protect = require('../middlewares/authMiddleware');
const {
  createBlog,
  getAllBlogs,
  getBlogById
} = require("../controllers/blogController");

const router = express.Router();

router.post("/", protect, createBlog);
router.get("/", getAllBlogs);
router.get("/:id", getBlogById);

module.exports = router;