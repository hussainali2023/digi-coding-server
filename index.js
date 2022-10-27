const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.PORT || 5000;

const courses = require("./data/courses.json");
app.get("/", (req, res) => {
  res.send("server is running");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const singleCourse =
    courses.find((course) => course.id === id) || "No Course found";
  res.send(singleCourse);
});

app.listen(Port, () => {
  console.log("server is running", Port);
});

module.exports = app;
