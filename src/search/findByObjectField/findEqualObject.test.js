const findEqualObject = require("./findEqualObject");

test("finds correct object (index)", () => {
  const array = [
    { name: "max", age: "14" },
    { name: "john", age: "21" },
    { name: "oliver", age: "24" },
    { name: "jane", age: "31" },
    { name: "corey", age: "15" }
  ];

  const found = findEqualObject(array, { name: "oliver" });
  expect(found).toBe(2);
});

test("returns -1 if nothing found", () => {
  const array = [
    { name: "max", age: "14" },
    { name: "john", age: "21" },
    { name: "oliver", age: "24" },
    { name: "jane", age: "31" },
    { name: "corey", age: "15" }
  ];

  const found = findEqualObject(array, { name: "viktor" });
  expect(found).toBe(-1);
});

test("returns -1 if the array is empty", () => {
  const array = [];
  const found = findEqualObject(array, { name: "viktor" });
  expect(found).toBe(-1);
});

test('throws if gets not array passed', () => {
  const obj = {
    1: { name: "max", age: "14" },
    2: { name: "john", age: "21" }
  };

  const error = 'The first argument should be an array';
  expect(() => {
    findEqualObject(obj, { surname: "sykes" });
  }).toThrow(error);
});

test('throws if options argument has incorrect structure', () => {
  const array = [
    { name: "max", age: "14" },
    { name: "john", age: "21" }
  ];

  const error = 'Options argument should have the following structure: {key: value}';
  expect(() => {
    findEqualObject(array, 1);
  }).toThrow(error);

  expect(() => {
    findEqualObject(array, { surname: "sykes", age: "15" });
  }).toThrow(error);
});

test('throws if not all arguments passed', () => {
  const error = 'Expected 2 arguments';
  expect(() => {
    findEqualObject({ surname: "sykes" });
  }).toThrow(error);
});
