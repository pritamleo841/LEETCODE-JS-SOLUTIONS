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
var diameterOfBinaryTree = function(root) {
    let diameter=0;
    const dfs = (root)=>{
        //if root is null, means 0 path
        if(!root){
            return 0;
        }
        //dfs for each subtree
        let left=dfs(root.left);
        let right=dfs(root.right);
        //Get higher between current max diameter or 
        //the heights of the left and right subtrees
        diameter=Math.max(diameter,left+right);
        //return height of current node by taking max of left 
        //or right and adding 1 to account for current node
        return (1+Math.max(left,right));
    }
    dfs(root);
    return diameter;
    //ALSO STUDY: Diameter of a Binary Tree using Morris Traversal Algorithm
};