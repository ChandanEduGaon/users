const express = require("express");
const mysql = require("mysql");
const app = express();

const port = process.env.PORT || 3000;
const pool = mysql.createPool({
  host: "0.0.0.0",
  user: "root",
  password: "",
  database: "sql12621944",
});
app.get("/", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      res.status(500).json({ error: "Error connecting to the database" });
    } else {
      connection.query("SELECT * FROM teachers", (error, results) => {
        connection.release(); // Release the connection back to the pool
        if (error) {
          res.status(500).json({ error: "Error executing the query" });
        } else {
          res.json(results);
        }
      });
    }
  });
});
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});