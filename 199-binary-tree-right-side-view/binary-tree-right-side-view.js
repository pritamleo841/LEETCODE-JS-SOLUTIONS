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
 * @return {number[]}
 */
var rightSideView = function(root) {
    //level order traversal using queue
    if(!root){
        return [];
    }
    const bfs = (queue,rightSide=[])=>{
        while(queue.length){
            let prev=null;
            for(let i=(queue.length-1);i>=0;i--){
                const node=queue.shift();
                //takes the right side value
                prev=node;
                if(node.left){
                    queue.push(node.left);
                }
                if(node.right){
                    queue.push(node.right);
                }
            }
            //push into rightSide array
            rightSide.push(prev.val);
        }
        return rightSide;
    }

    return bfs([root]);
};