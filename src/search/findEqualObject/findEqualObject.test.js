const findEqualObject = require("./findEqualObject");

test("returns correct index", () => {
  const objectsArr = [
    { x: 1, y: 3, z: 5 },
    { name: "max", age: 40 },
    { name: "john", age: 15 }
  ];

  const foundIndex = findEqualObject(objectsArr, { name: "john", age: 15 });

  expect(foundIndex).toBe(2);
});

test("returns -1 if there is no equal objects found", () => {
  const objectsArr = [
    { x: 1, y: 3, z: 5 },
    { name: "max", age: 40 },
    { name: "john", age: 15 }
  ];

  const foundIndex = findEqualObject(objectsArr, { name: "john", age: 17 });

  expect(foundIndex).toBe(-1);
});

describe("findEqualObject throws", () => {
  test("if not all arguments are passed", () => {
    const obj = { name: "john", age: 17 };
    expect(() => findEqualObject(obj)).toThrow("Expected 2 arguments");
  });

  test("if the first argument is not an array", () => {
    expect(() => findEqualObject({}, {}))
      .toThrow("The first argument should be an array");
  });

  test("if the second argument is not an object", () => {
    const objectsArr = [
      { x: 1, y: 3, z: 5 },
      { name: "max", age: 40 },
      { name: "john", age: 15 }
    ];

    expect(() => findEqualObject(objectsArr, "1")).toThrow(
      "The second argument should be an object"
    );
  });
});
