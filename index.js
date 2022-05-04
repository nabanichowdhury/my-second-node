const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const port = process.env.port || 5000;
app.get("/", (req, res) => {
  res.send("hello jijijijij");
});
const users = [
  { id: 1, name: "sabana", num: "32432234" },
  { id: 2, name: "priysnks", num: "32909090" },
  { id: 3, name: "jiijiji", num: "433223443" },
  { id: 4, name: "ekjkjkj", num: "9090909" },
];

app.get("/users", (req, res) => {
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});
app.post("/user", (req, res) => {
  console.log("request", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});
app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = req.params.id;
  const user = users.find((user) => user.id == id);
  res.send(user);
});
app.listen(port, () => {
  console.log("listening to post ${}", port);
});
