const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
mongoose.connect("mongodb://mongo:27017/dockerapp")
.then(() => console.log("MongoDB Connected 🚀"))
.catch((err) => console.log(err));

app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});