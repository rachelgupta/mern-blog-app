import { useState } from "react";
import API from "../api/api";

function CreateBlog() {
  const [form, setForm] = useState({
    title: "",
    content: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/blogs", form);
      alert("Blog created");
    } catch (err) {
      alert("Login required");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Blog</h2>
      <input
        placeholder="Title"
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <textarea
        placeholder="Content"
        onChange={(e) => setForm({ ...form, content: e.target.value })}
      />
      <button type="submit">Post</button>
    </form>
  );
}

export default CreateBlog;