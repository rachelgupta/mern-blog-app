const Comment = require("../models/comment");
const Blog = require("../models/blog");

// 🔹 Add Comment (Protected)
exports.addComment = async (req, res) => {
  try {
    const { text } = req.body;
    const { blogId } = req.params;

    // Check blog exists
    const blogExists = await Blog.findById(blogId);
    if (!blogExists) {
      return res.status(404).json({ message: "Blog not found" });
    }

    const comment = await Comment.create({
      text,
      blog: blogId,
      user: req.user._id
    });

    res.status(201).json(comment);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔹 Get Comments for a Blog
exports.getCommentsByBlog = async (req, res) => {
  try {
    const comments = await Comment.find({ blog: req.params.blogId })
      .populate("user", "username")
      .sort({ createdAt: -1 });

    res.json(comments);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
