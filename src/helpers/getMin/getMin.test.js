const getMin = require('./getMin');

test('returned min value is correct', () => {
  const arr = [1, -10, 123, 1.2, 13, 21, -101, 12];
  const min = getMin(arr);

  expect(min).toBe(-101);
});

test('type coercion is not allowed', () => {
  const arr = ['-121', -15, -21, '-10000'];
  const min = getMin(arr);

  expect(min).toBe(-21);
});

test('returned min value is correct', () => {
  const arr = [1];
  const min = getMin(arr);

  expect(min).toBe(1);
});

test('returns false, when there are on elements of type number', () => {
  const arr = ['1', '3', '-1'];
  const min = getMin(arr);

  expect(min).toBe(false);
});