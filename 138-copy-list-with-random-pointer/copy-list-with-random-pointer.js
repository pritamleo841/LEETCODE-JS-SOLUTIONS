/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    /*** T:O(n),S:O(n)
    First Pass - Node Creation:
        Traverse the original list and for each node, create a corresponding new node.
        Store the mapping in old_to_new.
    Second Pass - Setting Pointers:
        Traverse the original list again.
        For each node, set its corresponding new node's next and random pointers
        based on the hash map.
    */
    if(!head){
        return null;
    }
    const oldToNew = new Map();
    //First Pass
    let curr=head;
    while(curr){
        oldToNew.set(curr, new Node(curr.val));
        curr=curr.next;
    }
    //Second Pass
    curr=head;
    while(curr){
        oldToNew.get(curr).next = oldToNew.get(curr.next) || null;
        oldToNew.get(curr).random = oldToNew.get(curr.random) || null;
        curr=curr.next;
    }
    return oldToNew.get(head);

    /*****
    Solution #2: Interweaving Nodes Method TC:O(n), SC:O(1)
        Intuition and Logic Behind the Solution :
            The crux of this method is to interweave the nodes of the original and copied lists.
            This interweaving allows us to set the random pointers for the new nodes without 
            needing additional memory for mapping.

        Step-by-step Explanation : 
            Initialization and Interweaving:
            Traverse the original list.
            For each node, create a corresponding new node and place it between the current node 
            and the current node's next.

            Setting Random Pointers:
            Traverse the interweaved list.
            For each old node, set its corresponding new node's random pointer.

            Separating Lists:
            Traverse the interweaved list again to separate the old and new lists.
    
     */
};