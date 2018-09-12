const isNaN = require('./isNaN');

describe("when gets a number type value passed, isNaN", () => {
  test("returns true if the value is NaN", () => {
    expect(isNaN(NaN)).toBe(true);
  });

  test("returns false if the value is any valid number", () => {
    expect(isNaN(1)).toBe(false);
  });
});

describe("when gets not a number type value, isNaN", () => {
  test("returns false with a string value", () => {
    expect(isNaN("")).toBe(false);
    expect(isNaN("1")).toBe(false);
    expect(isNaN("A")).toBe(false);
  });

  test("returns false with an object", () => {
    expect(isNaN({})).toBe(false);
  });
  test("returns false with an array", () => {
    expect(isNaN([])).toBe(false);
  });

  test("returns false with a function", () => {
    const func = jest.fn();
    expect(isNaN(func)).toBe(false);
  });

  test('returns false when gets undefined', () => {
    expect(isNaN(undefined)).toBe(false);
  });
});

describe('isNaN throws', () => {
  test('when gets no arguments', () => {
    const errorMessage = 'Expected 1 argument';
    expect(() => isNaN()).toThrow(errorMessage);
  });
});