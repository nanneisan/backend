const db = require("../models");
const Chart = db.chart;

const data = [
  {
    name: "Rubi",
    age: 31,
    gender: "F",
  },
  {
    name: "Randy",
    age: 32,
    gender: "M",
  },
  {
    name: "Apple",
    age: 18,
    gender: "F",
  },
  {
    name: "Mango",
    age: 14,
    gender: "F",
  },
  {
    name: "Ferry",
    age: 37,
    gender: "M",
  },
  {
    name: "Johnson",
    age: 55,
    gender: "M",
  },
  {
    name: "Larry",
    age: 45,
    gender: "M",
  },
  {
    name: "Ryne",
    age: 12,
    gender: "F",
  },
  {
    name: "Christopher",
    age: 24,
    gender: "M",
  },
];

saveUser = () => {
  return new Promise((resolve, reject) => {
    Chart.bulkCreate(data)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const runSeed = () => {
  Promise.all([saveUser()]).then((values) => {
    console.log(values);
  });
};

runSeed();
