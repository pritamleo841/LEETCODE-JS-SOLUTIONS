/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function (grid) {
    //we can use greedy dijsktra algorithm here using min heap 
    const N = grid.length;
    if (N == 1) return grid[0][0];
    let dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let visit = new Set(); //track to visited nodes
    let pq = new MinPriorityQueue({ priority: x => x.time });
    pq.enqueue({ time: grid[0][0], row: 0, col: 0 }); //[time/max-height,row,column]
    visit.add(0 + '$' + 0);
    //bfs part
    while (!pq.isEmpty()) {
        let { time, row, col } = pq.dequeue().element;
        //reached destination
        if (row == N - 1 && col == N - 1) {
            return time;
        }
        for (let [dr, dc] of dirs) {
            dr += row; //neiR=row+dr => dr=dr+row
            dc += col;
            //check out of bounds condition
            if (dr < 0 || dc < 0 || dr >= N || dc >= N || visit.has(dr + '$' + dc)) {
                continue;
            }
            //otherwise add to visit set
            visit.add(dr + '$' + dc);
            //add to min heap
            pq.enqueue({ time: Math.max(time, grid[dr][dc]), row: dr, col: dc });
        }
    }
};