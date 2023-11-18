/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let curr = root;
    while(curr){
        //if p and q are greater than current root -> go right
        if(p.val>curr.val && q.val>curr.val){
            curr=curr.right;
        }
        //if p and q are lesser than current root -> go left
        else if(p.val<curr.val && q.val<curr.val){
            curr=curr.left;
        //if p or q are splitted or have same value as root -> return root
        }else{
            return curr;
        }
    }
};