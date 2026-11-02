/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    function buildBst(left,right){
        if(left > right) return null;
        const mid = Math.floor((left+right)/2);
        const root = new TreeNode(nums[mid]);

        root.left = buildBst(left,mid-1);
        root.right = buildBst(mid+1,right);
        return root;
    }
    return buildBst(0,nums.length-1);
};