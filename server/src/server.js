const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://mongo:27017/demo_docker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

app.get("/", (req, res) => {
  res.send("Hello from Node.js server!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
