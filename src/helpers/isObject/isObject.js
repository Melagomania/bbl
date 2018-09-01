function isObject(value) {
  if(arguments.length !== 1) throw new Error('One argument expected');
  if(typeof value !== 'object') return false;
  if(value === null) return false;
  if(Array.isArray(value)) return false;
  if(value instanceof Function) return false;

  return true;
};

module.exports = isObject;