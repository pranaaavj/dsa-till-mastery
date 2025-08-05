/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const map1 = {}
  const map2 = {};

  nums1.forEach((num) => map1[num] = true)
  nums2.forEach((num) => map2[num] = true)

  const ans = [[], []]
  for (const num of nums1) {
    if (!map2[num]) {
      ans[0].push(num)
      map2[num] = true
    }
  }

  for (const num of nums2) {
    if (!map1[num]) {
      ans[1].push(num)
      map1[num] = true
    }
  }

  return ans
};