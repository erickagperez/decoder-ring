const caesarModule = (function () {
   function caesar(input, shift, encode = true) {
     if (!shift || shift < -25 || shift > 25) {
       return false;
     }

     if (!encode) {
       shift *= -1;
     }

     input = input.toLowerCase();

     const theAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
     let cipherOutput = "";

     for (let letter of input) {
       if(!theAlphabet.includes(letter)) {
         cipherOutput += letter;
       } else {
         let letterIndex = theAlphabet.indexOf(letter);
         let letterShift = letterIndex + shift;

        letterShift = letterShift > 25
          ? (letterShift -+ 26)
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
