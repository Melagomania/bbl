const findEqualObject = require('./findEqualObject');

test('stub', () => {
  return;
})

// test('returns correct index', () => {
//   const objectsArr = [
//     { x: 1, y: 3, z: 5 },
//     { name: 'max', age: 40 },
//     { name: 'john', age: 15 }
//   ];

//   const foundIndex = findEqualObject(objectsArr, { name: 'john', age: 15 });

//   expect(foundIndex).toBe(2);
// });

// test('returns -1 if there is no equal objects found', () => {
//   const objectsArr = [
//     { x: 1, y: 3, z: 5 },
//     { name: 'max', age: 40 },
//     { name: 'john', age: 15 }
//   ];

//   const foundIndex = findEqualObject(objectsArr, { name: 'john', age: 17 });

//   expect(foundIndex).toBe(-1);
// });

// test('throws if not all arguments are passed', () => {
//   expect(findEqualObject({ name: 'john', age: 17 }))
//     .toThrow('Expected 2 arguments');
// });

// test('throws if the first argument is not an array', () => {
//   const object = {
//     1: { x: 1, y: 3, z: 5 },
//     2: { name: 'max', age: 40 },
//     3: { name: 'john', age: 15 }
//   };

//   expect(findEqualObject(object, { name: 'john', age: 17 }))
//     .toThrow('The first argument should be an array');
// });

// test('throws if the second argument is not an object', () => {
//   const objectsArr = [
//     { x: 1, y: 3, z: 5 },
//     { name: 'max', age: 40 },
//     { name: 'john', age: 15 }
//   ];

//   expect(findEqualObject(objectsArr, '1'))
//     .toThrow('The second argument should be an object');
// });