/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    // //use max priority queue for picking max stones
    // let pq = new MaxPriorityQueue();
    // for(let s of stones){
    //     pq.enqueue(s);
    // }
    // //simulation
    // while(pq.size()>1){
    //     let first = pq.dequeue().element;
    //     let second = pq.dequeue().element;
    //     if(first!=second){
    //         pq.enqueue(first-second);
    //     }
    // }
    // //return remaining stone/0 if no stone left
    // return pq.size()==0?0:pq.front().element;

    //using sorting algorithm
    if(stones.length<2){
        return stones;
    }
    stones.sort((a,b)=>a-b);
    let first = stones.pop();
    let second = stones.pop();
    stones.push(Math.abs(first-second));
    return lastStoneWeight(stones);
};