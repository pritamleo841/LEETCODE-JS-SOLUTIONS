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
    if(checkSameTree(root,subRoot)){
        //if root and subRoot are same tree
        return true;
    }
    //if left subtree/right subtree of root are same as subRoot -> hence OR condition
    return (isSubtree(root.left,subRoot) || isSubtree(root.right,subRoot));

};

var checkSameTree = function(p,q){
    if(!p && !q){
        return true;
    }
    if(p && q && (p.val==q.val)){
        return checkSameTree(p.left,q.left) && checkSameTree(p.right,q.right);
    }
    else{
        return false;
    }
    
}