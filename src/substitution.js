const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    //The `alphabet` parameter must be a string of exactly 26 characters. If not, it should return `false`.
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }
    //All the characters in the `alphabet` parameter should be unique. If not, return `false`.
    for (letter of alphabet) {
      if (alphabet.indexOf(letter) != alphabet.lastIndexOf(letter)) {
        return false;
      }
    }

    //Should maintain spaces.
    const theAlphabet = "abcdefghijklmnopqrstuvwxyz ";
    //Should ignore capital letters.
    input = input.toLowerCase();
    const userAlphabet = [...alphabet, " "];
    let cipherOutput = [];

    if (encode === true) {
      for (let i = 0; i < input.length; i++) {
        cipherOutput.push(userAlphabet[theAlphabet.indexOf(input[i])]);
      }
    } else {
      for (let i = 0; i < input.length; i++) {
        cipherOutput.push(theAlphabet[userAlphabet.indexOf(input[i])]);
      }
    }
    return cipherOutput.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
