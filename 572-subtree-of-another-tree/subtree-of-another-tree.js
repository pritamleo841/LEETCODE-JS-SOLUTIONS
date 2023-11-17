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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if(!subRoot){
        //empty sub tree is also a subtree of root
        return true;
    }
    if(!root && subRoot){
        //if not root but subRoot exists
        return false;
    }
    if(isSameTree(root,subRoot)){
        //if root and subRoot are same tree, then also subtree
        return true;
    }
    //if left subtree/right subtree of root are same as subRoot -> hence OR condition
    return (isSubtree(root.left,subRoot) || isSubtree(root.right,subRoot));

};

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