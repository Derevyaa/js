const multiply = require('./second.js');

function add(a, b) {
  return a + b;
};

const resultMulti = multiply(4, 6); // Use multiply to get 24
const result = add(resultMulti, 5); // Add 5 to the result of multiply, expecting 29

console.log("res1: " + result);


function drawTriangle(height, symbol, row = 1) {
  if (row > height) {
    return;
  }

  let line = '';
  for (let i = 1; i <= row; i++) {
    line += symbol;
  }
  console.log(line);

  drawTriangle(height, symbol, row + 1);
}

// Як використовуємо:
drawTriangle(5, '*');