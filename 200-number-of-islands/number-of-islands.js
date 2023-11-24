/**
 * @param {character[][]} grid
 * @return {number}
 */
const directions = [[1,0],[-1,0],[0,1],[0,-1]];
let rows=0;
let cols=0;

var numIslands = function(grid) {
    if(grid==null || grid.length==0){
        return 0;
    }

    rows=grid.length;
    cols=grid[0].length;
    let islands=0;
    //go to each 1 and check all the neighbour directions
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            if(grid[i][j]=='1'){
                //if there is a 1 and not visited yet, count++
                islands+=1;
                bfs(grid,i,j);
            }
        }
    }
    return islands;
};

const outOfBound = (grid,r,c)=>{
        if(r<0 || c<0)return true;
        if(r>=rows || c>=cols)return true;
        if(grid[r][c]=='0')return true;
        return false;
};

const bfs = (grid,r,c)=>{
        let queue = [[r,c]];
        while(queue.length>0){
            //to convert into dfs, just do queue.pop()
            let [r,c] = queue.shift();
            if(outOfBound(grid,r,c)){
                continue;
            }
            grid[r][c]='0';
            for(let [dr,dc] of directions){
                let drow = r+dr;
                let dcol = c+dc;
                queue.push([drow,dcol]);
            }
        }
};