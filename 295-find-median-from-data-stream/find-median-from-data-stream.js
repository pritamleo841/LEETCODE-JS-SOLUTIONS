//GOOD FOR LEARNING PURPOSE OF HEAP DATA STRUCTURE
//FIRST SOLUTION BY theesoteric Jun 01, 2021
//SECOND SOLUTION BY brodiegander OCT 21,2023

var MedianFinder = function() {
    // this.left = new Heap("max");
    // this.right = new Heap("min");
    this.small = new MaxHeap()
    this.large = new MinHeap()
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
//    if(this.left.getSize()===0){//Lets's put first element in left only
//         this.left.insert(num);
//         return ;
//     }
//     if(this.left.getSize()>this.right.getSize()){
//         if(num<=this.left.getTop()){//As 'left' was already having more values and the new value is also going to the left part, so after insertion, we will remove a value from left part and insert it to the right part, so the values in both the parts become equal
//             this.left.insert(num);
//             this.right.insert(this.left.removeTop());
//         }else{
//             this.right.insert(num);
//         }
//     }else if(this.right.getSize()>this.left.getSize()){//As 'right' was already having more values and the new value is also going to the right part, so after insertion, we will remove a value from right part and insert it to the left part, so the values in both the parts become equal.
//         if(num>=this.right.getTop()){
//             this.right.insert(num);
//             this.left.insert(this.right.removeTop());
//         }else{
//             this.left.insert(num);
//         }
//     }else {//If both the parts were having the same number of values, then we will just check and insert the new num in the relevant part. After this  insertion the part where we inserted the new num will have 1 element more than the other part, having a difference of 1 element is fine. 
//         if(num<=this.left.getTop()){
//             this.left.insert(num);
//         }else{
//             this.right.insert(num);
//         }
//     }

    // always insert into the maxHeap
    this.small.insert(num)

    // then check if the largest element in the small (max) heap is 
    // smaller than the smallest element in the large (min) heap
    // if so remove from the small heap and add it into the large heap
    if (
        this.small.list.length &&
        this.large.list.length &&
        this.small.peek() > this.large.peek()
    ) {
        this.large.insert(this.small.remove())
    }

    // the above operation will eventually cause imbalance
    // (i.e. small has [3 elements] large has [1 elements] and vice versa)
    // ensure heaps have a max size difference of 1. otherwise balance them.
    if (this.large.list.length > this.small.list.length + 1) {
        this.small.insert(this.large.remove())
    }

    if (this.small.list.length > this.large.list.length + 1) {
        this.large.insert(this.small.remove())
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    //  if(this.left.getSize()>this.right.getSize()){
    //     return this.left.getTop();
    // }else if(this.right.getSize()>this.left.getSize()){
    //     return this.right.getTop();
    // }else{
    //     return (this.left.getTop()+this.right.getTop())/2;
    // }
    if (this.small.list.length > this.large.list.length) {
        return this.small.peek()
    }

    if (this.large.list.length > this.small.list.length) {
        return this.large.peek()
    }

    return (this.large.peek() + this.small.peek()) / 2
};
class MinHeap {
    constructor() {
        this.list = []
    }

    insert(val) {
        // always insert at the end and then keep bubbling up while the
        // inserted value is greater than its parent or we've reached the root
        this.list.push(val)

        let currIndex = this.list.length - 1

        while (currIndex > 0) {
            const parentIndex = Math.floor((currIndex - 1) / 2)
            const parentValue = this.list[parentIndex]

            // heap is stable, no more swapping necessary
            if (val >= parentValue) {
                break;
            }

            // swap
            this.list[parentIndex] = val
            this.list[currIndex] = parentValue

            // update curr index to continue swimming up
            currIndex = parentIndex
        }
        
        // uncomment to view heap at this point
        // this.show()
    }

    remove() {
        if (this.list.length === 0) {
            return
        }

        if (this.list.length === 1) {
            return this.list.pop()
        }

        const smallest = this.list[0]

        // extract element at the end of the list and replace the element at index 0 with it, 
        // then bubble down while we are still within bounds to swap and val > its children

        const val = this.list.pop()
        let currIndex = 0
        this.list[currIndex] = val

        while (currIndex < this.list.length) {
            let leftChildIndex = currIndex * 2 + 1
            let rightChildIndex = currIndex * 2 + 2

            // if theres no left child that means there is definitely no right child,
            // this means current node has no children, no more swapping required 
            if (leftChildIndex >= this.list.length) {
                break;
            }

            // determine which child's (left or right) value is smaller 
            let swapIndex = leftChildIndex
            if (rightChildIndex < this.list.length) {
                if (this.list[rightChildIndex] < this.list[leftChildIndex]) {
                    swapIndex = rightChildIndex
                }
            }

            // compare the smaller childs value to the val being balanced
            // if it's bigger, then swap and update the currIndex to swapIndex, 
            // otherwise we've now reached a stable state and can break.
            if (val > this.list[swapIndex]) {
                this.list[currIndex] = this.list[swapIndex]
                this.list[swapIndex] = val
                currIndex = swapIndex
            } else {
                break;
            }
        }

        // this.show()
        return smallest
    }

    // view the heap
    show() {
        console.log(this.list)
    }

    // look at the min (or max) element
    peek() {
        return this.list[0]
    }
}


class MaxHeap extends MinHeap {
    constructor(list = []) {
        super()
        this.list = list
    }
    insert(val) {
        super.insert(val * -1)
    }

    remove() {
        return super.remove() * -1
    }

    peek() {
        return super.peek() * -1
    }
}
// class Heap{
//         constructor(type){
//             this.type = type;
//             this.data = [];
//             this.data[0] = undefined;
//         }

//         getSize(){
//             return this.data.length-1;
//         }

//         insert(value){
//             this.data.push(value);
//             if(this.data.length==2){
//                 return ;
//             }
//             let lastIndex = this.data.length-1;
//             while(this.data[Math.floor(lastIndex/2)]!==undefined && this.compare(this.data[lastIndex],this.data[Math.floor(lastIndex/2)])>0){
//                 let temp = this.data[Math.floor(lastIndex/2)];
//                 this.data[Math.floor(lastIndex/2)] = this.data[lastIndex];
//                 this.data[lastIndex] = temp;
//                 lastIndex = Math.floor(lastIndex/2);
//             }
//         }
//         //This returns a positive number if a is greater than b. Here meaning of being greater depends on the type of heap. For max heap it will return positive number if a>b and for min heap it will return positive number if a<b . 
//         compare(a,b){
//             if(this.type==="min"){
//                 return b-a;
//             }else{
//                 return a-b;
//             }
//         }
//         removeTop(){
//             let max = this.data[1];
//             if(this.getSize()>1){
//                 this.data[1] = this.data.pop();
//                 this.heapify(1);
//             }else{//If the size is 0 then just remove the element, no shifting and hipify will be applicable
//                 this.data.pop();
//             }
//             return max;
//         }
//         getTop(){
//             let max = null;
//             if(this.getSize()>=1){
//                 max = this.data[1];
//             }
//             return max;
//         }
//         heapify(pos){
//             if(pos*2>this.data.length-1){
//                 //That means element at index 'pos' is not having any child
//                 return;
//             }
//             if(
//                 (this.data[pos*2]!==undefined && this.compare(this.data[pos*2],this.data[pos])>0)
//               || (this.data[pos*2+1]!==undefined && this.compare(this.data[pos*2+1],this.data[pos])>0)
//               ){
//                 if(this.data[pos*2+1]===undefined || this.compare(this.data[pos*2+1],this.data[pos*2])<=0){
//                     let temp = this.data[pos*2];
//                     this.data[pos*2] = this.data[pos];
//                     this.data[pos] = temp;
//                     this.heapify(pos*2);
//                 }else{
//                     let temp = this.data[pos*2+1];
//                     this.data[pos*2+1] = this.data[pos];
//                     this.data[pos] = temp;
//                     this.heapify(pos*2+1);
//                 }
//             }
//         }
// }
/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */