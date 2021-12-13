const chart = require("../controllers/chart.controller.js");

var router = require("express").Router();

// Retrieve all chart
router.get("/", chart.findAll);

// create new chart
router.post("/", chart.create);

// Retrieve data for bar chart
router.get("/bar", chart.barchart);

// Retrieve data for pie chart
router.get("/pie", chart.piechart);

module.exports = router;
