/*
    Question : Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
*/

/*
    Test Cases : repeatStringNumTimes("*", 3) should return the string ***.
                 repeatStringNumTimes("abc", 3) should return the string abcabcabc.
                 repeatStringNumTimes("abc", 4) should return the string abcabcabcabc.
                 repeatStringNumTimes("abc", 1) should return the string abc.
                 repeatStringNumTimes("*", 8) should return the string ********.
                 repeatStringNumTimes("abc", -2) should return an empty string ("").
*/

//Beginner Level Solution - Using For Loop, If Condition, and Concatenation of String

function repeatStringNumTimes(str, num) {
    let result = "";
    if(num>0){
      for(let i=0; i<num; i++){
        result+=str
      }}
      return result;
    
    
  }
  
repeatStringNumTimes("abc", 3);
// Output - 
// abcabcabc




// Using Recursion 

function repeatStringNumTimesUsingRecursion(str, num) {
    return num > 0 ? str + repeatStringNumTimesUsingRecursion(str, num-1) : '';
  }
  
repeatStringNumTimesUsingRecursion("*", 3);
// Output - 
// ***