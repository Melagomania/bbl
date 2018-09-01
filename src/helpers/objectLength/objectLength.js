const isObject = require('../isObject');

const objectLength = (object) => {
  if(!isObject(object)) {
    throw new Error('The argument should be an object')
  }
  
  return Object.keys(object).length;
};

module.exports = objectLength;