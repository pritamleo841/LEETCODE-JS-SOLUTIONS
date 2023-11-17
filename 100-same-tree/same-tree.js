/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(!p && !q){
        //if both nodes are empty, return true -> identical
        return true;
    }
    if((!p || !q) || (p.val!=q.val)){
        //if either of them is false 
        //or either of them have different value -> non identical
        return false;
    }
    else{
        //if both of left and right subtrees are same -> identical 
        return isSameTree(p.left,q.left) && isSameTree(p.right,q.right);
    }
};