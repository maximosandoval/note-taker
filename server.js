const express = require("express");
const path = require("path");
const app = express();
const PORT = 3001;
const todos = [
  {
    id: 1,
    todo: "Laundry",
    completed: false,
  },
];
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoder({ extended: true }));
app.get("/", (req, res) => {
  consol.log(__dirname);
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
// /api/todo list
app.get("/api/todos", (req, res) => {
  res.json(todos);
});
app.listen(PORT, () =>
  console.log(`Server avail at https://localhost:${PORT}`)
);
