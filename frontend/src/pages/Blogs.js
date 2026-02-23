import { useEffect, useState } from "react";
import API from "../api/api";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [comments, setComments] = useState({});
  const [text, setText] = useState("");

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const res = await API.get("/blogs");
    setBlogs(res.data);

    // Fetch comments for each blog
    res.data.forEach((blog) => fetchComments(blog._id));
  };

  const fetchComments = async (blogId) => {
    const res = await API.get(`/comments/${blogId}`);
    setComments((prev) => ({ ...prev, [blogId]: res.data }));
  };

  const addComment = async (blogId) => {
    try {
      await API.post(`/comments/${blogId}`, { text });
      setText("");
      fetchComments(blogId);
    } catch (err) {
      alert("Login required to comment");
    }
  };

  return (
    <div>
      <h2>All Blogs</h2>

      {blogs.map((blog) => (
        <div key={blog._id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          <small>By: {blog.author?.username}</small>

          {/* COMMENT LIST */}
          <h4>Comments</h4>
          {comments[blog._id]?.map((c) => (
            <p key={c._id}>
              <b>{c.user.username}:</b> {c.text}
            </p>
          ))}

          {/* ADD COMMENT */}
          <input
            placeholder="Write a comment"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={() => addComment(blog._id)}>Comment</button>
        </div>
      ))}
    </div>
  );
}

export default Blogs;