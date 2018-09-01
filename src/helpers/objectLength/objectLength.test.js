const objectLength = require('./objectLength');

test('returns correct length', () => {
  const obj = {
    x: 1,
    y: 2,
    z: 3
  };

  const result = objectLength(obj);

  expect(result).toBe(3);
});

test('returns correct length', () => {
  const obj = {
    x: 1,
    y: 2,
    z: 3,
    g: 3,
    l: 3,
    a: 3,
    p: 3,
    n: 3,
    s: 3
  };

  const result = objectLength(obj);

  expect(result).toBe(9);
});

test('returns correct length', () => {
  const obj = {};

  const result = objectLength(obj);

  expect(result).toBe(0);
});

test('throws when gets not object as the parameter', () => {
  const arr = [1, 2, 3];
  const func = function(){};
  const _null = null;

  const errorMessage = 'The argument should be an object'
  expect( () => objectLength(arr) ).toThrow(errorMessage);
  expect( () => objectLength(func) ).toThrow(errorMessage);
  expect( () => objectLength(_null) ).toThrow(errorMessage);
});