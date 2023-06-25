var express = require("express");
var bodyParser = require("body-parser");
var multer = require("multer");
var upload = multer();
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());
app.use(express.static("public"));

const users = [
  { name: "Raushan", age: 19, email: "raushan@example.example" },
  { name: "Sandeep", age: 19, email: "sandeep@example.example" },
  { name: "Chandan", age: 20, email: "chandan@example.example" },
  { name: "Rahul", age: 18, email: "rahul@example.example" },
  { name: "Amar", age: 20, email: "amar@example.example" },
  { name: "Ramu", age: 19, email: "ramu@example.example" },
];

app.get("/delete_user/:id", function (req, res) {
  delete users[req.params.id];
  res.send("User deleted of id : " + req.params.id);
});
app.post("/user_add", function (req, res) {
  if (req.body.age != undefined && req.body.email != undefined && req.body.name != undefined) {
    users.push(req.body);
    res.send("User inserted of id : " + req.body.name);
  } else {
    res.send("Body is emoty");
  }
});

app.get("/user/:id", function (req, res) {
  if (req.params.id > users.length) {
    res.send("Data not found");
  } else if (req.params.id < 0) {
    res.send("Request is not valid");
  } else {
    res.send(users[req.params.id]);
  }
});
app.get("/users", function (req, res) {
  res.send(users);
});
app.get("/*", function (req, res) {
  res.send("Search like '/user/:id'");
});

app.listen(3000);