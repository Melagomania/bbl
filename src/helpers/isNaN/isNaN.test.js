const isNaN = require('./isNaN');

describe("when gets a number passed", () => {
  test("returns true when gets NaN passed", () => {
    expect(isNaN(NaN)).toBe(true);
  });

  test("returns false when gets any valid number value", () => {
    expect(isNaN(1)).toBe(false);
  });
});

describe("when gets not number value", () => {
  test("returns false with string value", () => {
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

describe('throws', () => {
  test('when gets no arguments', () => {
    const errorMessage = 'Expected 1 argument';
    expect(() => isNaN()).toThrow(errorMessage);
  });
});