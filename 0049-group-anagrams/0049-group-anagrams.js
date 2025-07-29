/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // Brute force
  // Split each word into array using map 
  // Compare one word (array) to the rest of the words if they match ( use includes )
  // If they do push into one array 
  // Else just keep that word we used to compare in a array and push that
  // This is not at all optimised, but we can figure out more efficient way 

  let grouped = {}

  for (const s of strs) {
    const key = s.split('').sort().join('');

    if (!grouped[key]) {
      grouped[key] = [];
    }

    grouped[key].push(s);
  }

  return Object.values(grouped)
};