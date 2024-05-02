const multiply = require('./second.js');

function add(a, b) {
  return a + b;
}

const resultMulti = multiply(4, 6);
const result = add(resultMulti, 5);

console.log("res1: " + result);