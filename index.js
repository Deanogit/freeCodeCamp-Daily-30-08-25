// Array Duplicates
// Given an array of integers, return an array of integers that appear more than once in the initial array, sorted in ascending order. If no values appear more than once, return an empty array.

// Only include one instance of each value in the returned array.

// function findDuplicates(arr) {
// console.log(arr)
// for (let i= 0; i < arr.length; i++) {
//   for (let a = 1; a < arr.length; a++) {
//     console.log(arr[i], arr[a])
//   }
// }
//  return arr;
// }

function findDuplicates(arr) {
  const counts = {};
  const results = [];

  // 1. Count occurences
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    counts[num] = (counts[num] || 0) + 1;
  }

  // 2. Collect values that appear more than once
  for (let key in counts) {
    if (counts[key] > 1) {
      results.push(Number(key));
    }
  }

  // 3. Sort ascending
  return results.sort((a, b) => a - b);
}
