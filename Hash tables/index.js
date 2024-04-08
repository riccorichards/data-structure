//Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
//A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
//Input: digits = "23"
//Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

function letterCombinations(digits) {
  // Return an empty array if the input is empty
  if (!digits.length) return [];

  // Mapping of digits to letters, similar to a telephone keypad
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

  // The result array to hold all possible letter combinations
  let result = [];

  // Recursive function to perform backtracking
  function backtrack(index, path) {
    // If the current path's length equals the digits' length,
    // we have a complete combination and add it to the result

    if (path.length === digits.length) {
      result.push(path);
      return;
    }

    // Get the letters corresponding to the current digit
    let letters = digitToLetters[digits[index]];
    // Iterate through these letters
    for (let i = 0; i < letters.length; i++) {
      // Call backtrack with the next digit and current path extended by the current letter
      backtrack(index + 1, path + letters[i]);
    }
  }

  // Start the recursive backtracking with an initial index of 0 and an empty path
  backtrack(0, "");

  // Return the array containing all the letter combinations
  return result;
}

//Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence in O(n) time. For example, if nums = [100, 4, 200, 1, 3, 2], the output should be 4, as the longest consecutive elements sequence is [1, 2, 3, 4]. Utilize hash tables in both tasks for efficient element lookup and to facilitate solving the problems.

function longestConsecutive(nums) {
  const numSet = new Set(nums); // Step 1: Creating a hash table
  let longestStreak = 0;
  for (const num of nums) {
    // Step 2: Checking if the current number could be the start of a sequence
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;
      // Step 3: Counting the length of the current consecutive sequence
      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }
      // Update the longest streak found so far
      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
}

//Given an array of strings strs, group the anagrams together. You can return the answer in any order. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]; Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];

const groupAnagrams = function (strs) {
  const map = new Map();
  for (const str of strs) {
    const sorted = str.split("").sort().join("");

    if (!map.has(sorted)) {
      map.set(sorted, [str]);
    } else {
      map.get(sorted).push(str);
    }
  }

  return Array.from(map.values());
};

//Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words. Note that the same word in the dictionary may be reused multiple times in the segmentation. Input: s = "leetcode"; Output: wordDict = ["leet", "code"];

function wordBreak(s, wordDict) {
  const wordSet = new Set(wordDict); // Convert wordDict to a set for O(1) lookups
  const dp = new Array(s.length + 1).fill(false); // DP array
  dp[0] = true; // Base case: empty string can always be segmented

  // Start dynamic programming
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      // If s[0...j] can be segmented and s[j...i] is in wordDict, then s[0...i] can be segmented
      if (dp[j] && wordSet.has(s.substring(j, i))) {
        dp[i] = true;
        break; // No need to check further if we found a valid segmentation
      }
    }
  }
  return dp[s.length]; // Whether the entire string can be segmented
}

const s = "leetcode";
const wordDict = ["leet", "code"];
console.log(wordBreak(s, wordDict)); // true
