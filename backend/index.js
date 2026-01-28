const express = require("express");
const { connectMongoDb } = require("./connection");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");

const app = express();
const port = 3000;

connectMongoDb("mongodb://127.0.0.1:27017/userDB")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Mongo error", err));

//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/auth", authRoutes);

const testRoutes = require("./routes/testRoutes");
app.use("/api/test", testRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
