const { add, subtract, average } = require("./index");

const assert = require("assert");

assert.strictEqual(add(1, 2), 3);
assert.strictEqual(subtract(5, 3), 2);
assert.strictEqual(average([1, 2, 3, 4]), 2.5);
assert.strictEqual(average([]), 0);

console.log("All tests passed!");
