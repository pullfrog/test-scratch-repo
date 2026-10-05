function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function average(numbers) {
  const total = numbers.reduce((sum, n) => sum + n, 0);
  return total / numbers.length;
}

module.exports = { add, subtract, average };
