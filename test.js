const { add, subtract, average, median } = require("./index");

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
assert.strictEqual(median([3, 1, 2]), 2);
assert.strictEqual(median([4, 1, 3, 2]), 2.5);
assert.strictEqual(median([10, 9, 100]), 10);
assert.strictEqual(median([]), 0);
const unsorted = [3, 1, 2];
median(unsorted);
assert.deepStrictEqual(unsorted, [3, 1, 2]);
assert.throws(() => median(), TypeError);
assert.throws(() => median(null), TypeError);
assert.throws(() => median("123"), TypeError);
assert.throws(() => median({ length: 2 }), TypeError);
assert.throws(() => median([1, "2", 3]), TypeError);
assert.throws(() => median([1, null]), TypeError);

console.log("All tests passed!");
