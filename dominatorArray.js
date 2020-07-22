/**
 * Question 3: Dominator
 * 
 * Return the integer that occurs more than half of the size of an array
 * This is implemented using an object to store the key-value pair of the frequency of each item in the array
 * 
 * @param {number[]} arr The array of integers.
 *
 * @return {number} -1 if there is no dominator
 * @return {number[]} Array of indices if there is a dominator
 */
function dominator(arr) {
    const occurrences = {};
    let indexes = []

    // Check if given parameter is not an array
    if (!Array.isArray(arr)) {
      return -1
    }

  // Iterate over each item in the array
  arrLength = arr.length // to avoid computing the length of the array in each iteration
  for (let i = 0; i < arrLength; i++) {
    // If item does not exist in list of occurrences, add, else increment 
    occurrences[arr[i]] = occurrences[arr[i]] ? occurrences[arr[i]] + 1: 1;

    // check if any item occurs more than half of the size of the given array
    if (occurrences[arr[i]] > arrLength / 2) {
      // Grab the indexes of the item with most occurrences and push to the indexes array
      arr.some(function(val, index) {
        if (val == arr[i]) {
          indexes.push(index)
        }
      })
      return indexes;
    }
  }

  return -1;
}

console.log(dominator([3, 4, 3, 2, 3, -1, 3, 3])) // [ 0, 2, 4, 6, 7 ]