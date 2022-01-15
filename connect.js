const { Pool } = require("pg");

const pool = new Pool({
  user: "vagrant",
  password: "vagrant",
  host: "localhost",
  database: "logistics",
});

module.exports = { pool };