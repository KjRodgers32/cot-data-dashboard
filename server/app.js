const express = require("express");
const cors = require("cors");
const GBPRouter = require("./routes/GBPRoutes");
const AUDRouter = require("./routes/AUDRoutes");
const CADRouter = require("./routes/CADRoutes");
const EURRouter = require("./routes/EURRoutes");
const NZRouter = require("./routes/NZRoutes");
const USDRouter = require("./routes/USDRoutes");
const JPYRouter = require("./routes/JPYRoutes");
const CHFRouter = require("./routes/CHFRoutes");
const app = express();

app.use(cors());
app.use(express.json());

// Middleware
app.use((req, res, next) => {
	req.requestTime = new Date().toISOString();
	next();
});

// Routes
app.use("/api/v1/gbp", GBPRouter);
app.use("/api/v1/aud", AUDRouter);
app.use("/api/v1/cad", CADRouter);
app.use("/api/v1/eur", EURRouter);
app.use("/api/v1/nz", NZRouter);
app.use("/api/v1/usd", USDRouter);
app.use("/api/v1/jpy", JPYRouter);
app.use("/api/v1/chf", CHFRouter);

module.exports = app;
