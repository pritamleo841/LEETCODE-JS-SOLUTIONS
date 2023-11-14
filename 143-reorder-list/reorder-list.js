/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    //step 1: find middle pointer 
    //using slow-fast pointer technique
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next.next;
    }

    //step 2: reverse the second list after middle pointer
    let prev=null;
    let curr=slow.next; //current middle pointer
    let next=null;
    while(curr){
        next=curr.next;
        curr.next=prev;
        prev=curr;
        curr=next;
    }
    slow.next = null; //to detach from the left list after reversal

    //step 3: merge two halves of the list
    let first1 = head; 
    let first2 = prev; //prev = reversed head pointer
    while(first2){
        let temp = first1.next;
        first1.next=first2;
        first1=first2;
        first2=temp;
    }
};