const getMinIndex = require('./getMinIndex');

test('returned min index is correct', () => {
  const arr = [1, -10, 123, 1.2, 13, 21, -101, 12];
  const min = getMinIndex(arr);

  expect(min).toBe(6);
});

test('type coercion is not allowed', () => {
  const arr = ['-121', -15, -21, '-10000'];
  const min = getMinIndex(arr);

  expect(min).toBe(2);
});

test('returned min index is correct', () => {
  const arr = [1];
  const min = getMinIndex(arr);

  expect(min).toBe(0);
});

test('returns false, when there are on elements of type number', () => {
  const arr = ['1', '3', '-1'];
  const min = getMinIndex(arr);

  expect(min).toBe(false);
});