/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    //initialize a min heap priority queue
    this.minHeap = new MinPriorityQueue();
    //insert elements into minheap
    for(let i=0;i<nums.length;i++){
        this.minHeap.enqueue(nums[i]);
    }
    this.k=k;
    //add only top k elements into min heap
    while(this.minHeap.size()>k){
        this.minHeap.dequeue().element;
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    //add to minheap queue
    this.minHeap.enqueue(val);
    //if minheap size > k , then only dequeue 
    if(this.minHeap.size() > this.k)
        this.minHeap.dequeue().element;
    //return element at front of min heap queue
    return this.minHeap.front().element;
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */