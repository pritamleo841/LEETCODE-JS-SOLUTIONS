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
 * @return {number}
 */
var maxPathSum = function(root) {
     let max = -Infinity;

     const findSums = (node)=>{
        if(!node){
            return 0;
        }
        //recursively call for max path for left subtree/right subtree
        let left = findSums(node.left);
        let right = findSums(node.right);
        //3 kinds of path with only 1 splitting available
        let totalSum = (left+right+node.val);
        let leftNodeSum = left+node.val;
        let rightNodeSum = right+node.val;
        //maximum of all the combinations
        max = Math.max(max,node.val,totalSum,leftNodeSum,rightNodeSum);
        //return the maximum path -> without splitting
        return Math.max(leftNodeSum,rightNodeSum,node.val);
    };

    findSums(root);
    return max;
};