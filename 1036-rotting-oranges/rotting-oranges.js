/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    //we have to use multi-point dfs, i.e., bfs
    let queue = [], oranges = 0, time = 0;
    //count fresh oranges and add rotten oranges to queue
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            if (grid[r][c] === 1) oranges++
            else if (grid[r][c] === 2) queue.push([r, c, 0]);
        }
    }

    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const endR = grid.length - 1, endC = grid[0].length - 1;
    //go through the queue and fresh oranges
    while (queue.length && oranges) {
        const [curR, curC, mins] = queue.shift();
        //if fresh orange, make it rotten
        if (grid[curR][curC] === 1) {
            grid[curR][curC] = 2;
            oranges--;
            //update current time
            time = mins;
        }
        //check adjacent cells for fresh oranges and add to queue
        for (let [addR, addC] of dirs) {
            const [newR, newC] = [curR + addR, curC + addC];
            if (newR < 0 || newR > endR || newC < 0 || newC > endC) continue;
            if (grid[newR][newC] === 1) {
                queue.push([newR, newC, mins + 1])
            }
        }
    }
    //if atleast 1 fresh orange left then return -1 else return time taken
    return oranges ? -1 : time;
};