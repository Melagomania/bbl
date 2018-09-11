const findByObjectField = require("./findByObjectField");

test("finds correct object (index)", () => {
  const array = [
    { name: "max", age: "14" },
    { name: "john", age: "21" },
    { name: "oliver", age: "24" },
    { name: "jane", age: "31" },
    { name: "corey", age: "15" }
  ];

  const found = findByObjectField(array, { name: "oliver" });
  expect(found).toBe(2);
});

test("returns -1 if nothing was found", () => {
  const array = [
    { name: "max", age: "14" },
    { name: "john", age: "21" },
    { name: "oliver", age: "24" },
    { name: "jane", age: "31" },
    { name: "corey", age: "15" }
  ];

  const found = findByObjectField(array, { name: "viktor" });
  expect(found).toBe(-1);
});

test("returns -1 if the array is empty", () => {
  const array = [];
  const found = findByObjectField(array, { name: "viktor" });
  expect(found).toBe(-1);
});

describe('findByObjectField throws', () => {
  test('throws if not all arguments are passed', () => {
    const error = 'Expected 2 arguments';
    expect(() => {
      findByObjectField({ surname: "sykes" });
    }).toThrow(error);
  });

  test('if the first argument is not an array', () => {
    const error = 'The first argument should be an array';
    expect(() => {
      findByObjectField({}, { surname: "sykes" });
    }).toThrow(error);
  });
  
  test('if the second argument is not an object', () => {
    const error = 'The second argument should have the following structure: {key: value}';
    expect(() => {
      findByObjectField([], 1);
    }).toThrow(error);
  });

  test('if the second argument has more then 1 key-value pair', () => {
    const error = 'The second argument should have the following structure: {key: value} (1 key-value pair)';
    const array = [
      { name: "max", age: "14" },
      { name: "john", age: "21" }
    ];
    expect(() => {
      findByObjectField(array, { surname: "sykes", age: "15" });
    }).toThrow(error);
  });

  test('if empty second argument is passed', () => {
    const error = 'The second argument should have the following structure: {key: value} (1 key-value pair)';
    expect(() => {
      findByObjectField([], {});
    }).toThrow(error);
  });
});