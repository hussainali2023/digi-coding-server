const express = require("express");
const app = express();
const cors = require("cors");
const Port = process.env.PORT || 5000;

const courses = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("server is running");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.listen(Port, () => {
  console.log("server is running", Port);
});

module.exports = app;
