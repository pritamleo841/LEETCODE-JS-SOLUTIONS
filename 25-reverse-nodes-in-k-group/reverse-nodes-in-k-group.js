/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let dummy = new ListNode(0);
    dummy.next=head;
    //prevGroupTail pointer to the dummy node
    let prevGroupTail = dummy;

    while(head){
        /**
        Set groupStart to the current head, 
        and find groupEnd using the getGroupEnd function
        */
        let groupStart=head;
        let groupEnd=getGroupEnd(head,k);
        if(!groupEnd){
            break;
        }
        //Set nextGroupStart to groupEnd->next,
        //and then set groupEnd->next to null 
        //to separate the group to be reversed from the rest of the list.
        //Set prevGroupTail->next to the new head of the reversed group.
        //Then set groupStart->next to nextGroupStart
        prevGroupTail.next=reverseList(groupStart,groupEnd.next);
        prevGroupTail=groupStart;
        head=prevGroupTail.next;
    }
    return dummy.next;

};
const getGroupEnd = (head,k)=>{
    while(head && k>1){
        head=head.next;
        k--;
    }
    return head;
}
const reverseList = (head,stop)=>{
    let prev=stop;
    while(head!=stop){
        let tmp=head.next;
        head.next=prev;
        prev=head;
        head=tmp;
    }
    return prev;
}