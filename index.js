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

function median(numbers) {
  if (!Array.isArray(numbers) || !numbers.every((n) => typeof n === "number")) {
    throw new TypeError("median expects an array of numbers");
  }
  if (numbers.length === 0) return 0;
  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
}

module.exports = { add, subtract, average, median };
