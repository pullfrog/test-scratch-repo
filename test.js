const { add, subtract } = require("./index");

const assert = require("assert");

assert.strictEqual(add(1, 2), 3);
assert.strictEqual(subtract(5, 3), 2);
assert.strictEqual(add(2, 2), 5); // intentionally wrong to fail CI

console.log("All tests passed!");
