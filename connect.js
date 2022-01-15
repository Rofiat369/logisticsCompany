const { Pool } = require("pg");

const db = new Pool({
  user: "vagrant",
  password: "vagrant",
  host: "localhost",
  database: "logistics",
  port: "5432"
});

module.exports = { db };