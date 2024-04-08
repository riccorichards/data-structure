//Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses substring Input: s = ")()())"; Output: 4;

function longestValidParentheses(s) {
  let maxLen = 0;
  const stack = [-1];
  for (let i = 0; i < s.length; i++) {
    console.log({ stack });
    if (s[i] === "(") {
      stack.push(i);
    } else {
      console.log("before", stack.length);
      stack.pop();
      console.log("after", stack.length);
      if (stack.length === 0) {
        stack.push(i);
      } else {
        maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
      }
    }
    console.log({ i, maxLen });
  }
  return maxLen;
}

//Given the root of a binary tree, return the inorder traversal of its nodes' values. Input: root = [1, null, 2, 3]; Output: [1, 3, 2];
