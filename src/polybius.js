const polybiusModule = (function () {
  const cipher = {
    11: "a",
    12: "f",
    13: "l",
    14: "q",
    15: "v",
    21: "b",
    22: "g",
    23: "m",
    24: "r",
    25: "w",
    31: "c",
    32: "h",
    33: "n",
    34: "s",
    35: "x",
    41: "d",
    42: "(i/j)",
    43: "o",
    44: "t",
    45: "y",
    51: "e",
    52: "k",
    53: "p",
    54: "u",
    55: "z",
  };

  function polybius(input, encode = true) {
    if (!encode) {
      input = input.split(" ");
      if (input.join("").length % 2 !== 0) {
        return false;
      }
      const numberArray = [];
      for (let i=0; i<input.length; i++) {
        const number = input[i];
        for (let j=0; j<number.length; j +=2) {
          numberArray.push(number.substring(j, j + 2));
        } 
        numberArray.push(" ");
      }
      numberArray.pop();
      const decodeMessage = [];
      for (let pair of numberArray) {
        if (pair === " ") {
          decodeMessage.push(pair);
        } else {
          const letter = cipher[pair];
          decodeMessage.push(letter);
        }
      }
      return decodeMessage.join("");

    } else {
      input = input.toLowerCase().split("");
      const encodeMessage = [];
      for (let letter of input) {
        if (letter === "i" || letter === "j") {
          encodeMessage.push(42);
        } else {
          let number = Object.keys(cipher).find((key) => cipher[key] === letter);
          if (!number) {
            number = " ";
          }
          encodeMessage.push(number);
        }
      }
      return encodeMessage.join("");
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
