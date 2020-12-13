const mysql = require("mysql2");

const pool = mysql.createPool({
<<<<<<< HEAD
  host: "157.230.88.244",
  user: "admin_root",
  password: "#PGvF_C3TMwJJzD",
  database: "admin_data",
  // host: "localhost",
  // user: "root",
  // database: "citizens",
=======
  host: "localhost",
  user: "root",
  database: "citizens",
>>>>>>> 34da383371ec8898d760a584a7f6b706c95c5670
});

module.exports = pool.promise();
