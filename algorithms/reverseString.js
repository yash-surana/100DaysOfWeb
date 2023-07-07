function reverseString(str) {
    let stringReversed = str.split("").reverse().join("");
    return stringReversed;
  }
  
  reverseString("hello");