/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
/**
1. First element of preorder traversal list is always root
2. Inorder traversal Format-> [left subtree][root][right subtree]
*/
    if(!preorder.length || !inorder.length){
        return null;
    }
    //preorder[0] will always be the root
    let root = new TreeNode(preorder[0]);
    //Find root index in inorder list using preorder[0]
    let mid = inorder.indexOf(preorder[0]);

    //recursively construct left subtree and right subtree
    root.left = buildTree(preorder.slice(1,mid+1),inorder.slice(0,mid));
    root.right = buildTree(preorder.slice(mid+1),inorder.slice(mid+1));

    return root;



};