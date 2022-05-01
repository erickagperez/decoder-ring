const expect = require("chai").expect;
const caesarModule = require("../src/caesar.js");

describe("caesarModule.caesar", () => {
  it("should return false if the shift is equal to zero or less than -25", () => {
    const expected = false;

    const zero = caesarModule.caesar("zero", 0, true);
    expect(zero).to.equal(expected);

    const less = caesarModule.caesar("less", -26, true);
    expect(less).to.equal(expected);
  });

  it("should wrap around to the front of the alphabet if a letter is shifted", () => {
    const actual = caesarModule.caesar("z", 2, true);
    const expected = "b";

    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const actual = caesarModule.caesar("ABC", 2, true);
    const expected = "cde";

    expect(actual).to.equal(expected);
  });

  it("should maintain spaces and non alpha characters", () => {
    const actual = caesarModule.caesar("a b/c", 2, true);
    const expected = "c d/e";

    expect(actual).to.equal(expected);
  });
});
