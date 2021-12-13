function getChartData() {
  return { data: [2, 5, 7], label: ["young", "adult", "senior"] };
}

function getAllUser() {
  return [
    {
      id: 1,
      name: "Rubi",
      age: 31,
      gender: "F",
      createdAt: "2021-12-13T11:58:13.000Z",
      updatedAt: "2021-12-13T11:58:13.000Z",
    },
    {
      id: 2,
      name: "Randy",
      age: 32,
      gender: "M",
      createdAt: "2021-12-13T11:58:13.000Z",
      updatedAt: "2021-12-13T11:58:13.000Z",
    },
  ];
}

module.exports = { getChartData, getAllUser };
