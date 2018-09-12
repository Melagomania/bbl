function swap(arr, a, b) {
  const error = checkErrors(arguments);
  if (error) throw error;
  const result = arr.slice();
  const temp = result[a];

  result[a] = result[b];
  result[b] = temp;
  return result;
};

function checkErrors(args) {
  if (args.length < 3) {
    return new Error('Expected 3 arguments');
  }
  if (!Array.isArray(args[0])) {
    return new Error('The first argument should be an array');
  }
  if (args[1] % 1 || args[2] % 1) {
    return new Error('Last 2 arguments should be positive integers');
  }
  if (args[1] < 0 || args[2] < 0) {
    return new Error('Last 2 arguments should be positive integers');    
  }
  if (!(typeof args[1] === 'number') || !(typeof args[2] === 'number')) {
    return new Error('Last 2 arguments should be positive integers');    
  }
  return false;
}

module.exports = swap;