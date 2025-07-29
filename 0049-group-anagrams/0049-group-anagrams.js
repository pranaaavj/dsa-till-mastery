/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
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