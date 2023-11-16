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
var maxDepth = function(root) {
    if(!root){
        return null;
    }
    //recursive formulae to find maximum depth
    // 1+max(dfs(left),dfs(right))
    //return (1+Math.max(maxDepth(root.left),maxDepth(root.right)));

    //the below code uses iterative dfs approach
    //push the root into stack
    let stack = [[root,1]];
    let res=0;
    //traverse through stack
    while(stack.length){
        //pop the last node
       let [node,depth] = stack.pop();
       //if node is not null
       if(node){
           //store the maximum depth
           res=Math.max(res,depth);
           //if right/left node exists , push them into stack with 
           //depth+1 
           if(node.left)stack.push([node.left,depth+1]);
           if(node.right)stack.push([node.right,depth+1]);
       }
    }
    return res;
};