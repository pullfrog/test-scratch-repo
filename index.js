function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function average(numbers) {
  if (numbers.length === 0) return 0;
  const total = numbers.reduce((sum, n) => sum + n, 0);
  return total / numbers.length;
}

module.exports = { add, subtract, average };
