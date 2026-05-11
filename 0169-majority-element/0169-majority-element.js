/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1
  }
  console.log(map)
  let maxValue = 0;
  let maxKey = 0;
  for (let [key, value] of Object.entries(map)) {
    if (value > maxValue){
      maxValue = value;
      maxKey = key
    }
  }
  console.log(maxKey)
  return Number(maxKey)
};