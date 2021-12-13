const { getChartData, getAllUser } = require("./chat");

describe("chart", () => {
  test("object assignment", () => {
    const data = { name: "kmk" };
    data["age"] = 20;
    data["gender"] = "F";
    expect(data).toEqual({ name: "kmk", age: 20, gender: "F" });
  });

  test("should return data and label as object", () => {
    const data = { data: [2, 5, 7], label: ["young", "adult", "senior"] };
    expect(getChartData()).toEqual(data);
  });

  test("should return id, name, age and gender", () => {
    const data = {
      id: 1,
      name: "Rubi",
      age: 31,
      gender: "F",
    };
    expect(getAllUser()).toEqual(
      expect.arrayContaining([expect.objectContaining(data)])
    );
  });
});
