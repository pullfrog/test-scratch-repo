# test-scratch-repo

Scratch repo for testing Pullfrog triggers.

## API

```js
const { add, subtract, average, median } = require("./index");
```

### `add(a, b)`

Returns the sum of `a` and `b`.

```js
add(1, 2); // 3
```

### `subtract(a, b)`

Returns `a` minus `b`.

```js
subtract(5, 3); // 2
```

### `average(numbers)`

Returns the arithmetic mean of an array of numbers. Returns `0` for an empty array and throws a `TypeError` if `numbers` is not an array of numbers.

```js
average([1, 2, 3, 4]); // 2.5
```

### `median(numbers)`

Returns the middle value of an array of numbers, or the mean of the two middle values when the length is even. The input array is not mutated. Returns `0` for an empty array and throws a `TypeError` if `numbers` is not an array of numbers.

```js
median([4, 1, 3, 2]); // 2.5
```
