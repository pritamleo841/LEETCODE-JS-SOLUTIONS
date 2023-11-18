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
var isValidBST = function(root) {
    return isValid(root,-Infinity,Infinity);
};
var isValid = function(node,left,right){
    //if null node then also a bst, return true
    if(!node){
        return true;
    }
    //check if left<node.val<right or not
    if(!(node.val<right && node.val>left)){
        return false;
    }
    //update the left and right values for left subtree and right subtree
    return (isValid(node.left,left,node.val) && isValid(node.right,node.val,right));
};