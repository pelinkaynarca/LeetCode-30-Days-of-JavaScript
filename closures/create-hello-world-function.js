// 30 DAYS OF JAVASCRIPT CHALLENGE
// Closures

/* Write a function createHelloWorld. It should return a new function that always returns "Hello World". 
Any arguments could be passed to the function but it should still always return "Hello World". */

var createHelloWorld = function() {
  return function(...args) {
      return "Hello World";
  } 
};

/* The "rest parameter" allows you to pass an indefinite number of arguments into a function 
and access them as an array-like structure within the function.

In JavaScript, when a function completes its execution, any variables declared within it 
are typically subject to garbage collection, meaning they are removed from memory. 
However, with the "closure" structure, variable values can be retained and remembered. 
A closure in JavaScript is a function that "closes over" its surrounding lexical scope. */ 