/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    //take a map to store old and new copies of node
    let map = {};
    //clone graph depth-first style
    const dfsClone = (node) =>{
        if(!node){
            return node;
        }
        //if no record in map, create a new record
        if(!map[node.val]){
            map[node.val] = new Node(node.val);
            //call dfs for all the neighbors for a particular node
            map[node.val].neighbors = node.neighbors.map(dfsClone);
        }
        //return 
        return map[node.val];
    };
    //return deep copy
    return dfsClone(node);
};