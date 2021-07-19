//App is Express dependent
const express = require("express");
const path = require("path");

//Envokes Express app
const app = express();

//Server port identification
const PORT = 3001;

// TODO Database/Array
const todos = [
  {
    id: 1,
    todo: "Laundry",
    completed: false,
  },
];
//Middleware which supports and displays the public folder. Create a route for every file in the public folder.
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Slash Route to HTML. Joins code to HTML file.
app.get("/", (req, res) => {
  consol.log(__dirname);
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
// /api/todo list
app.get("/api/todos", (req, res) => {
  res.json(todos);
});

// App listner which starts the server and opens the ports
app.listen(PORT, () =>
  console.log(`Server avail at https://localhost:${PORT}`)
);
