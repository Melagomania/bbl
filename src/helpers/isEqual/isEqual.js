const isObject = require('../isObject');

let equal = true;
function isEqual(obj1, obj2) {
  if (obj1 === obj2) {
    throw new Error('Arguments should not contain link to the same object');
  }
  if (Array.isArray(obj1)) {
    for (let i = 0; i < obj1.length; i++) {
      if (isObject(obj1[i]) || Array.isArray(obj1[i])) {
        isEqual(obj1, obj2);
      } else if (obj1[i] !== obj2[i]) {
        equal = false;
        break;
      }
    }
  } else if (isObject(obj1)) {
    const keys = Object.keys(obj1);
    for (let i = 0; i < keys.length; i++) {
      if (isObject(obj1[keys[i]]) || Array.isArray(obj1[keys[i]])) {
        isEqual(obj1, obj2);
      } else if (obj1[keys[i]] !== obj2[keys[i]]) {
        equal = false;
        break;
      }
    }
  }
  return equal;
}

module.exports = isEqual;