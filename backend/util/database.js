const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "languagedbfromscript",
  password: "mysql",
});

module.exports = pool.promise();
