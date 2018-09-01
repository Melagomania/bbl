const isObject = require('./isObject');

test('returns true/false correctly', () => {
  const object = {x: 1};
  const number = 1;
  const arr = [1, 2];
  const _null = null;

  expect(isObject(object)).toBe(true);
  expect(isObject(number)).toBe(false);
  expect(isObject(arr)).toBe(false);
  expect(isObject(_null)).toBe(false);
});

test('throws when gets no arguments', () => {
  expect(() => { 
    isObject() 
  }).toThrow('One argument expected');
});