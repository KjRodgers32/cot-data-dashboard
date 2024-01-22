const { db } = require("../db");
const { ALL_AUD_DATA, MOST_RECENT_AUD_DATA } = require("../queries/AUDQueries");

exports.baseGet = async (req, res) => {
	try {
		const result = await db.query(ALL_AUD_DATA);
		res.status(200).json({
			status: "success",
			requestedAt: req.requestTime,
			results: result.rows.length,
			data: result.rows,
		});
	} catch (err) {
		console.error(err);
	}
};

exports.latestGet = async (req, res) => {
	try {
		const result = await db.query(MOST_RECENT_AUD_DATA);
		res.status(200).json({
			status: "success",
			requestedAt: req.requestTime,
			results: result.rows.length,
			data: result.rows,
		});
	} catch (err) {
		console.error(err);
	}
};
