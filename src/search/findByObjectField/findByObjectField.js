const isObject = require('../../helpers/isObject');
const objectLength = require('../../helpers/objectLength');

function findByObjectField(array, match) {
  const error = checkErrors(arguments);
  if(error) throw error;

  const key = Object.keys(match)[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i][key] === match[key]) {
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
  if (!isObject(args[1])) {
    return new Error('The second argument should have the following structure: {key: value}');
  }
  if(objectLength(args[1]) !== 1) {
    return new Error('The second argument should have the following structure: {key: value} (1 key-value pair)');
  }
  return false;
}

module.exports = findByObjectField;