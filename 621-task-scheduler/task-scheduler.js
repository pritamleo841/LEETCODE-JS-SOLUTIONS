/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    /**
    If CPU takes the more frequent tasks 1st, 
    alternately doing the less freq tasks in between, 
    then we can reduce the idle time.

    MaxHeap = To store the more freq tasks, 
    Deque = to keep track of the next doable task
    Complexity:
    Time = O(n * m) + O(log 26) ~ O(n * m) | Space = O(n)
    */
    //count the task frequencies
    let count={};
    for(let task of tasks){
        if(!(task in count)){
            count[task]=0;
        }
        count[task]++;
    }
    //insert the frequencies into a max heap
    const maxHeap = new MaxHeap();
    for(let c of Object.values(count)){
        maxHeap.insert(c);
    }
    const queue=[]; //store pair of [count,idleTime]
    //total time
    let time=0;
    while(maxHeap.size() || queue.length){
        time++;
        //perform the most freq task,
        //add the remaining count in Deque to perform later
        if(maxHeap.size()){
            let cnt = maxHeap.getMax()-1;
            if(cnt!=0){
                queue.push([cnt,time+n]);
            }
        }
        //When the time comes, take the task from Deque, 
        //add it to the maxHeap (for the CPU to perform)
        if(queue.length && queue[0][1]==time){
            maxHeap.insert(queue.shift()[0]);
        }
    }
    return time;
    /***
    INTUITIVE SOLUTION -- 
    
    // task is a list of Letters.
    // n is the delay between same task. 
        When n = 0 same tasks can be run immediatly after.
    // n > 0 means n task must be performed inbetween
    // there are infinite idle tasks that can be used as a delay and be put back to back
    // find the smallest time it takes to run all the task.
    // Fastest run can be broken into sets of tasks of lenght n + 1.
    // Each set contains a unique list of tasks + idles if needed
    
    const charCount = new Array(26).fill(0);
    const OFFSET = "A".charCodeAt(0);

    tasks.forEach(t => charCount[t.charCodeAt(0) - OFFSET]++)
    
    const mostFrequent = Math.max(...charCount)
    const maxValCount = charCount.filter(c => c == mostFrequent).length

    return Math.max(tasks.length, (mostFrequent - 1) * (n+1) + maxValCount)
     */
};
// Custom JavaScript MaxHeap Implementation
function MaxHeap() {
    this.list = [];
    
    this.maxHeapify = (i) => {
        let n = this.list.length;
        let largest = i;
        let l = 2 * i + 1;   // left child index
        let r = 2 * i + 2;   // right child index
        
        if(l < n && this.list[l] > this.list[largest])   // if left child is greater than parent
            largest = l;
        if(r < n && this.list[r] > this.list[largest])  // if right child is greater than parent
            largest = r;
        
        if(largest !== i) {  // if largest element is not the parent (heap property violated, so restore it)
            [this.list[i], this.list[largest]] = [this.list[largest], this.list[i]];
            this.maxHeapify(largest);
        }
    }
    
    this.insert = (value) => {
        this.list.push(value);
        for(let i = parseInt(this.list.length / 2 - 1); i >= 0; i--)  // heapify the affected sub-tree
            this.maxHeapify(i);
    }
    
    this.delete = (value) => {
		// 1. Find the element to be deleted
        let i, n = this.list.length;
        for(i = 0; i < n; i++)
            if(this.list[i] === value) break;
        
		// 2. Swap that number with last element in the list & delete the last element
        [this.list[i], this.list[n - 1]] = [this.list[n - 1], this.list[i]];
        this.list.splice(n - 1);
		
        // 3. Heapify
        for(let i = parseInt(n / 2 - 1); i >= 0; i--)
            this.maxHeapify(i);
    }
    
    this.findMax = () => this.list[0];
    this.getMax = () => {
        let max = this.findMax();
        this.delete(max);
        return max;
    }
    this.size = () => this.list.length;
}