/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    //take three pointers, assign current=head
    var prev=null;
    var current=head;
    var next=null;
    //simple reversal algorithm
    while(current!=null){
        next=current.next;
        current.next=prev;
        prev=current;
        current=next;
    }
    //assign head to prev pointer or directly return prev pointer
    head=prev;
    return head;
};