// Function to generate Pascal's Triangle up to numRows
const generate = function (numRows) {
  // Initialize an empty array to hold the rows of Pascal's Triangle
  const result = [];

  // Iterate through each row, starting from the first row
  for (let i = 0; i < numRows; i++) {
    // Initialize an empty array for the current row
    const row = [];
    // Iterate through each position in the current row
    for (let j = 0; j <= i; j++) {
      //console.log({ result, row, note:"tt" });
      // The first and last positions in each row are always 1
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        // Middle positions are the sum of the two numbers above them
        // This uses the previously filled rows in result to calculate the current value
        row.push(result[i - 1][j - 1] + result[i - 1][j]);
      }
    }
    // Add the completed row to the result array
    result.push(row);
  }
  // Return the complete Pascal's Triangle up to numRows
  return result;
};


function summaryRanges(nums) {
  const ranges = [];
  let i = 0;
  while (i < nums.length) {
    const start = nums[i];
    let end = start;
    // Continue if the next number is consecutive
    while (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) {
      end = nums[i + 1]; // Update end to the last consecutive number
      i++;
    }
    // Check if start is equal to end to determine if it's a standalone number or a range
    if (start === end) {
      ranges.push(`${start}`);
    } else {
      ranges.push(`${start}-${end}`);
    }
    i++; // Move to the next number or sequence
  }
  return ranges;
}

// Example usage

const moveZeroes = function (nums) {
  let insertPos = 0; // This keeps track of where we should insert the non-zero element.
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPos++] = nums[i]; // Move non-zero number to the insert position and increment insertPos.
    }
  }
  // After moving all non-zeros, fill the rest of the array with 0s.
  for (; insertPos < nums.length; insertPos++) {
    nums[insertPos] = 0;
  }
};
let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);


//Given an array of integers nums and a target integer sum, return all the unique pairs of elements that add up to the given sum. The solution should not include duplicate pairs and should return a list of pairs where each pair is an array of two integers. Each element from the nums array can be used more than once if found in different pairs. Example: for nums = [2, 7, 4, 5, 11] and sum = 9, the output should be [[2, 7], [4, 5]].

function findPairsWithSum(arr, target) {
  const seen = new Map();
  const pairs = new Set();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (seen.has(complement)) {
      let pair = [arr[i], complement].sort((a, b) => a - b);
      pairs.add(JSON.stringify(pair));
    }
    seen.set(arr[i], i);
  }

  return Array.from(pairs).map((pair) => JSON.parse(pair));
}

const result = findPairsWithSum(
  [2, 7, 4, 5, 11, 2, 5, 6, 65, 2, 3, 5, 4, 6, 8, 9, 10, 5, 6],
  9
);
//console.log({ result });
