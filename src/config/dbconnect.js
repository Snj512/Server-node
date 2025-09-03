const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'serverconnection',
  password: '5120',
  port: 5432,
});

const dbconnect = async () => {
  try {
    await pool.connect();
    console.log('Connected to the database');
  } catch (err) {
    console.error('Connection error:', err.stack);
    process.exit(1);
  }
};

module.exports = dbconnect;
