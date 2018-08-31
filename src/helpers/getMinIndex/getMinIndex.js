const getMinIndex = (arr) => {
  let min, i = 0;
  while (!min) {
    if (typeof arr[i] === 'number') {
      min = i;
      break;
    }
    i++;
    if (i === arr.length) {
      return false;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && arr[i] < min) {
      min = i;
    }
  }
  return min;
}

module.exports = getMinIndex;