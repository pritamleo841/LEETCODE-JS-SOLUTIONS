/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    //use of slow-fast pointer approach
    //slow->head itself, fast->jump twice in the path
    let fast=head;
    while(fast && fast.next){
        head=head.next;
        fast=fast.next.next;
        if(head==fast){
            return true;
        }
    }
    return false;
};