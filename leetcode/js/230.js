/**
 * 给定一个二叉搜索树，编写一个函数 kthSmallest 来查找其中第 k 个最小的元素。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
function kthSmallest(root, k) {
  return getOrderedArray(root)[k - 1];
}

function getOrderedArray(node) {
  if (!node) return [];

  return [
    ...getOrderedArray(node.left),
    node.val,
    ...getOrderedArray(node.right)
  ];
}