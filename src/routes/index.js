const chart = require("./chart.route");

module.exports = (app) => {
  app.use("/chart", chart);
};
