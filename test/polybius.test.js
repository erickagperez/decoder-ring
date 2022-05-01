const expect = require("chai").expect;
const polybiusModule = require("../src/polybius");

describe("polybiusModule.polybius", () => {
  it("When decoding, the number of characters in the string excluding spaces should be even.  Otherwise return `false`.", () => {
    const actual = polybiusModule.polybius("1 213141", false);
    const expected = false;

    expect(actual).to.equal(expected);
  });

  it("When encoding, your output should still be a string", () => {
    const actual = polybiusModule.polybius("bcd", true);
    const expected = "213141";

    expect(actual).to.equal(expected);
  });

  it("Should ignore capital letters.", () => {
    const actual = polybiusModule.polybius("BCD", true);
    const expected = "213141";

    expect(actual).to.equal(expected);
  });

  it("Should maintain spaces throughout.", () => {
    const actual = polybiusModule.polybius("b c d", true);
    const expected = "21 31 41";

    expect(actual).to.equal(expected);
  });
});
