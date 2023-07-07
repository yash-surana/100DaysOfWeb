/*
Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.


*/

function findLongestWordLength(str) {
    // Declaring and assigning value as an array of input strings seperated by space
    let inputString = str.split(" ");
    let result = 0;
  
    // Looping through array to assign longest word length to result
    for(let i of inputString){
      let wordLen = i.length;
      if(result<wordLen){
        result = wordLen
      }
      
    }
    return result;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

  // Output - 6