function multiply(a, b) {
  return a * b;
}

module.exports = multiply;

const result = multiply(4, 6); // Виклик функції з аргументами 4 та 6

console.log("res2: " + result);

/*
function drawTriangle(height, symbol) {
  if (height > 0) console.log(symbol);
  if (height > 1) console.log(symbol + symbol);
  if (height > 2) console.log(symbol + symbol + symbol);
  // і так далі, для кожного рівня
}

drawTriangle(3, '*');

function drawTriangle(height, symbol) {
  for (let i = 1; i <= height; i++) {
    eval('if (height >= ' + i + ') console.log("' + symbol.repeat(i) + '");');
  }
}

// Виклик функції для тестування
drawTriangle(5, '*');
*/