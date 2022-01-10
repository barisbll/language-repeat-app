const mysql = require("mysql2");

const secret = require("../secret");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "languagedbfromscript",
  password: `${secret.mysqlSecret}`,
});

module.exports = pool.promise();
