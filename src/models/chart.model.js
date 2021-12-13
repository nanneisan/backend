module.exports = (sequelize, Sequelize) => {
  const Chart = sequelize.define(
    "chart",
    {
      name: {
        type: Sequelize.STRING,
      },
      age: {
        type: Sequelize.INTEGER,
      },
      gender: {
        type: Sequelize.STRING,
      },
    },
    {
      freezeTableName: true,
      tableName: "chart",
    }
  );

  return Chart;
};
