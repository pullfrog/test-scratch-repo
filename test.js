const { add, subtract, modulo } = require("./index");

const assert = require("assert");

assert.strictEqual(add(1, 2), 3);
assert.strictEqual(subtract(5, 3), 2);
assert.strictEqual(modulo(10, 3), 1);
assert.strictEqual(modulo(7, 2), 1);
assert.throws(() => modulo(1, 0), /Modulo by zero/);

console.log("All tests passed!");
