
/** 
 * Question 2: Properly nested string
 * 
 * A function to check if a string is properly nested using the symbols (), {} and []
 * @param {string} str input string.
 * @return {number} 1 if there is properly nested else 0
 * 
 * The string is processed from left to right, the most recent opening symbol must match the next closing symbol. 
 * This suggest using a stack data structure
 * 
 * Time complexity = O(n)
 */
function properlyNested(str) {
    let stack = []
  
    // if str is empty, return 1
    if (!str) { 
      return 1
    }
  
    // Iterate over each character in the string
    strLength = str.length // to avoid computing the length of the string in each iteration
    for(let i =0; i < strLength; i++) {
      character = str.charAt(i)
  
      // if character is opening symbol, push to stack
      if (character == "(" || character == "{" || character == "[") {
        stack.push(character)
      } else {
        // if character is closing symbol, pop from stack
        // check if stack is empty before popping
        if(stack.length == 0) {
          return 0
        }
  
        lastChar = stack.pop()
  
        // if the popped character is not the matching starting symbol, then str is not properly nested
        if((lastChar == "(" && character != ")") || 
          (lastChar == "{" && character != "}") || 
          (lastChar == "[" && character != "]")) {
          return 0
        }
      }
    }
  
    // After Iteration, check if there are still character(s) in the stack
    if (stack.length > 0) {
        return 0
    }
  
    return 1
  }
  
  console.log(properlyNested("")) // 1
  console.log(properlyNested("]")) // 0
  console.log(properlyNested("{[()()]}")) // 1
  console.log(properlyNested("([)()]")) // 0
  