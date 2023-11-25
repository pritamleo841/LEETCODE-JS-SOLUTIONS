/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    let directions = [[1,0],[-1,0],[0,1],[0,-1]];
    let [rows,cols] = [heights.length,heights[0].length];
    let [pacific,atlantic] = [new Set(),new Set()];

    const dfs = (r,c,visited,prevHeight)=>{
        //base case : not current height<previous height and not same cell visited
        if(r<0 || c<0 || r>=rows || c>=cols || heights[r][c]<prevHeight || visited.has(r+'-'+c)){
            return;
        }
        visited.add(r+'-'+c);
        for(let [dr,dc] of directions){
            dfs(r+dr,c+dc,visited,heights[r][c]);
        }
    };

    //find cells for both sets from outer to inner cells
    for(let c=0;c<cols;c++){
        dfs(0,c,pacific,heights[0][c]); //top row
        dfs(rows-1,c,atlantic,heights[rows-1][c]); //bottom row
    }
    for(let r=0;r<rows;r++){
        dfs(r,0,pacific,heights[r][0]); //left column
        dfs(r,cols-1,atlantic,heights[r][cols-1]); //right column
    }

    //store cells that are common in both sets
    let result=[];
    for(let r=0;r<rows;r++){
        for(let c=0;c<cols;c++){
            if(pacific.has(r+'-'+c) && atlantic.has(r+'-'+c)){
                result.push([r,c]);
            }
        }
    }
    return result;
};