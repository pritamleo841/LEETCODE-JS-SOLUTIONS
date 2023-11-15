/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let mergedLists = null; //consider as a previous node
    for(let i=0;i<lists.length;i++){
        //merge previous list and current list and update it
        mergedLists = mergeSortedLists(mergedLists,lists[i]);
    }
    return mergedLists;
};

//function to return merged two sorted lists
var mergeSortedLists = function(list1,list2){
    let dummy = new ListNode();
    let tail=dummy;
    while(list1 && list2){
        if(list1.val<list2.val){
            tail.next=list1;
            list1=list1.next;
        }else{
            tail.next=list2;
            list2=list2.next;
        }
        tail=tail.next;
    }
    //becuase any way only one list is going to be empty at end
    tail.next = list1 || list2;
    // if(list1){
    //     tail.next=list1;
    //     tail=tail.next;
    // }
    // if(list2){
    //     tail.next=list2;
    //     tail=tail.next;
    // }
    return dummy.next;
}