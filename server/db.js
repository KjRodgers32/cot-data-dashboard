const { Pool } = require("pg");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const pool = new Pool({
	user: process.env.POSTGRES_USER,
	host: process.env.POSTGRES_HOST,
	port: process.env.DB_PORT,
	database: process.env.POSTGRES_DATABASE,
});

const db = {
	query: (text, params) => pool.query(text, params),
};

module.exports = { db };

// const { Pool } = require("pg");

// const pool = new Pool({
// 	connectionString: process.env.POSTGRES_URL,
// 	ssl: {
// 		rejectUnauthorized: false,
// 	},
// });

// const db = {
// 	query: (text, params) => pool.query(text, params),
// };

// module.exports = { db };
