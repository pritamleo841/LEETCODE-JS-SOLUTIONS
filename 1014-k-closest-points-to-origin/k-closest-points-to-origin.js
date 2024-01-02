/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    //we can use sorting to find k closest points
    // return points.sort((a,b)=>(a[0]*a[0]+a[1]*a[1])-(b[0]*b[0]+b[1]*b[1])).slice(0,k);

    //Other better solution is to use min heap
    const res=[];
    const minHeap = new MinPriorityQueue();
    points.forEach((p)=>{
        //no need to find the sqrt here
        const dist = (p[0]*p[0]+p[1]*p[1]);
        minHeap.enqueue(p,dist);
    });
    while(res.length<k){
        res.push(minHeap.dequeue().element);
    }
    return res;

    //The best solution is using quick-select approach
};