const { arrayToTree } = require("./2.arrayToTree");

describe("arrayToTree", () => {
  it("creates a simple tree", () => {
    const result = arrayToTree(["folder", "subfolder", "file.txt"]);
    const expected = [
      {
        name: "folder",
        children: [{ name: "subfolder", children: [{ name: "file.txt" }] }]
      }
    ];

    expect(result).toEqual(expected);
  });
});
