//todo 1=>> Given a sorted array of integers, write a function named summaryRanges that summarizes the array into a list of range strings. Each range string represents a consecutive sequence of numbers in the array. For sequences of more than one consecutive number, represent the range as "start->end". For individual numbers that do not form part of a consecutive sequence, include them as standalone strings. The function should return an array of these range strings in the order they appear in the input array.

function summaryRanges(arr) {
  let result = [];
  let i = 0;
  while (i < arr.length) {
    let start = arr[i];
    let end = start;
    while (i + 1 < arr.length && arr[i + 1] === arr[i] + 1) {
      end = arr[i + 1];
      i++;
    }
    if (start === end) {
      result.push(`${start}`);
    } else {
      result.push(`${start}=>${end}`);
    }
    i++;
  }
  return result;
}

//todo 2=>> Write a function moveZeroes that takes an array of integers nums and moves all the 0's to the end of it while maintaining the relative order of the non-zero elements. This function should modify the array in place and does not return any value.

function moveZeroes(arr) {
  let insertPos = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[insertPos++] = arr[i];
    }
  }

  for (; insertPos < arr.length; insertPos++) {
    arr[insertPos] = 0;
  }
}
const test = [1, 0, 5, 6, 0, 8, 0, 9, 0, 56, -1, 6, 0];
moveZeroes(test);

//todo 3=> Function to generate Pascal's Triangle up to numRows

function generatePascal(rowsLen) {
  const result = [];
  for (let i = 0; i < rowsLen; i++) {
    const row = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        row.push(result[i - 1][j - 1] + result[i - 1][j]);
      }
    }
    result.push(row);
  }

  return result;
}

//todo 4=> Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order. A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters. Input: digits = "23" Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

function letterCombinations(digits) {
  if (!digits.length || digits[0] === 1) return;
  const result = [];
  const digitToLetters = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  function backtrack(index, path) {
    if (path.length === digits.length) {
      result.push(path);
      return;
    }

    const letters = digitToLetters[digits[index]];
    for (let i = 0; i < letters.length; i++) {
      backtrack(index + 1, path + letters[i]);
    }
  }

  backtrack(0, "");

  return result;
}

//todo 5=> Given a string s, find the length of the longest substring without repeating characters. Input: s = "abcabcbb"; Output: 3

function longestSubstring(s) {
  let start = 0;
  let maxLength = 0;
  const seenChars = new Set();

  for (let end = 0; end < s.length; end++) {
    while (seenChars.has(s[end])) {
      seenChars.delete(s[start]);
      start += 1;
    }
    seenChars.add(s[end]);
    console.log({ start, seenChars });
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

//todo 6=> Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words. Note that the same word in the dictionary may be reused multiple times in the segmentation. Input: s = "leetcode"; Output: wordDict = ["leet", "code"];

function wordBreak(s, wordDict) {
  const wordSet = new Set(wordDict);
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordSet.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
}
