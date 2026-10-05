const { add, subtract, average } = require("./index");

const assert = require("assert");

assert.strictEqual(add(1, 2), 3);
assert.strictEqual(subtract(5, 3), 2);
assert.strictEqual(average([1, 2, 3, 4]), 2.5);
assert.strictEqual(average([]), 0);
assert.throws(() => average(), TypeError);
assert.throws(() => average(null), TypeError);
assert.throws(() => average("123"), TypeError);
assert.throws(() => average({ length: 2 }), TypeError);
assert.throws(() => average([1, "2", 3]), TypeError);
assert.throws(() => average([1, null]), TypeError);

console.log("All tests passed!");
