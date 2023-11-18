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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    //base case
    if(!root){
        return [];
    }
    let result = [];
    //use array as queue data structure
    let queue = [root];
    while(queue.length){
        const level = [];
        //loop from back to front
        for(let i=queue.length-1;i>=0;i--){
            //pop from front of queue - > FIFO
            const node = queue.shift();
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
            //store node value at particular level values
            level.push(node.val);
        }
        //push level subarrays into result array
        result.push(level.slice());
    }
    return result;
};