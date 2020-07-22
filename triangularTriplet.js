/** 
 * Question 1: Triangular triplet
 * 
 * A function to check if a triangular triplet exists for an array
 * The key to implement this problem is to sort the array
 * If the array is sorted and P+Q > R
 * Then P+R > Q and Q+R > P (because R is always the biggest) 
 * Time complexity = O(n)
 */

function triangularTriplet(arr) {

    // Check if given parameter is not an array
      if (!Array.isArray(arr) || arr.length < 3) {
        return 0
      }
  
    arr.sort(function(a, b){return a-b});
    
    const arrlength = arr.length; // to avoid computing the length of the array in each iteration
    // Iterate the items and check if P+Q > R
    for (var i = 0; i < arrlength - 2; i++) {
        if (arr[i] + arr[i + 1] > arr[i + 2]) {
            return 1;
        }
    }
    return 0;
  
  }
  
  console.log(triangularTriplet([10, 2, 5, 1, 8, 20])) // 1
  console.log(triangularTriplet([10, 50, 5, 1])) // 0
  