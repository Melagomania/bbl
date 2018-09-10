let isEqual = require("./isEqual");

describe('when get 2 empty objects, isEqual', () => {
  test('returns true', () => {
    expect(isEqual({}, {})).toBe(true);
  });
});

describe('when get 2 empty arrays, isEqual', () => {
  test('returns true', () => {
    expect(isEqual([], [])).toBe(true);
  });
});

describe("when gets objects with a NaN property passed, isEqual", () => {
  test("returns true when comparing objects with respective NaN properties", () => {
    const obj1 = { x: 1, y: NaN };
    const obj2 = { x: 1, y: NaN };

    expect(isEqual(obj1, obj2)).toBe(true);
  });

  test("returns false when comparing objects with respective NaN and any other value properties", () => {
    const obj1 = { x: 1, y: NaN };
    const obj2 = { x: 1, y: 'not NaN' };

    expect(isEqual(obj1, obj2)).toBe(false);
  });
});

describe("when flat objects are compared, isEqual", () => {
  test("returns true if objects are equal", () => {
    const obj1 = {
      id: "123",
      name: "max"
    };

    const obj2 = {
      id: "123",
      name: "max"
    };
    expect(isEqual(obj1, obj2)).toBe(true);
  });

  test("returns false if objects are not equal", () => {
    const obj1 = {
      url: "example.com"
    };

    const obj2 = {
      id: "123",
      name: "max"
    };
    expect(isEqual(obj1, obj2)).toBe(false);
  });

  test("returns false if objects are not equal", () => {
    const obj1 = {
      id: "123"
    };

    const obj2 = {
      id: "123",
      name: "max"
    };
    expect(isEqual(obj1, obj2)).toBe(false);
  });
});

describe("when gets arrays passed, isEqual", () => {
  test("returns true if arrays are equal", () => {
    const arr1 = [1, { id: 13 }, "123"];
    const arr2 = [1, { id: 13 }, "123"];

    expect(isEqual(arr1, arr2)).toBe(true);
  });

  test("returns false if arrays are not equal", () => {
    const arr1 = [1, 1, "123"];
    const arr2 = [1, 4, "123"];

    expect(isEqual(arr1, arr2)).toBe(false);
  });

  test("returns false if arrays are not equal", () => {
    const arr1 = [{ id: 14, name: 'x' }, 4, "123"];
    const arr2 = [{ id: 14 }, 4, "123"];

    expect(isEqual(arr1, arr2)).toBe(false);
  });
});

describe("when deep objects are compared, isEqual", () => {
  test("returns true if objects are equal", () => {
    const obj1 = {
      name: "max",
      numbers: [1, 2, 3, 4],
      data: {
        field: {
          x: 1
        },
        y: 2
      }
    };

    const obj2 = {
      name: "max",
      numbers: [1, 2, 3, 4],
      data: {
        field: {
          x: 1
        },
        y: 2
      }
    };
    expect(isEqual(obj1, obj2)).toBe(true);
  });

  test("returns true if objects are equal", () => {
    const obj1 = {
      name: "max",
      numbers: [{ x: 1, y: NaN }, 2, 3, 4],
      data: {
        field: {
          x: 1
        },
        y: 2
      }
    };

    const obj2 = {
      name: "max",
      numbers: [{ x: 1, y: NaN }, 2, 3, 4],
      data: {
        field: {
          x: 1
        },
        y: 2
      }
    };
    expect(isEqual(obj1, obj2)).toBe(true);
  });

  test("returns false if objects are not equal", () => {
    const obj1 = {
      name: "max",
      numbers: [1, 2, 3, 4],
      data: {
        field: {
          x: 1
        },
        y: 2
      }
    };

    const obj2 = {
      name: "max",
      numbers: [1, 2, 3, 4],
      data: {
        field: {
          x: 1,
          id: "123"
        },
        y: 2
      }
    };
    expect(isEqual(obj1, obj2)).toBe(false);
  });


  test("returns false if objects are not equal", () => {
    const obj1 = {
      x: { x: 1 },
      y: 2
    };
    const obj2 = {
      x: [1, 2],
      y: 2
    }

    expect(isEqual(obj1, obj2)).toBe(false);
  });
});

describe('when objects contain functions, isEqual', () => {
  test('returns false if object properties point to different functions', () => {
    function foo() { }
    function bar() { }

    let obj1 = { x: 1, func: foo };
    let obj2 = { x: 1, func: bar };

    expect(isEqual(obj1, obj2)).toBe(false);
  });

  test('returns true if object properties point to the same function', () => {
    function foo() { }
    const bar = foo;

    let obj1 = { x: 1, func: foo };
    let obj2 = { x: 1, func: bar };

    expect(isEqual(obj1, obj2)).toBe(true);
  });
});

describe("should throw", () => {
  test("if both arguments contain a link to the same object", () => {
    const obj = { id: "123" };
    const savedLink = obj;

    expect(() => isEqual(obj, savedLink)).toThrow(
      "Arguments should not contain link to the same object"
    );
  });
});