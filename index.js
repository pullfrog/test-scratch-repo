function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function average(numbers) {
  if (!Array.isArray(numbers) || !numbers.every((n) => typeof n === "number")) {
    throw new TypeError("average expects an array of numbers");
  }
  if (numbers.length === 0) return 0;
  const total = numbers.reduce((sum, n) => sum + n, 0);
  return total / numbers.length;
}

module.exports = { add, subtract, average };
