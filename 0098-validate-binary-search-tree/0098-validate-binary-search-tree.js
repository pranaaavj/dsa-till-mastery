/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {

  const helper = (root, arr) => {
    if (!root) return null;
    helper(root.left, arr)
    arr.push(root.val);
    helper(root.right, arr)
    return arr
  }
  const btree = helper(root, []);

  for (let i = 0; i < btree.length; i++) {
    if (btree[i] >= btree[i + 1]) return false
  }

  return true
};