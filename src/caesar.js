const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    //False should be returned if the shift is equal to zero or less than -25"
    if (!shift || shift < -25 || shift > 25) {
      return false;
    }

    if (!encode) {
      shift *= -1;
    }
    //Capital letters should be ignored. 
    input = input.toLowerCase();

    const theAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let cipherOutput = "";

    for (let letter of input) {

      //If and when there's a space in the decoding or encoding phase, the space and symbols will be maintained. 
      if (!theAlphabet.includes(letter)) {
        cipherOutput += letter;
      } else {
        let letterIndex = theAlphabet.indexOf(letter);
        let letterShift = letterIndex + shift;

         //When encoding, the shift will wrap around to the beginning of the alphabet, creating a loop with the alphabet.  As long as the value is not over 25, the shift will always have a value within the alphabet.          
        letterShift =
          letterShift > 25
            ? letterShift - +26
            : letterShift < 0
            ? (letterShift += 26)
            : letterShift;
        cipherOutput += theAlphabet[letterShift];
      }
    }
    return cipherOutput;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
