const { isPalindrome } = require("./3.isPalindrome");

describe("isPalindrome", () => {
  it("simple checks", () => {
    expect(isPalindrome("racecar")).toEqual(true);
    expect(isPalindrome("strikersoft")).toEqual(false);
    expect(isPalindrome("anna")).toEqual(true);
  });
});
