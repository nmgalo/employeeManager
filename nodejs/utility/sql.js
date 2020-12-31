const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "157.230.88.244",
  user: "admin_root",
  password: "#PGvF_C3TMwJJzD",
  database: "admin_data",
  // host: "localhost",
  // user: "root",
  // database: "citizens",
  //This shouldn't be here but tis mine and tis IP restricted so...
});

module.exports = pool.promise();