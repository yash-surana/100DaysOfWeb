/*
    Question : Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
*/

/*
    Test Cases : repeatStringUsingFor("*", 3) should return the string ***.
                 repeatStringUsingFor("abc", 3) should return the string abcabcabc.
                 repeatStringUsingFor("abc", 4) should return the string abcabcabcabc.
                 repeatStringUsingFor("abc", 1) should return the string abc.
                 repeatStringUsingFor("*", 8) should return the string ********.
                 repeatStringUsingFor("abc", -2) should return an empty string ("").
*/

//Beginner Level Solution - Using For Loop, If Condition, and Concatenation of String

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

function repeatStringUsingFor(str, num) {
    let result = "";
    if(num>0){
      for(let i=0; i<num; i++){
        result+=str
      }}
      return result;
    
    
}

function repeatStringUsingWhile(str, num) {
    let result = "";
    let i=0;
    while (i<num) {
        result+=str
        i++;
    }
    return result; 
}
// console.log(repeatStringUsingWhile("abc",3));


// console.log(repeatStringUsingFor("abc", 3));
// Output - 
// abcabcabc




// Using Recursion 

function repeatStringUsingRecursion(str, num) {
    return num > 0 ? str + repeatStringUsingRecursion(str, num-1) : '';
  }
  
// repeatStringUsingRecursion("*", 3);
// Output - 
// ***


suite.add('repeatStringUsingFor', function () {
    "abc", 3
})

suite.add('repeatStringUsingWhile', function () {
    "abc", 3
})

suite.add('repeatStringUsingRecursion', function () {
    "abc", 3
})



.on('cycle', function(event) {
    console.log(String(event.target));
    })
    
.on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
    console.log('Slowest is ' + this.filter('slowest').map('name'));
})

.run({ 'async': true });