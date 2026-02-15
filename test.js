const { add, subtract, multiply } = require("./index");

const assert = require("assert");

assert.strictEqual(add(1, 2), 3);
assert.strictEqual(subtract(5, 3), 2);
assert.strictEqual(multiply(3, 4), 12);

console.log("All tests passed!");
