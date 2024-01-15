/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    //manhattan distance
    const manhattenDistance = (x1,y1,x2,y2)=> Math.abs(x1-x2)+Math.abs(y1-y2);
    //edges are the distance to two points
    //using set for visisted nodes
    let pq = new MinPriorityQueue({compare:(a,b)=>a[1]-b[1]});
    pq.enqueue([0,0]);
    let visited=new Set();
    //using prim's algorithm to find shorted path
    let totalCost=0;
    //loop through the points
    while(visited.size<points.length){
        let [i,cost]=pq.dequeue();
        if(visited.has(i)) continue;
        visited.add(i);
        totalCost+=cost;
        let [x1,y1]=points[i];
        for(let j=0;j<points.length;j++){
            if(!visited.has(j)){
                let [x2,y2]=points[j];
                pq.enqueue([j,manhattenDistance(x1,y1,x2,y2)]);
            }
        }
    }
    return totalCost;
};