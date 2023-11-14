/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let temp = new ListNode(0,head);
    let left=temp;
    let right=head;
    //we want right = head+n
    while(right && n--){
        right=right.next;
    }
    //now we can use two pointer traversal technique 
    while(right){
        left=left.next;
        right=right.next;
    }
    //delete the desired node
    left.next=left.next.next;
    return temp.next;

};