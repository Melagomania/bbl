function isNaN(value) {
  if(arguments.length === 0) throw new Error('Expected 1 argument');
  if(value !== value) return true;
  return false;
}

module.exports = isNaN;