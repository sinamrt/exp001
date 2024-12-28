const express = require('express');
const mysql = require('mysql2');

const {
  DB_HOST = 'localhost',
  DB_USER = 'root',
  DB_PASS = '',
  DB_NAME = ''
} = process.env;

// Create a connection pool
const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME
});

const app = express();
app.use(express.json());

// Example route: test database connection
app.get('/test', (req, res) => {
  pool.query('SELECT 1 + 1 AS solution', (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json({ solution: results[0].solution });
  });
});

// Basic home route
app.get('/', (req, res) => {
  res.send('Hello from Express + MySQL on Docker!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
