const isObject = require('../../helpers/isObject');
const objectLength = require('../../helpers/objectLength');

function findEqualObject(array, options) {
  if(arguments.length < 2) {
    throw new Error('Expected 2 arguments');
  }
  if(!Array.isArray(array)) {
    throw new Error('The first argument should be an array');
  }
  if(!isObject(options) || objectLength(options) !== 1) {
    throw new Error('Options argument should have the following structure: {key: value}');    
  }

  const key = Object.keys(options)[0];
  for(let i = 0; i < array.length; i++) {
    if(array[i][key] === options[key]) {
      return i;
    }
  }
  return -1;
};

module.exports = findEqualObject;