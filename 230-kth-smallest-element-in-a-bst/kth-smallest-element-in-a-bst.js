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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {

    //Recursive inorder traversal
    let res = [];
    const dfsInorder = (root,res)=>{
        if(!root){
            return ;
        }
        dfsInorder(root.left,res);
        res.push(root.val);
        dfsInorder(root.right,res);
    };
    dfsInorder(root,res);
    return res[k-1];

    //Iterative inorder traversal
    // let count=1;
    // let stack = [];
    // let curr = root;
    // while(curr || stack.length){
    //     while(curr){
    //         //visit left most element
    //         stack.push(curr);
    //         curr=curr.left;
    //     }
    //     //when leftmost leaf node arrives pop from stack 
    //     curr=stack.pop();
    //     if(count==k){
    //         //if count matches with k return curr.val
    //         return curr.val;
    //     }else{
    //         //else increment count
    //         count++;
    //     }
    //     //then visit right nodes
    //     curr=curr.right;
    // }
};