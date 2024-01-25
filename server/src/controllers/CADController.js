const { db } = require("../../db");
const { ALL_CAD_DATA, MOST_RECENT_CAD_DATA } = require("../queries/CADQueries");

exports.baseGet = async (req, res) => {
	try {
		const result = await db.query(ALL_CAD_DATA);
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
		const result = await db.query(MOST_RECENT_CAD_DATA);
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
