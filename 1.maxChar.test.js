const { maxChar } = require("./1.maxChar");

describe("maxChar", () => {
  it("works", () => {
    expect(maxChar("hello")).toEqual({ count: 2, char: "l" });
  });
});
