const swap = require('./swap');

test('array elements are swapped correctly', () => {
  const arr = [1, 4, -10, 125, 1321];

  const newArr = swap(arr, 1, 4);

  expect(newArr[1]).toBe(arr[4]);
  expect(newArr[4]).toBe(arr[1]);
});

test('array length does not change', () => {
  const arr = ['s', 'p', 'u', 'o', 'r'];
  const newArr = swap(arr, 0, 1);

  expect(newArr.length).toBe(arr.length);
});

test('swap does not change the original array', () => {
  const arr = ['s', 'p', 'u', 'o', 'r'];
  const arrCopy = arr.slice();

  swap(arr, 0, 1);

  expect(arr).toEqual(arrCopy);
});

test('swap returns a new array', () => {
  const arr = ['s', 'p', 'u', 'o', 'r'];
  const newArr = swap(arr, 0, 1);

  expect(newArr).not.toBe(arr);
});

describe('swap throws', () => {
  test('when gets not enough arguments passed', () => {
    const array = [1, 3];
    expect(() => swap(array, 0))
      .toThrow('Expected 3 arguments');
  });

  test('when the first argument is not an array', () => {
    const object = {};
    expect(() => swap(object, 1, 2))
      .toThrow('The first argument should be an array');
  });

  test('when last then 2 are not positive integers', () => {
    expect(() => swap([], -1, 1))
      .toThrow('Last 2 arguments should be positive integers');

    expect(() => swap([], 1.5, 1))
      .toThrow('Last 2 arguments should be positive integers');

    expect(() => swap([], '1', 1))
      .toThrow('Last 2 arguments should be positive integers');
  });
});