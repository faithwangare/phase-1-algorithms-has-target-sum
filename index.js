function hasTargetSum(array, target) {
  // Loop through each element in the array
  for (let i = 0; i < array.length; i++) {
    // Loop through the subsequent elements in the array
    for (let j = i + 1; j < array.length; j++) {
      // If the sum of the current two elements is equal to the target, return true
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  // If no two elements sum to the target, return false
  return false;
}
hasTargetSum([3, 8, 12, 4, 11, 7], 10);
hasTargetSum([22, 19, 4, 6, 30], 25);
hasTargetSum([1, 2, 5], 4);
hasTargetSum([-7, 10, 4, 8], 3);
hasTargetSum([1, 2, 3, 4], 5);
hasTargetSum([2, 2, 3, 3], 4);
hasTargetSum([4], 5);
/*
  Write the Big O time complexity of your function here
*/
/*
  PSEUDOCODE
  1. Initiate a function which takes two arguments, an array and a
  target.
  2. The function loops through each element and the subsequuent elements
   in the array simulteneously.
  3. The function uses the 'if' control flow and returns "true" if the sum of
  the initial element returned by the first loop and any of the remaining elements returned by the second loop is equal to the target. Otherwise it returns "false"
  4. Call the function with test cases passed in the argument.
*/
/*
  Solution
  1. The function "hasTargetSum" takes two arguments, an array and a target.
  2. A simple for loop is executed inside the function with its variable set
  as the first index of the array and loops through the array elements, with a
  condition of incerementing the index by one as long as the index is less than
  the total number of elements in the array.
  3. A second for loop is also executed within the function but its variable is
  set as the second index in the array and it loops through the remaining elements
  in the array before the first loop does.
  4. The 'if' control flow is used to return 'true' if the sum of the current elements in both loops is equal to the target and 'false' if it isn't.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
