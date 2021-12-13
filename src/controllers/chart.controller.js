const db = require("../models");
const sequelize = db.sequelize;
const Chart = db.chart;

//joi validation schema
const { createUser } = require("../validations/chart");

//util
const JoiValidator = require("../utils/joi_validator");

// Create and Save a new row
exports.create = (req, res) => {
  const body = req.body;

  //validate request data
  JoiValidator(createUser, body);

  // Save a new record to chart table in database
  Chart.create(body)
    .then((data) => {
      //
      res.status(201).send({ data });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating new record.",
      });
    });
};

// Retrieve all records from the database.
exports.findAll = (req, res) => {
  Chart.findAll()
    .then((data) => {
      //won't execute the .then() callback until the promise settles.
      res.status(200).send({ data });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving chart data.",
      });
    });
  //the rest of the function will continue to execute after finishing execution .then
};

// Retrieve data for bar chart
exports.barchart = async (req, res) => {
  let data = [],
    label = [];
  try {
    const query = `SELECT Case 
    when age between 0 and 35 then 'Young Adult'
    when age between 36 and 50 then 'Adult'
    when age > 50 then 'Seniors'
    else 'Seniors' END AS age_group,  
    COUNT(id) as total FROM chart 
    GROUP BY Case 
    when age between 0 and 35 then 'Young Adult'
    when age between 36 and 50 then 'Adult'
    when age > 50 then 'Seniors'
    else 'Seniors' END`;

    // will pause this function execution until the promise settles.
    // any other process will be executed
    const result = await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
    if (result.length > 0) {
      result.forEach((one) => {
        data.push(one.total);
        label.push(one.age_group);
      });
    }

    res.send({ data, label });
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving chart data.",
      data,
      label,
    });
  }
};

// Retrieve data for pie chart.
exports.piechart = async (req, res) => {
  let data = [],
    label = [];
  try {
    const query = `select (male/total) as Male, (female/total) as Female from (
      select count(id) as total, SUM(CASE WHEN gender = 'M' THEN 1 ELSE 0 END) AS male,
      SUM(CASE WHEN gender = 'F' THEN 1 ELSE 0 END) AS female
      from chart ) tbl;`;

    // will pause this function execution until the promise settles.
    // any other process will be executed
    const result = await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
    if (result.length > 0) {
      const gender = result[0];

      for (const [key, value] of Object.entries(gender)) {
        data.push(Number(value * 100).toFixed());
        label.push(key);
      }
    }

    res.send({ data, label });
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving chart data.",
      data,
      label,
    });
  }
};
