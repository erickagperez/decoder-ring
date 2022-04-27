const substitutionModule = (function () {
  
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !==26) {
      return false;
    }
    for (letter of alphabet) {
      if (alphabet.indexOf(letter) != alphabet.lastIndexOf(letter)) {
        return false;
      }
    }

    const theAlphabet = "abcdefghijklmnopqrstuvwxyz ";
    input = input.toLowerCase();
    const userAlphabet = [...alphabet, " "]; 
    let cipherOutput = [];

    if (encode === true) {
      for (let i=0; i<input.length; i++) {
        cipherOutput.push(userAlphabet[theAlphabet.indexOf(input[i])]);
      }
    } else {
      for (let i=0; i<input.length; i++) {
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
