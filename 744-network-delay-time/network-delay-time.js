/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
    //We use dijstra algorithm here
    //create adjacency list
    const edges = [];
    for (let [u, v, w] of times) {
        if (!edges[u]) edges[u] = [];
        edges[u].push([v, w]);
    }
    //bfs run
    function bfs() {
        const pQueue = new MinPriorityQueue({ compare: (a, b) => a[1] > b[1] });
        const visit = new Set();
        pQueue.enqueue([k, 0]);
        let maxPathTill = 0;
        //dijsktra
        while (!pQueue.isEmpty()) {
            const [node, w] = pQueue.dequeue();
            if (visit.has(node)) continue;
            visit.add(node);
            maxPathTill = Math.max(maxPathTill, w);
            if (edges[node]) {
                const adjNodes = edges[node];
                for (let [adjNode, adjW] of adjNodes) {
                    if (!visit.has(adjNode)) pQueue.enqueue([adjNode, w + adjW])
                }
            }
        }
        return visit.size === n ? maxPathTill : -1;
    }
    return bfs();
};