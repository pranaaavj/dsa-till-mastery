/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
  const result = Array.from({ length: nums.length }).fill(0);
  let left = 0;
  let right = result.length - 1;

  for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
    if (nums[i] < pivot) {
      result[left] = nums[i];
      left++;
    }

    if (nums[j] > pivot) {
      result[right] = nums[j];
      right--;
    }
  }

  while (left <= right) {
    result[left] = pivot;
    left++;
  }

  return result;
};