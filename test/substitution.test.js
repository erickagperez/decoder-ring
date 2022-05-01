const expect = require("chai").expect;
const substitutionModule = require("../src/substitution.js");

describe("substitutionModule.substitution", () => {
  it("Should maintain spaces.", () => {
    const actual = substitutionModule.substitution(
      "good bye",
      "xoyqmcgrukswaflnthdjpzibev",
      (encode = true)
    );
    const expected = "gllq oem";
    expect(actual).to.equal(expected);
  });

  it("Should ignore capital letters.", () => {
    const actual = substitutionModule.substitution(
      "Good Bye",
      "xoyqmcgrukswaflnthdjpzibev",
      (encode = true)
    );
    const expected = "gllq oem";
    expect(actual).to.equal(expected);
  });

  it("The `alphabet` parameter must be a string of exactly 26 characters. If not, it should return `false`.", () => {
    const actual = substitutionModule.substitution(
      "good bye",
      "xoyqmcgrukswafltz",
      (encode = true)
    );
    const expected = false;
    expect(actual).to.equal(expected);
  });

  it("All the characters in the `alphabet` parameter should be unique. If not, return `false`.", () => {
    const actual = substitutionModule.substitution(
      "goodbye",
      "xoqmcgrukswaflnthdjpbzibev",
      (encode = true)
    );
    const expected = false;
    expect(actual).to.equal(expected);
  });

  it("should return false if the substitution alphabet is missing", () => {
    const actual = substitutionModule.substitution(
      "goodbye",
      "",
      (encode = true)
    );
    const expected = false;
    expect(actual).to.equal(expected);
  });
});
