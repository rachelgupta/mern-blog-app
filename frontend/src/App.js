import Register from "./pages/Register";
import Login from "./pages/Login";
import Blogs from "./pages/Blogs";
import CreateBlog from "./pages/CreateBlog";

function App() {
  return (
    <div>
      <h1>MERN Blog</h1>

      <Register />
      <Login />
      <CreateBlog />
      <Blogs />
    </div>
  );
}

export default App;