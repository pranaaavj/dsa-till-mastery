/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // Declare a map datastructure 
  // Iterate through the array and set all the numbers in the map
  // Check if any number already exist
  // If yes return true, else return false 

  const map = new Map(); 

  for (const num of nums) {
    if (map.has(num)) return true
    else map.set(num, true);
  }
  
  return false
};