//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(req, res) {
  res.send("<h1>Hello World!</h1>");
});

app.get("/contact", function(req, res) {
  res.send("Contact me at: ghdeogks@naver.com");
});

app.get("/about", function(req, res) {
  res.send("My name is Daehan and I love beer and code.");
});

app.get("/hobbies", function(req, res) {
  res.send("<ul><li>Cofee</li><li>Code</li><li>Beer</li></ul>");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
