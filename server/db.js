const { Pool } = require("pg");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const pool = new Pool({
	user: process.env.DB_USER,
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	database: process.env.DB_DATABASE,
});

const db = {
	query: (text, params) => pool.query(text, params),
};

module.exports = { db };
