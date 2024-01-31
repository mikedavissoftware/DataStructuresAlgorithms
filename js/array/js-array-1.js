// Given an unsorted integer array, find a pair with the given sum in it.

// Input 1:
const nums1 = [8, 7, 2, 5, 3, 1]
const target1 = 10

// Output 1:
// Pair found (8, 2)
// or
// Pair found (7, 3)


// Input 2:
const nums2 = [5, 2, 6, 8, 1, 9]
const target2 = 12

// Output 2:
// Pair not found

//////////

// BRUTE FORCE
function bruteForce(nums, target) {
  const pairs = []

  for (low = 0; low < nums.length; low++) {
    let high = nums.length - 1
    while (low < high) {
      if (nums[low] + nums[high] == target) {
        pairs.push(`Pair found (${nums[low]}, ${nums[high]})`)
      }
      high --
    }
  }

  pairs.length > 0 ? (console.log(pairs)) : (console.log("No pairs found"))
}

bruteForce(nums1, target1)
bruteForce(nums2, target2)

/////

// SORTING
function sorting(nums, target) {

  // Ensure that there are no duplicates in numbers array
  let numsArray
  (new Set(nums).size !== nums.length) ? (
    numsArray = new Set(nums)
  ) : (numsArray = nums)

  // Sort the numbers array
  const sortedNums = numsArray.sort(function(a, b) {
    return a - b;
  });

  // Perform the checks
  const pairs = []
  let low = 0
  let high = sortedNums.length - 1
  while (low < high) {
    if (sortedNums[low] + sortedNums[high] === target) {
      pairs.push(`Pair found (${sortedNums[low]}, ${sortedNums[high]})`)
      low ++
    } else if (sortedNums[low] + sortedNums[high] < target) {
      low ++
    } else {
      high --
    }
  }

  pairs.length > 0 ? (console.log(pairs)) : (console.log("No pairs found"))
}

sorting(nums1, target1)
sorting(nums2, target2)

