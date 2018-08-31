const swap = (arr, a, b) => {
  const result = arr.slice();
  const temp = result[a];

  result[a] = result[b];
  result[b] = temp;
  return result;
};

module.exports = swap;