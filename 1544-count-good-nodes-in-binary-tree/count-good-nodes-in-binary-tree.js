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
var goodNodes = function(root) {
    //goodNodes = 1+left+right
    //preorder traversal algorithm
    const dfs = (node,maxValue)=>{
        if(!node){
            return 0;
        }
        //if node.val is greater, it is good node
        res = (node.val>=maxValue)?1:0;
        //update max value so far
        maxValue=Math.max(node.val,maxValue);
        //add res for leftsubtree and right subtree as well
        res+=dfs(node.left,maxValue);
        res+=dfs(node.right,maxValue);
        return res;
    }
    return dfs(root,root.val);
};