const isObject = require("../isObject");
const isNaN = require('../isNaN');

function isEqual(obj1, obj2) {
  if (obj1 === obj2) {
    throw new Error("Arguments should not contain link to the same object");
  }
  let equal = true;
  function check(obj1, obj2) {
    if (equal === false) return;
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
      for (let i = 0; i < obj1.length; i++) {
        if (areArraysOrObjects(obj1[i], obj2[i])) {
          check(obj1[i], obj2[i]);
        } else if (obj1[i] !== obj2[i]) {
          if (isNaN(obj1[i] && isNaN(obj2[i]))) {
            continue;
          } else {
            equal = false;
            break;
          }
        }
      }
    } else if (isObject(obj1) && isObject(obj2)) {
      const keys = Object.keys(obj1);
      let key;
      for (let i = 0; i < keys.length; i++) {
        key = keys[i];
        if (areArraysOrObjects(obj1[key], obj2[key])) {
          check(obj1[keys[i]], obj2[keys[i]]);
        } else if (obj1[keys[i]] !== obj2[keys[i]]) {
          if (isNaN(obj1[keys[i]]) && isNaN(obj2[keys[i]])) {
            continue;
          } else {
            equal = false;
            break;
          }
        }
      }
    }
  }
  check(obj1, obj2);
  check(obj2, obj1);
  return equal;
}

function areArraysOrObjects(a, b) {
  return (isObject(a) && isObject(b) || Array.isArray(a) && Array.isArray(b));
}

module.exports = isEqual;
