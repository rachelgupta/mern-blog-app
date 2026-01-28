const express = require("express");
const { connectMongoDb } = require("./connection");
const authRoutes = require("./routes/authRoutes");

const app = express();
const port = 3000;

connectMongoDb("mongodb://127.0.0.1:27017/userDB")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Mongo error", err));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(express.urlencoded({ extended: false }));
app.use("api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
