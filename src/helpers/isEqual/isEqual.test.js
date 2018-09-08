let isEqual = require("./isEqual");

describe('when get 2 empty objects', () => {
  test('returns true', () => {
    expect(isEqual({}, {})).toBe(true);
  });
});

describe('when get 2 empty arrays', () => {
  test('returns true', () => {
    expect(isEqual([], [])).toBe(true);
  });
});

describe("when gets objects with a NaN property passed", () => {
  test("returns true when comparing objects with respective NaN properties", () => {
    const obj1 = { x: 1, y: NaN };
    const obj2 = { x: 1, y: NaN };

    expect(isEqual(obj1, obj2)).toBe(true);
  });
});

describe("when flat objects are compared", () => {
  test("returns true when objects are equal", () => {
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

  test("returns false when objects are not equal", () => {
    const obj1 = {
      url: "example.com"
    };

    const obj2 = {
      id: "123",
      name: "max"
    };
    expect(isEqual(obj1, obj2)).toBe(false);
  });

  test("returns false when objects are not equal", () => {
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

describe("isEqual works with arrays", () => {
  test("returns true when arrays are equal", () => {
    const arr1 = [1, {id: 13}, "123"];
    const arr2 = [1, {id: 13}, "123"];

    expect(isEqual(arr1, arr2)).toBe(true);
  });

  test("returns false when arrays are not equal", () => {
    const arr1 = [1, 1, "123"];
    const arr2 = [1, 4, "123"];

    expect(isEqual(arr1, arr2)).toBe(false);
  });

  test("returns false when arrays are not equal", () => {
    const arr1 = [{id: 14, name: 'x'}, 4, "123"];
    const arr2 = [{id: 14}, 4, "123"];

    expect(isEqual(arr1, arr2)).toBe(false);
  });
});

describe("isEqual works with deep objects", () => {
  test("returns true when objects are equal", () => {
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

  test("returns true when objects are equal", () => {
    const obj1 = {
      name: "max",
      numbers: [{x: 1, y: NaN}, 2, 3, 4],
      data: {
        field: {
          x: 1
        },
        y: 2
      }
    };

    const obj2 = {
      name: "max",
      numbers: [{x: 1, y: NaN}, 2, 3, 4],
      data: {
        field: {
          x: 1
        },
        y: 2
      }
    };
    expect(isEqual(obj1, obj2)).toBe(true);
  });

  test("returns false when objects are not equal", () => {
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
          id: "123"
        },
        y: 2
      }
    };
    expect(isEqual(obj1, obj2)).toBe(false);
  });

  test("returns false when objects are not equal", () => {
    const obj1 = {
      x: {x: 1},
      y: 2
    };
    const obj2 = {
      x: [1, 2],
      y: 2
    }

    expect(isEqual(obj1, obj2)).toBe(false);
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