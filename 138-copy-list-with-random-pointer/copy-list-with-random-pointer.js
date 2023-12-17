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
};