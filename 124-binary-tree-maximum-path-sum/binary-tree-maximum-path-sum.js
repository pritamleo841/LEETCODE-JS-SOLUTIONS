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
    let maxSum = -Infinity;
    const func = (root) => {
        if (!root) return 0;
        //Calculate the maximum path sum for left and right subtrees.
        //considering negetive nodes
        const leftSum = Math.max(func(root.left), 0);
        const rightSum = Math.max(func(root.right), 0);
        //Calculate the maximum path sum for the current subtree rooted at 'root'.
        const currentMaxSum = root.val + leftSum + rightSum;
        //Update the global maximum path sum.
        maxSum = Math.max(maxSum, currentMaxSum);
        //Return the maximum path sum for the current subtree (for parent nodes).
        return root.val + Math.max(leftSum, rightSum);
    };
    func(root);
    return maxSum;

    //  let max = -Infinity;

    //  const findSums = (node)=>{
    //     if(!node){
    //         return 0;
    //     }
    //     //recursively call for max path for left subtree/right subtree
    //     let left = findSums(node.left);
    //     let right = findSums(node.right);
    //     //3 kinds of path with only 1 splitting available
    //     let totalSum = (left+right+node.val);
    //     let leftNodeSum = left+node.val;
    //     let rightNodeSum = right+node.val;
    //     //maximum of all the combinations
    //     max = Math.max(max,node.val,totalSum,leftNodeSum,rightNodeSum);
    //     //return the maximum path -> without splitting
    //     return Math.max(leftNodeSum,rightNodeSum,node.val);
    // };

    // findSums(root);
    // return max;
};