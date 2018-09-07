function findEqualObject(arr, object) {
  for (let i = 0; i < arr.length; i++) {
    if (isEqual(arr[i], object)) {
      return i;
    }
  }
  return -1;
};