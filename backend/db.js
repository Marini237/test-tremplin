const mysql = require("mysql2");

// Connexion à la base de données MySQL (Docker)
const pool = mysql.createPool({
  host: "localhost",        // ou "db-1" si ton backend est aussi dans Docker
  user: "root",
  password: "verysecurepassword",
  database: "majordhom",    // à créer si elle n’existe pas encore
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
