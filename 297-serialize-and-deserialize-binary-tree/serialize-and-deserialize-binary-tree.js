/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let data = [];
    //using dfs method to push elements into array in preorder
    const dfs = (node)=>{
        if(!node){
            data.push('#');
            return;
        }
        data.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
    //convert the array into string
    return data.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    //get array from string
    const values=data.split(',');
    let i=0;
    const dfs =()=>{
        if (values[i]=='#') {
            i++;
            return null;
        }
        //get root node
        const node = new TreeNode(Number(values[i]));
        i++;
        //call dfs to contruct left subtree/right subtree
        node.left = dfs();
        node.right = dfs();
        return node;
    };
    return dfs();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */