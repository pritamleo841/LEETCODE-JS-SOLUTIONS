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
var isBalanced = function(root) {
    //we have to check bottom-up i.e., from leaf node to root
    const dfs=(root)=>{
        if(!root){
            //[TRUE/FALSE, HEIGHT] -> [0] says is balanced or not,[1] says height
            return [true,0];
        }
        //dfs for left subtree and right subtree
        [left,right]=[dfs(root.left),dfs(root.right)];
        //left and right subtree should return true as well as
        //difference of heights between left and right <=1
        let balanced = left[0] && right[0] && (Math.abs(left[1]-right[1])<=1);
        return [balanced,1+Math.max(left[1],right[1])];
    }
    return dfs(root)[0];
};