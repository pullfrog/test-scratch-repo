const { add, subtract, divide } = require("./index");

const assert = require("assert");

assert.strictEqual(add(1, 2), 3);
assert.strictEqual(subtract(5, 3), 2);
assert.strictEqual(divide(10, 2), 5);
assert.throws(() => divide(1, 0), /Division by zero/);

console.log("All tests passed!");
