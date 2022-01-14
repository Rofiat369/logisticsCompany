const express = require("express");

const app = express();

const port = 3000;

const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: 'vagrant',
  host: 'localhost',
  database: 'logistics'
});

app.get("/", (request, response) => {
  response.send("Hello Express Here");
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
