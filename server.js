const express = require("express");
const bodyParser = require("body-parser");
const db = require("./itemsQueries");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

// uses body parser globally
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

//ITEMS ROUTES
app.get("/items", db.getItems);
app.get("/items/:id", db.getItemById);
app.post("/items", db.createItem);
app.put("/items/:id", db.updateItem);
app.delete("/items/:id", db.deleteItem);

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});

const { Pool } = require("pg");

const pool = new Pool({
  user: "vagrant",
  password: "vagrant",
  host: "localhost",
  database: "logistics",
});
