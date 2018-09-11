const isEqual = require('../../helpers/isEqual');
const isObject = require('../../helpers/isObject')

function findEqualObject(arr, object) {
  const error = checkErrors(arguments);
  if(error) throw error;
  for (let i = 0; i < arr.length; i++) {
    if (isEqual(arr[i], object)) {
      return i;
    }
  }
  return -1;
};

function checkErrors(args) {
  if (args.length < 2) {
    return new Error('Expected 2 arguments');
  }
  if (!Array.isArray(args[0])) {
    return new Error('The first argument should be an array');
  }
  if(!isObject(args[1])) {
    return new Error('The second argument should be an object');
  }
  return false;
}

module.exports = findEqualObject;