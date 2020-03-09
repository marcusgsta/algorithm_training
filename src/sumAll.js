function sumAll(arr) {
  let sum = 0;
  // create new array
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  while (min <= max) {
    sum += min;
    min += 1;
  }
    return sum;
  }
  
  module.exports = sumAll;
  