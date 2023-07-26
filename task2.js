// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(positiveSum([1, 2, -5, 6, -3, -8, 1, -3]));
